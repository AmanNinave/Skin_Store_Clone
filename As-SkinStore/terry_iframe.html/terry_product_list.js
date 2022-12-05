


// displayData(arr);

// function displayData(showdata) {

//     showdata.map(function (elem, index) {

//         var skbox = document.createElement("div");

//         var imgage = document.createElement("img");
//         imgage.setAttribute("src", elem.img_url);
//         imgage.addEventListener("mouseover", function () {
//             changeImage(elem.alt_url,imgage);
//         });
//         imgage.addEventListener("mouseout", function () {
//             orgImage(elem.img_url,imgage);
//         });
//         imgage.addEventListener("click", function () {
//             GotoAsproduct(elem,index);
//         });

//         var namebox = document.createElement("div");

//         var nme = document.createElement("h4");
//         nme.textContent = elem.name;


//         var disc = document.createElement("p");
//         disc.textContent = elem.gift;

//         var priceBox = document.createElement("div");

//         var sop = document.createElement("P");
//         sop.textContent = " MSRP: $ " + elem.StrikedoffPrice;

//         var sp = document.createElement("p");
//         sp.textContent = "$ " + elem.sellingPrice;


//         var btn = document.createElement("button")
//         btn.textContent = "Add to Cart";
//         btn.addEventListener("click", function () {
//             addCart(elem);
//         });


//         namebox.append(nme);
//         priceBox.append(sop, sp);
//         skbox.append(imgage, namebox, disc, priceBox, btn);
//         document.getElementById("ProductsDisplayGrid").append(skbox);

//     });

// }

// function changeImage(aama,baba) {
//     if(aama != "" && aama!= " "){
//         baba.src = aama;
//     }
// }

// function orgImage(aama,baba) {
//     if(aama != "" && aama!= " "){
//         baba.src = aama;
//     }
// }

var container = document.querySelector("#ProductsDisplayGrid")

displayData(arr)

function displayData(arr){
    arr.forEach(elem => {
        var tcard = document.createElement("div")
        tcard.classList.add("t-card-class")

        var timgDiv = document.createElement("div")

            var timg = document.createElement("img")
            timg.setAttribute("src", elem.img_url)
            timg.classList.add("t-img")
            timg.addEventListener("mouseover", function() {
                changeImageOnHover(timg, elem.alt_url )
            })

            timg.addEventListener("mouseout", function() {
                changeImageOnOut(timg, elem.img_url )
            })

            timg.addEventListener("click", function() {
                goToNextPage(timg, elem )
            })


        timgDiv.append(timg)
        timgDiv.classList.add("t-img-Top")

        var tinfoMiddle = document.createElement("div")
            var tname = document.createElement("h2")
            tname.textContent = elem.name
            tname.classList.add("t-card-name")

            var toffer = document.createElement("button")
            toffer.textContent = "Save 30%"
            toffer.classList.add("t-card-offer")

            var tstrikedoffPricePara = document.createElement("p")
                var tstrikedoffPrice = document.createElement("span")
                tstrikedoffPrice.textContent = "$" + elem.strikedoffPrice
                tstrikedoffPrice.style.textDecoration = "line-through"
        
            tstrikedoffPricePara.textContent = "MSRP : " 
            tstrikedoffPricePara.append(tstrikedoffPrice)
            tstrikedoffPricePara.classList.add("t-card-strikedoff-para")

            var tpriceNow = document.createElement("h3")
            tpriceNow.textContent = "$" +  elem.sellingPrice
            tpriceNow.classList.add("t-card-price-now")

        tinfoMiddle.append(tname, toffer, tstrikedoffPricePara, tpriceNow)
        tinfoMiddle.classList.add("t-info-Middle")

        var tbuttonBottom = document.createElement("div")

            var tbuy = document.createElement("button")
            tbuy.textContent = "ADD TO CART"
            tbuy.addEventListener("click", function (){
                addCardToLocalStorage(elem)
            })
            tbuy.classList.add("t-button")

        tbuttonBottom.append(tbuy)
        tbuttonBottom.classList.add("t-button-Bottom")

        tcard.append(timgDiv, tinfoMiddle, tbuttonBottom)

        container.append(tcard)
    });

}

    /* function store selected card to local storage */ 

