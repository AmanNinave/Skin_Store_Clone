var wishListItems = JSON.parse(localStorage.getItem("wishlist")) || [];
// console.log(arr);
 var dataofaddedcart = JSON.parse(localStorage.getItem("cartdata")) || [];

window.addEventListener("load", function(){
    displayData(dataofaddedcart);
});

// displayData(dataofaddedcart);
var totally_total =  0;           


function displayData(dataofaddedcart){
    // console.log("eneteredfunction");
    var sub = document.querySelector("#subtotal");
    // console.log("check", sub);
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
            decrease_qty(qty, elem.sellingPrice, total, sub, index , elem);
        });

        damt.classList.add("dec_cls");
        decramtdiv.append(damt);

        var qtydiv = document.createElement("div");
        var qty = document.createElement("p");
                                            // Please Dont Delete below three commented lines need for future
                                            // var Local_storage_Qty = elem.qty ;                    // Added at 3.42
                                            // console.log(Local_storage_Qty );                      // Added at 3.42   
                                            // qty.textContent = Number(Local_storage_Qty);          // Added at 3.42
        qty.textContent = Number(1);                       // Removed at 3.45  
        qty.classList.add("q_cls");
        qtydiv.append(qty);

        var incramtdiv = document.createElement("div");
        var iamt = document.createElement("button");
        iamt.textContent = "+";
        
        iamt.addEventListener("click", function(){
            increase_qty(qty, elem.sellingPrice, total, sub , elem ,index);
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
        // var heart_img = document.createElement("img");
        wishbtn.textContent =  "Add to Wishlist";
        wishbtn.addEventListener("click", function(){
            addWishlist(elem);
        });
        wishbtn.classList.add("wish_divs");
        

        var line = document.createElement("hr");
        line.classList.add("linecls");

        document.getElementById("cartdatadisplay").append(cartdivs, wishbtn, line);

        totally_total = totally_total + t;
        document.getElementById("aplpmo").addEventListener("click", function(){
            reducePrice(totally_total);
        }); 
    });
    
    sub.textContent = totally_total.toFixed(2);
    // console.log("sub", sub);  
    
   localStorage.setItem("totalcartvalue" , totally_total);
   localStorage.setItem("giftitems" , JSON.stringify( giftArray ));              // line added to store data to of gift after display call 

}

localStorage.setItem("totalcartvalue" , totally_total);


// remove function with cross button
function removeProduct(index){
    dataofaddedcart.splice(index, 1);
    localStorage.setItem("cartdata", JSON.stringify(dataofaddedcart));
    location.reload();
}


// increase function
function increase_qty(q, sp, total, sub , elem , index){
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
    
    elem.qty = Number(q1);                       //added by aman
    localStorage.setItem("cartdata" ,JSON.stringify( dataofaddedcart));     // Added by aman
    localStorage.setItem("totalcartvalue" , totally_total.toFixed(1));
    // localStorage.setItem("totalsavings" , )


}
// decrease function
function decrease_qty(q, sp, total, sub, index , elem){
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

        elem.qty = Number(q1);                       //added by aman
        localStorage.setItem("cartdata" ,JSON.stringify( dataofaddedcart));     // Added by aman

        localStorage.setItem("totalcartvalue" , totally_total.toFixed(1));

    }else{
        removeProduct(index);
    }
 
 }

var count = 1;
var save = 0;
localStorage.setItem("totalsavings" , save);                 // Added by aman at 3.53

// apply promo code
function reducePrice(totally_total){
    event.preventDefault();
    // console.log("223");
    var cc = document.querySelector("#cinput");
    // console.log("cc", cc);
    
    if(cc.value == "Masai-DNA" ){
         save = 0.4 * totally_total;
       var totally_total = (60/100) * (totally_total);
        
        var savings = document.querySelector("#tsaving");
        savings.textContent = save.toFixed(2);
        // console.log(save);
        document.querySelector("#subtotal").textContent = totally_total.toFixed(2);
        // count++;
        // console.log(typeof(totally_total));
    }else if(cc.value == "JOY30" ){
        var save = 0.3 * totally_total;
       var totally_total = (70/100) * (totally_total);
        
        var savings = document.querySelector("#tsaving");
        savings.textContent = save.toFixed(2);
        console.log(save);
        document.querySelector("#subtotal").textContent = totally_total.toFixed(2);
        // count++;
        // console.log(typeof(totally_total));
    }else {
        alert("Not valid Coupon");
    }

    localStorage.setItem("totalcartvalue" , totally_total.toFixed(1));
    localStorage.setItem("totalsavings" , save.toFixed(1) );

}

// apply promo joy code 



// add to wishlist function
var rs = -1;

