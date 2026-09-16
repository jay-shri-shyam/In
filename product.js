/* ================================
   RADHE RADHE — PRODUCT CATALOG
   ================================

   This file was NOT part of your upload, so this is a
   STARTER TEMPLATE with a few sample products — replace
   these with your real products, photos and prices.

   Every product needs:
   - id           : unique text/number, e.g. 'saree-01'
   - category     : must match a key in CATEGORY_INFO
                     (saree, suit, kurti, girls, boys, kids)
   - subcategory  : NEW — used by the Filter dropdown.
                     Give every product a subcategory so
                     customers can filter within a category
                     (e.g. Silk, Cotton, Banarasi, Party Wear)
   - name         : product name shown on the card
   - price        : number, in ₹
   - description  : short text shown on the detail page
   - images       : array of image file paths (use as many
                     photos as you have for that product)
   - bestSeller   : OPTIONAL — set true to show a "Best Seller"
                     tag on the product card
   - newArrival   : OPTIONAL — set true to show a "New Arrival"
                     tag on the product card

   Add more products by copying a block below.
================================ */

window.PRODUCTS = [

    // ---------- SAREE ----------
    {
        id: 'saree-01',
        category: 'saree',
        subcategory: 'Silk',
        name: 'Banarasi Silk Saree',
        price: 3499,
        description: 'Rich Banarasi silk saree with woven zari border, perfect for festive occasions.',
        images: ['saree-1.jpg', 'saree-2.jpg'],
        bestSeller: true
    },
    {
        id: 'saree-02',
        category: 'saree',
        subcategory: 'Cotton',
        name: 'Handloom Cotton Saree',
        price: 1299,
        description: 'Light and breathable handloom cotton saree for everyday elegance.',
        images: ['saree-3.jpg', 'saree-4.jpg']
    },

    // ---------- LEHENGA ----------
    {
        id: 'lehenga-01',
        category: 'lehenga',
        subcategory: 'Bridal',
        name: 'Bridal Velvet Lehenga',
        price: 5999,
        description: 'Heavy embroidered velvet lehenga with matching dupatta, perfect for weddings.',
        images: ['lehenga-1.jpg', 'lehenga-2.jpg'],
        newArrival: true
    },
    {
        id: 'lehenga-02',
        category: 'lehenga',
        subcategory: 'Party Wear',
        name: 'Georgette Party Lehenga',
        price: 2999,
        description: 'Light georgette lehenga with sequin work, ideal for festive parties.',
        images: ['lehenga-3.jpg', 'lehenga-4.jpg']
    },

    // ---------- SUIT (displayed as "Blazer") ----------
    {
        id: 'suit-01',
        category: 'suit',
        subcategory: 'Party Wear',
        name: 'Embroidered Anarkali Suit',
        price: 2799,
        description: 'Floor-length Anarkali suit with detailed embroidery, dupatta included.',
        images: ['suit-1.jpg', 'suit-2.jpg']
    },
    {
        id: 'suit-02',
        category: 'suit',
        subcategory: 'Everyday Wear',
        name: 'Cotton Straight Suit Set',
        price: 1599,
        description: 'Comfortable everyday cotton suit set with matching dupatta.',
        images: ['suit-3.jpg', 'suit-4.jpg']
    },

    // ---------- KURTI (displayed as "Kurti & Suits") ----------
    {
        id: 'kurti-01',
        category: 'kurti',
        subcategory: 'Printed',
        name: 'Floral Printed Kurti',
        price: 899,
        description: 'Soft rayon kurti with all-over floral print, great for daily wear.',
        images: ['kurti-1.jpg', 'kurti-2.jpg']
    },
    {
        id: 'kurti-02',
        category: 'kurti',
        subcategory: 'Solid',
        name: 'Solid A-Line Kurti',
        price: 749,
        description: 'Minimal solid-colour A-line kurti, pairs well with any bottom wear.',
        images: ['kurti-3.jpg', 'kurti-4.jpg']
    },

    // ---------- GIRLS category (displayed as "Women's Wear") ----------
    {
        id: 'girls-01',
        category: 'girls',
        subcategory: 'Frocks',
        name: 'Party Frock for Girls',
        price: 999,
        description: 'Frilly party frock with net overlay, sizes for 3-10 years.',
        images: ['girls-1.jpg', 'girls-2.jpg']
    },
    {
        id: 'girls-02',
        category: 'girls',
        subcategory: 'Ethnic Sets',
        name: 'Girls Lehenga Choli Set',
        price: 1399,
        description: 'Festive lehenga choli set for girls, comfortable everyday fabric.',
        images: ['girls-3.jpg', 'girls-4.jpg']
    },

    // ---------- BOYS category (displayed as "Men's Wear") ----------
    {
        id: 'boys-01',
        category: 'boys',
        subcategory: 'Ethnic Sets',
        name: 'Boys Kurta Pajama Set',
        price: 999,
        description: 'Festive kurta pajama set for boys, soft cotton blend fabric.',
        images: ['boys-1.jpg', 'boys-2.jpg']
    },
    {
        id: 'boys-02',
        category: 'boys',
        subcategory: 'Casual Wear',
        name: 'Boys Casual Shirt Set',
        price: 699,
        description: 'Everyday casual shirt and pant set for boys.',
        images: ['boys-3.jpg', 'boys-4.jpg']
    },

    // ---------- KIDS WEAR (displayed as "Kid's Wear") ----------
    {
        id: 'kids-01',
        category: 'kids',
        subcategory: 'Daily Wear',
        name: 'Kids Cotton T-Shirt & Shorts Set',
        price: 599,
        description: 'Soft cotton t-shirt and shorts combo for everyday comfort.',
        images: ['kids-1.jpg', 'kids-2.jpg']
    },
    {
        id: 'kids-02',
        category: 'kids',
        subcategory: 'Sleepwear',
        name: 'Kids Printed Nightwear Set',
        price: 549,
        description: 'Cute printed nightwear set, breathable and skin-friendly fabric.',
        images: ['kids-3.jpg', 'kids-4.jpg']
    }

];