var cartdataArray = JSON.parse(localStorage.getItem("cartdata")) || [];

    function addCardToLocalStorage(elem){
        var pname = elem.name
        alert(pname + " product added to the cart !")

        var check = false;

        cartdataArray.forEach(function (ele, idx) {
        
            if (ele.name == elem.name) {
                check = true;
            }
        
            });
        
        if(!check)
            cartdataArray.push(elem);
        
        localStorage.setItem("cartdata", JSON.stringify(cartdataArray));
        location.reload();
    }

/* function to change image on mouse over if image present */

function changeImageOnHover(pimage, nextUrl){
    console.log("we trying to chnage image")
    if(nextUrl != "" && nextUrl != " "){
        pimage.src = nextUrl
    }
}

/* function to change back image to orignal image on mouse out */

function changeImageOnOut(pimage, ogUrl){
    if(ogUrl != "" && ogUrl != " "){
        pimage.src = ogUrl
    }
}

    var objDataTerry = [
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
            name : "By Terry Hyaluronic Tinted Hydra-Powder 10g (Various Shades)",
            img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12262426-7534949835034527.jpg",
            alt_url : "https://static.thcdn.com/images/small/webp//productimg/130/130/12262426-1624949835089913.jpg", 
            color : "brown",
            strikedoffPrice : "54",
            sellingPrice : "37.8",
            rating : "3.8",
            link : "https://www.skinstore.com/by-terry-hyaluronic-tinted-hydra-powder-10g-various-shades/12262426.html"
        }
    
    ]

function goToNextPage(img, elem){
    if(elem.name == objDataTerry[0].name){
        window.location.href = "./terry_final_product_page2.html";
    }

    if(elem.name == objDataTerry[1].name){
        window.location.href = "./terry_final_product_page1.html";
    }


    if(elem.name == objDataTerry[2].name){
        window.location.href = "";
    }

}


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Adding Element to cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// var rs = -1;

// function addCart(elem) {
//     alert("Item Added to Cart");
//     location.reload();
//     var check = false;
//     var idxc = -1;
//     AddToCart.map(function (ele, idx) {

//         if (ele.name == elem.name) {
//             check = true;
//             idxc = idx;
//         }

//     });

//     rs = Number(elem.qty);

//     AddToCart.push(elem);

//     localStorage.setItem("cartdata", JSON.stringify(AddToCart));

//     location.reload();

//    // console.log(rs);
// }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ---Used this below data for testing -- ?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// var AddtoCart = JSON.parse(localStorage.getItem("cartdata")) || [] ;

// function addCart(elem) {
//     alert("Item Added to Cart");
//         location. reload();
//         var check = false;
//         var idxc = -1;

//         AddtoCart.map(function (ele, idx) {
    
//           if (ele.name == elem.name) {
//             check = true;
//             idxc = idx;
//           }
    
//         });
    
//         if (check) {
//           elem.qty = Number(elem.qty) + Number(1);
//           AddtoCart.splice(idxc, 1);
//         } else {
//           elem.qty = 1;
//         }
    
//         AddtoCart.push(elem);
    
//         localStorage.setItem("cartdata", JSON.stringify(AddtoCart));
       
//         location. reload();
//         //console.log("aman");
//       }
    

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ---Used this Above data for testing -- ?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Redirecting form cart  to product page  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function GotoProductpage () {
    
    var x = document.querySelector("#AnAccount");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    x.style.zIndex = "10";

}


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<       Applying Filter to price         >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.querySelector("#Price-Dropdown > button:first-child").addEventListener("click", priceFilter1);
function priceFilter1() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var PriceData = arr.filter(function (elem) {
        var temp = Number(elem.sellingPrice);

        return temp >= 20 && temp <= 50;

    })


    displayData(PriceData);
}

