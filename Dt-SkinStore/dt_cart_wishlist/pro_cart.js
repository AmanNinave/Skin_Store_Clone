var dataofaddedcart = [
    {
        Category : "Clenser",
        StrikedoffPrice :"48",
        alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289657-7504876690381737.jpg",
        gift : "20% off + $135 SkinMedica Gift",
        img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289657-9384876690289403.jpg",
        link : "https://www.skinstore.com/skinmedica-aha-bha-exfoliating-cleanser/11289657.html",
        name : "SkinMedica AHA/BHA Exfoliating Cleanser (6oz)",
        rating : "4.8",
        sellingPrice : "38.4",
    }
];

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
        desdiv.append(desname);
        // console.log(desname);

        var pricediv = document.createElement("div");
        var price = document.createElement("p");
        price.textContent = +elem.sellingPrice;
        pricediv.append(price);
        

        var decramtdiv = document.createElement("div");
        var damt = document.createElement("button");
        damt.textContent = "-";

        damt.addEventListener("click", function(){
            decrease_qty(qty, elem.sellingPrice, total, sub, index);
        });


        decramtdiv.append(damt);

        var qtydiv = document.createElement("div");
        var qty = document.createElement("p");
        qty.textContent = Number(1);
        qtydiv.append(qty);

        var incramtdiv = document.createElement("div");
        var iamt = document.createElement("button");
        iamt.textContent = "+";
        
        iamt.addEventListener("click", function(){
            increase_qty(qty, elem.sellingPrice, total, sub);
        });
        
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
        cross.textContent = "X"  ;

        cross.addEventListener("click", function(){
            removeProduct(index);
        });

        crossdiv.append(cross);

        var wishbtndiv = document.createElement("div");
        wishbtndiv.classList.add("cart_divs");  


        cartdivs.append(imgdiv, desdiv, pricediv, decramtdiv, qtydiv, incramtdiv, ttldiv, crossdiv);
        document.getElementById("cartdatadisplay").append(cartdivs);

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