function addWishlist(elem) {
    alert("Item Added to Wishlist");
    location.reload();
    var check = false;
    var idxc = -1;
    wishListItems.map(function (ele, idx) {

        if (ele.name == elem.name) {
            check = true;
            idxc = idx;
        }

    });

    rs = Number(elem.qty);


    if (check) {
        elem.qty = Number(elem.qty) + Number(1);
        wishListItems.splice(idxc, 1);
    } else {
        elem.qty = 1;
    }

    wishListItems.push(elem);

    localStorage.setItem("wishlist", JSON.stringify(wishListItems));
    // location.reload();

   // console.log(rs);
}


// {
//     name : "By Terry Ombre Blackstar Eye Shadows 1 .64g (Various Shades)",
//     img_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307158-4054925754510135.jpg",
//     alt_url : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11307161-1564900075517358.jpg", 
//     color : "black",
//     strikedoffPrice : "38",
//     sellingPrice : "26.6",
//     rating : "4.9",
//     link : "https://www.skinstore.com/by-terry-ombre-blackstar-eye-shadows-1-.64g-various-shades/11307158.html"
// },

var datafreegift = [
    {
        img_url : "https://s1.thcdn.com//productimg/70/70/13349819-1014933208639550.jpg",
        name : "Verso- Night Cream with Retinol 8 (Worth $15.00)",
        sellingPrice : "FREE",
    },
    {
        img_url : "https://s1.thcdn.com//productimg/70/70/12932355-9254884444095754.jpg",
        name : "NEST Fragrances Bamboo Mini Votive Candle. Worth $6",
        sellingPrice : "FREE",
    },
    {
        img_url : "https://s1.thcdn.com//productimg/70/70/12749763-1764835275242666.jpg",
        name : "Erborian Pink Primer & Care - MPP - 5ml. Worth $16",
        sellingPrice : "FREE",
    },
    {
        img_url : "https://s1.thcdn.com//productimg/70/70/13148814-1744978317333738.jpg",
        name : "Replenix Brightening Eye Cream 0.25 fl. oz (Worth $12.75)",
        sellingPrice : "FREE",
    },
    {
        img_url : "https://s1.thcdn.com//productimg/70/70/13172028-1614875468446094.jpg",
        name : "First Aid Beauty Face Cleanser 28.3 g (Worth $7.00)",
        sellingPrice : "FREE",
    },
    {
        img_url : "https://s1.thcdn.com/productimg/70/70/12063634-1714661296587924.jpg",
        name : "Rituals Beauty To Go - Ayurveda Pouch",
        sellingPrice : "FREE",
    }
];

//<<<<<<<<<<<<<<<<<<<<<<< below lines used to store gift items >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var giftArray = [] ;



// add to cart function for gifts
var giftcounter = 0;
function press(){
    if(totally_total > 130 ){
        var txt = document.querySelector("#availgifts button");
        txt.style.backgroundColor = "green";
        txt.style.color = "white";
        giftcounter++;
        document.querySelector("#giftnumber").textContent = giftcounter;
        giftArray.push(datafreegift[0]);
        localStorage.setItem("giftitems", JSON.stringify( giftArray));
    }
}

function press1(){
    if(totally_total > 260 ){
        var txt = document.querySelector("#availgifts + div button");
        txt.style.backgroundColor = "green";
        txt.style.color = "white";
        giftcounter++;
        document.querySelector("#giftnumber").textContent = giftcounter;
        giftArray.push(datafreegift[1]);
        localStorage.setItem("giftitems", JSON.stringify( giftArray));
    }
}

function press2(){
    if(totally_total > 390){
        var txt = document.querySelector("#availgifts + div + div button");
        txt.style.backgroundColor = "green";
        txt.style.color = "white";
        giftcounter++;
        document.querySelector("#giftnumber").textContent = giftcounter;
        giftArray.push(datafreegift[2]);
        localStorage.setItem("giftitems", JSON.stringify( giftArray));
    }
}

function press3(){
    if(totally_total > 520){
        var txt = document.querySelector("#availgifts  + div + div + div button");
        txt.style.backgroundColor = "green";
        txt.style.color = "white";
        giftcounter++;
        document.querySelector("#giftnumber").textContent = giftcounter;
        giftArray.push(datafreegift[3]);
        localStorage.setItem("giftitems", JSON.stringify( giftArray));
    }
}

function press4(){
    if(totally_total > 650){
        var txt = document.querySelector("#availgifts  + div + div + div + div button");
        txt.style.backgroundColor = "green";
        txt.style.color = "white";
        giftcounter++;
        document.querySelector("#giftnumber").textContent = giftcounter;
        giftArray.push(datafreegift[4]);
        localStorage.setItem("giftitems", JSON.stringify( giftArray));
    }
}

function press5(){
    if(totally_total > 870){
        var txt = document.querySelector("#availgifts  + div + div + div + div + div button");
        txt.style.backgroundColor = "green";
        txt.style.color = "white";
        giftcounter++;
        document.querySelector("#giftnumber").textContent = giftcounter;
        giftArray.push(datafreegift[5]);
        localStorage.setItem("giftitems", JSON.stringify( giftArray));
    }
}