document.querySelector("#Price-Dropdown > button:nth-child(2)").addEventListener("click", priceFilter2);
function priceFilter2() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var PriceData = arr.filter(function (elem) {
        var temp = Number(elem.sellingPrice);

        return temp >= 50 && temp <= 100;

    })

    displayData(PriceData);
}

document.querySelector("#Price-Dropdown > button:nth-child(3)").addEventListener("click", priceFilter3);
function priceFilter3() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var PriceData = arr.filter(function (elem) {
        var temp = Number(elem.sellingPrice);

        return temp >= 100 && temp <= 150;

    })


    displayData(PriceData);
}

document.querySelector("#Price-Dropdown > button:nth-child(4)").addEventListener("click", priceFilter4);
function priceFilter4() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var PriceData = arr.filter(function (elem) {
        var temp = Number(elem.sellingPrice);

        return temp >= 150;

    })


    displayData(PriceData);
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<       Applying Filter to skincare products         >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(1) ").addEventListener("click", careFilter1)
 document.querySelector("#Skincare-Dropdown > button:nth-child(1)").addEventListener("click", careFilter1)

function careFilter1() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    console.log("entered nude functon ")

    var Data1 = arr.filter(function (elem) {
        var temp = "nude";

        return temp == elem.color;

    })

    console.log(Data1)

    displayData(Data1);
}


document.querySelector("#Skincare-Dropdown > button:nth-child(2)").addEventListener("click", careFilter2)

function careFilter2() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "pink";

        return temp == elem.color;

    })

    displayData(Data1);
}

document.querySelector("#Skincare-Dropdown > button:nth-child(3)").addEventListener("click", careFilter3)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(3) ").addEventListener("click", careFilter3)
function careFilter3() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "white";

        return temp == elem.color;

    })

    displayData(Data1);
}

document.querySelector("#Skincare-Dropdown > button:nth-child(4)").addEventListener("click", careFilter4)

function careFilter4() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "black";

        return temp == elem.color;

    })

    displayData(Data1);
}


document.querySelector("#Skincare-Dropdown > button:nth-child(5)").addEventListener("click", careFilter5)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(5) ").addEventListener("click", careFilter5)

function careFilter5() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "brown";

        return temp == elem.color;

    })

    displayData(Data1);
}

document.querySelector("#Skincare-Dropdown > button:nth-child(6)").addEventListener("click", careFilter6)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(2) ").addEventListener("click", careFilter6)
function careFilter6() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "gold";

        return temp == elem.color;

    })

    displayData(Data1);
}

document.querySelector("#Skincare-Dropdown > button:nth-child(7)").addEventListener("click", careFilter7)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(4) ").addEventListener("click", careFilter7)
function careFilter7() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "bronze";

        return temp == elem.color;

    })

    displayData(Data1);
}

/* ---------------------------------- Rating drop down button method ---------------------- */


document.querySelector("#Rating-Dropdown > button:nth-child(1)").addEventListener("click", reFilter1)
function reFilter1() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = Number(elem.rating);

        return temp >= 2 && temp <= 3;


    })

    displayData(Data1);
}

document.querySelector("#Rating-Dropdown > button:nth-child(2)").addEventListener("click", reFilter2)
function reFilter2() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = Number(elem.rating);

        return temp >= 3 && temp <= 4;


    })

    displayData(Data1);
}

