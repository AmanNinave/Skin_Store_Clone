var amanninave =""
var Wishlst = localStorage.getItem("wishlist") || [];


var userN = localStorage.getItem("username");

document.querySelector("#userName").textContent = userN;



displayData(arr);

function displayData(showdata) {

    showdata.map(function (elem) {

        var skbox = document.createElement("div");

        var imgage = document.createElement("img");
        imgage.setAttribute("src", elem.img_url);
        imgage.addEventListener("mouseover", function () {
            changeImage(elem.alt_url,imgage);
        });
        imgage.addEventListener("mouseout", function () {
            orgImage(elem.img_url,imgage);
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

// var MCart = JSON.parse(localStorage.getItem("MWCart")) || [];


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

    // location.reload();

    console.log(rs);
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
        var temp = "Clenser";

        return temp == elem.Category;

    })

    displayData(Data1);
}


document.querySelector("#Skincare-Dropdown > button:nth-child(2)").addEventListener("click", careFilter2)

function careFilter2() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "Exfoliator";

        return temp == elem.Category;

    })

    displayData(Data1);
}

document.querySelector("#Skincare-Dropdown > button:nth-child(3)").addEventListener("click", careFilter3)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(3) ").addEventListener("click", careFilter3)
function careFilter3() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "Eyecare";

        return temp == elem.Category;

    })

    displayData(Data1);
}

document.querySelector("#Skincare-Dropdown > button:nth-child(4)").addEventListener("click", careFilter4)

function careFilter4() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "Gel";

        return temp == elem.Category;

    })

    displayData(Data1);
}


document.querySelector("#Skincare-Dropdown > button:nth-child(5)").addEventListener("click", careFilter5)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(5) ").addEventListener("click", careFilter5)

function careFilter5() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "Lipcare";

        return temp == elem.Category;

    })

    displayData(Data1);
}

document.querySelector("#Skincare-Dropdown > button:nth-child(6)").addEventListener("click", careFilter6)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(2) ").addEventListener("click", careFilter6)
function careFilter6() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "Moisturizer";

        return temp == elem.Category;

    })

    displayData(Data1);
}

document.querySelector("#Skincare-Dropdown > button:nth-child(7)").addEventListener("click", careFilter7)
document.querySelector("#ProductsDisplaySec > div:nth-child(1) > div > button:nth-child(4) ").addEventListener("click", careFilter7)
function careFilter7() {

    document.querySelector("#ProductsDisplayGrid").textContent = "";

    var Data1 = arr.filter(function (elem) {
        var temp = "Serum";

        return temp == elem.Category;

    })

    displayData(Data1);
}

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

