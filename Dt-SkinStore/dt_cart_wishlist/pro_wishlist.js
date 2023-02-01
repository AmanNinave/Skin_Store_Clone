// div
// button (X)
// img
// desc
// price
// button (add to cart)

var wishList_Items = JSON.parse(localStorage.getItem("wishlist")) || [];
// console.log("q123");
// window.addEventListener("load", function(){
//     displayWishes(wishList_Items);
// });

var totalCount = 0;

 displayWishes(wishList_Items);

function displayWishes(volvo){
    document.getElementById("display").textContent = "";
    volvo.map(function (elem, index){
        totalCount++;
        // console.log(totalCount);

        var wishdivs = document.createElement("div"); 
        wishdivs.classList.add("wish_divs");    

        var crossdiv = document.createElement("div");
        var cross = document.createElement("button");      
        cross.textContent = "X";

        cross.addEventListener("click", function(){
            removeProduct(index);
        });
        cross.classList.add("w_cross_cls");
        crossdiv.append(cross);


        var imgdiv = document.createElement("div");
        var image = document.createElement("img");
        image.setAttribute("src", elem.img_url);
        // image.setAttribute("src", img_url);
        image.setAttribute("alt", elem.name);
        // image.setAttribute("class", "images");
        image.classList.add("wish_imgcls");
        imgdiv.append(image);
        
        var desdiv = document.createElement("div");
        var desname = document.createElement("p");
        desname.textContent = elem.name;
        desname.classList.add("w_p_cls");
        desdiv.append(desname);
        // console.log(desname);

        var pricediv = document.createElement("div");
        var price = document.createElement("p");
        price.textContent = "$" +elem.sellingPrice;
        price.classList.add("w_ssp_cls");
        pricediv.append(price);


        var add_div = document.createElement("div");
        var place = document.createElement("button");      
        place.textContent = "Add To Cart";
        place.classList.add("place_cls");
        place.addEventListener("click", function(){
            addCart(elem);
        })
        add_div.append(place);


        
        
        wishdivs.append(crossdiv, imgdiv, desdiv, pricediv, add_div);
        
        document.getElementById("display").append(wishdivs);
    });
}
var c = document.querySelector("#count");
c.textContent = Number(totalCount);

function removeProduct(index){
    wishList_Items.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishList_Items));
    location.reload();
}

var AddToCart = JSON.parse(localStorage.getItem("cartdata")) || [];


var rs = -1;

function addCart(elem) {
  
  
    // location.reload();
    var check = false;
    var idxc = -1;
    AddToCart.map(function (ele, idx) {
      // alert("Item Added to Cart");
        if (ele.name == elem.name) {
            check = true;
            idxc = idx;
        }

    });

    rs = Number(elem.qty);


    if (check) {
        elem.qty = Number(elem.qty) + Number(1);
        AddToCart.splice(idxc, 1);
        // location.reload();
    } else {
      console.log("ele")
      // alert("item already")
        elem.qty = 1;
    }

    AddToCart.push(elem);

    localStorage.setItem("cartdata", JSON.stringify(AddToCart));
    if(rs === -1){
      alert("Item Added to Cart");
    }else{
      alert("item already")
    }

    // location.reload();

   // console.log(rs);
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<       Applying sorting to skincare products         >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.querySelector("#filteredList").addEventListener("change", sortName);
function sortName() {

    document.querySelector("#display").textContent = "";

    var temp = document.querySelector("#filteredList").value;
   

    if (temp == "opel") {
      console.log("12");
        wishList_Items.sort(function (a, b) {
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1; }
        else { return 0; };
       
      })
      displayWishes(wishList_Items);
    } else if (temp == "d") {

      location.reload();
    }
   
   

}

document.querySelector("#filteredList").addEventListener("change", PriceSort);
 
function PriceSort() {

  document.querySelector("#display").textContent = "";

  var temp = document.querySelector("#filteredList").value;
  

  if(temp == "saab") {
    wishList_Items.sort(function( a , b ){
      return a.sellingPrice - b.sellingPrice;
    })
    displayWishes(wishList_Items);
  }else if (temp == "audi") {
    wishList_Items.sort(function ( a , b ) {
      return b.sellingPrice - a.sellingPrice;
    })
    displayWishes(wishList_Items);
  }
  else if(temp == "d") {
    displayWishes(wishList_Items);
   }

}