document.querySelector("#Rating-Dropdown > button:nth-child(3)").addEventListener("click", reFilter3)
function reFilter3() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = Number(elem.rating);

        return temp >= 4 && temp <= 5;


    })

    displayData(Data1);
}


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<       Applying sorting to skincare products         >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.querySelector("#SortingProductsAn").addEventListener("change", sortName);
function sortName() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var temp = document.querySelector("#SortingProductsAn").value;
   

    if (temp == "ATZ") {
      arr.sort(function (a, b) {
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1; }
        else { return 0; };

      })

    } else if (temp == "d") {

      location.reload();
    }

    displayData(arr);

  }

  document.querySelector("#SortingProductsAn").addEventListener("change", PriceSort);
 
  function PriceSort() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var temp = document.querySelector("#SortingProductsAn").value;
    

    if(temp == "PLH") {
      arr.sort(function( a , b ){
        return a.sellingPrice - b.sellingPrice;
      })
      displayData(arr);
    }else if (temp == "PHL") {
      arr.sort(function ( a , b ) {
        return b.sellingPrice - a.sellingPrice;
      })
      displayData(arr);
    }
    else if(temp == "d") {
        displayData(arr);
     }

  }


  document.querySelector("#SortingProductsAn").addEventListener("change", RatingSort);
 
  function RatingSort() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var temp = document.querySelector("#SortingProductsAn").value;
    

    if(temp == "Rating") {
      arr.sort(function( a , b ){
        return a.sellingPrice - b.sellingPrice;
      })

    }else if (temp == "PHL") {
      arr.sort(function ( a , b ) {
        return b.sellingPrice - a.sellingPrice;
      })
    }
    

    displayData(arr);
  }

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  Fro redirecting to productpage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var STfinalPpage = [
    {    
    name : "SkinMedica TNS Advanced+ Serum 1oz",
    img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12596429-3594871019700125.jpg",
    alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12596429-7834775946032493.jpg",
    gift : "20% off + $135 SkinMedica Gift",
    StrikedoffPrice :  "295"  ,
    sellingPrice : "236" ,
    Category : "Serum" ,
    rating :  "4.7",
    link : "https://www.skinstore.com/skinmedica-tns-advanced-serum-1oz/12596429.html"
        },

    {   name : "SkinMedica LYTERA 2.0 Pigment Correcting Serum and Retinol Complex 0.5 (Worth $231)",
    img_url : "https://static.thcdn.com/images/large/webp/productimg/1600/1600/11492784-6204494372463164.jpg",
    alt_url : "https://static.thcdn.com/images/large/webp/productimg/1600/1600/11492784-1364494372613290.jpg",
    gift : "20% off + $135 SkinMedica Gift",
    StrikedoffPrice :  "226.5"  ,
    sellingPrice : "181.2" ,
    Category : "Serum" ,
    rating :  "2.8",
    link : "https://www.skinstore.com/skinmedica-lytera-2.0-pigment-correcting-serum-and-retinol-complex-0.5/11492784.html"
        },

    {   name : "SkinMedica TNS Eye Repair (0.5oz)",
    img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289683-2074871019620370.jpg",
    alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289683-1424866649587504.jpg",
    gift : "20% off + $135 SkinMedica Gift",
    StrikedoffPrice :  "106"  ,
    sellingPrice : "84.4" ,
    Category : "Eyecare" ,
    rating :  "3.5",
    link : "https://www.skinstore.com/skinmedica-tns-eye-repair/11289683.html"
        },
        
    {   name : "SkinMedica AHA/BHA Exfoliating Cleanser (6oz)",
    img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289657-9384876690289403.jpg",
    alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289657-7504876690381737.jpg",
    gift : "20% off + $135 SkinMedica Gift",
    StrikedoffPrice :  "48"  ,
    sellingPrice : "38.4" ,
    Category : "Exfoliator" ,
    rating :  "4.8",
    link : "https://www.skinstore.com/skinmedica-aha-bha-exfoliating-cleanser/11289657.html"
        }
]



function  GotoAsproduct(elem,index) {

    
            if( STfinalPpage[0].name == elem.name ){
                window.location.href = "./../../As-SkinStore/final_product_page/final_product_page.html";
            }
            if(STfinalPpage[1].name == elem.name){
                window.location.href = "./../../As-SkinStore/final_product_page/final_product_page.html";
            }
            if(STfinalPpage[2].name == elem.name){
                window.location.href = "./../../As-SkinStore/final_product_page/final_product_page.html";
            }
            if(STfinalPpage[3].name == elem.name){
                window.location.href = "./../../As-SkinStore/final_product_page/final_product_page_bha.html";
            }
            
    
}