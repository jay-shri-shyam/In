/* =====================================================================
   build-seo.js  -  Radhe Radhe page builder (runs by itself on GitHub)

   What it does every time you change product.js:
   - makes a real web page for every product, category and type
       radheradhefashion.in/product/banarasi-zari-silk-saree-saree-1/
       radheradhefashion.in/shop/sarees/   radheradhefashion.in/shop/sarees/silk/
   - puts the title, description, price, photo and Google data (JSON-LD) in each page
   - makes sitemap.xml, robots.txt and merchant-feed.xml

   You never run this yourself. The GitHub Action (seo.yml) runs it.
   If product.js says  window.SAMPLE_DATA = true  it only builds the safe basics.
   ===================================================================== */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const ROOT = process.argv[2] ? path.resolve(process.argv[2]) : __dirname;
const file = (f) => path.join(ROOT, f);
const read = (f) => fs.readFileSync(file(f), 'utf8');
const write = (f, text) => { fs.mkdirSync(path.dirname(file(f)), { recursive: true }); fs.writeFileSync(file(f), text); };
const hash = (f) => crypto.createHash('md5').update(fs.readFileSync(file(f))).digest('hex').slice(0, 8);

/* ---------- shared logic straight from app.js (so titles always match) ---------- */
const appSrc = read('app.js');
const block = appSrc.match(/\/\*SEO-SHARED-START\*\/[\s\S]*?\/\*SEO-SHARED-END\*\//);
if (!block) { throw new Error('app.js is missing the SEO-SHARED block'); }
const ctx = {};
vm.createContext(ctx);
vm.runInContext(block[0] + '\nthis.__S = { SITE_URL, SHOP, CATS, CAT_KEYS, norm, slugify, productSlug, subHeading, SEO, asset, seoMoney };', ctx);
const { SITE_URL, SHOP, CATS, CAT_KEYS, norm, slugify, productSlug, subHeading, SEO, asset, seoMoney } = ctx.__S;

/* ---------- products ---------- */
const pctx = { window: {} };
vm.createContext(pctx);
vm.runInContext(read('product.js'), pctx);
/* Safe by default: pages are only built from REAL data when product.js
   explicitly says  window.SAMPLE_DATA = false;
   If that line is missing (older product.js files), it stays in safe mode
   so sample names/prices never get sent to Google by accident. */
const SAMPLE = pctx.window.SAMPLE_DATA !== false;
const products = (pctx.window.PRODUCTS || []).map(norm).filter(Boolean);
const seen = {};
products.forEach((p) => {
  const s = productSlug(p);
  if (seen[s]) { throw new Error('Two products share the same id/name: ' + p.id + ' and ' + seen[s] + '. Every id must be different.'); }
  seen[s] = p.id;
});

const V = { css: hash('app.css'), js: hash('app.js'), data: hash('product.js') };
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const today = new Date().toISOString().slice(0, 10);
const waLink = (t) => 'https://wa.me/' + SHOP.whatsapp + '?text=' + encodeURIComponent(t);

/* ---------- page shell ---------- */
const template = read('index.html');
function region(html, name, content) {
  const re = new RegExp('<!--SEO:' + name + '-->[\\s\\S]*?<!--/SEO:' + name + '-->');
  if (!re.test(html)) { throw new Error('index.html is missing the SEO:' + name + ' marker'); }
  return html.replace(re, () => '<!--SEO:' + name + '-->\n' + content + '\n<!--/SEO:' + name + '-->');
}
function headHtml(m) {
  return [
    '<title>' + esc(m.title) + '</title>',
    '<meta name="description" content="' + esc(m.description) + '">',
    '<link rel="canonical" href="' + esc(m.canonical) + '">',
    '<meta name="robots" content="' + esc(m.robots) + '">',
    '<meta property="og:site_name" content="Radhe Radhe Fashion &amp; Lifestyle">',
    '<meta property="og:locale" content="en_IN">',
    '<meta property="og:type" content="' + esc(m.ogType) + '">',
    '<meta property="og:title" content="' + esc(m.title) + '">',
    '<meta property="og:description" content="' + esc(m.description) + '">',
    '<meta property="og:url" content="' + esc(m.canonical) + '">',
    '<meta property="og:image" content="' + esc(m.image) + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<script type="application/ld+json" id="ld-json">' + JSON.stringify(m.jsonld).replace(/</g, '\\u003c') + '</script>',
    '<link rel="stylesheet" href="/app.css?v=' + V.css + '">'
  ].join('\n');
}
const scriptsHtml = '<script src="/product.js?v=' + V.data + '"></script>\n<script src="/app.js?v=' + V.js + '"></script>';
function page(meta, main) {
  let html = template;
  html = region(html, 'HEAD', headHtml(meta));
  html = region(html, 'MAIN', main || '');
  html = region(html, 'SCRIPTS', scriptsHtml);
  return html;
}

/* ---------- readable text version of each page (Google reads this first) ---------- */
const cards = (list) => '<ul class="seo-list">' + list.map((p) =>
  '<li><a href="' + SEO.pathProduct(p) + '"><img src="' + esc(asset(p.images[0])) + '" alt="' + esc(p.name + (p.sub ? ' – ' + p.sub : '') + ' ' + CATS[p.category].label) + '" loading="lazy" width="300" height="400"><span>' + esc(p.name) + '</span></a><b>' + seoMoney(p.price) + '</b></li>'
).join('') + '</ul>';
function mix(list, n) {
  const by = {}; const out = []; let i = 0; let added = true;
  list.forEach((p) => { (by[p.category] = by[p.category] || []).push(p); });
  while (out.length < n && added) {
    added = false;
    CAT_KEYS.forEach((k) => { if (by[k] && by[k][i] && out.length < n) { out.push(by[k][i]); added = true; } });
    i++;
  }
  return out;
}
const crumbsHtml = (items) => '<nav class="crumbs" aria-label="Breadcrumb">' + items.map((it, i) => (i < items.length - 1 ? '<a href="' + it[1] + '">' + esc(it[0]) + '</a> / ' : '<span>' + esc(it[0]) + '</span>')).join('') + '</nav>';
const catLinks = () => '<ul class="seo-list">' + CAT_KEYS.map((k) => {
  const n = products.filter((p) => p.category === k).length;
  return '<li><a href="' + SEO.pathShop(k) + '"><img src="' + esc(asset(CATS[k].png)) + '" alt="' + esc(CATS[k].label) + '" loading="lazy" width="300" height="400"><span>' + esc(CATS[k].label) + '</span></a><small>' + esc(CATS[k].tagline) + (n ? ' · ' + n + ' styles' : '') + '</small></li>';
}).join('') + '</ul>';
const storeInfo = '<h2>Visit Radhe Radhe</h2><p>' + esc(SHOP.address) + '. Call <a href="tel:' + SHOP.phones[0] + '">' + SHOP.phones[0] + '</a> or <a href="tel:' + SHOP.phones[1] + '">' + SHOP.phones[1] + '</a>, or <a href="' + waLink('Hi Radhe Radhe') + '">message us on WhatsApp</a>.</p>';

function mainHome() {
  return '<div class="seo-static wrap page"><h1>Radhe Radhe Fashion &amp; Lifestyle – Clothing Store in Phulwari Sharif, Patna</h1>' +
    '<p>Radhe Radhe Fashion &amp; Lifestyle is a clothing store in Pethiya Bazar, Phulwari Sharif, Patna, Bihar. Shop sarees, lehengas, kurtis and suits, men\'s wear, women\'s wear, kid\'s wear and blazers online and pay with cash on delivery, or visit the shop.</p>' +
    '<p lang="hi">राधे राधे फैशन एंड लाइफस्टाइल – पटना के फुलवारी शरीफ (पेठिया बाज़ार) में साड़ी, लहंगा, कुर्ती, मेंस, वुमेंस और किड्स वियर।</p>' +
    '<h2>Shop by collection</h2>' + catLinks() +
    (products.length ? '<h2>Popular products</h2>' + cards(mix(products.filter((p) => p.featured).concat(products), 12).filter((p, i, a) => a.indexOf(p) === i)) : '') +
    storeInfo + '</div>';
}
function mainShopAll() {
  return '<div class="seo-static wrap page">' + crumbsHtml([['Home', '/'], ['Shop', '/shop/']]) + '<h1>All products</h1>' +
    '<p>Browse the full Radhe Radhe collection from Phulwari Sharif, Patna: sarees, lehengas, kurti suits, men\'s, women\'s and kid\'s wear and blazers. Cash on delivery.</p>' +
    '<h2>Collections</h2>' + catLinks() + '<h2>Latest products</h2>' + cards(mix(products, 48)) + '</div>';
}
function mainCategory(k) {
  const c = CATS[k];
  const list = products.filter((p) => p.category === k);
  const subs = Array.from(new Set(list.map((p) => p.sub).filter(Boolean)));
  return '<div class="seo-static wrap page">' + crumbsHtml([['Home', '/'], ['Shop', '/shop/'], [c.label, SEO.pathShop(k)]]) +
    '<h1>' + esc(c.name) + '</h1><p>' + esc(c.tagline) + '. ' + esc(c.intro) + '</p><p lang="hi">' + esc(c.hi) + '</p>' +
    (subs.length > 1 ? '<h2>Types</h2><ul class="seo-tags">' + subs.map((s) => '<li><a href="' + SEO.pathShop(k, s) + '">' + esc(subHeading(k, s)) + '</a></li>').join('') + '</ul>' : '') +
    '<h2>All ' + esc(c.label) + '</h2>' + cards(list) + '</div>';
}
function mainSub(k, sub) {
  const c = CATS[k];
  const list = products.filter((p) => p.category === k && p.sub === sub);
  const h = subHeading(k, sub);
  return '<div class="seo-static wrap page">' + crumbsHtml([['Home', '/'], ['Shop', '/shop/'], [c.label, SEO.pathShop(k)], [h, SEO.pathShop(k, sub)]]) +
    '<h1>' + esc(h) + '</h1><p>' + esc('Shop ' + h.toLowerCase() + ' at Radhe Radhe, Pethiya Bazar, Phulwari Sharif, Patna. ' + list.length + ' styles with cash on delivery.') + ' See all <a href="' + SEO.pathShop(k) + '">' + esc(c.label) + '</a>.</p>' +
    cards(list) + '</div>';
}
function related(p) {
  const same = products.filter((x) => x.category === p.category && x.id !== p.id);
  const i = same.findIndex((x) => x.order > p.order);
  const rot = i > 0 ? same.slice(i).concat(same.slice(0, i)) : same;
  return rot.slice(0, 6);
}
function mainProduct(p) {
  const c = CATS[p.category];
  const crumbs = [['Home', '/'], ['Shop', '/shop/'], [c.label, SEO.pathShop(p.category)]];
  if (p.sub) { crumbs.push([subHeading(p.category, p.sub), SEO.pathShop(p.category, p.sub)]); }
  crumbs.push([p.name, SEO.pathProduct(p)]);
  const alt = p.name + (p.sub ? ' – ' + p.sub : '') + ' ' + c.label;
  return '<div class="seo-static wrap page">' + crumbsHtml(crumbs) + '<h1>' + esc(p.name) + '</h1>' +
    p.images.slice(0, 4).map((src, i) => '<img src="' + esc(asset(src)) + '" alt="' + esc(alt + (i ? ' photo ' + (i + 1) : '')) + '" width="300" height="400" style="max-width:260px;margin:8px 8px 0 0;display:inline-block"' + (i ? ' loading="lazy"' : '') + '>').join('') +
    '<p><b>' + seoMoney(p.price) + '</b>' + (p.mrp ? ' <s>' + seoMoney(p.mrp) + '</s>' : '') + (p.inStock ? '' : ' (sold out)') + '</p>' +
    (p.desc ? '<p>' + esc(p.desc) + '</p>' : '') +
    '<ul class="seo-facts"><li>Collection: <a href="' + SEO.pathShop(p.category) + '">' + esc(c.label) + '</a></li>' +
    (p.sub ? '<li>Type: <a href="' + SEO.pathShop(p.category, p.sub) + '">' + esc(p.sub) + '</a></li>' : '') +
    (p.sizes.length ? '<li>Sizes: ' + esc(p.sizes.join(', ')) + '</li>' : '') +
    (p.colors.length ? '<li>Colours: ' + esc(p.colors.join(', ')) + '</li>' : '') +
    '<li>Payment: cash on delivery</li></ul>' +
    '<p><a href="' + esc(waLink('Hi Radhe Radhe, I am interested in "' + p.name + '" ' + SITE_URL + SEO.pathProduct(p))) + '">Ask about this item on WhatsApp</a></p>' +
    '<h2>You may also like</h2>' + cards(related(p)) + '</div>';
}

/* ---------- write everything ---------- */
const MARK = '.seo-generated';
function clearGenerated(dir) {
  const d = file(dir);
  if (!fs.existsSync(d)) { return; }
  if (!fs.existsSync(path.join(d, MARK))) { throw new Error('The folder "' + dir + '" already exists and was not made by this builder. Rename or remove it.'); }
  fs.rmSync(d, { recursive: true, force: true });
}
function writePage(urlPath, meta, main) {
  const rel = urlPath.replace(/^\//, '') + 'index.html';
  write(rel, page(meta, main));
}
function stamp(dir) { write(dir + '/' + MARK, 'made by build-seo.js\n'); }

clearGenerated('shop');
clearGenerated('product');

let count = 0;
const urls = [];      // for the sitemap: [path, imageUrl|null, imageTitle]
write('index.html', page(SEO.home(), mainHome())); count++;
urls.push(['/', null, '']);
writePage('/wishlist/', SEO.plain('Wishlist | Radhe Radhe', '/wishlist/', true), ''); count++;
writePage('/orders/', SEO.plain('My orders | Radhe Radhe', '/orders/', true), ''); count++;
write('404.html', page(SEO.plain('Page not found | Radhe Radhe', '/', true), '')); count++;

if (SAMPLE) {
  console.log('SAMPLE_DATA is true in product.js: only the basic pages were built.');
  console.log('When your real products are in product.js, set window.SAMPLE_DATA = false to build all pages.');
} else {
  writePage('/shop/', SEO.shop('all', '', products), mainShopAll()); count++;
  urls.push(['/shop/', null, '']);
  CAT_KEYS.forEach((k) => {
    const list = products.filter((p) => p.category === k);
    if (!list.length) { return; }
    writePage(SEO.pathShop(k), SEO.shop(k, '', list), mainCategory(k)); count++;
    urls.push([SEO.pathShop(k), null, '']);
    Array.from(new Set(list.map((p) => p.sub).filter(Boolean))).forEach((sub) => {
      const sl = list.filter((p) => p.sub === sub);
      writePage(SEO.pathShop(k, sub), SEO.shop(k, sub, sl), mainSub(k, sub)); count++;
      urls.push([SEO.pathShop(k, sub), null, '']);
    });
  });
  products.forEach((p) => {
    writePage(SEO.pathProduct(p), SEO.product(p), mainProduct(p)); count++;
    urls.push([SEO.pathProduct(p), SEO.assetUrl(p.images[0]), p.name]);
  });
  stamp('shop'); stamp('product');
}

/* sitemap.xml */
const xmlEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
write('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n' +
  urls.map((u) => '<url><loc>' + xmlEsc(SITE_URL + u[0]) + '</loc><lastmod>' + today + '</lastmod>' + (u[1] ? '<image:image><image:loc>' + xmlEsc(u[1]) + '</image:loc><image:title>' + xmlEsc(u[2]) + '</image:title></image:image>' : '') + '</url>').join('\n') + '\n</urlset>\n');

/* robots.txt */
write('robots.txt', 'User-agent: *\nAllow: /\nDisallow: /wishlist/\nDisallow: /orders/\nDisallow: /*?q=\n\nSitemap: ' + SITE_URL + '/sitemap.xml\n');
write('.nojekyll', '');

/* merchant-feed.xml  (product list for Google Merchant Center, one item per size) */
if (!SAMPLE) {
  const gender = (p) => {
    if (p.category === 'saree' || p.category === 'lehenga' || p.category === 'kurti' || p.category === 'girls') { return 'female'; }
    if (p.category === 'boys') { return 'male'; }
    if (p.category === 'suit') { return /women/i.test(p.sub) ? 'female' : 'male'; }
    if (/^girls/i.test(p.sub)) { return 'female'; }
    if (/^boys/i.test(p.sub)) { return 'male'; }
    return 'unisex';
  };
  const age = (p) => (p.category === 'kids' ? (/baby/i.test(p.sub) ? 'infant' : 'kids') : 'adult');
  const items = [];
  products.forEach((p) => {
    const sizes = p.sizes.length ? p.sizes : [''];
    sizes.forEach((sz) => {
      const id = sz ? p.id + '-' + slugify(sz) : p.id;
      items.push('<item>' +
        '<g:id>' + xmlEsc(id) + '</g:id><g:item_group_id>' + xmlEsc(p.id) + '</g:item_group_id>' +
        '<title>' + xmlEsc(p.name) + '</title><description>' + xmlEsc(p.desc || SEO.product(p).description) + '</description>' +
        '<link>' + xmlEsc(SITE_URL + SEO.pathProduct(p)) + '</link><g:image_link>' + xmlEsc(SEO.assetUrl(p.images[0])) + '</g:image_link>' +
        p.images.slice(1, 5).map((im) => '<g:additional_image_link>' + xmlEsc(SEO.assetUrl(im)) + '</g:additional_image_link>').join('') +
        '<g:availability>' + (p.inStock ? 'in stock' : 'out of stock') + '</g:availability><g:condition>new</g:condition>' +
        '<g:price>' + p.price.toFixed(2) + ' INR</g:price><g:brand>' + xmlEsc(SHOP.name) + '</g:brand><g:identifier_exists>no</g:identifier_exists>' +
        '<g:google_product_category>Apparel &amp; Accessories &gt; Clothing</g:google_product_category>' +
        '<g:product_type>' + xmlEsc(CATS[p.category].label + (p.sub ? ' > ' + p.sub : '')) + '</g:product_type>' +
        (p.colors.length ? '<g:color>' + xmlEsc(p.colors.slice(0, 3).join('/')) + '</g:color>' : '') +
        (sz ? '<g:size>' + xmlEsc(sz) + '</g:size>' : '') +
        '<g:gender>' + gender(p) + '</g:gender><g:age_group>' + age(p) + '</g:age_group>' +
        '</item>');
    });
  });
  write('merchant-feed.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0"><channel>\n<title>' + xmlEsc(SHOP.legalName) + '</title><link>' + SITE_URL + '/</link><description>Product list for Google Merchant Center</description>\n' + items.join('\n') + '\n</channel></rss>\n');
}

console.log('Built ' + count + ' pages, ' + urls.length + ' sitemap addresses' + (SAMPLE ? ' (safe mode)' : ', ' + products.length + ' products') + '.');
