/* ==========================================================================
   Prince & Princess - Immersive Vintage Lifestyle Storefront Logic
   Est. 1980 | 1404 Wisconsin Ave NW, Washington, DC 20007
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Item Database with handwritten-style backstories & Archive Sale Items
  const itemDatabase = {
    'item-tacchini-top': {
      id: 'st-jacket',
      title: "Sergio Tacchini Damarindo Jacket",
      price: 150,
      origPrice: 195,
      category: "Look 01 • Vintage Tennis Heritage",
      backstory: "First made famous on European tennis courts in the late 1970s, Sergio Tacchini tracksuits were brought to Washington DC by Prince & Princess in 1980. Sourced from a collector in Milan, the fabric has aged to a perfect soft navy and cream, offering a gorgeous drape. An authentic piece of 1980s court design that fits right into a modern DC wardrobe.",
      img: "images/lounge_sportswear.jpg",
      sizes: ["S", "M", "L", "XL"]
    },
    'item-nb-991': {
      id: 'nb-991-film',
      title: "New Balance 991 Made in UK",
      price: 240,
      category: "Look 01 • Flimby Craftsmanship",
      backstory: "Individually handcrafted at New Balance's Flimby factory in Cumbria, England. Built with Slate Grey pigskin suede and breathable mesh. Known as the sneaker of choice across DC neighborhoods for 40 years.",
      img: "images/look1.jpg",
      sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11", "12"]
    },
    'item-sebago-loafer': {
      id: 'seb-loafer',
      title: "Sebago Classic Oxblood Loafers",
      price: 145,
      origPrice: 185,
      category: "Look 02 • Handsewn Prep",
      backstory: "Handsewn full-grain leather loafers featuring a classic beefroll detail. The oxblood polish has a rich, deep shine that pairs beautifully with soft cotton trousers or casual track pants.",
      img: "images/lounge_prep.jpg",
      sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11"]
    },
    'item-forest-pants': {
      id: 'for-pants',
      title: "Tailored Track Trousers in Forest Green",
      price: 125,
      category: "Look 02 • Tailored Leisure",
      backstory: "Tailored casual track trousers with contrasting cream side-piping. Made of a soft, heavyweight cotton blend designed to bridge the gap between high prep styling and casual living room comfort.",
      img: "images/look2.jpg",
      sizes: ["S", "M", "L", "XL"]
    },
    'item-dc-window-nb': {
      id: 'dc-990-window',
      title: "The Custom 'District Clay' 990v3",
      price: 260,
      category: "Look 03 • Shop Window Exclusive",
      backstory: "A 1-of-1 shop window exclusive commemorating 45 years on 1404 Wisconsin Avenue. Handcrafted in District Clay suede, warm sand tones, and detailed custom embroidery along the heel.",
      img: "images/lounge_archival.jpg",
      sizes: ["9", "9.5", "10", "10.5", "11"]
    },
    
    // Sneakers Archive Sale
    'sale-990v6': {
      id: 'sale-nb-990v6',
      title: "New Balance 990v6 'Grey & Clay'",
      price: 165,
      origPrice: 200,
      category: "Archive Sale • Made in USA",
      backstory: "The flagship of American craftsmanship. Built with responsive FuelCell foam cushioning, breathable mesh uppers, and pigskin suede overlays in District clay tones. Hand-assembled in Lawrence, Massachusetts.",
      img: "images/nb_990v6_sale.jpg",
      sizes: ["8.5", "9", "9.5", "10", "10.5", "11"]
    },
    'sale-991v2': {
      id: 'sale-nb-991v2',
      title: "New Balance 991v2 'Slate & Forest'",
      price: 195,
      origPrice: 250,
      category: "Archive Sale • Made in UK",
      backstory: "Hand-stitched at New Balance’s legendary Flimby factory in Cumbria, England. Crafted in dark slate pigskin suede with deep forest green mesh inserts, updated with full-length FuelCell cushioning.",
      img: "images/nb_991v2_sale.jpg",
      sizes: ["8", "9", "9.5", "10", "10.5", "11.5"]
    },

    // Loafers Archive Sale
    'sale-sebago-loafer': {
      id: 'sale-sebago-oxblood',
      title: "Sebago Classic Beefroll Penny Loafers",
      price: 145,
      origPrice: 185,
      category: "Archive Sale • Handsewn Prep",
      backstory: "Handsewn full-grain leather loafers featuring a classic beefroll detail and unlined leather upper. Polished with a deep burgundy oxblood sheen that pairs beautifully with cotton trousers or denim.",
      img: "images/loafer_sebago_sale.jpg",
      sizes: ["8", "8.5", "9", "9.5", "10", "11"]
    },
    'sale-ghbass-loafer': {
      id: 'sale-ghbass-weejuns',
      title: "G.H. Bass Weejuns 'Larson' Loafers",
      price: 135,
      origPrice: 175,
      category: "Archive Sale • Maine Craft",
      backstory: "The original penny loafer silhouette established in 1936. Crafted in rich dark chocolate polished leather with hand-stitched welt seams and classic leather outsole.",
      img: "images/loafer_ghbass_sale.jpg",
      sizes: ["8.5", "9", "9.5", "10", "10.5", "11"]
    },

    // Sergio Tacchini Archive Sale
    'sale-tacchini-damarindo': {
      id: 'sale-st-damarindo',
      title: "Sergio Tacchini 'Damarindo' Track Jacket",
      price: 150,
      origPrice: 195,
      category: "Archive Sale • Milan Heritage",
      backstory: "First made famous on European grand slam tennis courts in the late 1970s. Tailored with double-stripe chest detail, ribbed funnel neck collar, and branded zipper pull.",
      img: "images/tacchini_damarindo_sale.jpg",
      sizes: ["S", "M", "L", "XL"]
    },
    'sale-tacchini-orion': {
      id: 'sale-st-orion',
      title: "Sergio Tacchini 'Orion' Track Top",
      price: 140,
      origPrice: 180,
      category: "Archive Sale • Regal Forest",
      backstory: "A classic 80s court warm-up design featuring deep forest green body, gold chest striping, embroidered crest monogram, and raglan sleeve construction.",
      img: "images/tacchini_orion_sale.jpg",
      sizes: ["S", "M", "L", "XL"]
    },

    // Suit Vault Archive Sale
    'suit-loriano-red-shawl': {"id": "suit-loriano-red-shawl", "title": "Loriano Red Shawl-Collar Suit", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A striking red shawl-collar suit from Loriano of Florence — black satin trim on the collar, single button, in a Super 160's wool blend. A bold statement piece for evenings that matter.", "img": "images/products/suit-loriano-red-shawl.svg", "sizes": ["One size"]},
    'suit-lucciani-brick': {"id": "suit-lucciani-brick", "title": "Lucciani Brick Solid Suit (LCN98)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Lucciani's burnt-orange brick solid in high-twist Super 150's wool — warm, confident, unmistakably Italian. Article LCN98, regular fit.", "img": "images/products/suit-lucciani-brick.svg", "sizes": ["48L"], "origPrice": 399},
    'suit-fellini-navy': {"id": "suit-fellini-navy", "title": "Fellini Uomo Navy Suit (ART 110)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A classic navy two-button from Fellini Uomo — timeless business tailoring with a clean line. Article 110, model SB-2.", "img": "images/products/suit-fellini-navy.svg", "sizes": ["40L"], "origPrice": 299.95},
    'suit-theory-gray-pinstripe': {"id": "suit-theory-gray-pinstripe", "title": "Theory Gray Pinstripe Suit", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A charcoal gray pinstripe with a modern slim silhouette — refined, minimal, and sharp. Style 19189873-024.", "img": "images/products/suit-theory-gray-pinstripe.svg", "sizes": ["42R"]},
    'suit-needle-stitch-moss': {"id": "suit-needle-stitch-moss", "title": "Needle & Stitch Moss Windowpane Suit (N-3396)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Hand-tailored moss green with a subtle windowpane check — earthy, elegant, and quietly distinctive. Style N-3396.", "img": "images/products/suit-needle-stitch-moss.svg", "sizes": ["48R"], "origPrice": 519.99},
    'suit-renoir-brown-pinstripe': {"id": "suit-renoir-brown-pinstripe", "title": "Renoir Brown Pinstripe Slim Suit", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A slim-fit chocolate brown pinstripe from Renoir — sharp, modern, cut close for a clean silhouette. 65% polyester, 35% rayon.", "img": "images/products/suit-renoir-brown-pinstripe.svg", "sizes": ["42L"]},
    'suit-needle-stitch-light-blue': {"id": "suit-needle-stitch-light-blue", "title": "Needle & Stitch Light Blue Solid Suit", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Hand-tailored light blue solid — fresh, clean, and made for spring and summer days. 63% polyester, 35% viscose, 2% spandex with acetate lining.", "img": "images/products/suit-needle-stitch-light-blue.svg", "sizes": ["48R"]},
    'suit-gianni-black-pinstripe': {"id": "suit-gianni-black-pinstripe", "title": "Gianni Uomo Black Pinstripe Suit", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A black pinstripe from Gianni Uomo — sleek, sharp, and ready for evening business.", "img": "images/products/suit-gianni-black-pinstripe.svg", "sizes": ["42L"]},
    'suit-renoir-black-pinstripe': {"id": "suit-renoir-black-pinstripe", "title": "Renoir Black Pinstripe Slim Suit", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Renoir's slim-fit black pinstripe — contemporary cut, undeniable presence.", "img": "images/products/suit-renoir-black-pinstripe.svg", "sizes": ["48R"]},
    'suit-needle-stitch-gray-db': {"id": "suit-needle-stitch-gray-db", "title": "Needle & Stitch Charcoal Double-Breasted Suit", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A double-breasted charcoal from Needle & Stitch with peak lapels — commanding drape and immaculate handwork. Wool blend.", "img": "images/products/suit-needle-stitch-gray-db.svg", "sizes": ["One size"]},
    'suit-lucciani-tan': {"id": "suit-lucciani-tan", "title": "Lucciani Tan Solid Suit (LCN83)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Lucciani's warm tan solid in high-twist Super 150's wool (Article LCN83) — refined, neutral, and effortlessly elegant. Regular fit.", "img": "images/products/suit-lucciani-tan.svg", "sizes": ["48L"], "origPrice": 399},
    'suit-ns-charcoal-plaid-38l': {"id": "suit-ns-charcoal-plaid-38l", "title": "Needle & Stitch Charcoal Plaid Suit (NS2SN-3710)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Hand-tailored charcoal plaid from Needle & Stitch — blue-gray checks with a burgundy windowpane. Style NS2SN-3710.", "img": "images/products/suit-ns-charcoal-plaid-38l.svg", "sizes": ["38L"], "origPrice": 375},
    'suit-ns-charcoal-burgundy-check': {"id": "suit-ns-charcoal-burgundy-check", "title": "Needle & Stitch Charcoal Burgundy-Check Suit (S-2723)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Charcoal with a burgundy windowpane check — hand-tailored character from Needle & Stitch. Style S-2723.", "img": "images/products/suit-ns-charcoal-burgundy-check.svg", "sizes": ["38R"], "origPrice": 375},
    'suit-ns-gray-blue-windowpane': {"id": "suit-ns-gray-blue-windowpane", "title": "Gray-Blue Windowpane Suit", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A medium gray suit with a blue windowpane check — distinctive, fresh, and full of quiet confidence.", "img": "images/products/suit-ns-gray-blue-windowpane.svg", "sizes": ["One size"]},
    'suit-ns-light-gray-n4030': {"id": "suit-ns-light-gray-n4030", "title": "Needle & Stitch Light Gray Solid Suit (N-4030)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Hand-tailored light gray solid — the versatile lighter neutral every closet needs. Style N-4030.", "img": "images/products/suit-ns-light-gray-n4030.svg", "sizes": ["38R"], "origPrice": 375},
    'suit-ns-charcoal-sp7107': {"id": "suit-ns-charcoal-sp7107", "title": "Needle & Stitch Charcoal Solid Suit (SP-7107)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A deep charcoal solid from Needle & Stitch — understated, precise, hand-tailored. Style SP-7107.", "img": "images/products/suit-ns-charcoal-sp7107.svg", "sizes": ["38R"], "origPrice": 479.55},
    'suit-eleganza-charcoal': {"id": "suit-eleganza-charcoal", "title": "Charcoal Solid Suit", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A clean charcoal solid — the essential dark suit, sharp and versatile.", "img": "images/products/suit-eleganza-charcoal.svg", "sizes": ["One size"]},
    'suit-cooper-nelson-charcoal': {"id": "suit-cooper-nelson-charcoal", "title": "Cooper & Nelson Charcoal Solid Suit (SHARK2)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A charcoal solid from Cooper & Nelson — clean tailoring in 65% polyester, 35% rayon. Style SHARK2.", "img": "images/products/suit-cooper-nelson-charcoal.svg", "sizes": ["38S"], "origPrice": 199.95},
    'suit-lucciani-brown-solid': {"id": "suit-lucciani-brown-solid", "title": "Lucciani Brown Solid Suit (CN65V)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Lucciani's rich brown solid in high-twist Super 150's wool — warm, refined, unmistakably Italian. Article CN65V.", "img": "images/products/suit-lucciani-brown-solid.svg", "sizes": ["42R"], "origPrice": 499},
    'suit-ns-blue-plaid-sp070': {"id": "suit-ns-blue-plaid-sp070", "title": "Needle & Stitch Blue Plaid Suit (SP-070)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Hand-tailored royal blue plaid with a maroon overcheck — bold, bright, impossible to ignore. Style SP-070.", "img": "images/products/suit-ns-blue-plaid-sp070.svg", "sizes": ["38R"], "origPrice": 375},
    'suit-gianni-olive-vested': {"id": "suit-gianni-olive-vested", "title": "Gianni Uomo Olive Vested Suit (SB-3)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A three-piece olive from Gianni Uomo — jacket, matching vest, and trouser in a vested slim fit. Earthy modern elegance. Model SB-3.", "img": "images/products/suit-gianni-olive-vested.svg", "sizes": ["38R"], "origPrice": 295.55},
    'suit-lucciani-ltaupe-check': {"id": "suit-lucciani-ltaupe-check", "title": "Lucciani Light Taupe Check Suit (LZU 18R)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Lucciani's light taupe with a subtle check — regular fit, refined Italian tailoring. Article LZU 18R.", "img": "images/products/suit-lucciani-ltaupe-check.svg", "sizes": ["42R"], "origPrice": 499},
    'suit-ns-beige-windowpane': {"id": "suit-ns-beige-windowpane", "title": "Needle & Stitch Beige Windowpane Suit (PV-8820S)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Hand-tailored beige with a light-blue windowpane — fresh, distinctive, and full of character. Style PV-8820S.", "img": "images/products/suit-ns-beige-windowpane.svg", "sizes": ["40R"], "origPrice": 549.99},
    'suit-ns-dark-blue-n4030-50r': {"id": "suit-ns-dark-blue-n4030-50r", "title": "Needle & Stitch Dark Blue Suit (N-4030)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Hand-tailored dark blue solid from Needle & Stitch — the suit every closet needs. Style N-4030.", "img": "images/products/suit-ns-dark-blue-n4030-50r.svg", "sizes": ["50R"]},
    'suit-ns-black-n4030-56l': {"id": "suit-ns-black-n4030-56l", "title": "Needle & Stitch Black Suit (N-4030)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "A hand-tailored black solid from Needle & Stitch — sharp, formal, timeless. Style N-4030.", "img": "images/products/suit-ns-black-n4030-56l.svg", "sizes": ["56L"]},
    'suit-ns-blue-check-n3396-52r': {"id": "suit-ns-blue-check-n3396-52r", "title": "Needle & Stitch Blue Check Suit (N-3396)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Hand-tailored blue with a subtle check from Needle & Stitch — polished with quiet pattern. Style N-3396.", "img": "images/products/suit-ns-blue-check-n3396-52r.svg", "sizes": ["52R"], "origPrice": 219},
    'suit-ns-brown-plaid-s239-52r': {"id": "suit-ns-brown-plaid-s239-52r", "title": "Needle & Stitch Brown Plaid Suit (S-239)", "price": 80, "category": "Archive Sale • The Suit Vault", "backstory": "Hand-tailored brown plaid from Needle & Stitch — an earthy windowpane check with quiet confidence. Style S-239.", "img": "images/products/suit-ns-brown-plaid-s239-52r.svg", "sizes": ["52R"], "origPrice": 375},

    // Shoe Collection Archive Sale
    'shoe-reebok-mobius-og': {"id": "shoe-reebok-mobius-og", "title": "Reebok Mobius OG 'White / Collegiate Navy / Red'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A clean retro court classic in white with collegiate navy and red hits — crisp, timeless, and ready for daily wear.", "img": "images/products/shoe-reebok-mobius-og.webp", "sizes": ["11.5"]},
    'shoe-reebok-furikaze-sandstone': {"id": "shoe-reebok-furikaze-sandstone", "title": "Future x Reebok Furikaze 'Sandstone'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A Future collaboration in warm sandstone with chalk and gum accents — part sneaker, part sandal, all statement.", "img": "images/products/shoe-reebok-furikaze-sandstone.webp", "sizes": ["8.5"]},
    'shoe-reebok-aztrek-storm-glow': {"id": "shoe-reebok-aztrek-storm-glow", "title": "Reebok Aztrek 'Storm Glow'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "Chunky 90s runner in storm glow with sea spray and white — bold color blocking with all-day cushioning.", "img": "images/products/shoe-reebok-aztrek-storm-glow.webp", "sizes": ["11.5"]},
    'shoe-reebok-dmx-run-10': {"id": "shoe-reebok-dmx-run-10", "title": "Atmos x Reebok DMX Run 10 'Black Neon Yellow'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "An Atmos collaboration in black with neon yellow pop — DMX cushioning wrapped in street-ready energy.", "img": "images/products/shoe-reebok-dmx-run-10.webp", "sizes": ["11.5"]},
    'shoe-reebok-instapump-fury-og': {"id": "shoe-reebok-instapump-fury-og", "title": "Mita x Winchie x Reebok InstaPump Fury OG 'Flight Jacket'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A triple collaboration in olive with fluorescent orange accents — the iconic Pump, dressed like a flight jacket.", "img": "images/products/shoe-reebok-instapump-fury-og.webp", "sizes": ["6"]},
    'shoe-reebok-exofit-hi': {"id": "shoe-reebok-exofit-hi", "title": "Reebok x MAJOR Ex-O-Fit Hi 'Green Camo'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A MAJOR collaboration high-top in walnut, stone grey, and hunter green camo — heritage hoops style, street attitude.", "img": "images/products/shoe-reebok-exofit-hi.webp", "sizes": ["8"]},
    'shoe-reebok-3d-op': {"id": "shoe-reebok-3d-op", "title": "Reebok 3D OP. Fractional 'Cool Grey'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "Sculpted 3D-molded runner in cool grey with chalk and green details — futuristic comfort for everyday miles.", "img": "images/products/shoe-reebok-3d-op.webp", "sizes": ["12"]},
    'shoe-reebok-instapump-millennium': {"id": "shoe-reebok-instapump-millennium", "title": "Reebok Instapump Fury Millennium 'Metallic Bronze'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The Millennium edition of the Pump icon in metallic bronze and black — a collector-grade statement runner.", "img": "images/products/shoe-reebok-instapump-millennium.webp", "sizes": ["8"]},
    'shoe-reebok-bb4000-ii': {"id": "shoe-reebok-bb4000-ii", "title": "Reebok BB 4000 II 'White / Vector Navy'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A vintage hoops silhouette in white leather with vector navy stripes — classic court DNA, unmistakably Reebok.", "img": "images/products/shoe-reebok-bb4000-ii.webp", "sizes": ["One size"]},
    'shoe-converse-jack-purcell': {"id": "shoe-converse-jack-purcell", "title": "Converse Jack Purcell Signature High 'White'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The timeless badminton silhouette in triple-white leather — the smile, the silhouette, the standard.", "img": "images/products/shoe-converse-jack-purcell.webp", "sizes": ["9"]},
    'shoe-converse-chuck70-hiker': {"id": "shoe-converse-chuck70-hiker", "title": "Converse Chuck 70 Hi Top Hiker 'Medium Olive'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The Chuck 70 rebuilt for the trail in olive canvas with a lugged sole — heritage looks, rugged footing.", "img": "images/products/shoe-converse-chuck70-hiker.webp", "sizes": ["8.5"]},
    'shoe-converse-terra-red': {"id": "shoe-converse-terra-red", "title": "Converse Chuck Taylor All Star 70 Hi 'Terra Red'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "Premium Chuck 70 canvas in rich terra red with egret trim — the elevated classic, done in earth tones.", "img": "images/products/shoe-converse-terra-red.webp", "sizes": ["11.5"]},
    'shoe-converse-punk-boot': {"id": "shoe-converse-punk-boot", "title": "Converse Chuck 70 Punk Boot Hi 'Black'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A punk-boot take on the Chuck 70 in black leather with egret foxing — tough, polished, and full of edge.", "img": "images/products/shoe-converse-punk-boot.webp", "sizes": ["11"]},
    'shoe-converse-bordeaux': {"id": "shoe-converse-bordeaux", "title": "Converse Chuck Taylor All Star 2 Hi 'Bordeaux'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The cushioned All Star 2 in deep bordeaux with white trim — wine-dark canvas with Lunarlon comfort.", "img": "images/products/shoe-converse-bordeaux.webp", "sizes": ["10"]},
    'shoe-converse-erx': {"id": "shoe-converse-erx", "title": "Converse ERX Impress High 'Court Purple Iridescent'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A 2019 court revival in iridescent purple — high-top drama with a shine that shifts in the light.", "img": "images/products/shoe-converse-erx.webp", "sizes": ["12"]},
    'shoe-adidas-eqt-glitch': {"id": "shoe-adidas-eqt-glitch", "title": "Adidas EQT Support 93/17 'Black Glitch'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The EQT Support 93/17 in core black and white — technical knit with Boost comfort, pure streetwear staple.", "img": "images/products/shoe-adidas-eqt-glitch.webp", "sizes": ["8"]},
    'shoe-adidas-prophere': {"id": "shoe-adidas-prophere", "title": "Adidas Prophere 'Black Infrared'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "Bold sculpted layers in black with infrared hits — the Prophere's fearless silhouette in a stealth colorway.", "img": "images/products/shoe-adidas-prophere.webp", "sizes": ["9"]},
    'shoe-adidas-nmd': {"id": "shoe-adidas-nmd", "title": "Adidas NMD CS1 Primeknit 'Night Cargo'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A sock-fit NMD in night cargo, base green, and cloud white — Primeknit comfort with city-stripe style.", "img": "images/products/shoe-adidas-nmd.webp", "sizes": ["8.5"]},
    'shoe-adidas-supercourt': {"id": "shoe-adidas-supercourt", "title": "Adidas Super Court RX 'Cloud White'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "An all-white leather tennis classic — clean cloud white from toe to heel, the minimalist essential.", "img": "images/products/shoe-adidas-supercourt.webp", "sizes": ["7"]},
    'shoe-adidas-sc-premiere': {"id": "shoe-adidas-sc-premiere", "title": "Adidas SC Premiere 'Triple White'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "Tumbled leather with nubuck overlays in triple white — premium materials on a timeless tennis profile.", "img": "images/products/shoe-adidas-sc-premiere.webp", "sizes": ["12"]},
    'shoe-adidas-superstar-boost': {"id": "shoe-adidas-superstar-boost", "title": "Adidas Superstar Boost Primeknit 'Noble Metal'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The shell toe reimagined in grey primeknit with metallic shine and Boost cushioning — classic, upgraded.", "img": "images/products/shoe-adidas-superstar-boost.webp", "sizes": ["12"]},
    'shoe-adidas-dimension': {"id": "shoe-adidas-dimension", "title": "Adidas Dimension Low Top 'Real Teal'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A 90s trainer revival in cloud white, core black, and real teal — retro running style, 2018 release.", "img": "images/products/shoe-adidas-dimension.webp", "sizes": ["9"]},
    'shoe-adidas-mesh-runner': {"id": "shoe-adidas-mesh-runner", "title": "Adidas Mesh Runner 'Purple / Lavender'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A breathable purple and lavender mesh runner — light, easy, and quietly colorful.", "img": "images/products/shoe-adidas-mesh-runner.webp", "sizes": ["7"]},
    'shoe-puma-prevail': {"id": "shoe-puma-prevail", "title": "Puma Prevail Classic 'White / Blue'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A crisp court classic in white with blue accents — clean lines that go with everything. Two sizes in stock.", "img": "images/products/shoe-puma-prevail.webp", "sizes": ["11", "11.5"]},
    'shoe-puma-slipstream': {"id": "shoe-puma-slipstream", "title": "Puma Slipstream Mid SC 'White Sweet Grape'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "An 80s court mid-top in white leather with sweet grape purple — retro hoops flavor, modern finish.", "img": "images/products/shoe-puma-slipstream.webp", "sizes": ["8.5"]},
    'shoe-puma-cell-alien': {"id": "shoe-puma-cell-alien", "title": "Puma x Les Benjamins Cell Alien 'White Dark Shadow'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A Les Benjamins collaboration in white and dark shadow — Cell cushioning with Istanbul streetwear edge.", "img": "images/products/shoe-puma-cell-alien.webp", "sizes": ["11"]},
    'shoe-puma-gold': {"id": "shoe-puma-gold", "title": "Puma Court Classic 'Metallic Gold'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A low-top court silhouette dipped in metallic gold — shine that turns every sidewalk into a runway.", "img": "images/products/shoe-puma-gold.webp", "sizes": ["9.5"]},
    'shoe-puma-rsx-han': {"id": "shoe-puma-rsx-han", "title": "Puma RS-X x Han Kjobenhavn", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A Copenhagen-designed RS-X with speckled laces and sculpted sole — Scandinavian edge on a chunky classic.", "img": "images/products/shoe-puma-rsx-han.webp", "sizes": ["One size"]},
    'shoe-puma-rsx-red-blast': {"id": "shoe-puma-rsx-red-blast", "title": "Puma RS-X Reinvention 'Red Blast'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The RS-X reinvented in puma white and red blast — extreme bulk, extreme comfort, extreme style.", "img": "images/products/shoe-puma-rsx-red-blast.webp", "sizes": ["11"]},
    'shoe-puma-mayze': {"id": "shoe-puma-mayze", "title": "Puma Mayze Mid 'White' (Women's)", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A stacked-sole mid in white and whisper white — platform attitude on a timeless court shape.", "img": "images/products/shoe-puma-mayze.webp", "sizes": ["8.5"]},
    'shoe-puma-rs-trck-blue': {"id": "shoe-puma-rs-trck-blue", "title": "Puma RS-TRCK 'Future Blue Saffron'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "Trail-inspired tech in future blue, black, and saffron — rugged texture with RS cushioning.", "img": "images/products/shoe-puma-rs-trck-blue.webp", "sizes": ["11.5"]},
    'shoe-black-boot': {"id": "shoe-black-boot", "title": "Black Leather Lace-Up Boot 'Red Laces'", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "Black leather with red laces, red contrast stitching, and a cream wedge sole — workwear soul, boutique polish.", "img": "images/products/shoe-black-boot.webp", "sizes": ["One size"]},
    'shoe-sa-spectator': {"id": "shoe-sa-spectator", "title": "Stacy Adams Black / White Spectator Wingtip Oxford", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A two-tone spectator wingtip in black and white with brogue detailing — vintage jazz-age swagger, made to be noticed.", "img": "images/products/shoe-sa-spectator.webp", "sizes": ["7.5"]},
    'shoe-spectator-2': {"id": "shoe-spectator-2", "title": "Black / White Spectator Wingtip Oxford", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The classic two-tone spectator in black and white — a dapper essential for evenings that call for polish.", "img": "images/products/shoe-spectator-2.webp", "sizes": ["One size"]},
    'shoe-sa-black-7999': {"id": "shoe-sa-black-7999", "title": "Stacy Adams Black Dress Shoe", "price": 79.99, "category": "Archive Sale • The Shoe Collection", "backstory": "A polished black Stacy Adams dress shoe — sharp, versatile, and ready for the office or the occasion.", "img": "images/products/shoe-sa-black-7999.webp", "sizes": ["One size"], "origPrice": 100},
    'shoe-sa-20135': {"id": "shoe-sa-20135", "title": "Stacy Adams Black Leather Lace-Up Oxford", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A black leather lace-up oxford with leather lining — Stacy Adams craftsmanship in its purest form.", "img": "images/products/shoe-sa-20135.webp", "sizes": ["8.5"]},
    'shoe-sa-captoe-derby': {"id": "shoe-sa-captoe-derby", "title": "Stacy Adams Black Leather Cap-Toe Derby", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A black cap-toe derby with an open lacing — slightly relaxed, fully refined, endlessly wearable.", "img": "images/products/shoe-sa-captoe-derby.webp", "sizes": ["One size"]},
    'shoe-sa-slipon': {"id": "shoe-sa-slipon", "title": "Stacy Adams Black Leather Brogue Slip-On", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A black brogue slip-on with elastic side panels — easy on, dressed up, with wingtip character.", "img": "images/products/shoe-sa-slipon.webp", "sizes": ["One size"]},
    'shoe-sa-valerian': {"id": "shoe-sa-valerian", "title": "Stacy Adams 'Valerian' Black Brogue Slip-On Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The Valerian loafer in black with brogue detailing and elastic goring — slip-on ease, tailored attitude.", "img": "images/products/shoe-sa-valerian.webp", "sizes": ["10.5"]},
    'shoe-dress-20143': {"id": "shoe-dress-20143", "title": "Black Leather Dress Shoe", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A clean black leather dress shoe with leather lining — understated elegance for any formal moment.", "img": "images/products/shoe-dress-20143.webp", "sizes": ["10.5"]},
    'shoe-black-captoe-oxford': {"id": "shoe-black-captoe-oxford", "title": "Black Leather Cap-Toe Oxford", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The definitive black cap-toe oxford — the shoe every wardrobe is built around.", "img": "images/products/shoe-black-captoe-oxford.webp", "sizes": ["One size"]},
    'shoe-black-brogue': {"id": "shoe-black-brogue", "title": "Black Leather Brogue Wingtip Oxford", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A full brogue wingtip in black leather — perforated detailing with boardroom-to-evening range.", "img": "images/products/shoe-black-brogue.webp", "sizes": ["One size"]},
    'shoe-sebago-classic-dan': {"id": "shoe-sebago-classic-dan", "title": "Sebago Classic Dan Burgundy Penny Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The Classic Dan penny loafer in burgundy, handsewn — the prep icon, rich and unmistakable.", "img": "images/products/shoe-sebago-classic-dan.webp", "sizes": ["8"]},
    'shoe-sebago-burgundy-5999': {"id": "shoe-sebago-burgundy-5999", "title": "Sebago Burgundy Leather Penny Loafer", "price": 59.99, "category": "Archive Sale • The Shoe Collection", "backstory": "A handsewn burgundy penny loafer with genuine moccasin construction — timeless, comfortable, and unmistakably Sebago.", "img": "images/products/shoe-sebago-burgundy-5999.webp", "sizes": ["One size"], "origPrice": 66.99},
    'shoe-sebago-black-penny': {"id": "shoe-sebago-black-penny", "title": "Sebago Black Leather Penny Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The handsewn black penny loafer — genuine moccasin construction since 1946, the forever shoe.", "img": "images/products/shoe-sebago-black-penny.webp", "sizes": ["One size"]},
    'shoe-sebago-cognac': {"id": "shoe-sebago-cognac", "title": "Sebago Cognac Brown Leather Penny Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A handsewn penny loafer in warm cognac brown — rich color that deepens beautifully with wear.", "img": "images/products/shoe-sebago-cognac.webp", "sizes": ["One size"]},
    'shoe-sebago-brown-penny': {"id": "shoe-sebago-brown-penny", "title": "Sebago Brown Leather Penny Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "The handsewn brown penny loafer — classic beefroll styling with all-day leather comfort.", "img": "images/products/shoe-sebago-brown-penny.webp", "sizes": ["One size"]},
    'shoe-sebago-black-tassel': {"id": "shoe-sebago-black-tassel", "title": "Sebago Black Leather Tassel Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A handsewn black tassel loafer — the tassel adds just the right amount of personality to a classic.", "img": "images/products/shoe-sebago-black-tassel.webp", "sizes": ["One size"]},
    'shoe-sebago-venetian': {"id": "shoe-sebago-venetian", "title": "Sebago Black Leather Venetian Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A plain-toe venetian loafer in black, made in the USA — sleek, minimal, and quietly luxurious.", "img": "images/products/shoe-sebago-venetian.webp", "sizes": ["One size"]},
    'shoe-sebago-two-tone': {"id": "shoe-sebago-two-tone", "title": "Sebago Black / Burgundy Two-Tone Penny Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A two-tone penny loafer in black with a burgundy strap, made in the USA — handsewn character with a twist.", "img": "images/products/shoe-sebago-two-tone.webp", "sizes": ["One size"]},
    'shoe-timberland-penny': {"id": "shoe-timberland-penny", "title": "Timberland Burgundy Leather Penny Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A burgundy penny loafer, made in the USA — sturdy leather with classic penny styling.", "img": "images/products/shoe-timberland-penny.webp", "sizes": ["7"]},
    'shoe-penny-10971': {"id": "shoe-penny-10971", "title": "Black Leather Penny Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A black leather penny loafer — the versatile slip-on that anchors any smart-casual look.", "img": "images/products/shoe-penny-10971.webp", "sizes": ["7.5"]},
    'shoe-penny-10699': {"id": "shoe-penny-10699", "title": "Dark Brown Leather Penny Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A dark brown leather penny loafer — warm, polished, and endlessly pairable.", "img": "images/products/shoe-penny-10699.webp", "sizes": ["7.5"]},
    'shoe-brown-tassel': {"id": "shoe-brown-tassel", "title": "Dark Brown Leather Tassel Loafer", "price": null, "category": "Archive Sale • The Shoe Collection", "backstory": "A dark brown tassel loafer — old-school charm with a wink, perfect with tailoring or denim.", "img": "images/products/shoe-brown-tassel.webp", "sizes": ["One size"]}
  };

  // Conversational response mappings from the storeowner
  const conversationalReplies = {
    'sportswear': "“Ah, a court classic. Excellent choice. Let's pour a splash of bourbon. Over in Chapter One, you'll find the Italian Sergio Tacchini warmups and UK-made 991s. Perfect blend of heritage athletic draping and slate suede.”",
    'prep': "“A very clean choice. Penny loafers and tailored green track pants are the true DC high-low uniform. Go down to Chapter Two to explore Sebago's hand-stitched beefroll cuts. Classic, comfortable, and unpretentious.”",
    'archival': "“Looking for a 1-of-1 story? Our custom 'District Clay' 990v3 in Chapter Three was designed using suedes matching the historic brick steps outside our shop window. A true collector's piece with custom heel details.”"
  };

  // Cart state: starts empty, persisted to localStorage so selections survive reloads
  let cartState = [];
  try {
    const saved = localStorage.getItem('pp-closet-cart');
    if (saved) cartState = JSON.parse(saved) || [];
  } catch (e) { /* private mode etc: fall back to empty cart */ }

  let currentActiveItem = null;
  let selectedModalSize = null;

  /* ==========================================================================
     Tactile Toast Notification Engine
     ========================================================================== */
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'vintage-toast';
    toast.innerHTML = `
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--accent-gold);">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  /* ==========================================================================
     3D Interactive Drag-to-Rotate Studio Canvas Engine
     ========================================================================== */
  const canvases = document.querySelectorAll('.sneaker-studio-canvas');

  canvases.forEach(canvas => {
    const img = canvas.querySelector('.sneaker-studio-img');
    if (!img) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let rotY = 0;
    let rotX = 0;

    function handleStart(e) {
      isDragging = true;
      startX = e.pageX || (e.touches && e.touches[0].pageX);
      startY = e.pageY || (e.touches && e.touches[0].pageY);
      canvas.style.cursor = 'grabbing';
    }

    function handleMove(e) {
      if (!isDragging) return;
      const currentX = e.pageX || (e.touches && e.touches[0].pageX);
      const currentY = e.pageY || (e.touches && e.touches[0].pageY);

      const deltaX = currentX - startX;
      const deltaY = currentY - startY;

      // Calculate 3D perspective rotation
      rotY += deltaX * 0.45;
      rotX -= deltaY * 0.25;

      // Clamp vertical tilt range
      rotX = Math.max(-25, Math.min(25, rotX));

      img.style.transform = `perspective(800px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(1.08)`;

      startX = currentX;
      startY = currentY;
    }

    function handleEnd() {
      if (!isDragging) return;
      isDragging = false;
      canvas.style.cursor = 'grab';
      
      // Smooth reset to clean front studio perspective
      setTimeout(() => {
        img.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        img.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
        setTimeout(() => {
          img.style.transition = 'transform 0.08s cubic-bezier(0.1, 0.9, 0.2, 1)';
          rotY = 0;
          rotX = 0;
        }, 600);
      }, 300);
    }

    // Mouse Events
    canvas.addEventListener('mousedown', handleStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);

    // Touch Events for Mobile
    canvas.addEventListener('touchstart', handleStart, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('touchend', handleEnd);
  });

  /* ==========================================================================
     Archive Sale Items Controls & Shopping
     ========================================================================== */
  // Size selection chips inside sale cards
  document.querySelectorAll('.sneaker-sizes-row').forEach(row => {
    const chips = row.querySelectorAll('.sneaker-size-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
      });
    });
  });

  // Direct "Reserve & Add to Closet" buttons for Sale Items
  document.querySelectorAll('.add-sale-to-closet-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const saleId = btn.dataset.saleId;
      const item = itemDatabase[saleId];
      if (!item) return;
      if (item.price == null) { showToast(`"${item.title}" is priced in-store \u2014 call (202) 338-7657 to reserve.`); return; }

      // Find active size — the shopper must pick one explicitly; never guess
      const sizeRow = document.querySelector(`.sneaker-sizes-row[data-sale-sizes="${saleId}"]`);
      let chosenSize = null;
      if (sizeRow) {
        const selectedChip = sizeRow.querySelector('.sneaker-size-chip.selected');
        if (selectedChip) chosenSize = selectedChip.textContent.trim();
      }

      if (!chosenSize) {
        showToast(`Please select a size for the ${item.title} first.`);
        if (sizeRow) {
          sizeRow.classList.remove('size-attention');
          void sizeRow.offsetWidth; // restart the highlight animation
          sizeRow.classList.add('size-attention');
          sizeRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      const existingIndex = cartState.findIndex(
        i => i.title === item.title && i.size === chosenSize
      );

      if (existingIndex > -1) {
        cartState[existingIndex].qty++;
      } else {
        cartState.push({
          id: item.id,
          title: item.title,
          price: item.price,
          size: chosenSize,
          qty: 1,
          img: item.img
        });
      }

      renderCart();
      openCart();
      showToast(`Added "${item.title}" (Size ${chosenSize}) to your closet at $${item.price.toFixed(2)}.`);
    });
  });

  /* ==========================================================================
     Conversational Choice Selection & Shopping Trigger
     ========================================================================== */
  const optionButtons = document.querySelectorAll('.option-card-btn');
  const loungeFeedback = document.getElementById('lounge-feedback');

  optionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Don't duplicate if hotspot or inner shop button clicked
      if (e.target.closest('.frame-hotspot') || e.target.closest('.lounge-shop-btn')) return;

      // Toggle selected class
      optionButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      // Populate conversational feedback
      const choice = btn.dataset.choice;
      if (loungeFeedback && conversationalReplies[choice]) {
        loungeFeedback.textContent = conversationalReplies[choice];
        loungeFeedback.style.display = 'block';
        loungeFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Automatically trigger item modal for direct shopping
      const itemId = btn.dataset.itemId;
      if (itemId) {
        openItemModal(itemId);
      }
    });
  });

  // Bind lounge shop buttons
  document.querySelectorAll('.lounge-shop-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = btn.dataset.itemId;
      if (itemId) openItemModal(itemId);
    });
  });

  /* ==========================================================================
     Buttery Smooth Parallax Engine (Optimized with requestAnimationFrame)
     ========================================================================== */
  let scrollTicking = false;

  function updateParallax() {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Smooth moving showcase photos
    document.querySelectorAll('.parallax-img').forEach(img => {
      const parent = img.parentElement;
      const rect = parent.getBoundingClientRect();
      
      // Check if visible on screen
      if (rect.top < windowHeight && rect.bottom > 0) {
        const parentTop = rect.top + scrolled;
        const relativeScroll = scrolled - parentTop + windowHeight;
        
        // Compute translation value with GPU acceleration (translate3d)
        const yOffset = relativeScroll * 0.12;
        img.style.transform = `translate3d(0, ${yOffset - 100}px, 0) scale(1.15)`;
      }
    });

    // Parallax background hero cover
    const heroBg = document.querySelector('.parallax-bg');
    if (heroBg) {
      const rect = heroBg.parentElement.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        const yOffset = scrolled * 0.28;
        heroBg.style.transform = `translate3d(0, ${yOffset}px, 0)`;
      }
    }

    scrollTicking = false;
  }

  function onScroll() {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateParallax);
      scrollTicking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  
  // Trigger initial frame
  updateParallax();

  /* ==========================================================================
     Cart Drawer Logic ("The Closet")
     ========================================================================== */
  const cartTrigger = document.getElementById('cart-trigger');
  const cartDrawer = document.getElementById('closet-drawer');
  const drawerBackdrop = document.getElementById('closet-backdrop');
  const cartClose = document.getElementById('closet-close');
  const cartContainer = document.getElementById('closet-items-container');
  const cartCountEl = document.getElementById('cart-count');
  const cartSubtotalEl = document.getElementById('closet-subtotal');
  const checkoutBtn = document.getElementById('checkout-btn');

  function openCart() {
    cartDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', () => {
    closeCart();
    closeProductModal();
    closeSearchModal();
  });

  function renderCart() {
    if (!cartContainer) return;
    cartContainer.innerHTML = '';
    
    let subtotal = 0;
    let totalItems = 0;

    if (cartState.length === 0) {
      cartContainer.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem; color: var(--text-light); font-family: var(--font-serif); font-style: italic;">
          <p style="font-size: 1.3rem; margin-bottom: 0.5rem;">Your Closet is empty.</p>
          <p style="font-size: 0.95rem;">Select items from the living room shelf.</p>
        </div>
      `;
    } else {
      cartState.forEach((item, index) => {
        subtotal += item.price * item.qty;
        totalItems += item.qty;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'drawer-cart-item';
        cartItemEl.innerHTML = `
          <img src="${item.img}" alt="${item.title}" class="drawer-cart-img">
          <div class="drawer-cart-info">
            <h4 class="drawer-cart-title">${item.title}</h4>
            <div class="drawer-cart-meta">Size: ${item.size} • $${item.price.toFixed(2)}</div>
            <div class="drawer-cart-actions">
              <button class="drawer-cart-qty-btn dec-qty" data-index="${index}">-</button>
              <span style="font-size: 0.8rem; font-weight: 600;">${item.qty}</span>
              <button class="drawer-cart-qty-btn inc-qty" data-index="${index}">+</button>
              <button class="remove-btn" data-index="${index}" style="margin-left: auto; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary-clay); font-weight: 600;">Remove</button>
            </div>
          </div>
        `;
        cartContainer.appendChild(cartItemEl);
      });
    }

    if (cartCountEl) cartCountEl.textContent = totalItems;
    if (cartSubtotalEl) cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;

    try {
      localStorage.setItem('pp-closet-cart', JSON.stringify(cartState));
    } catch (e) { /* storage unavailable: cart simply won't persist */ }
  }

  // Handle quantity changes & removals
  if (cartContainer) {
    cartContainer.addEventListener('click', (e) => {
      const decBtn = e.target.closest('.dec-qty');
      const incBtn = e.target.closest('.inc-qty');
      const removeBtn = e.target.closest('.remove-btn');

      if (decBtn) {
        const index = parseInt(decBtn.dataset.index);
        if (cartState[index].qty > 1) {
          cartState[index].qty--;
        } else {
          cartState.splice(index, 1);
        }
        renderCart();
      } else if (incBtn) {
        const index = parseInt(incBtn.dataset.index);
        cartState[index].qty++;
        renderCart();
      } else if (removeBtn) {
        const index = parseInt(removeBtn.dataset.index);
        const removedTitle = cartState[index].title;
        cartState.splice(index, 1);
        renderCart();
        showToast(`Removed "${removedTitle}" from closet.`);
      }
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cartState.length === 0) return;
      showToast("Reservation saved! Drop by 1404 Wisconsin Ave to try them on.");
      cartState = [];
      renderCart();
      closeCart();
    });
  }

  /* ==========================================================================
     Tactile Item Detail Modal
     ========================================================================== */
  const productModal = document.getElementById('item-modal');
  const modalClose = document.getElementById('modal-close');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalBackstoryText = document.getElementById('modal-backstory-text');
  const modalSizeRow = document.getElementById('modal-size-row');
  const modalPrice = document.getElementById('modal-price');
  const modalOrigPrice = document.getElementById('modal-orig-price');
  const modalImg = document.getElementById('modal-img');
  const modalAddBtn = document.getElementById('modal-add-btn');

  function openItemModal(itemId) {
    const item = itemDatabase[itemId];
    if (!item) return;

    currentActiveItem = item;
    selectedModalSize = null;

    if (modalCategory) modalCategory.textContent = item.category;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalBackstoryText) modalBackstoryText.textContent = item.backstory;
    if (modalPrice) modalPrice.textContent = item.price == null ? 'In-Store Pricing' : `$${item.price.toFixed(2)}`;
    if (modalOrigPrice) {
      if (item.origPrice && item.price != null && item.origPrice > item.price) {
        modalOrigPrice.textContent = `$${item.origPrice.toFixed(2)}`;
        modalOrigPrice.style.display = 'inline';
      } else {
        modalOrigPrice.style.display = 'none';
      }
    }
    if (modalImg) {
      if (item.img) {
        modalImg.src = item.img;
        modalImg.alt = item.title;
        modalImg.style.display = 'block';
      } else {
        modalImg.style.display = 'none';
      }
    }

    // Render sizes (no pre-selection; the shopper chooses explicitly)
    if (modalSizeRow) {
      modalSizeRow.innerHTML = '';
      item.sizes.forEach((sz) => {
        const chip = document.createElement('button');
        chip.className = 'size-item-btn';
        chip.textContent = sz;
        chip.addEventListener('click', () => {
          document.querySelectorAll('.size-item-btn').forEach(c => c.classList.remove('selected'));
          chip.classList.add('selected');
          selectedModalSize = sz;
        });
        modalSizeRow.appendChild(chip);
      });
    }

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeProductModal);

  // Bind hotspot pins across page
  document.querySelectorAll('.frame-hotspot').forEach(pin => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = pin.dataset.itemId;
      if (itemId) openItemModal(itemId);
    });
  });

  // Bind look buttons
  document.querySelectorAll('.explore-look-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.lookId;
      if (id === 'look-1') openItemModal('item-tacchini-top');
      if (id === 'look-2') openItemModal('item-sebago-loafer');
      if (id === 'look-3') openItemModal('item-dc-window-nb');
    });
  });

  // Modal Add to Cart
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      if (!currentActiveItem) return;
      if (currentActiveItem.price == null) { showToast(`"${currentActiveItem.title}" is priced in-store \u2014 call (202) 338-7657 to reserve.`); return; }

      if (!selectedModalSize) {
        showToast(`Please select a size for the ${currentActiveItem.title} first.`);
        if (modalSizeRow) {
          modalSizeRow.classList.remove('size-attention');
          void modalSizeRow.offsetWidth;
          modalSizeRow.classList.add('size-attention');
        }
        return;
      }

      const existingIndex = cartState.findIndex(
        i => i.title === currentActiveItem.title && i.size === selectedModalSize
      );

      if (existingIndex > -1) {
        cartState[existingIndex].qty++;
      } else {
        cartState.push({
          id: currentActiveItem.id,
          title: currentActiveItem.title,
          price: currentActiveItem.price,
          size: selectedModalSize,
          qty: 1,
          img: currentActiveItem.img
        });
      }

      renderCart();
      closeProductModal();
      openCart();
      showToast(`Added "${currentActiveItem.title}" (Size ${selectedModalSize}) to closet.`);
    });
  }

  /* ==========================================================================
     Cozy Search Drawer
     ========================================================================== */
  const searchTrigger = document.getElementById('search-trigger');
  const searchModal = document.getElementById('search-modal');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  function openSearchModal() {
    searchModal.classList.add('active');
    if (searchInput) {
      searchInput.value = '';
      setTimeout(() => searchInput.focus(), 150);
    }
    document.body.style.overflow = 'hidden';
  }

  function closeSearchModal() {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (searchTrigger) searchTrigger.addEventListener('click', openSearchModal);
  if (searchClose) searchClose.addEventListener('click', closeSearchModal);

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      if (query.length < 2) {
        searchResults.innerHTML = '<div style="font-size: 0.95rem; font-family: var(--font-serif); font-style: italic; color: var(--text-light);">Try: "990v6", "Sebago", "Tacchini" or "Loafers"</div>';
        return;
      }

      const matches = Object.keys(itemDatabase).filter(key => {
        const item = itemDatabase[key];
        return item.title.toLowerCase().includes(query) || 
               item.backstory.toLowerCase().includes(query) ||
               item.category.toLowerCase().includes(query);
      });

      if (matches.length === 0) {
        searchResults.innerHTML = '<div style="font-size: 0.9rem; color: var(--text-light); font-family: var(--font-serif); font-style: italic;">No matching piece in our closet.</div>';
      } else {
        searchResults.innerHTML = '';
        matches.forEach(key => {
          const item = itemDatabase[key];
          const resultRow = document.createElement('button');
          resultRow.style.cssText = 'display: flex; align-items: center; text-align: left; gap: 1rem; width: 100%; padding: 0.6rem; border: 1px solid var(--border-vintage); background: white; margin-bottom: 0.5rem;';
          resultRow.innerHTML = `
            <img src="${item.img}" style="width: 45px; height: 45px; object-fit: cover; border-radius: 2px;">
            <div>
              <div style="font-size: 0.9rem; font-weight: 600; color: #111111;">${item.title}</div>
              <div style="font-size: 0.72rem; color: var(--primary-clay);">${item.price == null ? 'In-Store Pricing' : '$' + item.price.toFixed(2)} • ${item.category}</div>
            </div>
          `;
          resultRow.addEventListener('click', () => {
            closeSearchModal();
            openItemModal(key);
          });
          searchResults.appendChild(resultRow);
        });
      }
    });
  }

  /* ==========================================================================
     Club Newsletter Form
     ========================================================================== */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && emailInput.value) {
        showToast("Welcome to The Closet Club. Access code PRINCE1980 has been sent.");
        newsletterForm.reset();
      }
    });
  }

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeProductModal();
      closeSearchModal();
    }
  });

  // Init
  renderCart();

});

