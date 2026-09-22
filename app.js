(function(){
'use strict';

/*SEO-SHARED-START*/
/* ================================================================
   SHARED SETTINGS + SEO LOGIC
   This block is used by the website AND by build-seo.js (the page builder),
   so titles, links and Google data are always identical.
================================================================ */
var SITE_URL = 'https://radheradhefashion.in';

var SHOP = {
  name: 'Radhe Radhe',
  legalName: 'Radhe Radhe Fashion & Lifestyle',
  tagline: 'Fashion & Lifestyle',
  whatsapp: '919153401395',
  phones: ['9153401395', '7325062752'],
  instagram: 'ayaansh_shah_',
  address: 'Pethiya Bazar, Phulwari Sharif, Patna, Bihar',
  mapsLink: 'https://maps.app.goo.gl/hmNDRTgCBczPwb798',
  mapsEmbed: 'https://www.google.com/maps?q=Pethiya%20Bazar%2C%20Phulwari%20Sharif%2C%20Patna%2C%20Bihar&output=embed',
  logo: 'sh.jpg',
  defaultCity: 'Patna',
  defaultState: 'Bihar'
};

/* Category keys match your product.js ("category" field).
   slug = the word used in the web address, e.g. radheradhefashion.in/shop/sarees/
   seoTitle / seoDesc / intro / hi = text Google shows and reads. Edit freely. */
var CATS = {
  saree: {
    label: 'Sarees', name: 'Saree Collection', tagline: 'Elegance draped in tradition', png: 'a.png', cover: 'a.png', emoji: '🥻', tint: '#ffe3ee', sizes: [], slug: 'sarees',
    seoTitle: 'Sarees in Patna | Silk, Banarasi, Cotton Sarees – Radhe Radhe',
    seoDesc: 'Buy silk, Banarasi, cotton, georgette and bridal sarees at Radhe Radhe, Pethiya Bazar, Phulwari Sharif, Patna. Cash on delivery. Order on WhatsApp.',
    intro: 'Looking for a saree shop in Patna? Radhe Radhe in Pethiya Bazar, Phulwari Sharif has silk, Banarasi, cotton, georgette, chiffon, party wear and bridal sarees for every occasion. Browse online and order with cash on delivery, or visit the shop.',
    hi: 'फुलवारी शरीफ, पटना में सिल्क, बनारसी, कॉटन, जॉर्जेट और ब्राइडल साड़ियों का कलेक्शन – राधे राधे फैशन।'
  },
  lehenga: {
    label: 'Lehenga', name: 'Lehenga Collection', tagline: 'Bridal grace, festive charm', png: 'g.png', cover: 'g.png', emoji: '👗', tint: '#efe6ff', sizes: ['S','M','L','XL','Free size'], slug: 'lehenga',
    seoTitle: 'Lehenga in Patna | Bridal & Party Wear Lehenga – Radhe Radhe',
    seoDesc: 'Explore bridal, party wear, festive, designer and ready to wear lehengas at Radhe Radhe, Phulwari Sharif, Patna. Cash on delivery. Order on WhatsApp.',
    intro: 'Radhe Radhe in Phulwari Sharif, Patna brings bridal, party wear, festive, designer and ready to wear lehengas for weddings, engagements and functions. Order online with cash on delivery or visit our store in Pethiya Bazar.',
    hi: 'पटना के फुलवारी शरीफ में ब्राइडल, पार्टी वियर और फेस्टिव लहंगे – राधे राधे फैशन।'
  },
  kurti: {
    label: 'Kurti & Suit', name: 'Kurti & Suits Collection', tagline: 'Comfort meets everyday style', png: 'c.png', cover: 'c.png', emoji: '👘', tint: '#dcfaee', sizes: ['S','M','L','XL','XXL'], slug: 'kurti-suits',
    seoTitle: 'Kurti & Suit Sets in Patna | Anarkali, Palazzo – Radhe Radhe',
    seoDesc: 'Shop kurtis, Anarkali suits, palazzo sets, straight suits, sharara sets and dress material at Radhe Radhe, Phulwari Sharif, Patna. Cash on delivery.',
    intro: 'Find daily wear kurtis, Anarkali suit sets, palazzo sets, sharara sets and dress material at Radhe Radhe, Pethiya Bazar, Phulwari Sharif, Patna. Comfortable fits in many sizes and colours, with cash on delivery.',
    hi: 'फुलवारी शरीफ, पटना में कुर्ती, अनारकली सूट, पलाज़ो सेट और शरारा सेट – राधे राधे फैशन।'
  },
  boys: {
    label: "Men's Wear", name: "Men's Wear", tagline: 'Smart looks for every occasion', png: 'e.png', cover: 'e.png', emoji: '👔', tint: '#dfeeff', sizes: ['S','M','L','XL','XXL'], slug: 'mens-wear',
    seoTitle: "Men's Wear in Patna | Shirts, Kurta Pajama, Jeans – Radhe Radhe",
    seoDesc: "Shop men's shirts, T-shirts, trousers, jeans, kurta pajama sets and jackets at Radhe Radhe, Phulwari Sharif, Patna. Cash on delivery. Order on WhatsApp.",
    intro: "Radhe Radhe in Phulwari Sharif, Patna has men's shirts, T-shirts, trousers, jeans, kurta pajama sets and jackets for office, festivals and everyday wear. Order online with cash on delivery.",
    hi: 'पटना के फुलवारी शरीफ में पुरुषों के शर्ट, टी-शर्ट, जींस और कुर्ता पजामा – राधे राधे फैशन।'
  },
  girls: {
    label: "Women's Wear", name: "Women's Wear", tagline: 'Elegant & fashionable styles', png: 'd.png', cover: 'd.png', emoji: '👚', tint: '#ffe9f4', sizes: ['S','M','L','XL'], slug: 'womens-wear',
    seoTitle: "Women's Wear in Patna | Tops, Dresses, Co-ord Sets – Radhe Radhe",
    seoDesc: "Shop women's tops, dresses, co-ord sets, bottoms, jackets and night wear at Radhe Radhe, Phulwari Sharif, Patna. Cash on delivery. Order on WhatsApp.",
    intro: "Discover women's tops, dresses, co-ord sets, jeans, jackets and night wear at Radhe Radhe, Pethiya Bazar, Phulwari Sharif, Patna. Trendy styles in many sizes, with cash on delivery.",
    hi: 'फुलवारी शरीफ, पटना में महिलाओं के टॉप, ड्रेस, को-ऑर्ड सेट और नाइट वियर – राधे राधे फैशन।'
  },
  kids: {
    label: "Kid's Wear", name: "Kid's Wear", tagline: 'Comfort that keeps up with play', png: 'f.png', cover: 'f.png', emoji: '🧸', tint: '#fff1c9', sizes: ['2-3Y','4-5Y','6-7Y','8-9Y','10-12Y'], slug: 'kids-wear',
    seoTitle: 'Kids Wear in Patna | Frocks, Ethnic & Baby Clothes – Radhe Radhe',
    seoDesc: 'Shop kids frocks, ethnic wear, casual wear, baby clothes and winter wear at Radhe Radhe, Phulwari Sharif, Patna. Cash on delivery. Order on WhatsApp.',
    intro: 'Radhe Radhe in Phulwari Sharif, Patna has girls frocks, girls and boys ethnic wear, casual sets, baby wear and winter wear for little ones. Order online with cash on delivery.',
    hi: 'पटना के फुलवारी शरीफ में बच्चों के फ्रॉक, एथनिक ड्रेस, बेबी वियर और विंटर वियर – राधे राधे फैशन।'
  },
  suit: {
    label: 'Blazer', name: 'Blazer Collection', tagline: 'Sharp, tailored, premium', png: 'b.png', cover: 'b.png', emoji: '🧥', tint: '#e8ecf5', sizes: ['36','38','40','42','44'], slug: 'blazers',
    seoTitle: 'Blazers & Suits in Patna | Formal, Party Blazers – Radhe Radhe',
    seoDesc: "Shop formal, party and casual blazers, suit sets, waistcoats and women's blazers at Radhe Radhe, Phulwari Sharif, Patna. Cash on delivery.",
    intro: "Radhe Radhe in Phulwari Sharif, Patna has formal, party and casual blazers, suit sets, waistcoats and women's blazers for offices, weddings and parties. Order online with cash on delivery.",
    hi: 'फुलवारी शरीफ, पटना में फॉर्मल और पार्टी ब्लेज़र, सूट सेट और वेस्टकोट – राधे राधे फैशन।'
  }
};
var CAT_KEYS = Object.keys(CATS);

/* Page names used for the "type" (subcategory) pages, e.g. /shop/sarees/silk/.
   Any type not listed here simply uses its own name. */
var SUB_HEADINGS = {
  'saree|Silk': 'Silk Sarees', 'saree|Cotton': 'Cotton Sarees', 'saree|Georgette': 'Georgette Sarees', 'saree|Chiffon': 'Chiffon Sarees',
  'saree|Banarasi': 'Banarasi Sarees', 'saree|Party Wear': 'Party Wear Sarees', 'saree|Bridal': 'Bridal Sarees', 'saree|Printed': 'Printed Sarees',
  'lehenga|Bridal': 'Bridal Lehenga', 'lehenga|Party Wear': 'Party Wear Lehenga', 'lehenga|Festive': 'Festive Lehenga', 'lehenga|Designer': 'Designer Lehenga', 'lehenga|Ready to Wear': 'Ready to Wear Lehenga',
  'kurti|Kurti': 'Kurtis', 'kurti|Anarkali Suit': 'Anarkali Suit Sets', 'kurti|Palazzo Set': 'Palazzo Kurti Sets', 'kurti|Straight Suit': 'Straight Suit Sets', 'kurti|Sharara Set': 'Sharara Suit Sets', 'kurti|Dress Material': 'Dress Material',
  'boys|Shirts': "Men's Shirts", 'boys|T-Shirts': "Men's T-Shirts", 'boys|Trousers': "Men's Trousers", 'boys|Jeans': "Men's Jeans", 'boys|Kurta Pajama': 'Kurta Pajama Sets for Men', 'boys|Jackets': "Men's Jackets",
  'girls|Tops': "Women's Tops", 'girls|Dresses': "Women's Dresses", 'girls|Co-ord Sets': 'Co-ord Sets for Women', 'girls|Bottoms': "Women's Bottoms", 'girls|Jackets & Shrugs': "Women's Jackets & Shrugs", 'girls|Night Wear': "Women's Night Wear",
  'kids|Girls Frocks': 'Girls Frocks', 'kids|Girls Ethnic': 'Girls Ethnic Wear', 'kids|Boys Ethnic': 'Boys Ethnic Wear', 'kids|Boys Casual': 'Boys Casual Wear', 'kids|Baby Wear': 'Baby Wear', 'kids|Winter Wear': 'Kids Winter Wear',
  'suit|Formal Blazer': 'Formal Blazers', 'suit|Party Blazer': 'Party Blazers', 'suit|Casual Blazer': 'Casual Blazers', 'suit|Suit Set': 'Suit Sets', 'suit|Waistcoat': 'Waistcoats', "suit|Women's Blazer": "Women's Blazers"
};

function norm(p, i){
  var cat = CATS[p.category] ? p.category : null;
  if(!cat){ return null; }
  var imgs = Array.isArray(p.images) && p.images.length ? p.images : (p.image ? [p.image] : [CATS[cat].cover]);
  var price = Number(p.price) || 0;
  var mrp = Number(p.mrp || p.oldPrice) || 0;
  return {
    id: String(p.id != null ? p.id : 'p' + i),
    name: p.name || 'Untitled',
    price: price,
    mrp: mrp > price ? mrp : 0,
    category: cat,
    sub: p.subcategory || p.sub || '',
    images: imgs,
    desc: p.description || '',
    sizes: Array.isArray(p.sizes) ? p.sizes : CATS[cat].sizes,
    colors: Array.isArray(p.colors) ? p.colors : [],
    badge: p.badge || '',
    isNew: !!p.isNew,
    featured: !!p.featured,
    rating: Number(p.rating) || 0,
    inStock: p.inStock !== false,
    order: i
  };
}

function slugify(s){
  return String(s == null ? '' : s).toLowerCase().replace(/&/g, ' and ').replace(/['’`]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function productSlug(p){ return slugify(p.name) + '-' + slugify(p.id); }
function subHeading(cat, sub){ return SUB_HEADINGS[cat + '|' + sub] || sub; }
/* images in product.js can be written as 'saree-1.jpg'; make them work from any page */
function asset(src){
  src = String(src == null ? '' : src);
  return (/^(https?:)?\/\//.test(src) || src.charAt(0) === '/' || src.indexOf('data:') === 0) ? src : '/' + src;
}
function seoMoney(n){ return '₹' + Math.round(n).toLocaleString('en-IN'); }
function seoTrim(s, n){
  s = String(s).replace(/\s+/g, ' ').trim();
  if(s.length <= n){ return s; }
  var cut = s.slice(0, n - 1), i = cut.lastIndexOf(' ');
  return (i > n * 0.6 ? cut.slice(0, i) : cut).replace(/[ ,.;:\-]+$/, '') + '…';
}

var SEO = {};
SEO.abs = function(path){ return SITE_URL + path; };
SEO.assetUrl = function(src){ var a = asset(src); return /^https?:\/\//.test(a) ? a : SITE_URL + a; };
SEO.pathShop = function(cat, sub){
  var s = '/shop/';
  if(cat && CATS[cat]){ s += CATS[cat].slug + '/'; if(sub){ s += slugify(sub) + '/'; } }
  return s;
};
SEO.pathProduct = function(p){ return '/product/' + productSlug(p) + '/'; };

SEO.store = function(){
  return {
    '@type': 'ClothingStore', '@id': SITE_URL + '/#store',
    name: SHOP.legalName, url: SITE_URL + '/',
    image: SITE_URL + '/icon-512.png', logo: SITE_URL + '/icon-512.png',
    telephone: SHOP.phones.map(function(n){ return '+91' + n; }),
    address: { '@type': 'PostalAddress', streetAddress: 'Pethiya Bazar', addressLocality: 'Phulwari Sharif, Patna', addressRegion: 'Bihar', addressCountry: 'IN' },
    sameAs: ['https://instagram.com/' + SHOP.instagram],
    hasMap: SHOP.mapsLink
  };
};
SEO.website = function(){
  return {
    '@type': 'WebSite', '@id': SITE_URL + '/#website', url: SITE_URL + '/', name: SHOP.legalName,
    publisher: { '@id': SITE_URL + '/#store' }, inLanguage: 'en-IN',
    potentialAction: { '@type': 'SearchAction', target: SITE_URL + '/shop/?q={search_term_string}', 'query-input': 'required name=search_term_string' }
  };
};
SEO.crumbs = function(items){
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(function(it, i){ return { '@type': 'ListItem', position: i + 1, name: it[0], item: SITE_URL + it[1] }; })
  };
};
function seoMeta(o){
  return {
    title: o.title, description: o.description, canonical: SITE_URL + o.path,
    robots: o.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large',
    image: o.image || (SITE_URL + '/icon-512.png'), ogType: o.ogType || 'website',
    jsonld: { '@context': 'https://schema.org', '@graph': o.graph || [] }
  };
}
SEO.home = function(){
  return seoMeta({
    path: '/', title: 'Radhe Radhe Fashion & Lifestyle – Clothing Store in Patna',
    description: "Radhe Radhe Fashion & Lifestyle, Pethiya Bazar, Phulwari Sharif, Patna. Sarees, lehengas, kurtis, men's, women's and kids wear, blazers. Cash on delivery.",
    graph: [SEO.store(), SEO.website()]
  });
};
SEO.plain = function(title, path, noindex){
  return seoMeta({ path: path, title: title, description: "Radhe Radhe Fashion & Lifestyle, Phulwari Sharif, Patna.", noindex: noindex, graph: [] });
};
/* list = products shown on that page (used for counts and the item list) */
SEO.shop = function(cat, sub, list){
  var c = CATS[cat], path = SEO.pathShop(cat, sub), title, desc, name, crumbs = [['Home', '/'], ['Shop', '/shop/']];
  if(c && sub){
    name = subHeading(cat, sub);
    title = seoTrim(name + ' in Patna – Radhe Radhe', 70);
    desc = seoTrim('Shop ' + name.toLowerCase() + ' at Radhe Radhe, Pethiya Bazar, Phulwari Sharif, Patna. ' + list.length + (list.length === 1 ? ' style' : ' styles') + ', cash on delivery. Order on WhatsApp.', 158);
    crumbs.push([c.label, SEO.pathShop(cat)], [name, path]);
  } else if(c){
    name = c.name; title = c.seoTitle; desc = c.seoDesc; crumbs.push([c.label, path]);
  } else {
    name = 'All products'; title = 'Shop All Clothing in Patna – Radhe Radhe Fashion & Lifestyle';
    desc = "Browse the full Radhe Radhe collection: sarees, lehengas, kurti suits, men's, women's and kid's wear and blazers. Phulwari Sharif, Patna. Cash on delivery.";
  }
  var items = list.slice(0, 50).map(function(p, i){
    return { '@type': 'ListItem', position: i + 1, url: SITE_URL + SEO.pathProduct(p), name: p.name };
  });
  return seoMeta({
    path: path, title: title, description: desc,
    graph: [SEO.store(), SEO.crumbs(crumbs), {
      '@type': 'CollectionPage', '@id': SITE_URL + path + '#page', url: SITE_URL + path, name: name, description: desc,
      isPartOf: { '@id': SITE_URL + '/#website' }, mainEntity: { '@type': 'ItemList', numberOfItems: list.length, itemListElement: items }
    }]
  });
};
SEO.product = function(p){
  var c = CATS[p.category], path = SEO.pathProduct(p), url = SITE_URL + path;
  var title = seoTrim(p.name + ' – ' + seoMoney(p.price) + ' | Radhe Radhe Patna', 70);
  var bits = [p.name + (p.sub ? ' (' + p.sub + ')' : '') + ' at Radhe Radhe, Phulwari Sharif, Patna.', seoMoney(p.price) + (p.mrp ? ' (MRP ' + seoMoney(p.mrp) + ').' : '.')];
  if(p.sizes.length){ bits.push('Sizes: ' + p.sizes.join(', ') + '.'); }
  bits.push('Cash on delivery.');
  var desc = seoTrim(bits.join(' '), 158);
  var text = (p.desc ? p.desc + ' ' : '') + (p.colors.length ? 'Available colours: ' + p.colors.join(', ') + '. ' : '') + (p.sizes.length ? 'Available sizes: ' + p.sizes.join(', ') + '.' : '');
  var product = {
    '@type': 'Product', '@id': url + '#product', name: p.name, image: p.images.map(SEO.assetUrl),
    description: seoTrim(text || desc, 500), sku: p.id, brand: { '@type': 'Brand', name: SHOP.name },
    category: c.label + (p.sub ? ' > ' + p.sub : ''),
    offers: {
      '@type': 'Offer', url: url, priceCurrency: 'INR', price: p.price,
      availability: p.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition', seller: { '@id': SITE_URL + '/#store' }
    }
  };
  var crumbs = [['Home', '/'], ['Shop', '/shop/'], [c.label, SEO.pathShop(p.category)]];
  if(p.sub){ crumbs.push([subHeading(p.category, p.sub), SEO.pathShop(p.category, p.sub)]); }
  crumbs.push([p.name, path]);
  return seoMeta({ path: path, title: title, description: desc, image: SEO.assetUrl(p.images[0]), ogType: 'product', graph: [SEO.store(), SEO.crumbs(crumbs), product] });
};
/*SEO-SHARED-END*/


/* ================================================================
   1. SHOP SETTINGS  (edit these)
================================================================ */

/* Paste your Google OAuth "Web client ID" here to turn on Google login at
   checkout. While this is empty, customers can check out as guests. */
var GOOGLE_CLIENT_ID = '';
var LOGIN_REQUIRED = !!GOOGLE_CLIENT_ID;

/* Sample store rules. Change or remove to match your shop. */
var RULES = {
  freeDeliveryAbove: 1499,
  deliveryFee: 60,
  coupons: {
    RADHE10: { percent: 10, minOrder: 999 }
  }
};
var PAGE_SIZE = 12;


/* ================================================================
   2. SAMPLE PRODUCTS
   Used only when product.js is missing or empty.
   Prices and names are placeholders. Replace with your real catalog.
================================================================ */
function buildSample(){
  var defs = [
    ['saree','Banarasi Silk Saree',2499,3299,'Silk','Rich woven border with a soft, flowing drape. Blouse piece included.',{isNew:1}],
    ['saree','Kanjivaram Style Silk Saree',2999,3999,'Silk','Traditional temple border with a lustrous finish for weddings and festivals.',{featured:1}],
    ['saree','Cotton Handloom Saree',899,1199,'Cotton','Light, breathable cotton for everyday elegance.',{}],
    ['saree','Georgette Printed Saree',1199,1599,'Georgette','Flowy georgette with a modern print, easy to drape.',{}],
    ['lehenga','Bridal Embroidered Lehenga',6999,8999,'Bridal','Heavy embroidery and a graceful flare made for your big day.',{isNew:1,featured:1}],
    ['lehenga','Festive Party Lehenga',3499,4499,'Party','A lighter lehenga set for festive evenings and functions.',{}],
    ['kurti','Straight Cotton Kurti',599,799,'Kurti','Soft cotton straight kurti for daily wear.',{}],
    ['kurti','Anarkali Suit Set',1799,2299,'Suit Set','Flared Anarkali kurta with bottom and dupatta.',{featured:1}],
    ['kurti','Palazzo Kurti Set',1299,1699,'Suit Set','Comfortable kurti and palazzo pair with a clean fit.',{isNew:1}],
    ['boys','Classic Cotton Shirt',799,1099,'Shirts','A wardrobe staple in breathable cotton.',{}],
    ['boys','Kurta Pajama Set',1499,1999,'Kurta Sets','Festive kurta pajama set with a neat finish.',{featured:1}],
    ['boys','Slim Fit Trousers',999,1399,'Trousers','Tailored slim fit that works from office to outings.',{}],
    ['girls','Floral Co-ord Set',1399,1799,'Co-ord Sets','Matching top and bottom in a fresh floral print.',{isNew:1}],
    ['girls','Casual Top and Palazzo',999,1299,'Sets','Easy everyday set in a soft, flowy fabric.',{}],
    ['girls','Printed Long Dress',1199,1599,'Dresses','A relaxed long dress for day outings.',{featured:1}],
    ['kids','Kids Party Frock',899,1199,'Girls','A twirl-ready frock for birthdays and parties.',{isNew:1}],
    ['kids','Boys Kurta Set',799,1099,'Boys','Comfortable festive kurta set for little ones.',{}],
    ['kids','Kids Denim Set',699,0,'Boys','Soft denim outfit that keeps up with play.',{}],
    ['suit','Tailored Formal Blazer',3299,4299,'Formal','Sharp tailoring in a premium fabric for formal occasions.',{featured:1}],
    ['suit','Two-Button Party Blazer',3799,4799,'Party','A statement blazer for weddings and parties.',{isNew:1}]
  ];
  var counter = {};
  return defs.map(function(d){
    var c = d[0];
    counter[c] = (counter[c] || 0) + 1;
    var k = counter[c];
    return {
      id: c + '-' + k, name: d[1], price: d[2], mrp: d[3], category: c, subcategory: d[4],
      description: d[5], images: [c + '-' + k + '.jpg', c + '-' + ((k % 8) + 1) + '.jpg'],
      isNew: !!d[6].isNew, featured: !!d[6].featured
    };
  });
}

/* ================================================================
   3. HELPERS
================================================================ */
function $(s, r){ return (r || document).querySelector(s); }
function $$(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function fmt(n){ return '₹' + Math.round(n).toLocaleString('en-IN'); }
function uniq(a){ return a.filter(function(x, i){ return a.indexOf(x) === i; }); }
var store = {
  get: function(k, d){ try{ var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); }catch(e){ return d; } },
  set: function(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function waLink(text){ return 'https://wa.me/' + SHOP.whatsapp + '?text=' + encodeURIComponent(text); }

/* colour name -> swatch colour (add more names here if you use them in product.js) */
var COLOR_HEX = {
  'Red':'#c62828','Maroon':'#7b1e2b','Wine':'#722f37','Pink':'#f4a6c0','Hot Pink':'#e91e8c','Magenta':'#b5177a','Coral':'#f26b5b','Peach':'#ffcba4',
  'Orange':'#f57c00','Rust':'#b5522b','Mustard':'#d4a017','Yellow':'#f4d03f','Gold':'#c9a227','Cream':'#f5f0e1','Beige':'#d9c7a3','Off White':'#f3efe6',
  'White':'#ffffff','Black':'#171719','Grey':'#8e8e93','Charcoal':'#3a3d45','Silver':'#c0c0c0','Brown':'#6d4c41','Tan':'#b98a5e','Khaki':'#b8a47c',
  'Navy':'#1f2a5a','Royal Blue':'#2a4fb3','Sky Blue':'#7ec8f0','Light Blue':'#a9cbea','Denim Blue':'#4a6fa5','Blue':'#2f6fd0','Teal':'#0f8b8d','Turquoise':'#2ec4b6',
  'Mint Green':'#a8e6c8','Bottle Green':'#0b5d3b','Olive':'#6b7a33','Green':'#2e8b57','Lavender':'#c5b3e6','Purple':'#6a3fb0'
};
function swatch(name, small){
  var bg = name === 'Multicolor' ? 'conic-gradient(#e74c3c,#f1c40f,#2ecc71,#3498db,#9b59b6,#e74c3c)' : (COLOR_HEX[name] || '#cfd2d8');
  return '<i class="sw' + (small ? ' sm' : '') + '" style="background:' + bg + '"></i>';
}

/* ---------- icons (Lucide style) ---------- */
var IC = {
  menu:'<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  bag:'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  grid:'<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  box:'<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  plus:'<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus:'<path d="M5 12h14"/>',
  trash:'<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
  left:'<path d="m15 18-6-6 6-6"/>',
  right:'<path d="m9 18 6-6-6-6"/>',
  share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  truck:'<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  spark:'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  sliders:'<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  tag:'<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  redo:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  wallet:'<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  copy:'<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  zoom:'<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>'
};
function ic(n, s){ s = s || 20; return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC[n] + '</svg>'; }
function icWA(s){ s = s || 22; return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.78 11.78 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.59 5.92L.13 24l6.38-1.67a11.8 11.8 0 0 0 5.57 1.41h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.24-6.15-3.41-8.42zM12.09 21.75h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.81 9.81 0 1 1 8.39 4.66z"/><path d="M17.56 14.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>'; }
function icIG(s){ s = s || 20; return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>'; }
function icG(s){ s = s || 20; return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>'; }

/* ================================================================
   4. PRODUCTS
================================================================ */
var RAW = (Array.isArray(window.PRODUCTS) && window.PRODUCTS.length) ? window.PRODUCTS : buildSample();
var PRODUCTS = RAW.map(norm).filter(Boolean);
var BYID = {};
PRODUCTS.forEach(function(p){ BYID[p.id] = p; });
function byId(id){ return BYID[String(id)] || null; }
function offPct(p){ return p.mrp ? Math.round((1 - p.price / p.mrp) * 100) : 0; }
function isFav(id){ return fav.indexOf(String(id)) > -1; }

function media(src, alt, cat, eager){
  return '<span class="ph" aria-hidden="true"><b>' + (CATS[cat] ? CATS[cat].emoji : '🛍️') + '</b></span><img class="mi" src="' + esc(asset(src)) + '" alt="' + esc(alt) + '"' + (eager ? '' : ' loading="lazy"') + ' decoding="async">';
}

/* ================================================================
   5. STATE
================================================================ */
var cart = store.get('rrs_cart', []).filter(function(c){ return c && byId(c.id); });
var fav = store.get('rrs_fav', []).map(String).filter(byId);
var orders = store.get('rrs_orders', []);
var user = store.get('rrs_user', null);
var coupon = store.get('rrs_coupon', '');
var recent = store.get('rrs_recent', []).filter(byId);
var recentQ = store.get('rrs_rq', []);

var app, activeOv = null, lastFocus = null;

function ckey(id, v){ return id + '|' + (v || ''); }
function cartItems(){
  return cart.map(function(c){ return { id: c.id, v: c.v || '', qty: c.qty, p: byId(c.id) }; }).filter(function(c){ return c.p; });
}
function cartCount(){ return cart.reduce(function(n, c){ return n + c.qty; }, 0); }
function saveCart(){
  store.set('rrs_cart', cart);
  updateBadges();
  if(activeOv === 'cart'){ renderCart(); }
}
function addToCart(id, v, qty){
  var p = byId(id);
  if(!p || !p.inStock){ return false; }
  var k = ckey(id, v);
  var ex = cart.filter(function(c){ return ckey(c.id, c.v) === k; })[0];
  if(ex){ ex.qty = Math.min(10, ex.qty + qty); }
  else { cart.push({ id: String(id), v: v || '', qty: Math.min(10, qty) }); }
  saveCart();
  return true;
}
function saveFav(){ store.set('rrs_fav', fav); updateBadges(); }
function toggleFav(id){
  id = String(id);
  var i = fav.indexOf(id);
  if(i > -1){ fav.splice(i, 1); toast('Removed from wishlist'); }
  else { fav.push(id); toast('Saved to wishlist'); }
  saveFav();
  $$('.heart[data-id="' + id.replace(/"/g, '') + '"]').forEach(function(b){
    var on = isFav(id);
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  var pf = $('#pdp-fav');
  if(pf && pdp && pdp.id === id){ pf.innerHTML = ic('heart', 18) + (isFav(id) ? ' Saved' : ' Save'); pf.classList.toggle('on', isFav(id)); }
  if(currentPage === 'wishlist'){ renderWishlist(); }
}
function pushRecent(id){
  recent = [id].concat(recent.filter(function(x){ return x !== id; })).slice(0, 12);
  store.set('rrs_recent', recent);
}

/* coupon + totals */
function calc(items){
  var subtotal = 0;
  items.forEach(function(i){ var p = byId(i.id); if(p){ subtotal += p.price * i.qty; } });
  var discount = 0, note = '', c = coupon && RULES.coupons[coupon];
  if(c){
    if(subtotal >= c.minOrder){ discount = Math.round(subtotal * c.percent / 100); }
    else { note = 'Add ' + fmt(c.minOrder - subtotal) + ' more to use ' + coupon; }
  }
  var after = subtotal - discount;
  var delivery = subtotal === 0 ? 0 : (after >= RULES.freeDeliveryAbove ? 0 : RULES.deliveryFee);
  return { subtotal: subtotal, discount: discount, after: after, delivery: delivery, total: after + delivery, note: note };
}
function applyCoupon(code){
  code = String(code || '').trim().toUpperCase();
  if(!code){ return 'Enter a coupon code'; }
  if(!RULES.coupons[code]){ return 'That code is not valid'; }
  coupon = code; store.set('rrs_coupon', coupon);
  return '';
}
function removeCoupon(){ coupon = ''; store.set('rrs_coupon', ''); }

/* toast */
function toast(msg, ms){
  var box = $('#toasts');
  if(!box){ return; }
  var t = document.createElement('div');
  t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = msg;
  box.appendChild(t);
  while(box.children.length > 2){ box.removeChild(box.firstChild); }
  setTimeout(function(){ t.classList.add('out'); setTimeout(function(){ if(t.parentNode){ t.parentNode.removeChild(t); } }, 320); }, ms || 2200);
}

function updateBadges(){
  var c = cartCount(), f = fav.length;
  ['cart-n', 'bn-cart'].forEach(function(id){ var e = document.getElementById(id); if(e){ e.textContent = c > 0 ? c : ''; } });
  ['fav-n', 'bn-fav'].forEach(function(id){ var e = document.getElementById(id); if(e){ e.textContent = f > 0 ? f : ''; } });
}
function updateAccountBtn(){
  var b = $('#acct-btn');
  if(!b){ return; }
  b.innerHTML = (user && user.picture) ? '<img class="av" src="' + esc(user.picture) + '" alt="" referrerpolicy="no-referrer">' : ic('user');
  b.setAttribute('aria-label', user ? 'Account: ' + user.name : 'Sign in or open account');
}

/* ================================================================
   6. OVERLAYS  (one open at a time, phone back button closes it)
================================================================ */
function openOv(name){
  var el = document.getElementById('ov-' + name);
  if(!el){ return; }
  if(activeOv === name){ renderOv(name); return; }
  if(activeOv){ hideOv(activeOv, true); history.replaceState({ ov: name }, ''); }
  else { lastFocus = document.activeElement; history.pushState({ ov: name }, ''); }
  activeOv = name;
  renderOv(name);
  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
  $('#scrim').classList.toggle('on', name === 'menu' || name === 'cart');
  document.body.classList.add('lock');
  setTimeout(function(){
    var f = el.querySelector('[data-autofocus]') || el;
    try{ f.focus({ preventScroll: true }); }catch(e){}
  }, 60);
}
function hideOv(name, switching){
  var el = document.getElementById('ov-' + name);
  if(el){ el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); }
  if(!switching){
    $('#scrim').classList.remove('on');
    document.body.classList.remove('lock');
    if(lastFocus && lastFocus.focus){ try{ lastFocus.focus({ preventScroll: true }); }catch(e){} }
  }
}
function closeOv(){
  if(!activeOv){ return; }
  if(history.state && history.state.ov){ history.back(); }
  else { hideOv(activeOv); activeOv = null; }
}
function renderOv(name){
  ({ menu: renderMenu, cart: renderCart, search: renderSearch, checkout: renderCheckout, account: renderAccount, filter: renderFilter, zoom: renderZoom })[name]();
}
window.addEventListener('popstate', function(e){
  var s = e.state;
  if(activeOv && !(s && s.ov === activeOv)){ hideOv(activeOv); activeOv = null; }
  if(currentUrl() !== lastUrl){ route(); }
});
function navTo(url){
  if(activeOv){
    hideOv(activeOv); activeOv = null;
    history.replaceState(null, '', url);
    route();
  } else if(url === location.pathname + location.search + location.hash){
    route();
  } else {
    history.pushState(null, '', url);
    route();
  }
}
/* goto('#/shop/saree') style calls still work; they are turned into real addresses */
function goto(h){ navTo(toPath(h)); }

/* ================================================================
   7. SHELL (header, tabs, footer, bottom nav, overlays)
================================================================ */
var currentPage = 'home', prevPage = '', pdp = { id: '', v: '', size: '', color: '', qty: 1, idx: 0 };
var heroTimer = null, heroPaused = false;
var S = { cat: 'all', sub: '', sort: 'featured', min: '', max: '', size: '', color: '', sale: false, q: '', page: 1 };
var lastShopUrl = '', shopScroll = 0, fdraft = null, ck = null;

function brandHTML(){
  return '<a class="brand" href="#/" aria-label="Radhe Radhe home"><span class="brand-logo"><b>R</b><img src="' + esc(asset(SHOP.logo)) + '" alt=""></span><span class="brand-text"><strong>' + esc(SHOP.name) + '</strong><span>' + esc(SHOP.tagline.toUpperCase()) + '</span></span></a>';
}
function buildShell(){
  $('#site-head').innerHTML =
    '<div class="nav">' +
      '<button class="ibtn only-m" data-act="menu" aria-label="Open menu">' + ic('menu') + '</button>' +
      brandHTML() +
      '<nav class="nav-links" aria-label="Main">' +
        '<a href="#/" data-nav="home">Home</a><a href="#/shop/all" data-nav="shop">Shop</a>' +
        '<a href="#/wishlist" data-nav="wishlist">Wishlist</a><a href="#/orders" data-nav="orders">My orders</a>' +
        '<a href="#/contact" data-nav="contact">Visit store</a>' +
      '</nav>' +
      '<div class="nav-actions">' +
        '<button class="ibtn" data-act="search" aria-label="Search">' + ic('search') + '</button>' +
        '<button class="ibtn hide-m" data-act="go" data-href="#/wishlist" aria-label="Wishlist">' + ic('heart') + '<i class="bdg" id="fav-n"></i></button>' +
        '<button class="ibtn ring" id="acct-btn" data-act="account"></button>' +
        '<button class="ibtn ring" data-act="cart" aria-label="Open cart">' + ic('bag') + '<i class="bdg" id="cart-n"></i></button>' +
      '</div>' +
    '</div>' +
    '<div class="wrap"><nav class="tabs" id="tabs" aria-label="Collections"></nav></div>';
  var tabs = '<a href="#/" data-tab="home">Home</a><a href="#/shop/all" data-tab="all">All</a>';
  CAT_KEYS.forEach(function(k){ tabs += '<a href="#/shop/' + k + '" data-tab="' + k + '">' + esc(CATS[k].label) + '</a>'; });
  $('#tabs').innerHTML = tabs;

  $('#bnav').innerHTML =
    '<a href="#/" data-bn="home">' + ic('home', 22) + '<span>Home</span></a>' +
    '<a href="#/shop/all" data-bn="shop">' + ic('grid', 22) + '<span>Shop</span></a>' +
    '<a href="#/wishlist" data-bn="wishlist">' + ic('heart', 22) + '<span>Wishlist</span><i class="bdg" id="bn-fav"></i></a>' +
    '<a href="#/orders" data-bn="orders">' + ic('box', 22) + '<span>Orders</span></a>' +
    '<button data-act="cart" data-bn="cart" aria-label="Open cart">' + ic('bag', 22) + '<span>Cart</span><i class="bdg" id="bn-cart"></i></button>';

  var wa = $('#wa-float');
  wa.href = waLink('Hi Radhe Radhe, I want to know more about your collection.');
  wa.innerHTML = icWA(28);

  var P = function(id, label, inner, cls){ return '<div class="ov ' + (cls || '') + '" id="ov-' + id + '" role="dialog" aria-modal="true" aria-label="' + label + '" aria-hidden="true" tabindex="-1">' + inner + '</div>'; };
  $('#overlays').innerHTML =
    '<div class="scrim" id="scrim"></div>' +
    P('menu', 'Menu', '<div class="ov-head">' + brandHTML() + '<button class="ibtn" data-act="close" aria-label="Close menu">' + ic('x') + '</button></div><div class="ov-body"></div>', 'ov-side') +
    P('cart', 'Cart', '<div class="ov-head"><h2>Your cart</h2><button class="ibtn" data-act="close" aria-label="Close cart">' + ic('x') + '</button></div><div class="ov-body"></div><div class="ov-foot"></div>', 'ov-side') +
    P('search', 'Search', '') +
    P('checkout', 'Checkout', '<div class="panel"></div>', 'ov-center') +
    P('account', 'Account', '<div class="panel"></div>', 'ov-center') +
    P('filter', 'Filter and sort', '<div class="panel"></div>', 'ov-center') +
    P('zoom', 'Product photo', '');
  updateBadges();
  updateAccountBtn();
}
function updateChrome(page, cat){
  currentPage = page;
  document.body.setAttribute('data-page', page);
  var tab = page === 'home' ? 'home' : (page === 'shop' ? cat : (page === 'product' ? cat : ''));
  $$('#tabs a').forEach(function(a){ a.classList.toggle('on', a.getAttribute('data-tab') === tab); });
  var act = { home: 'home', shop: 'shop', product: 'shop', wishlist: 'wishlist', orders: 'orders', contact: 'contact' }[page] || '';
  $$('.nav-links a').forEach(function(a){ a.classList.toggle('on', a.getAttribute('data-nav') === act); });
  $$('#bnav [data-bn]').forEach(function(a){ a.classList.toggle('on', a.getAttribute('data-bn') === act); });
  var on = $('#tabs a.on'), tb = $('#tabs');
  if(on && tb){
    var r = on.getBoundingClientRect(), t = tb.getBoundingClientRect();
    tb.scrollLeft += (r.left - t.left) - (t.width - r.width) / 2;
  }
}

/* ================================================================
   8. ROUTER  (real web addresses: /shop/sarees/, /product/name-id/ ...)
================================================================ */
var PRODUCT_BY_SLUG = {};
PRODUCTS.forEach(function(p){ PRODUCT_BY_SLUG[productSlug(p)] = p; });
var lastUrl = '';
function currentUrl(){ return location.pathname + location.search; }
function catFromSlug(slug){
  for(var i = 0; i < CAT_KEYS.length; i++){ if(CATS[CAT_KEYS[i]].slug === slug || CAT_KEYS[i] === slug){ return CAT_KEYS[i]; } }
  return 'all';
}
function subFromSlug(cat, slug){
  var subs = uniq(PRODUCTS.filter(function(p){ return p.category === cat; }).map(function(p){ return p.sub; }).filter(Boolean));
  for(var i = 0; i < subs.length; i++){ if(slugify(subs[i]) === slug){ return subs[i]; } }
  return '';
}
function listFor(cat, sub){
  return PRODUCTS.filter(function(p){ return (cat === 'all' || p.category === cat) && (!sub || p.sub === sub); });
}
function toPath(h){
  if(!h){ return '/'; }
  if(h.charAt(0) !== '#'){ return h; }
  var raw = h.slice(1), qi = raw.indexOf('?'), q = qi > -1 ? raw.slice(qi) : '', path = qi > -1 ? raw.slice(0, qi) : raw;
  var parts = path.split('/').filter(Boolean), head = parts[0] || '';
  if(!head){ return '/'; }
  if(head === 'contact'){ return '/#contact'; }
  if(head === 'shop'){
    if(parts[1] && CATS[parts[1]]){ return '/shop/' + CATS[parts[1]].slug + '/' + (parts[2] ? parts[2] + '/' : '') + q; }
    return '/shop/' + q;
  }
  if(head === 'product'){ var p = byId(decodeURIComponent(parts[1] || '')); return p ? SEO.pathProduct(p) : '/shop/'; }
  if(head === 'wishlist' || head === 'orders'){ return '/' + head + '/'; }
  return '/';
}
function isSiteRoute(href){
  return /^#\//.test(href) || href === '/' || /^\/#/.test(href) || /^\/(shop|product|wishlist|orders)(\/|\?|$)/.test(href);
}
function fixLinks(root){
  $$('a[href^="#/"]', root).forEach(function(a){ a.setAttribute('href', toPath(a.getAttribute('href'))); });
}
/* page title, description, canonical link, social preview and Google data for the current page */
function headTag(sel, tag, attrs){
  var el = document.querySelector(sel);
  if(!el){ el = document.createElement(tag); Object.keys(attrs).forEach(function(k){ el.setAttribute(k, attrs[k]); }); document.head.appendChild(el); }
  return el;
}
function applySEO(m){
  if(!m){ return; }
  document.title = m.title;
  headTag('meta[name="description"]', 'meta', { name: 'description' }).setAttribute('content', m.description);
  headTag('link[rel="canonical"]', 'link', { rel: 'canonical' }).setAttribute('href', m.canonical);
  headTag('meta[name="robots"]', 'meta', { name: 'robots' }).setAttribute('content', m.robots);
  var og = { 'og:title': m.title, 'og:description': m.description, 'og:url': m.canonical, 'og:image': m.image, 'og:type': m.ogType };
  Object.keys(og).forEach(function(k){ headTag('meta[property="' + k + '"]', 'meta', { property: k }).setAttribute('content', og[k]); });
  headTag('meta[name="twitter:card"]', 'meta', { name: 'twitter:card' }).setAttribute('content', 'summary_large_image');
  headTag('script#ld-json', 'script', { type: 'application/ld+json', id: 'ld-json' }).textContent = JSON.stringify(m.jsonld);
}

function route(){
  stopHero();
  if(currentPage === 'shop'){ shopScroll = window.scrollY; }
  if(/^#\//.test(location.hash)){ history.replaceState(null, '', toPath(location.hash)); }   // old #/ links
  var parts = location.pathname.replace(/\/index\.html$/, '').split('/').filter(Boolean);
  var params = new URLSearchParams(location.search);
  var page = parts[0] || 'home', url = currentUrl(), keepScroll = false, pageBefore = currentPage, meta = null;
  if(page === 'shop'){
    var cat = catFromSlug(parts[1] || '');
    var sub = (cat !== 'all' && parts[2]) ? subFromSlug(cat, parts[2]) : '';
    var keep = (pageBefore === 'product' && url === lastShopUrl);
    renderShop(cat, params, keep, sub);
    lastShopUrl = url;
    updateChrome('shop', cat);
    meta = params.get('q') ? SEO.plain('Search results | Radhe Radhe', '/shop/', true) : SEO.shop(cat, S.sub, listFor(cat, S.sub));
    if(keep){ window.scrollTo({ top: shopScroll, left: 0, behavior: 'instant' }); keepScroll = true; }
  } else if(page === 'product'){
    var p = PRODUCT_BY_SLUG[parts[1] || ''] || byId(decodeURIComponent(parts[1] || ''));
    renderProduct(p);
    updateChrome('product', p ? p.category : '');
    meta = p ? SEO.product(p) : SEO.plain('Item not found | Radhe Radhe', '/shop/', true);
  } else if(page === 'wishlist'){
    currentPage = 'wishlist'; renderWishlist(); updateChrome('wishlist');
    meta = SEO.plain('Wishlist | Radhe Radhe', '/wishlist/', true);
  } else if(page === 'orders'){
    currentPage = 'orders'; renderOrders(); updateChrome('orders');
    meta = SEO.plain('My orders | Radhe Radhe', '/orders/', true);
  } else {
    var contact = location.hash === '#contact';
    renderHome(); updateChrome(contact ? 'contact' : 'home');
    meta = parts.length ? SEO.plain('Radhe Radhe Fashion & Lifestyle', '/', true) : SEO.home();
    if(contact){
      setTimeout(function(){ var c = $('#contact'); if(c){ c.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }); } }, 60);
      keepScroll = true;
    }
  }
  applySEO(meta);
  fixLinks(document);
  lastUrl = url;
  prevPage = pageBefore;
  if(!keepScroll){ window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }
}

/* ================================================================
   9. PAGES
================================================================ */
function secHead(title, linkText, href, sub){
  return '<div class="sec-head"><div><h2>' + title + '</h2>' + (sub ? '<p>' + sub + '</p>' : '') + '</div>' + (linkText ? '<a class="link" href="' + href + '">' + linkText + '</a>' : '') + '</div>';
}
function card(p){
  var c = CATS[p.category], off = offPct(p), on = isFav(p.id);
  var tag = !p.inStock ? '<span class="tag gray">Sold out</span>' : (p.badge ? '<span class="tag">' + esc(p.badge) + '</span>' : (p.isNew ? '<span class="tag">New</span>' : (off >= 10 ? '<span class="tag sale">Sale</span>' : '')));
  var href = '#/product/' + encodeURIComponent(p.id);
  var needs = p.sizes.length || p.colors.length;
  var alt = p.images[1] ? '<img class="alt" src="' + esc(asset(p.images[1])) + '" alt="" loading="lazy" decoding="async">' : '';
  return '<article class="pcard' + (p.inStock ? '' : ' sold') + '" style="--tint:' + c.tint + '">' +
    '<a class="pimg" href="' + href + '" aria-label="' + esc(p.name) + '">' + media(p.images[0], p.name, p.category) + alt + tag + '</a>' +
    '<button class="heart' + (on ? ' on' : '') + '" data-act="fav" data-id="' + esc(p.id) + '" aria-pressed="' + on + '" aria-label="Save ' + esc(p.name) + ' to wishlist">' + ic('heart', 18) + '</button>' +
    '<div class="pinfo"><a href="' + href + '"><h3>' + esc(p.name) + '</h3></a>' +
      (p.sub ? '<div class="meta">' + esc(p.sub) + '</div>' : '') +
      (p.colors.length ? '<div class="cdots" title="' + esc(p.colors.join(', ')) + '">' + p.colors.slice(0, 4).map(function(c){ return swatch(c, true); }).join('') + (p.colors.length > 4 ? '<span>+' + (p.colors.length - 4) + '</span>' : '') + '</div>' : '') +
      (p.rating ? '<span class="rate">' + ic('star', 12) + p.rating.toFixed(1) + '</span>' : '') +
      '<div class="price"><b>' + fmt(p.price) + '</b>' + (p.mrp ? '<s>' + fmt(p.mrp) + '</s><i>' + off + '% off</i>' : '') + '</div>' +
      '<button class="card-add" data-act="qadd" data-id="' + esc(p.id) + '"' + (p.inStock ? '' : ' disabled') + '>' + (!p.inStock ? 'Sold out' : (needs ? 'Select options' : 'Add to cart')) + '</button>' +
    '</div></article>';
}

/* ---------- home ---------- */
/* Hero images: put 11, 12, 13 in the same folder as index.html.
   .jpg  = fills the whole hero card.
   .png  = shows on the right side of the card with no frame (transparent PNG blends in).
   Set textless:true if your image already has the text written on it. */
var HERO = [
  { n: 11, tone: 'mint',  kicker: 'Trending fashion store', title: 'Radhe Radhe', sub: 'Fashion & Lifestyle', text: 'A carefully selected collection of fashion for women, girls, boys and kids, all under one roof.', cta: ['Shop now', '#/shop/all'], cta2: ['Chat on WhatsApp', 'wa'] },
  { n: 12, tone: 'lilac', title: 'Sarees and lehengas', sub: 'Elegance draped in tradition', text: 'Bridal grace and festive charm, from everyday cotton to heavy silk.', cta: ['Shop sarees', '#/shop/saree'], cta2: ['See lehengas', '#/shop/lehenga'] },
  { n: 13, tone: 'sky',   title: "Men's wear and blazers", sub: 'Smart looks for every occasion', text: 'Sharp, tailored and comfortable, for the office, weddings and everything between.', cta: ["Shop men's wear", '#/shop/boys'], cta2: ['See blazers', '#/shop/suit'] }
];
function mixCats(list, n){
  var by = {}, out = [], i = 0, added = true;
  list.forEach(function(p){ (by[p.category] = by[p.category] || []).push(p); });
  while(out.length < n && added){
    added = false;
    CAT_KEYS.forEach(function(k){ if(by[k] && by[k][i] && out.length < n){ out.push(by[k][i]); added = true; } });
    i++;
  }
  return out;
}
function renderHome(){
  document.title = 'Radhe Radhe | Fashion & Lifestyle';
  var trending = PRODUCTS.filter(function(p){ return p.featured; });
  if(trending.length < 4){ trending = PRODUCTS.slice(); }
  trending = mixCats(trending, 6);
  var ids = trending.map(function(p){ return p.id; });
  var fresh = PRODUCTS.filter(function(p){ return p.isNew && ids.indexOf(p.id) < 0; });
  if(fresh.length < 6){ fresh = PRODUCTS.filter(function(p){ return ids.indexOf(p.id) < 0; }).reverse(); }
  fresh = mixCats(fresh, 12);
  var code = Object.keys(RULES.coupons)[0], cp = code ? RULES.coupons[code] : null;

  var slides = HERO.map(function(s, i){
    var H = i === 0 ? 'h1' : 'h2';
    var b2 = s.cta2[1] === 'wa'
      ? '<a class="btn btn-glow" href="' + waLink('Hi Radhe Radhe, I want to know more about your collection.') + '" target="_blank" rel="noopener">' + icWA(16) + ' ' + s.cta2[0] + '</a>'
      : '<a class="btn btn-glow" href="' + s.cta2[1] + '">' + s.cta2[0] + '</a>';
    var alts = [asset(s.n + '.png'), asset(s.n + '.webp'), asset(s.n + '.jpeg')].join(',');
    return '<div class="slide tone-' + s.tone + (s.textless ? ' textless' : '') + '" role="group" aria-label="Slide ' + (i + 1) + ' of ' + HERO.length + '">' +
      '<div class="slide-media"><img class="mi hero-img" src="' + asset(s.n + '.jpg') + '" data-alts="' + alts + '" alt=""' + (i === 0 ? '' : ' loading="lazy"') + ' decoding="async"></div>' +
      '<div class="slide-txt">' +
      (s.kicker ? '<span class="kicker">' + s.kicker + '</span>' : '') +
      '<' + H + '>' + s.title + '</' + H + '><p class="sub">' + s.sub + '</p><p class="desc">' + s.text + '</p>' +
      '<div class="cta"><a class="btn btn-dark" href="' + s.cta[1] + '">' + s.cta[0] + '</a>' + b2 + '</div></div>' +
      (s.textless ? '<a class="slide-hit" href="' + s.cta[1] + '" aria-label="' + esc(s.cta[0]) + '"></a>' : '') + '</div>';
  }).join('');
  var dots = HERO.map(function(s, i){ return '<button data-act="hero" data-i="' + i + '" aria-label="Go to slide ' + (i + 1) + '"' + (i === 0 ? ' class="on"' : '') + '></button>'; }).join('');

  var colls = CAT_KEYS.map(function(k){
    var n = PRODUCTS.filter(function(p){ return p.category === k; }).length;
    return '<a class="coll" href="#/shop/' + k + '" style="--tint:' + CATS[k].tint + '"><span class="coll-img">' + media(CATS[k].png, CATS[k].label, k) + '</span><b>' + esc(CATS[k].label) + '</b><small>' + (n ? n + (n === 1 ? ' style' : ' styles') : 'Coming soon') + '</small></a>';
  }).join('');

  app.innerHTML =
    '<section class="wrap hero-wrap" aria-label="Featured"><div class="hero" id="hero">' + slides + '</div><div class="dots">' + dots + '</div></section>' +
    (cp ? '<section class="wrap offer"><div class="offer-in"><span class="ico">' + ic('tag', 18) + '</span><p><b>Free delivery above ' + fmt(RULES.freeDeliveryAbove) + '</b>Use code <span class="code">' + code + '</span> for ' + cp.percent + '% off orders above ' + fmt(cp.minOrder) + '.</p><button class="btn btn-glow" data-act="copycode" data-code="' + code + '">Copy code</button></div></section>' : '') +
    '<section class="wrap sec" id="collections">' + secHead('Shop by collection', 'See all', '#/shop/all') + '<div class="coll-row">' + colls + '</div></section>' +
    (trending.length ? '<section class="wrap sec">' + secHead('Trending now', 'View all', '#/shop/all') + '<div class="hrow">' + trending.map(card).join('') + '</div></section>' : '') +
    (fresh.length ? '<section class="wrap sec">' + secHead('New arrivals', 'View all', '#/shop/all') + '<div class="pgrid cap8">' + fresh.map(card).join('') + '</div></section>' : '') +
    '<div class="rf-block" id="ref-slot"></div>';
  /* Why Choose Us, Store details, About, Contact: copied from your index.html */
  var tpl = document.getElementById('tpl-ref'), slot = document.getElementById('ref-slot');
  if(tpl && slot){ slot.appendChild(tpl.content.cloneNode(true)); }
  bindHero();
  bindReveal();
}
function bindReveal(){
  if(!('IntersectionObserver' in window) || reduceMotion){ return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in-view'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$('.why-box, .details-grid, .about-box, .contact-layout', app).forEach(function(el){ el.classList.add('reveal'); io.observe(el); });
}
function bindHero(){
  var h = $('#hero');
  if(!h){ return; }
  var dots = $$('.dots button');
  h.addEventListener('scroll', function(){
    var i = Math.round(h.scrollLeft / h.clientWidth);
    dots.forEach(function(d, j){ d.classList.toggle('on', i === j); });
  }, { passive: true });
  h.addEventListener('touchstart', function(){ heroPaused = true; }, { passive: true });
  h.addEventListener('touchend', function(){ setTimeout(function(){ heroPaused = false; }, 5000); }, { passive: true });
  h.addEventListener('mouseenter', function(){ heroPaused = true; });
  h.addEventListener('mouseleave', function(){ heroPaused = false; });
  if(reduceMotion){ return; }
  heroTimer = setInterval(function(){
    if(document.hidden || heroPaused){ return; }
    var n = h.children.length, i = (Math.round(h.scrollLeft / h.clientWidth) + 1) % n;
    h.scrollTo({ left: i * h.clientWidth, behavior: 'smooth' });
  }, 5500);
}
function stopHero(){ if(heroTimer){ clearInterval(heroTimer); heroTimer = null; } }

/* ---------- shop ---------- */
var SORTS = [['featured', 'Featured'], ['new', 'Newest'], ['low', 'Price: low to high'], ['high', 'Price: high to low'], ['off', 'Biggest discount']];
function searchProducts(q){
  var t = String(q || '').toLowerCase().split(/\s+/).filter(Boolean);
  if(!t.length){ return []; }
  return PRODUCTS.filter(function(p){
    var h = (p.name + ' ' + CATS[p.category].label + ' ' + CATS[p.category].name + ' ' + p.sub + ' ' + p.desc + ' ' + p.colors.join(' ')).toLowerCase();
    return t.every(function(w){ return h.indexOf(w) > -1; });
  });
}
function filtered(){
  var list = S.q ? searchProducts(S.q) : PRODUCTS.slice();
  if(S.cat !== 'all'){ list = list.filter(function(p){ return p.category === S.cat; }); }
  if(S.sub){ list = list.filter(function(p){ return p.sub === S.sub; }); }
  if(S.min !== '' && !isNaN(S.min)){ list = list.filter(function(p){ return p.price >= Number(S.min); }); }
  if(S.max !== '' && !isNaN(S.max)){ list = list.filter(function(p){ return p.price <= Number(S.max); }); }
  if(S.size){ list = list.filter(function(p){ return p.sizes.indexOf(S.size) > -1; }); }
  if(S.color){ list = list.filter(function(p){ return p.colors.indexOf(S.color) > -1; }); }
  if(S.sale){ list = list.filter(function(p){ return p.mrp > p.price; }); }
  var s = S.sort;
  list.sort(function(a, b){
    if(s === 'low'){ return a.price - b.price; }
    if(s === 'high'){ return b.price - a.price; }
    if(s === 'off'){ return offPct(b) - offPct(a); }
    if(s === 'new'){ return (b.isNew - a.isNew) || (b.order - a.order); }
    return (b.featured - a.featured) || (a.order - b.order);
  });
  return list;
}
function activeFilterCount(){
  return (S.min !== '' ? 1 : 0) + (S.max !== '' ? 1 : 0) + (S.size ? 1 : 0) + (S.color ? 1 : 0) + (S.sale ? 1 : 0) + (S.sort !== 'featured' ? 1 : 0);
}
function renderShop(cat, params, keep, sub){
  if(!keep){ S = { cat: cat, sub: sub || '', sort: S.sort, min: '', max: '', size: '', color: '', sale: false, q: (params && params.get('q')) || '', page: 1 }; }
  paintShop();
}
function paintShop(){
  var list = filtered(), c = CATS[S.cat];
  var title = S.q ? 'Results for “' + esc(S.q) + '”' : (S.sub ? esc(subHeading(S.cat, S.sub)) : (c ? esc(c.name) : 'All products'));
  document.title = (S.q ? 'Search: ' + S.q : (c ? c.name : 'Shop')) + ' | Radhe Radhe';
  var subs = S.cat !== 'all' ? uniq(PRODUCTS.filter(function(p){ return p.category === S.cat; }).map(function(p){ return p.sub; }).filter(Boolean)) : [];
  var n = activeFilterCount(), shown = list.slice(0, S.page * PAGE_SIZE);
  var chipsHTML = '<a class="chip' + (S.cat === 'all' ? ' on' : '') + '" href="#/shop/all">All</a>' + CAT_KEYS.map(function(k){ return '<a class="chip' + (S.cat === k ? ' on' : '') + '" href="#/shop/' + k + '">' + esc(CATS[k].label) + '</a>'; }).join('');
  var subHTML = subs.length > 1 ? '<div class="chips" style="padding-top:4px"><a class="chip sm' + (!S.sub ? ' on' : '') + '" href="#/shop/' + S.cat + '">All types</a>' + subs.map(function(s){ return '<a class="chip sm' + (S.sub === s ? ' on' : '') + '" href="#/shop/' + S.cat + '/' + slugify(s) + '">' + esc(s) + '</a>'; }).join('') + '</div>' : '';
  app.innerHTML = '<section class="wrap page">' +
    '<nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a>' + ic('right', 12) + '<span>Shop</span>' + (c ? ic('right', 12) + (S.sub ? '<a href="#/shop/' + S.cat + '">' + esc(c.label) + '</a>' + ic('right', 12) + '<span>' + esc(subHeading(S.cat, S.sub)) + '</span>' : '<span>' + esc(c.label) + '</span>') : '') + '</nav>' +
    '<div class="page-head"><h1>' + title + '</h1><p>' + (c ? esc(c.tagline) : 'Everything from Radhe Radhe, in one place.') + '</p></div>' +
    '<div class="chips">' + chipsHTML + '</div>' + subHTML +
    '<div class="toolbar"><span>' + list.length + (list.length === 1 ? ' item' : ' items') + '</span><button class="btn btn-glow" data-act="filter">' + ic('sliders', 16) + ' Filter & sort' + (n ? ' (' + n + ')' : '') + '</button></div>' +
    (shown.length ? '<div class="pgrid">' + shown.map(card).join('') + '</div>' :
      '<div class="empty"><div class="ico">' + ic('search', 26) + '</div><h3>Nothing found</h3><p>Try a different word, or clear the filters to see everything.</p><button class="btn btn-dark" data-act="fclear-page">Clear filters</button></div>') +
    (list.length > shown.length ? '<div class="more"><button class="btn btn-glow" data-act="more">Load more</button></div>' : '') +
    '</section>';
}
function allSizes(){
  var arr = [];
  PRODUCTS.filter(function(p){ return S.cat === 'all' || p.category === S.cat; }).forEach(function(p){ p.sizes.forEach(function(s){ if(arr.indexOf(s) < 0){ arr.push(s); } }); });
  return arr;
}
function allColors(){
  var arr = [];
  PRODUCTS.filter(function(p){ return S.cat === 'all' || p.category === S.cat; }).forEach(function(p){ p.colors.forEach(function(c){ if(arr.indexOf(c) < 0){ arr.push(c); } }); });
  return arr;
}
function renderFilter(){
  fdraft = { sort: S.sort, min: S.min, max: S.max, size: S.size, color: S.color, sale: S.sale };
  paintFilter();
}
function readFilterInputs(){
  var a = $('#f-min'), b = $('#f-max'), c = $('#f-sale');
  if(a){ fdraft.min = a.value.trim(); }
  if(b){ fdraft.max = b.value.trim(); }
  if(c){ fdraft.sale = c.checked; }
}
function paintFilter(){
  var sizes = allSizes(), colors = allColors();
  $('#ov-filter .panel').innerHTML =
    '<div class="p-head"><h2>Filter & sort</h2><button class="ibtn" data-act="close" aria-label="Close">' + ic('x') + '</button></div>' +
    '<div class="p-body">' +
      '<div class="f-sec"><h3>Sort by</h3><div class="chip-row">' + SORTS.map(function(s){ return '<button class="chip' + (fdraft.sort === s[0] ? ' on' : '') + '" data-act="fsort" data-v="' + s[0] + '">' + s[1] + '</button>'; }).join('') + '</div></div>' +
      '<div class="f-sec"><h3>Price range (₹)</h3><div class="f-price"><input id="f-min" type="number" inputmode="numeric" min="0" placeholder="Min" aria-label="Minimum price" value="' + esc(fdraft.min) + '"><input id="f-max" type="number" inputmode="numeric" min="0" placeholder="Max" aria-label="Maximum price" value="' + esc(fdraft.max) + '"></div></div>' +
      (sizes.length ? '<div class="f-sec"><h3>Size</h3><div class="chip-row">' + sizes.map(function(s){ return '<button class="chip' + (fdraft.size === s ? ' on' : '') + '" data-act="fsize" data-v="' + esc(s) + '">' + esc(s) + '</button>'; }).join('') + '</div></div>' : '') +
      (colors.length ? '<div class="f-sec"><h3>Colour</h3><div class="chip-row">' + colors.map(function(c){ return '<button class="chip' + (fdraft.color === c ? ' on' : '') + '" data-act="fcolor" data-v="' + esc(c) + '">' + swatch(c, true) + esc(c) + '</button>'; }).join('') + '</div></div>' : '') +
      '<div class="f-sec"><label class="switch"><span>Sale items only</span><input type="checkbox" id="f-sale"' + (fdraft.sale ? ' checked' : '') + '></label></div>' +
    '</div>' +
    '<div class="f-foot"><button class="btn btn-glow" data-act="fclear">Clear all</button><button class="btn btn-dark" data-act="fapply">Show results</button></div>';
}

/* ---------- product page ---------- */
function related(p){
  var same = PRODUCTS.filter(function(x){ return x.id !== p.id && x.category === p.category; });
  var other = PRODUCTS.filter(function(x){ return x.id !== p.id && x.category !== p.category; });
  return same.concat(other).slice(0, 6);
}
function renderProduct(p){
  if(!p){
    document.title = 'Not found | Radhe Radhe';
    app.innerHTML = '<section class="wrap page"><div class="empty"><div class="ico">' + ic('search', 26) + '</div><h3>We could not find that item</h3><p>It may have been removed or sold out.</p><a class="btn btn-dark" href="#/shop/all">Browse all products</a></div></section>';
    return;
  }
  pdp = { id: p.id, v: '', size: '', color: '', qty: 1, idx: 0 };
  var c = CATS[p.category], off = offPct(p), on = isFav(p.id);
  document.title = p.name + ' | Radhe Radhe';
  var rv = recent.filter(function(x){ return x !== p.id; }).map(byId).filter(Boolean).slice(0, 6);
  pushRecent(p.id);
  var slides = p.images.map(function(src, i){ return '<div class="gslide" data-act="zoom" data-i="' + i + '">' + media(src, p.name + ' photo ' + (i + 1), p.category, i === 0) + '</div>'; }).join('');
  var thumbs = p.images.length > 1 ? '<div class="thumbs">' + p.images.map(function(src, i){ return '<button class="thumb' + (i === 0 ? ' on' : '') + '" data-act="thumb" data-i="' + i + '" aria-label="Photo ' + (i + 1) + '">' + media(src, '', p.category) + '</button>'; }).join('') + '</div>' : '';
  var sizes = p.sizes.length ? '<div class="lbl"><span>Select size</span><small>' + p.sizes.length + ' available</small></div><div class="sizes" id="sizes" role="radiogroup" aria-label="Size">' + p.sizes.map(function(s){ return '<button class="size" role="radio" aria-checked="false" data-act="size" data-v="' + esc(s) + '">' + esc(s) + '</button>'; }).join('') + '</div>' : '';
  var colors = p.colors.length ? '<div class="lbl"><span>Select colour</span><small id="clr-name"></small></div><div class="sizes" id="colors" role="radiogroup" aria-label="Colour">' + p.colors.map(function(s){ return '<button class="size clr" role="radio" aria-checked="false" data-act="color" data-v="' + esc(s) + '">' + swatch(s) + esc(s) + '</button>'; }).join('') + '</div>' : '';
  var spec = '<dt>Collection</dt><dd>' + esc(c.label) + '</dd>' + (p.sub ? '<dt>Type</dt><dd>' + esc(p.sub) + '</dd>' : '') + (p.sizes.length ? '<dt>Sizes</dt><dd>' + esc(p.sizes.join(', ')) + '</dd>' : '') + (p.colors.length ? '<dt>Colours</dt><dd>' + esc(p.colors.join(', ')) + '</dd>' : '') + '<dt>Payment</dt><dd>Cash on delivery</dd>';
  var rel = related(p);
  var actions = p.inStock
    ? '<button class="btn btn-dark" data-act="add">' + ic('bag', 18) + ' Add to cart</button><button class="btn btn-glow" data-act="buy">Buy now</button>'
    : '<button class="btn btn-glow" disabled>Sold out</button>';
  app.innerHTML = '<section class="wrap page">' +
    '<nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Home</a>' + ic('right', 12) + '<a href="#/shop/all">Shop</a>' + ic('right', 12) + '<a href="#/shop/' + p.category + '">' + esc(c.label) + '</a>' + ic('right', 12) + '<span>' + esc(p.name) + '</span></nav>' +
    '<div class="pdp" style="--tint:' + c.tint + '">' +
      '<div class="gal"><div class="gal-main"><div class="gal-track" id="gal-track">' + slides + '</div>' +
        (p.images.length > 1 ? '<button class="garrow l" data-act="gal" data-d="-1" aria-label="Previous photo">' + ic('left', 18) + '</button><button class="garrow r" data-act="gal" data-d="1" aria-label="Next photo">' + ic('right', 18) + '</button><span class="gcount" id="gcount">1 / ' + p.images.length + '</span>' : '') +
        '</div>' + thumbs + '</div>' +
      '<div class="pdp-info">' +
        (!p.inStock ? '<span class="tag gray" style="position:static">Sold out</span>' : (p.isNew ? '<span class="kicker">New arrival</span>' : '')) +
        '<h1>' + esc(p.name) + '</h1>' +
        (p.rating ? '<div class="rate" style="margin-top:8px">' + ic('star', 14) + p.rating.toFixed(1) + '</div>' : '') +
        '<div class="price"><b>' + fmt(p.price) + '</b>' + (p.mrp ? '<s>' + fmt(p.mrp) + '</s><i>' + off + '% off</i>' : '') + '</div><p class="tax">Inclusive of all taxes</p>' +
        sizes + colors +
        '<div class="lbl"><span>Quantity</span></div><div class="qty"><button data-act="pqty" data-d="-1" aria-label="Decrease quantity">' + ic('minus', 16) + '</button><output id="pdp-qty" aria-live="polite">1</output><button data-act="pqty" data-d="1" aria-label="Increase quantity">' + ic('plus', 16) + '</button></div>' +
        '<div class="pdp-actions">' + actions + '</div>' +
        '<div class="pdp-tools"><button class="btn btn-glow' + (on ? ' on' : '') + '" id="pdp-fav" data-act="fav" data-id="' + esc(p.id) + '">' + ic('heart', 18) + (on ? ' Saved' : ' Save') + '</button><button class="btn btn-glow" data-act="share">' + ic('share', 16) + ' Share</button><a class="btn btn-glow" href="' + waLink('Hi Radhe Radhe, I am interested in "' + p.name + '" (' + location.href + ')') + '" target="_blank" rel="noopener">' + icWA(16) + ' Ask on WhatsApp</a></div>' +
        '<div class="perks"><div class="perk"><span class="ico">' + ic('wallet', 20) + '</span><span><b>Cash on delivery</b><br>Pay when your order arrives</span></div><div class="perk"><span class="ico">' + ic('shield', 20) + '</span><span><b>100% genuine</b><br>Original and trusted quality</span></div></div>' +
        (p.desc ? '<div class="acc"><h3>About this item</h3><p>' + esc(p.desc) + '</p></div>' : '') +
        '<div class="acc"><h3>Details</h3><dl class="spec">' + spec + '</dl></div>' +
      '</div></div>' +
    (rel.length ? '<div class="sec">' + secHead('You may also like', '', '') + '<div class="pgrid">' + rel.map(card).join('') + '</div></div>' : '') +
    (rv.length ? '<div class="sec">' + secHead('Recently viewed', '', '') + '<div class="pgrid">' + rv.map(card).join('') + '</div></div>' : '') +
    '</section>' +
    '<div class="pdp-bar">' + actions + '</div>';
  var tr = $('#gal-track');
  if(tr){ tr.addEventListener('scroll', function(){ setGal(Math.round(tr.scrollLeft / tr.clientWidth), false); }, { passive: true }); }
}
function setGal(i, scroll){
  var p = byId(pdp.id);
  if(!p){ return; }
  i = Math.max(0, Math.min(p.images.length - 1, i));
  pdp.idx = i;
  var cnt = $('#gcount');
  if(cnt){ cnt.textContent = (i + 1) + ' / ' + p.images.length; }
  $$('.thumb').forEach(function(t, j){ t.classList.toggle('on', j === i); });
  if(scroll){ var tr = $('#gal-track'); if(tr){ tr.scrollTo({ left: i * tr.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' }); } }
}
function pdpAdd(buy){
  var p = byId(pdp.id);
  if(!p || !p.inStock){ return; }
  var missing = (p.sizes.length && !pdp.size) ? 'sizes' : ((p.colors.length && !pdp.color) ? 'colors' : '');
  if(missing){
    var box = document.getElementById(missing);
    if(box){ box.classList.remove('need'); void box.offsetWidth; box.classList.add('need'); box.scrollIntoView({ block: 'center', behavior: reduceMotion ? 'auto' : 'smooth' }); }
    toast(missing === 'sizes' ? 'Please select a size' : 'Please select a colour');
    return;
  }
  var v = [pdp.size, pdp.color].filter(Boolean).join(' / ');
  if(buy){ startCheckout([{ id: p.id, v: v, qty: pdp.qty }], false); return; }
  addToCart(p.id, v, pdp.qty);
  toast('Added to cart');
}

/* ---------- wishlist ---------- */
function renderWishlist(){
  document.title = 'Wishlist | Radhe Radhe';
  var items = fav.map(byId).filter(Boolean);
  app.innerHTML = '<section class="wrap page"><div class="page-head"><h1>Your wishlist</h1><p>' + (items.length ? items.length + (items.length === 1 ? ' saved item' : ' saved items') : 'Save what you love and find it here later.') + '</p></div><div style="height:16px"></div>' +
    (items.length ? '<div class="pgrid">' + items.map(card).join('') + '</div>' :
      '<div class="empty"><div class="ico">' + ic('heart', 26) + '</div><h3>Nothing saved yet</h3><p>Tap the heart on any product to save it here.</p><a class="btn btn-dark" href="#/shop/all">Browse products</a></div>') + '</section>';
}

/* ---------- orders ---------- */
function renderOrders(){
  document.title = 'My orders | Radhe Radhe';
  var html = orders.map(function(o, idx){
    var d = new Date(o.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    var thumbs = o.items.slice(0, 5).map(function(it){ var p = byId(it.id); var cat = p ? p.category : 'girls'; return '<span class="th" style="--tint:' + CATS[cat].tint + '">' + media(it.img || (p ? p.images[0] : ''), it.name, cat) + '</span>'; }).join('');
    var lines = o.items.map(function(it){ return esc(it.name) + (it.v ? ' (' + esc(it.v) + ')' : '') + ' × ' + it.qty; }).join('<br>');
    return '<article class="ord"><div class="ord-top"><div><b>Order ' + esc(o.id) + '</b><small>' + d + '</small></div><span class="status">Sent on WhatsApp</span></div>' +
      '<div class="ord-items">' + thumbs + '</div><p class="ord-lines">' + lines + '</p>' +
      '<div class="ord-foot"><b>' + fmt(o.total) + ' <small style="font-weight:400;color:var(--muted)">Cash on delivery</small></b><span style="display:flex;gap:8px;flex-wrap:wrap">' +
      '<a class="btn btn-glow" href="' + waLink('Hi Radhe Radhe, I want an update on my order ' + o.id) + '" target="_blank" rel="noopener">' + icWA(15) + ' Order status</a>' +
      '<button class="btn btn-dark" data-act="reorder" data-i="' + idx + '">' + ic('redo', 15) + ' Reorder</button></span></div></article>';
  }).join('');
  app.innerHTML = '<section class="wrap page"><div class="page-head"><h1>My orders</h1><p>Orders placed from this device. Status updates come to you on WhatsApp.</p></div><div style="height:16px"></div>' +
    (orders.length ? '<div style="max-width:720px">' + html + '</div>' :
      '<div class="empty"><div class="ico">' + ic('box', 26) + '</div><h3>No orders yet</h3><p>Once you place an order it will show up here.</p><a class="btn btn-dark" href="#/shop/all">Start shopping</a></div>') + '</section>';
}

/* ================================================================
   10. OVERLAY CONTENT
================================================================ */
/* menu */
function renderMenu(){
  var cats = CAT_KEYS.map(function(k){ return '<a href="#/shop/' + k + '"><span class="th">' + media(CATS[k].png, CATS[k].label, k) + '</span>' + esc(CATS[k].label) + '</a>'; }).join('');
  $('#ov-menu .ov-body').innerHTML =
    (canInstall() ? '<div class="menu-list"><button data-act="install">' + ic('download', 20) + 'Install app</button></div>' : '') +
    '<div class="menu-list"><a href="#/">' + ic('home', 20) + 'Home</a><a href="#/shop/all">' + ic('grid', 20) + 'All products</a><a href="#/wishlist">' + ic('heart', 20) + 'Wishlist</a><a href="#/orders">' + ic('box', 20) + 'My orders</a></div>' +
    '<p class="menu-h">Collections</p><div class="menu-list menu-coll">' + cats + '</div>' +
    '<p class="menu-h">Contact</p><div class="menu-list"><a href="#/contact">' + ic('pin', 20) + 'Visit our store</a><a href="tel:' + SHOP.phones[0] + '">' + ic('phone', 20) + SHOP.phones[0] + '</a><a href="' + waLink('Hi Radhe Radhe') + '" target="_blank" rel="noopener">' + icWA(20) + 'WhatsApp</a><a href="https://instagram.com/' + esc(SHOP.instagram) + '" target="_blank" rel="noopener">' + icIG(20) + '@' + esc(SHOP.instagram) + '</a></div>';
}

/* search */
function renderSearch(){
  var el = $('#ov-search');
  el.innerHTML = '<div class="s-top"><form class="s-box" id="s-form" role="search">' + ic('search', 18) + '<input id="s-input" data-autofocus type="search" placeholder="Search sarees, kurtis, blazers…" autocomplete="off" enterkeyhint="search" aria-label="Search products"></form><button class="ibtn ring" data-act="close" aria-label="Close search">' + ic('x') + '</button></div><div class="s-body"><div class="s-in" id="s-results"></div></div>';
  paintSearch('');
}
function paintSearch(q){
  var box = $('#s-results');
  if(!box){ return; }
  q = q.trim();
  if(!q){
    box.innerHTML = (recentQ.length ? '<h3>Recent searches</h3><div class="chip-row">' + recentQ.map(function(r){ return '<button class="chip sm" data-act="sfill" data-q="' + esc(r) + '">' + esc(r) + '</button>'; }).join('') + '</div>' : '') +
      '<h3>Browse collections</h3><div class="chip-row">' + CAT_KEYS.map(function(k){ return '<a class="chip sm" href="#/shop/' + k + '">' + esc(CATS[k].label) + '</a>'; }).join('') + '</div>';
    return;
  }
  var res = searchProducts(q);
  if(!res.length){ box.innerHTML = '<div class="empty" style="padding:30px 0"><h3>No results for “' + esc(q) + '”</h3><p>Check the spelling or try a broader word like “saree” or “kurta”.</p></div>'; return; }
  box.innerHTML = '<h3>' + res.length + (res.length === 1 ? ' result' : ' results') + '</h3>' + res.slice(0, 8).map(function(p){
    return '<a class="s-row" href="#/product/' + encodeURIComponent(p.id) + '" data-sq="' + esc(q) + '"><span class="th" style="--tint:' + CATS[p.category].tint + '">' + media(p.images[0], p.name, p.category) + '</span><span><b>' + esc(p.name) + '</b><small>' + esc(CATS[p.category].label) + ' · ' + fmt(p.price) + '</small></span></a>';
  }).join('') + (res.length > 8 ? '<div style="text-align:center;margin-top:14px"><button class="btn btn-glow" data-act="sall" data-q="' + esc(q) + '">See all ' + res.length + ' results</button></div>' : '');
}
function rememberQuery(q){
  q = q.trim();
  if(!q){ return; }
  recentQ = [q].concat(recentQ.filter(function(x){ return x.toLowerCase() !== q.toLowerCase(); })).slice(0, 5);
  store.set('rrs_rq', recentQ);
}

/* cart */
function renderCart(){
  var body = $('#ov-cart .ov-body'), foot = $('#ov-cart .ov-foot');
  var items = cartItems();
  if(!items.length){
    body.innerHTML = '<div class="empty"><div class="ico">' + ic('bag', 26) + '</div><h3>Your cart is empty</h3><p>Add something you love and it will show up here.</p><button class="btn btn-dark" data-act="go" data-href="#/shop/all">Start shopping</button></div>';
    foot.innerHTML = ''; foot.style.display = 'none';
    return;
  }
  foot.style.display = '';
  var t = calc(items), rem = Math.max(0, RULES.freeDeliveryAbove - t.after);
  var pct = Math.min(100, Math.round(t.after / RULES.freeDeliveryAbove * 100));
  var lines = items.map(function(i){
    var k = esc(ckey(i.id, i.v));
    return '<div class="citem" style="--tint:' + CATS[i.p.category].tint + '"><a class="th" href="#/product/' + encodeURIComponent(i.id) + '">' + media(i.p.images[0], i.p.name, i.p.category) + '</a><div>' +
      '<h4>' + esc(i.p.name) + '</h4><p class="sm">' + (i.v ? esc(i.v) + ' · ' : '') + fmt(i.p.price) + ' each</p>' +
      '<div class="crow2"><div class="qty"><button data-act="cqty" data-k="' + k + '" data-d="-1" aria-label="Decrease quantity">' + ic('minus', 14) + '</button><output>' + i.qty + '</output><button data-act="cqty" data-k="' + k + '" data-d="1" aria-label="Increase quantity">' + ic('plus', 14) + '</button></div><b>' + fmt(i.p.price * i.qty) + '</b></div>' +
      '<button class="rm" data-act="crm" data-k="' + k + '">' + ic('trash', 14) + ' Remove</button></div></div>';
  }).join('');
  var cpn = coupon && RULES.coupons[coupon];
  var couponHTML = (cpn && t.discount)
    ? '<div class="applied"><span>' + ic('check', 15) + ' <b>' + esc(coupon) + '</b> applied. You save ' + fmt(t.discount) + '</span><button class="link" data-act="cremove">Remove</button></div>'
    : '<div class="coupon"><input id="cp-in" placeholder="Coupon code" aria-label="Coupon code" value="' + esc(coupon) + '" autocomplete="off"><button class="btn btn-glow" data-act="capply">Apply</button></div>' + (t.note ? '<p class="cmsg warn">' + esc(t.note) + '</p>' : '<p class="cmsg" id="cp-msg">Have a code? Enter it above.</p>');
  body.innerHTML = '<div class="ship">' + (rem > 0 ? 'Add <b>' + fmt(rem) + '</b> more for free delivery' : '<b>You get free delivery</b> on this order') + '<div class="bar"><i style="width:' + pct + '%"></i></div></div>' + lines + couponHTML;
  foot.innerHTML = '<div class="sum"><div><span>Subtotal</span><span>' + fmt(t.subtotal) + '</span></div>' + (t.discount ? '<div class="disc"><span>Coupon ' + esc(coupon) + '</span><span>−' + fmt(t.discount) + '</span></div>' : '') + '<div><span>Delivery</span><span>' + (t.delivery ? fmt(t.delivery) : 'Free') + '</span></div><div class="tot"><span>Total</span><span>' + fmt(t.total) + '</span></div></div>' +
    '<button class="btn btn-dark btn-block" style="margin-top:14px;height:50px" data-act="checkout">Checkout</button><p class="cmsg" style="text-align:center;margin-top:8px">Cash on delivery only for now</p>';
}

/* account + Google login */
function loadGoogle(cb){
  if(!GOOGLE_CLIENT_ID){ return; }
  if(window.google && window.google.accounts){ cb(); return; }
  var s = document.createElement('script');
  s.src = 'https://accounts.google.com/gsi/client'; s.async = true; s.defer = true; s.onload = cb;
  document.head.appendChild(s);
}
function renderGoogleButton(el){
  if(!GOOGLE_CLIENT_ID || !el){ return; }
  loadGoogle(function(){
    try{
      window.google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: onGoogle });
      window.google.accounts.id.renderButton(el, { theme: 'outline', size: 'large', shape: 'pill', text: 'continue_with', width: 280 });
    }catch(e){}
  });
}
function onGoogle(res){
  try{
    var b = res.credential.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    var j = JSON.parse(decodeURIComponent(atob(b).split('').map(function(c){ return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join('')));
    user = { name: j.name || 'Customer', email: j.email || '', picture: j.picture || '' };
    store.set('rrs_user', user);
    updateAccountBtn();
    toast('Signed in as ' + user.name.split(' ')[0]);
    if(activeOv === 'checkout'){ renderCheckout(); }
    else if(activeOv === 'account'){ renderAccount(); }
  }catch(e){ toast('Sign-in failed. Please try again.'); }
}
function renderAccount(){
  var P = $('#ov-account .panel');
  var head = '<div class="p-head"><h2>My account</h2><button class="ibtn" data-act="close" aria-label="Close">' + ic('x') + '</button></div>';
  var top;
  if(user){
    top = '<div class="acct-user">' + (user.picture ? '<img src="' + esc(user.picture) + '" alt="" referrerpolicy="no-referrer">' : '<span class="av-ph">' + ic('user', 24) + '</span>') + '<div><b>' + esc(user.name) + '</b><small>' + esc(user.email) + '</small></div></div>';
  } else if(GOOGLE_CLIENT_ID){
    top = '<div class="gate" style="padding:6px 0 14px"><h3>Sign in</h3><p>Sign in with Google to check out faster.</p><div class="gbtn" id="g-acct"></div></div>';
  } else {
    top = '<div class="gate" style="padding:6px 0 10px"><div class="ico">' + ic('user', 30) + '</div><h3>Shopping as guest</h3><p>Your cart, wishlist and orders are saved on this device. No sign-in needed.</p></div>';
  }
  P.innerHTML = head + '<div class="p-body">' + top + '<div class="menu-list">' + (canInstall() ? '<button data-act="install">' + ic('download', 20) + 'Install app</button>' : '') + '<button data-act="go" data-href="#/orders">' + ic('box', 20) + 'My orders</button><button data-act="go" data-href="#/wishlist">' + ic('heart', 20) + 'Wishlist</button><a href="' + waLink('Hi Radhe Radhe') + '" target="_blank" rel="noopener">' + icWA(20) + 'Chat with us</a>' + (user ? '<button data-act="signout">' + ic('logout', 20) + 'Sign out</button>' : '') + '</div></div>';
  if(!user){ renderGoogleButton($('#g-acct')); }
}

/* zoom */
function renderZoom(){
  var p = byId(pdp.id);
  if(!p){ return; }
  var el = $('#ov-zoom');
  el.innerHTML = '<button class="zx" data-act="close" aria-label="Close photo">' + ic('x', 22) + '</button>' +
    (p.images.length > 1 ? '<button class="garrow l" data-act="zgo" data-d="-1" aria-label="Previous photo">' + ic('left', 18) + '</button><button class="garrow r" data-act="zgo" data-d="1" aria-label="Next photo">' + ic('right', 18) + '</button>' : '') +
    '<div class="zimg" style="--tint:transparent">' + '<img id="z-img" src="' + esc(asset(p.images[pdp.idx])) + '" alt="' + esc(p.name) + '"></div>';
}

/* ================================================================
   11. CHECKOUT
================================================================ */
function startCheckout(items, fromCart){
  if(!items.length){ return; }
  ck = { items: items.map(function(i){ return { id: i.id, v: i.v || '', qty: i.qty }; }), fromCart: fromCart, step: 'form', order: null };
  openOv('checkout');
}
function ckHead(title){ return '<div class="p-head"><h2>' + title + '</h2><button class="ibtn" data-act="close" aria-label="Close checkout">' + ic('x') + '</button></div>'; }
function renderCheckout(){
  var P = $('#ov-checkout .panel');
  if(!ck){ return; }
  if(ck.step === 'done'){ renderDone(P); return; }
  if(LOGIN_REQUIRED && !user){
    P.innerHTML = ckHead('Sign in to continue') + '<div class="p-body"><div class="gate"><div class="ico">' + icG(30) + '</div><h3>One quick step</h3><p>Sign in with Google to place your order. Browsing and your cart never need a login.</p><div class="gbtn" id="g-gate"></div></div></div>';
    renderGoogleButton($('#g-gate'));
    return;
  }
  var saved = store.get('rrs_addr', {});
  var val = function(k, d){ return esc(saved[k] || d || ''); };
  var items = ck.items.map(function(i){ return { id: i.id, v: i.v, qty: i.qty, p: byId(i.id) }; }).filter(function(i){ return i.p; });
  var t = calc(items);
  var lines = items.map(function(i){ return '<div class="oline" style="--tint:' + CATS[i.p.category].tint + '"><span class="th">' + media(i.p.images[0], i.p.name, i.p.category) + '</span><span class="n"><b>' + esc(i.p.name) + '</b><small>' + (i.v ? esc(i.v) + ' · ' : '') + 'Qty ' + i.qty + '</small></span><b>' + fmt(i.p.price * i.qty) + '</b></div>'; }).join('');
  var fld = function(id, label, attrs, err, tag){ return '<div class="field"><label for="ck-' + id + '">' + label + '</label>' + (tag === 'ta' ? '<textarea id="ck-' + id + '" name="' + id + '" rows="3" ' + attrs + '>' + '</textarea>' : '<input id="ck-' + id + '" name="' + id + '" ' + attrs + '>') + '<small class="err">' + err + '</small></div>'; };
  P.innerHTML = ckHead('Checkout') + '<div class="p-body"><div class="ck">' +
    '<form id="ck-form" novalidate><h3 style="margin-bottom:14px;font-size:16px">Delivery details</h3>' +
      (user ? '<p class="cmsg" style="margin:-6px 0 12px">Signed in as ' + esc(user.email || user.name) + '</p>' : '') +
      fld('name', 'Full name', 'autocomplete="name" value="' + val('name', user && user.name) + '"', 'Please enter your full name') +
      fld('phone', 'Mobile number', 'type="tel" inputmode="numeric" maxlength="10" autocomplete="tel-national" value="' + val('phone') + '"', 'Enter a valid 10-digit mobile number') +
      fld('address', 'Address <em>(house no., street, area)</em>', 'autocomplete="street-address"', 'Please enter your full address', 'ta') +
      '<div class="row2">' + fld('landmark', 'Landmark <em>(optional)</em>', 'value="' + val('landmark') + '"', '') + fld('pincode', 'Pincode', 'inputmode="numeric" maxlength="6" autocomplete="postal-code" value="' + val('pincode') + '"', 'Enter a 6-digit pincode') + '</div>' +
      '<div class="row2">' + fld('city', 'City', 'autocomplete="address-level2" value="' + val('city', SHOP.defaultCity) + '"', 'Enter your city') + fld('state', 'State', 'autocomplete="address-level1" value="' + val('state', SHOP.defaultState) + '"', 'Enter your state') + '</div>' +
      fld('note', 'Order note <em>(optional)</em>', 'value=""', '') +
      '<div class="pay"><span class="ico">' + ic('wallet', 20) + '</span><span><b>Cash on delivery</b><small>Pay in cash when your order arrives</small></span></div>' +
      '<button class="btn btn-dark btn-block" style="height:52px" type="submit">' + icWA(18) + ' Place order · ' + fmt(t.total) + '</button>' +
      '<p class="cmsg" style="text-align:center;margin-top:10px">Your order details open in WhatsApp so we can confirm with you.</p></form>' +
    '<aside class="osum"><h3>Order summary</h3>' + lines +
      '<div class="sum" style="margin-top:10px;padding-top:10px;border-top:1px solid var(--line)"><div><span>Subtotal</span><span>' + fmt(t.subtotal) + '</span></div>' + (t.discount ? '<div class="disc"><span>Coupon ' + esc(coupon) + '</span><span>−' + fmt(t.discount) + '</span></div>' : '') + '<div><span>Delivery</span><span>' + (t.delivery ? fmt(t.delivery) : 'Free') + '</span></div><div class="tot"><span>Total</span><span>' + fmt(t.total) + '</span></div></div></aside>' +
    '</div></div>';
  var f = $('#ck-name'); if(f && !f.value){ f.setAttribute('data-autofocus', ''); }
}
function validateCheckout(form){
  var v = function(n){ return form.elements[n].value.trim(); };
  var rules = { name: v('name').length >= 2, phone: /^[6-9]\d{9}$/.test(v('phone')), address: v('address').length >= 8, pincode: /^\d{6}$/.test(v('pincode')), city: v('city').length >= 2, state: v('state').length >= 2 };
  var first = null;
  Object.keys(rules).forEach(function(k){
    var fl = form.elements[k].closest('.field');
    fl.classList.toggle('bad', !rules[k]);
    if(!rules[k] && !first){ first = form.elements[k]; }
  });
  if(first){ first.focus(); return false; }
  return true;
}
function newOrderId(){
  var d = new Date(), pad = function(n){ return String(n).padStart(2, '0'); };
  return 'RR' + String(d.getFullYear()).slice(2) + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + Math.floor(1000 + Math.random() * 9000);
}
function orderMessage(o){
  var m = '🛍️ *New Order — Radhe Radhe*\nOrder ID: *' + o.id + '*\n\n';
  o.items.forEach(function(it, i){ m += (i + 1) + '. ' + it.name + (it.v ? ' (' + it.v + ')' : '') + ' x' + it.qty + ' — ' + fmt(it.price * it.qty) + '\n'; });
  m += '\nSubtotal: ' + fmt(o.subtotal) + '\n';
  if(o.discount){ m += 'Coupon ' + o.coupon + ': -' + fmt(o.discount) + '\n'; }
  m += 'Delivery: ' + (o.delivery ? fmt(o.delivery) : 'Free') + '\n*Total: ' + fmt(o.total) + '*\n\n';
  m += '👤 Name: ' + o.customer.name + '\n📞 Phone: ' + o.customer.phone + '\n';
  if(o.customer.email){ m += '✉️ Email: ' + o.customer.email + '\n'; }
  m += '🏠 Address: ' + o.customer.address + '\n';
  if(o.customer.note){ m += '📝 Note: ' + o.customer.note + '\n'; }
  m += '\n💰 Payment: Cash on Delivery\n\n📦 Please confirm my order and share status updates here.';
  return m;
}
function placeOrder(form){
  var g = function(n){ return form.elements[n].value.trim(); };
  var items = ck.items.map(function(i){ return { id: i.id, v: i.v, qty: i.qty, p: byId(i.id) }; }).filter(function(i){ return i.p; });
  if(!items.length){ return; }
  var t = calc(items);
  var address = g('address') + (g('landmark') ? ', Near ' + g('landmark') : '') + ', ' + g('city') + ', ' + g('state') + ' - ' + g('pincode');
  var order = {
    id: newOrderId(), date: new Date().toISOString(),
    items: items.map(function(i){ return { id: i.id, name: i.p.name, v: i.v, qty: i.qty, price: i.p.price, img: i.p.images[0] }; }),
    subtotal: t.subtotal, discount: t.discount, coupon: t.discount ? coupon : '', delivery: t.delivery, total: t.total,
    customer: { name: g('name'), phone: g('phone'), email: user ? user.email : '', address: address, note: g('note') }
  };
  store.set('rrs_addr', { name: g('name'), phone: g('phone'), landmark: g('landmark'), pincode: g('pincode'), city: g('city'), state: g('state') });
  orders.unshift(order); orders = orders.slice(0, 30);
  store.set('rrs_orders', orders);
  if(ck.fromCart){ cart = []; saveCart(); }
  ck.step = 'done'; ck.order = order; ck.wa = waLink(orderMessage(order));
  renderCheckout();
  var w = null;
  try{ w = window.open(ck.wa, '_blank'); }catch(e){}
  if(!w){ toast('Tap “Open WhatsApp” to send your order'); }
}
function renderDone(P){
  P.innerHTML = ckHead('Order placed') + '<div class="p-body"><div class="done"><div class="tick">' + ic('check', 38) + '</div><h3>Thank you' + (ck.order.customer.name ? ', ' + esc(ck.order.customer.name.split(' ')[0]) : '') + '!</h3><p>Your order details are ready in WhatsApp. Send the message to confirm your order with us. You will pay <b>' + fmt(ck.order.total) + '</b> in cash on delivery.</p><span class="oid">' + esc(ck.order.id) + '</span>' +
    '<div class="acts"><a class="btn btn-wa" href="' + ck.wa + '" target="_blank" rel="noopener">' + icWA(18) + ' Open WhatsApp</a><button class="btn btn-glow" data-act="go" data-href="#/orders">View my orders</button><button class="btn btn-dark" data-act="go" data-href="#/shop/all">Continue shopping</button></div></div></div>';
}

/* ================================================================
   12. EVENTS
================================================================ */
/* images fade in when loaded; a missing image shows the emoji placeholder */
function imgLoaded(im){
  void im.offsetWidth;
  im.classList.add('ld');
  var ph = im.previousElementSibling;
  if(ph && ph.classList.contains('ph')){ ph.classList.add('done'); }
  if(im.classList.contains('hero-img')){
    var sl = im.closest('.slide');
    if(sl){ sl.classList.remove('is-jpg', 'is-png', 'no-img'); sl.classList.add(/\.png(\?|#|$)/i.test(im.currentSrc || im.src) ? 'is-png' : 'is-jpg'); }
  }
}
function imgFailed(im){
  var alts = im.getAttribute('data-alts');
  if(alts){
    var list = alts.split(',').filter(Boolean), nxt = list.shift();
    im.setAttribute('data-alts', list.join(','));
    if(nxt){ im.src = nxt; return; }
  }
  im.classList.add('broken');
  var ph = im.previousElementSibling;
  if(ph && ph.classList.contains('ph')){ ph.classList.add('err'); }
  var sl = im.classList.contains('hero-img') && im.closest('.slide');
  if(sl){ sl.classList.add('no-img'); }
}
document.addEventListener('load', function(e){
  var t = e.target;
  if(t && t.tagName === 'IMG' && t.classList.contains('mi')){ imgLoaded(t); }
}, true);
document.addEventListener('error', function(e){
  var t = e.target;
  if(t && t.tagName === 'IMG'){ if(t.classList.contains('mi')){ imgFailed(t); } else { t.classList.add('broken'); } }
}, true);
var settleQueued = false;
new MutationObserver(function(){
  if(settleQueued){ return; }
  settleQueued = true;
  requestAnimationFrame(function(){
    settleQueued = false;
    fixLinks(document);
    $$('img.mi:not(.ld):not(.broken)').forEach(function(im){ if(im.complete && im.naturalWidth > 0){ imgLoaded(im); } });
  });
}).observe(document.body, { childList: true, subtree: true });

document.addEventListener('click', function(e){
  var link = e.target.closest('a[href]');
  if(link && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && !link.getAttribute('target') && !link.hasAttribute('download')){
    var href = link.getAttribute('href');
    if(isSiteRoute(href)){
      var sq = link.getAttribute('data-sq');
      if(sq){ rememberQuery(sq); }
      e.preventDefault(); goto(href); return;
    }
  }
  var t = e.target;
  if(t.classList && (t.classList.contains('ov-center') || t.id === 'ov-zoom')){ closeOv(); return; }
  var el = t.closest('[data-act]');
  if(!el){ return; }
  var act = el.getAttribute('data-act'), id = el.getAttribute('data-id'), d = Number(el.getAttribute('data-d')), v = el.getAttribute('data-v'), k = el.getAttribute('data-k');
  switch(act){
    case 'menu': openOv('menu'); break;
    case 'search': openOv('search'); break;
    case 'cart': openOv('cart'); break;
    case 'account': openOv('account'); break;
    case 'filter': openOv('filter'); break;
    case 'close': closeOv(); break;
    case 'go': goto(el.getAttribute('data-href')); break;
    case 'fav': e.preventDefault(); toggleFav(id); break;
    case 'qadd':
      var p = byId(id);
      if(!p){ break; }
      if(p.sizes.length || p.colors.length){ toast('Choose your options'); goto('#/product/' + encodeURIComponent(id)); }
      else { addToCart(id, '', 1); toast('Added to cart'); }
      break;
    case 'add': pdpAdd(false); break;
    case 'buy': pdpAdd(true); break;
    case 'size':
      pdp.size = v; $$('#sizes .size').forEach(function(b){ var on = b === el; b.classList.toggle('on', on); b.setAttribute('aria-checked', on); });
      break;
    case 'color':
      pdp.color = v; var cn = $('#clr-name'); if(cn){ cn.textContent = v; } $$('#colors .size').forEach(function(b){ var on = b === el; b.classList.toggle('on', on); b.setAttribute('aria-checked', on); });
      break;
    case 'pqty':
      pdp.qty = Math.max(1, Math.min(10, pdp.qty + d)); $('#pdp-qty').textContent = pdp.qty;
      break;
    case 'gal': var tr = $('#gal-track'); if(tr){ tr.scrollBy({ left: d * tr.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' }); } break;
    case 'thumb': setGal(Number(el.getAttribute('data-i')), true); break;
    case 'zoom': pdp.idx = Number(el.getAttribute('data-i')); openOv('zoom'); break;
    case 'zgo':
      var pz = byId(pdp.id);
      pdp.idx = (pdp.idx + d + pz.images.length) % pz.images.length;
      $('#z-img').src = asset(pz.images[pdp.idx]); $('#z-img').classList.remove('broken');
      break;
    case 'share':
      var pp = byId(pdp.id);
      if(navigator.share){ navigator.share({ title: pp.name, text: pp.name + ' at Radhe Radhe', url: location.href }).catch(function(){}); }
      else if(navigator.clipboard){ navigator.clipboard.writeText(location.href).then(function(){ toast('Link copied'); }); }
      break;
    case 'cqty':
      var ex = cart.filter(function(c){ return ckey(c.id, c.v) === k; })[0];
      if(ex){ ex.qty += d; if(ex.qty < 1){ cart.splice(cart.indexOf(ex), 1); } if(ex.qty > 10){ ex.qty = 10; } saveCart(); }
      break;
    case 'crm':
      cart = cart.filter(function(c){ return ckey(c.id, c.v) !== k; }); saveCart();
      break;
    case 'capply':
      var msg = applyCoupon($('#cp-in').value);
      renderCart();
      if(msg){ var m = $('#cp-msg'); if(m){ m.textContent = msg; m.className = 'cmsg warn'; } }
      else if(!calc(cartItems()).discount){ toast('Code saved. Add more to unlock it.'); }
      else { toast('Coupon applied'); }
      break;
    case 'cremove': removeCoupon(); renderCart(); break;
    case 'copycode':
      var code = el.getAttribute('data-code');
      if(navigator.clipboard){ navigator.clipboard.writeText(code).then(function(){ toast('Code ' + code + ' copied'); }, function(){ toast('Code: ' + code); }); }
      else { toast('Code: ' + code); }
      break;
    case 'checkout': startCheckout(cartItems(), true); break;
    case 'install': doInstall(); break;
    case 'install-dismiss': hideInstallBar(true); break;
    case 'hero':
      var h = $('#hero'); if(h){ heroPaused = true; h.scrollTo({ left: Number(el.getAttribute('data-i')) * h.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' }); setTimeout(function(){ heroPaused = false; }, 6000); }
      break;
    case 'sub': S.sub = v; S.page = 1; paintShop(); break;
    case 'more': S.page++; paintShop(); break;
    case 'fclear-page': S.min = ''; S.max = ''; S.size = ''; S.color = ''; S.sale = false; S.sub = ''; S.q = ''; S.page = 1; paintShop(); break;
    case 'fsort': readFilterInputs(); fdraft.sort = v; paintFilter(); break;
    case 'fcolor': readFilterInputs(); fdraft.color = fdraft.color === v ? '' : v; paintFilter(); break;
    case 'fsize': readFilterInputs(); fdraft.size = fdraft.size === v ? '' : v; paintFilter(); break;
    case 'fclear': fdraft = { sort: 'featured', min: '', max: '', size: '', color: '', sale: false }; paintFilter(); break;
    case 'fapply':
      readFilterInputs();
      S.sort = fdraft.sort; S.min = fdraft.min; S.max = fdraft.max; S.size = fdraft.size; S.color = fdraft.color; S.sale = fdraft.sale; S.page = 1;
      closeOv(); paintShop();
      break;
    case 'sfill': var si = $('#s-input'); if(si){ si.value = el.getAttribute('data-q'); paintSearch(si.value); si.focus(); } break;
    case 'sall': rememberQuery(el.getAttribute('data-q')); goto('#/shop/all?q=' + encodeURIComponent(el.getAttribute('data-q'))); break;
    case 'reorder':
      var o = orders[Number(el.getAttribute('data-i'))];
      if(o){ var n = 0; o.items.forEach(function(it){ if(addToCart(it.id, it.v, it.qty)){ n++; } }); toast(n ? 'Items added to cart' : 'These items are no longer available'); if(n){ openOv('cart'); } }
      break;
    case 'signout':
      user = null; store.set('rrs_user', null); updateAccountBtn();
      try{ if(window.google && window.google.accounts){ window.google.accounts.id.disableAutoSelect(); } }catch(err){}
      toast('Signed out'); renderAccount();
      break;
  }
});

document.addEventListener('submit', function(e){
  var f = e.target;
  if(f.id === 'ck-form'){
    e.preventDefault();
    if(validateCheckout(f)){ placeOrder(f); }
  } else if(f.id === 's-form'){
    e.preventDefault();
    var q = $('#s-input').value.trim();
    if(q){ rememberQuery(q); goto('#/shop/all?q=' + encodeURIComponent(q)); }
  }
});
document.addEventListener('input', function(e){
  var t = e.target;
  if(t.id === 's-input'){ paintSearch(t.value); }
  else if(t.closest && t.closest('.field.bad')){ t.closest('.field').classList.remove('bad'); }
  if(t.id === 'ck-phone' || t.id === 'ck-pincode'){ t.value = t.value.replace(/\D/g, ''); }
});
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape' && activeOv){ closeOv(); }
  if(activeOv === 'zoom' && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')){
    var b = $('#ov-zoom .garrow.' + (e.key === 'ArrowLeft' ? 'l' : 'r')); if(b){ b.click(); }
  }
});
document.addEventListener('click', function(e){ if(e.target.id === 'scrim'){ closeOv(); } });

/* ================================================================
   13. START
================================================================ */
/* ---------- install as app (Chrome / Android / desktop) ---------- */
var deferredInstall = null;
var isStandalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
function canInstall(){ return !isStandalone && (!!deferredInstall || isIOS); }
function refreshInstallUI(){
  if(activeOv === 'menu'){ renderMenu(); }
  if(activeOv === 'account'){ renderAccount(); }
}
function showInstallBar(){
  if(isStandalone || !canInstall() || $('#install-bar')){ return; }
  var d = store.get('rrs_inst_dismiss', 0);
  if(d && Date.now() - d < 7 * 864e5){ return; }
  setTimeout(function(){
    if(!canInstall() || $('#install-bar')){ return; }
    var bar = document.createElement('div');
    bar.className = 'install-bar show'; bar.id = 'install-bar'; bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Install app');
    bar.innerHTML = '<span class="ico">' + ic('download', 20) + '</span><p><b>Install Radhe Radhe</b>Open it from your home screen, like an app.</p><button class="btn btn-dark" data-act="install">Install</button><button class="ibtn" data-act="install-dismiss" aria-label="Dismiss">' + ic('x', 18) + '</button>';
    document.body.appendChild(bar);
  }, 4000);
}
function hideInstallBar(remember){
  var bar = $('#install-bar');
  if(bar){ bar.parentNode.removeChild(bar); }
  if(remember){ store.set('rrs_inst_dismiss', Date.now()); }
}
function doInstall(){
  hideInstallBar();
  if(deferredInstall){
    var ev = deferredInstall;
    ev.prompt();
    ev.userChoice.then(function(){ deferredInstall = null; refreshInstallUI(); });
  } else if(isIOS){
    toast('Tap the Share button, then “Add to Home Screen”', 5500);
  }
}
window.addEventListener('beforeinstallprompt', function(e){
  e.preventDefault(); deferredInstall = e; refreshInstallUI(); showInstallBar();
});
window.addEventListener('appinstalled', function(){
  deferredInstall = null; isStandalone = true; hideInstallBar(); refreshInstallUI();
  toast('App installed. Find it on your home screen.', 3500);
});
if('serviceWorker' in navigator && /^https?:$/.test(location.protocol)){
  window.addEventListener('load', function(){ navigator.serviceWorker.register('/sw.js').catch(function(){}); });
}
if(isIOS && !isStandalone){ showInstallBar(); }

app = document.getElementById('app');
if(history.state && history.state.ov){ history.replaceState(null, ''); }
buildShell();
window.addEventListener('hashchange', function(){ if(/^#\//.test(location.hash)){ route(); } });
if('scrollRestoration' in history){ history.scrollRestoration = 'manual'; }
route();

})();
