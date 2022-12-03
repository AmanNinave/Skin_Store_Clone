var Wishlst = localStorage.getItem("wishlist") || [];
console.log(arr);
 var dataofaddedcart = JSON.parse(localStorage.getItem("cartdata")) || [];

window.addEventListener("load", function(){
    displayData(dataofaddedcart);
});





var totally_total = 0;

// displayData(dataofaddedcart);

function displayData(dataofaddedcart){
    console.log("eneteredfunction")
    var sub = document.querySelector("#subtotal");
    console.log("check", sub);
    dataofaddedcart.map(function (elem, index){
        // console.log("123");

        var cartdivs = document.createElement("div"); 
        cartdivs.classList.add("cart_divs");    

        var imgdiv = document.createElement("div");
        var image = document.createElement("img");
        // var img_url = "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289657-9384876690289403.jpg";
        image.setAttribute("src", elem.img_url);
        // image.setAttribute("src", img_url);
        image.setAttribute("alt", elem.name);
        // image.setAttribute("class", "images");
        image.classList.add("imgcls");
        imgdiv.append(image);
        
        var desdiv = document.createElement("div");
        var desname = document.createElement("p");
        desname.textContent = elem.name;
        desname.classList.add("p_cls");
        desdiv.append(desname);
        // console.log(desname);

        var pricediv = document.createElement("div");
        var price = document.createElement("p");
        price.textContent = "$" +elem.sellingPrice;
        price.classList.add("sp_cls");
        pricediv.append(price);
        

        var decramtdiv = document.createElement("div");
        var damt = document.createElement("button");
        damt.textContent = "-";

        damt.addEventListener("click", function(){
            decrease_qty(qty, elem.sellingPrice, total, sub, index);
        });

        damt.classList.add("dec_cls");
        decramtdiv.append(damt);

        var qtydiv = document.createElement("div");
        var qty = document.createElement("p");
        qty.textContent = Number(1);
        qty.classList.add("q_cls");
        qtydiv.append(qty);

        var incramtdiv = document.createElement("div");
        var iamt = document.createElement("button");
        iamt.textContent = "+";
        
        iamt.addEventListener("click", function(){
            increase_qty(qty, elem.sellingPrice, total, sub);
        });
        iamt.classList.add("inc_cls");
        incramtdiv.append(iamt);

        var ttldiv = document.createElement("div");
        var dollar = document.createElement("span");
        dollar.textContent = " $ " ;
        var total = document.createElement("span");
        ttldiv.classList.add("ttldiv_dollar")
        var t = Number(elem.sellingPrice);
        // console.log(elem.sellingPrice);
        total.textContent = t;
        // console.log("text=",t);
        ttldiv.append(dollar);
        ttldiv.append(total);
        // console.log("total=", total);

        var crossdiv = document.createElement("div");
        var cross = document.createElement("button");      
        cross.textContent = "X";

        cross.addEventListener("click", function(){
            removeProduct(index);
        });
        cross.classList.add("cross_cls");
        crossdiv.append(cross);

        
        cartdivs.append(imgdiv, desdiv, pricediv, decramtdiv, qtydiv, incramtdiv, ttldiv, crossdiv);
        
        var wishbtn = document.createElement("button");
        wishbtn.textContent =  "Add to Wishlist";
         
        // wishbtn.addEventListener("click", function(){
        //     addToWishlist(index);
        // })
        wishbtn.classList.add("wish_divs");

        var line = document.createElement("hr");
        line.classList.add("linecls");

        document.getElementById("cartdatadisplay").append(cartdivs, wishbtn, line);

        totally_total = totally_total + t;
        document.getElementById("aplpmo").addEventListener("click", function(){
            reducePrice(totally_total);
        }); 
    });
    
    sub.textContent = totally_total;
    console.log("sub", sub);  
    
   

}

function removeProduct(index){
    dataofaddedcart.splice(index, 1);
    localStorage.setItem("cartdata", JSON.stringify(dataofaddedcart));
    location.reload();
}


// var q1;
function increase_qty(q, sp, total, sub){
   console.log(q);
   console.log(q.textContent);
    var q1 = (Number)(q.textContent) + 1;
    console.log(q1);
    q.textContent = q1;
    console.log(q);
    var pret = Number(total.textContent);
    var newtotal = (q1*sp);
    total.textContent = newtotal.toFixed(1);

    totally_total = totally_total - pret;
    totally_total = totally_total + newtotal;
    sub.textContent = totally_total.toFixed(1);
    // console.log("sub", sub);  
    

}

function decrease_qty(q, sp, total, sub, index){
    // console.log(q);
    var qtemp = Number(q.textContent);
    console.log(qtemp);
    if(qtemp > 1){
        
        console.log(q);
        console.log(q.textContent);
        var q1 = (Number)(q.textContent) - 1;
        console.log(q1);
        q.textContent = q1;
        console.log(q);
        var pret = Number(total.textContent);
        var newtotal = (q1*sp);
        total.textContent = newtotal.toFixed(1);
    
        totally_total = totally_total - pret;
        totally_total = totally_total + newtotal;
        sub.textContent = totally_total.toFixed(1);
        // console.log("sub", sub);  
    }else{
        removeProduct(index);
    }
 
 }

var count = 1;

// console.log("apl", document.querySelector("#aplpmo"));
function reducePrice(totally_total){
    event.preventDefault();
    // console.log("223");
    var cc = document.querySelector("#cinput");
    // console.log("cc", cc);
    
    if(cc.value == "Masai-DNA" ){
        var save = 0.3 * totally_total;
       var totally_total = (70/100) * (totally_total);
        
        var savings = document.querySelector("#tsaving");
        savings.textContent = save.toFixed(2);
        console.log(save);
        document.querySelector("#subtotal").textContent = totally_total.toFixed(2);
        // count++;
        // console.log(typeof(totally_total));
    }else{
        alert("Not valid Coupon");
    }
}


// var datafreegift = [
//     {
//         img_url : "https://s1.thcdn.com//productimg/70/70/13349819-1014933208639550.jpg",
//         name : "Verso- Night Cream with Retinol 8 (Worth $15.00)",
//         sellingPrice : "0",
//     },
//     {
//         img_url : "https://s1.thcdn.com//productimg/70/70/12932355-9254884444095754.jpg",
//         name : "NEST Fragrances Bamboo Mini Votive Candle. Worth $6",
//         sellingPrice : "0",
//     },
//     {
//         img_url : "https://s1.thcdn.com//productimg/70/70/12749763-1764835275242666.jpg",
//         name : "Erborian Pink Primer & Care - MPP - 5ml. Worth $16",
//         sellingPrice : "0",
//     },
//     {
//         img_url = "https://s1.thcdn.com//productimg/70/70/13148814-1744978317333738.jpg",
//         name : "Replenix Brightening Eye Cream 0.25 fl. oz (Worth $12.75)",
//         sellingPrice : "0",
//     },
//     {
//         img_url : "https://s1.thcdn.com//productimg/70/70/13172028-1614875468446094.jpg";
//         name : "First Aid Beauty Face Cleanser 28.3 g (Worth $7.00)",
//         sellingPrice : "0",
//     },
//     {
//         img_url : "https://s1.thcdn.com/productimg/70/70/12063634-1714661296587924.jpg",
//         name : "Rituals Beauty To Go - Ayurveda Pouch",
//         sellingPrice : "0",
//     }
// ];

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

    // location.reload();

    console.log(rs);
}