/* ==========================================================================
   THE UNDERGROUND — immersive fold-out layer + strip parallax
   Articles open as a full-screen layer (fold out); closing folds back to
   the exact scroll position. Back/forward buttons work via history state.
   Direct URL visits still render articles as standalone pages.
   ========================================================================== */
(function(){
  'use strict';

  /* ---- Strip parallax (homepage) ---- */
  var ugBg = document.querySelector('[data-ug-plx]');
  if(ugBg){
    var ugTick = false;
    var ugPlx = function(){
      if(ugTick) return; ugTick = true;
      requestAnimationFrame(function(){
        var host = ugBg.parentElement.getBoundingClientRect();
        var vh = window.innerHeight;
        if(host.bottom > 0 && host.top < vh){
          var off = (host.top + host.height/2 - vh/2) * 0.22;
          ugBg.style.translate = '0 ' + (-off).toFixed(1) + 'px';
        }
        ugTick = false;
      });
    };
    window.addEventListener('scroll', ugPlx, {passive:true});
    window.addEventListener('resize', ugPlx);
    ugPlx();
  }

  /* ---- Fold-out layer ---- */
  var layer = document.getElementById('journal-layer');
  if(!layer) return;
  var view = layer.querySelector('.jl-view');
  var scroller = layer.querySelector('.jl-scroll');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function rebase(doc, base){
    var abs = function(u){
      if(!u || /^(#|data:|https?:|mailto:|tel:)/i.test(u)) return u;
      try { return new URL(u, base).href; } catch(e){ return u; }
    };
    doc.querySelectorAll('[href]').forEach(function(el){ el.setAttribute('href', abs(el.getAttribute('href'))); });
    doc.querySelectorAll('[src]').forEach(function(el){ el.setAttribute('src', abs(el.getAttribute('src'))); });
    doc.querySelectorAll('[style]').forEach(function(el){
      var s = el.getAttribute('style');
      var out = s.replace(/url\(\s*(['"]?)(?!data:|https?:|\/)([^'")]+)\1\s*\)/gi, function(m, q, p){
        return 'url(' + q + abs(p) + q + ')';
      });
      if(out !== s) el.setAttribute('style', out);
    });
  }

  var jAssetsLoading = false;
  var jAssetWaiters = [];

  /* journal.css / journal.js are not part of the homepage bundle;
     load them once, the first time the layer opens. */
  function ensureJournalAssets(cb){
    if(window.Journal){ cb(); return; }
    jAssetWaiters.push(cb);
    if(jAssetsLoading) return;
    jAssetsLoading = true;
    var done = function(){
      var w = jAssetWaiters; jAssetWaiters = [];
      w.forEach(function(f){ try{ f(); }catch(e){} });
    };
    if(!document.querySelector('link[data-j-css]')){
      var l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'journal/journal.css';
      l.setAttribute('data-j-css', '1');
      document.head.appendChild(l);
    }
    var s = document.createElement('script');
    s.src = 'journal/journal.js';
    s.onload = done; s.onerror = done;
    document.head.appendChild(s);
  }

  function openUI(url, done){
    var base;
    try { base = new URL(url, window.location.href).href; } catch(e){ base = url; }
    fetch(url, {credentials:'same-origin'}).then(function(r){
      if(!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    }).then(function(html){
      var doc = new DOMParser().parseFromString(html, 'text/html');
      rebase(doc, base);
      var art = doc.querySelector('[data-journal-article]');
      view.innerHTML = '';
      if(art) view.appendChild(document.adoptNode(art));
      document.body.classList.add('jl-open');
      layer.classList.add('open');
      layer.setAttribute('aria-hidden', 'false');
      scroller.scrollTop = 0;
      ensureJournalAssets(function(){
        if(window.Journal && window.Journal.init){
          try{ window.Journal.init(view); }catch(e){}
        }
      });
      if(done) done(null);
    }).catch(function(err){
      /* Fall back to plain navigation if the fetch fails */
      if(done) done(err); else window.location.href = url;
    });
  }

  function closeUI(){
    if(!layer.classList.contains('open')) return;
    layer.classList.remove('open');
    document.body.classList.remove('jl-open');
    layer.setAttribute('aria-hidden', 'true');
  }

  document.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('a[data-journal]') : null;
    if(!a) return;
    /* Inside the layer, journal links swap the layer content. */
    e.preventDefault();
    var url = a.getAttribute('href');
    openUI(url, function(err){
      if(err){ window.location.href = url; return; }
      history.pushState({journal:url}, '', url);
    });
  });

  layer.querySelector('.jl-close').addEventListener('click', function(){
    history.back();
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && layer.classList.contains('open')) history.back();
  });

  window.addEventListener('popstate', function(e){
    var st = (e.state || {});
    if(st.journal){
      if(!layer.classList.contains('open') || view.dataset.current !== st.journal){
        view.dataset.current = st.journal;
        openUI(st.journal);
      }
    } else {
      closeUI();
      delete view.dataset.current;
    }
  });
})();
