


displayData(arr);

function displayData(showdata) {

    showdata.map(function (elem, index) {

        var skbox = document.createElement("div");

        var imgage = document.createElement("img");
        imgage.setAttribute("src", elem.img_url);
        imgage.addEventListener("mouseover", function () {
            changeImage(elem.alt_url,imgage);
        });
        imgage.addEventListener("mouseout", function () {
            orgImage(elem.img_url,imgage);
        });
        imgage.addEventListener("click", function () {
            GotoAsproduct(elem,index);
        });

        var namebox = document.createElement("div");

        var nme = document.createElement("h4");
        nme.textContent = elem.name;


        var disc = document.createElement("p");
        disc.textContent = elem.gift;

        var priceBox = document.createElement("div");

        var sop = document.createElement("P");
        sop.textContent = " MSRP: $ " + elem.StrikedoffPrice;

        var sp = document.createElement("p");
        sp.textContent = "$ " + elem.sellingPrice;


        var btn = document.createElement("button")
        btn.textContent = "Add to Cart";
        btn.addEventListener("click", function () {
            addCart(elem);
        });


        namebox.append(nme);
        priceBox.append(sop, sp);
        skbox.append(imgage, namebox, disc, priceBox, btn);
        document.getElementById("ProductsDisplayGrid").append(skbox);

    });

}

function changeImage(aama,baba) {
    if(aama != "" && aama!= " "){
        baba.src = aama;
    }
}

function orgImage(aama,baba) {
    if(aama != "" && aama!= " "){
        baba.src = aama;
    }
}


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Adding Element to cart >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var AddToCart = JSON.parse(localStorage.getItem("cartdata")) || [];


var rs = -1;

function addCart(elem) {
    alert("Item Added to Cart");
    location.reload();
    var check = false;
    var idxc = -1;
    AddToCart.map(function (ele, idx) {

        if (ele.name == elem.name) {
            check = true;
            idxc = idx;
        }

    });

    rs = Number(elem.qty);


    if (check) {
        elem.qty = Number(elem.qty) + Number(1);
        AddToCart.splice(idxc, 1);
    } else {
        elem.qty = 1;
    }

    AddToCart.push(elem);

    localStorage.setItem("cartdata", JSON.stringify(AddToCart));

    location.reload();

   // console.log(rs);
}

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

    var Data1 = arr.filter(function (elem) {
        var temp = "Men";

        return temp == elem.Category;

    })

    displayData(Data1);
}


document.querySelector("#Skincare-Dropdown > button:nth-child(2)").addEventListener("click", careFilter2)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(2) ").addEventListener("click", careFilter2)

function careFilter2() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "Women";

        return temp == elem.Category;

    })

    displayData(Data1);
}

document.querySelector("#Skincare-Dropdown > button:nth-child(3)").addEventListener("click", careFilter3)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(3) ").addEventListener("click", careFilter3)
function careFilter3() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "Boys";

        return temp == elem.Category;

    })

    displayData(Data1);
}

document.querySelector("#Skincare-Dropdown > button:nth-child(4)").addEventListener("click", careFilter4)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(4) ").addEventListener("click", careFilter4)

function careFilter4() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "Girls";

        return temp == elem.Category;

    })

    displayData(Data1);
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Rating Filter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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