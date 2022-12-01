/*
color category - 

nude
pink
white
black
brown
gold
bronze
*/

var arr = [
    {
        name : "By Terry Ombre Blackstar Eye Shadows 1 .64g (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307158-4054925754510135.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307161-1564900075517358.jpg", 
        color : "black",
        strikedoffPrice : "38",
        sellingPrice : "26.6",
        rating : "4.9",
        link : "https://www.skinstore.com/by-terry-ombre-blackstar-eye-shadows-1-.64g-various-shades/11307158.html"
    },
    {
        name : "By Terry Terrybly Mascara 8ml (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11306998-2114934822977206.jpg",
        alt_url : "https://static.thcdn.com/images/small/webp//productimg/130/130/11306998-6274934822500413.jpg", 
        color : "black",
        strikedoffPrice : "45",
        sellingPrice : "31.5",
        rating : "4.4",
        link : "https://www.skinstore.com/by-terry-terrybly-mascara-8ml-various-shades/11306998.html"
    },

    {
        name : "By Terry Crayon Khol Terrybly Eye Liner 1.2g (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307198-1734976741223642.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307199-7764900076954358.jpg", 
        color : "black",
        strikedoffPrice : "30",
        sellingPrice : "21",
        rating : "3.9",
        link : "https://www.skinstore.com/by-terry-crayon-khol-terrybly-eye-liner-1.2g-various-shades/11307198.html"
    },

    {
        name : "By Terry Ombre Blackstar Eye Shadows 1 .64g (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307158-4054925754510135.jpg",
        alt_url : "https://static.thcdn.com/images/small/webp//productimg/130/130/11307161-8464900075630557.jpg", 
        color : "bronze",
        strikedoffPrice : "38",
        sellingPrice : "26.6",
        rating : "4.5",
        link : "https://www.skinstore.com/by-terry-ombre-blackstar-eye-shadows-1-.64g-various-shades/11307158.html"
    },
    {
        name : "By Terry Crayon Khol Terrybly Eye Liner 1.2g (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307198-3714976741243292.jpg",
        alt_url : "https://static.thcdn.com/images/small/webp//productimg/130/130/11307199-1024900076888175.jpg", 
        color : "bronze",
        strikedoffPrice : "30",
        sellingPrice : "21",
        rating : "3.1",
        link : "https://www.skinstore.com/by-terry-crayon-khol-terrybly-eye-liner-1.2g-various-shades/11307198.html"
    },
    {
        name : "By Terry Ombre Blackstar Eye Shadows 1 .64g (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307158-4054925754510135.jpg",
        alt_url : "https://static.thcdn.com/images/small/webp//productimg/130/130/11307158-1654929647795949.jpg", 
        color : "gold",
        strikedoffPrice : "38",
        sellingPrice : "26.6",
        rating : "3.6",
        link : "https://www.skinstore.com/by-terry-ombre-blackstar-eye-shadows-1-.64g-various-shades/11307158.html"
    },
    {
        name : "By Terry Hyaluronic Tinted Hydra-Powder 10g (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12262426-7534949835034527.jpg",
        alt_url : "https://static.thcdn.com/images/small/webp//productimg/130/130/12262426-1624949835089913.jpg", 
        color : "brown",
        strikedoffPrice : "54",
        sellingPrice : "37.8",
        rating : "3.8",
        link : "https://www.skinstore.com/by-terry-hyaluronic-tinted-hydra-powder-10g-various-shades/12262426.html"
    },
    {
        name : "By Terry Terrybly Densiliss Compact Face Powder",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307110-1014896453782799.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307110-1914896895291455.jpg", 
        color : "brown",
        strikedoffPrice : "95",
        sellingPrice : "66.5",
        rating : "5",
        link : "https://www.skinstore.com/by-terry-terrybly-densiliss-compact-face-powder/11307110.html"
    },
    {
        name : "By Terry Ombre Blackstar Eye Shadows 1 .64g (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307161-1564900075517358.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307161-7554900075683576.jpg", 
        color : "brown",
        strikedoffPrice : "38",
        sellingPrice : "26.6",
        rating : "4.6",
        link : "https://www.skinstore.com/by-terry-ombre-blackstar-eye-shadows-1-.64g-various-shades/11307158.html"
    },
    {
        name : "By Terry LIP-EXPERT MATTE Liquid Lipstick (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12023959-9174971580903983.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12023959-6664971583132062.jpg", 
        color : "nude",
        strikedoffPrice : "34",
        sellingPrice : "23.8",
        rating : "3.7",
        link : "https://www.skinstore.com/by-terry-lip-expert-matte-liquid-lipstick-various-shades/12023959.html"
    },
    {
        name : "By Terry LIP-EXPERT SHINE Liquid Lipstick (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12023976-5544971581100720.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12023976-1704971581163003.jpg", 
        color : "nude",
        strikedoffPrice : "34",
        sellingPrice : "23.8",
        rating : "3.6",
        link : "https://www.skinstore.com/by-terry-lip-expert-shine-liquid-lipstick-various-shades/12023976.html"
    },
    {
        name : "By Terry Terrybly Densiliss Foundation 30ml (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307141-9234994374156659.jpg",
        alt_url : "https://static.thcdn.com/images/small/webp//productimg/130/130/11307141-1274994374209849.jpg", 
        color : "nude",
        strikedoffPrice : "110",
        sellingPrice : "81.2",
        rating : "4.9",
        link : "https://www.skinstore.com/by-terry-terrybly-densiliss-foundation-30ml-various-shades/11307141.html"
    },
    {
        name : "By Terry Cover Expert SPF15 Foundation 35ml (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307187-1504871259068250.jpg",
        alt_url : "", 
        color : "nude",
        strikedoffPrice : "58",
        sellingPrice : "40.6",
        rating : "3.1",
        link : "https://www.skinstore.com/by-terry-cover-expert-spf15-foundation-35ml-various-shades/11307187.html"
    },
    {
        name : "By Terry Hyaluronic Sheer Rouge Lipstick 3g (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307091-1964971325480389.jpg",
        alt_url : "", 
        color : "nude",
        strikedoffPrice : "38",
        sellingPrice : "26.8",
        rating : "3.5",
        link : "https://www.skinstore.com/by-terry-hyaluronic-sheer-rouge-lipstick-3g-various-shades/11307091.html"
    },
    {
        name : "By Terry Cellularose CC Serum 30ml (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307081-2004925754454704.jpg",
        alt_url : "https://static.thcdn.com/images/small/webp//productimg/130/130/11307084-1794900078856994.jpg", 
        color : "white",
        strikedoffPrice : "100",
        sellingPrice : "82",
        rating : "3.7",
        link : "https://www.skinstore.com/by-terry-cellularose-cc-serum-30ml-various-shades/11307081.html"
    },
    {
        name : "By Terry Terrybly Densiliss Compact Contouring - Beige Contrast",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307272-9554895689656531.jpg",
        alt_url : "", 
        color : "pink",
        strikedoffPrice : "95",
        sellingPrice : "66.5",
        rating : "4.0",
        link : "https://www.skinstore.com/by-terry-terrybly-densiliss-compact-contouring-beige-contrast/11307272.html"
    },
    {
        name : "By Terry Terryfic Glow Brightening CC Serum Duo",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13882304-2924989460353522.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13882304-7634989458585010.jpg", 
        color : "pink",
        strikedoffPrice : "79",
        sellingPrice : "55.3",
        rating : "4.5",
        link : "https://www.skinstore.com/by-terry-terryfic-glow-brightening-cc-serum-duo/13882304.html"
    },
    {
        name : "By Terry Baume De Rose Le Stick Lèvres Sunny Nude",
        img_url : "https://static.thcdn.com/images/large/webp/productimg/1600/1600/12109718-2044673474384982.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp/productimg/1600/1600/12109718-1984673474649096.jpg", 
        color : "black",
        strikedoffPrice : "34",
        sellingPrice : "23.8",
        rating : "3.1",
        link : "https://www.skinstore.com/by-terry-baume-de-rose-le-stick-levres-sunny-nude/12109718.html"
    },
    {
        name : "By Terry Hyaluronic Hydra-Primer - Travel Size (Worth $20.00)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12462204-1804924711349649.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12462204-6854925388393180.jpg", 
        color : "black",
        strikedoffPrice : "20",
        sellingPrice : "14",
        rating : "3.4",
        link : "https://www.skinstore.com/by-terry-hyaluronic-hydra-primer-travel-size/12462204.html"
    },
    {
        name : "By Terry Terryfic Glow Beauty Favorites Gift Box",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13882308-1604989459230730.jpg",
        alt_url : "https://static.thcdn.com/images/small/webp//productimg/130/130/13882308-1314989459584193.jpg", 
        color : "gold",
        strikedoffPrice : "39",
        sellingPrice : "27.3",
        rating : "3.0",
        link : "https://www.skinstore.com/by-terry-terryfic-glow-beauty-favorites-gift-box/13882308.html"
    },
    {
        name : "By Terry Terryfic Glow Stunning Eyes Cracker",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13882305-1594989458679063.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13882305-1444989458978397.jpg", 
        color : "black",
        strikedoffPrice : "44",
        sellingPrice : "30.8",
        rating : "2.4",
        link : "https://www.skinstore.com/by-terry-terryfic-glow-stunning-eyes-cracker/13882305.html"
    },
    {
        name : "By Terry Hyaluronic Hydra Foundation 1 oz (Various Shades)",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12504932-1004749452253981.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12504932-1034749452359392.jpg", 
        color : "black",
        strikedoffPrice : "59",
        sellingPrice : "41.3",
        rating : "5",
        link : "https://www.skinstore.com/by-terry-hyaluronic-hydra-foundation-1-oz-various-shades/12734195.html"
    },
    {
        name : "By Terry Terryfic Glow Baume De Rose Lip Care Essentials",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13882307-8644989458945529.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13882307-1834989459143775.jpg", 
        color : "black",
        strikedoffPrice : "54",
        sellingPrice : "37.8",
        rating : "3.3",
        link : "https://www.skinstore.com/by-terry-terryfic-glow-baume-de-rose-lip-care-essentials/13882307.html"
    },
    {
        name : "By Terry Terryfic Glow 24 Day Advent Calendar",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13889376-1964991514557580.jpg",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13889376-1534989459950757.jpg", 
        color : "white",
        strikedoffPrice : "250",
        sellingPrice : "115.5",
        rating : "4.6",
        link : "https://www.skinstore.com/by-terry-terryfic-glow-24-day-advent-calendar/13889376.html"
    }
    
]