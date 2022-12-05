console.log("hereeeeeeeeee")

document.querySelector("#altimg1").addEventListener("click" , chnageImg)
document.querySelector("#altimg2").addEventListener("click" , chnageImg)
document.querySelector("#altimg3").addEventListener("click" , chnageImg)
document.querySelector("#altimg4").addEventListener("click" , chnageImg)

var mainMidImg = document.querySelector("#mainMidImg")
var mainMidImg_src = mainMidImg.src

function chnageImg(event){
    mainMidImg.src =  event.target.src
}

/* ---------------- add to local storage */

objDataforLL = [
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


document.querySelector("#pp-main-top-h-right-cart-button > button").addEventListener("click" , addProductLL)

function addProductLL(){
    var pnamediv = document.querySelector("#pp-main-top-h-right-pName")

    var selectedObj = objDataforLL.filter( function(elem){
        if(pnamediv.textContent == elem.name)
            return true
        else    
            return false 
    })

    var cartll = JSON.parse( localStorage.getItem("cartdata")) || [] ;

    var check = false;
    cartll.map(function (ele, idx) {

        if (ele.name == selectedObj[0].name) {
            check = true;
            
        }

    });

    if(!check){
        cartll.push(selectedObj[0])
    }

    // console.log(selectedObj[0].name)

    alert("\" "+ selectedObj[0].name + " \"   is added to the cart!!")

    
    
    
    localStorage.setItem("cartdata" , JSON.stringify(cartll))

    location.reload();

}
/* ------------------ add to cart */

document.querySelector("#pp-main-top-h-right-cart-wishlist-button").addEventListener("click", addWishlistLL)

function addWishlistLL(){

    var pnamediv = document.querySelector("#pp-main-top-h-right-pName")

    var selectedObj = objDataforLL.filter( function(elem){
        if(pnamediv.textContent == elem.name)
            return true
        else    
            return false 
    })

    var wishlistll = JSON.parse( localStorage.getItem("wishlist")) || []

    var check = false;
    wishlistll.map(function (ele, idx) {

        if (ele.name == selectedObj[0].name) {
            check = true;
            
        }

    });

    if(!check){
        wishlistll.push(selectedObj[0])
    }


    // console.log(selectedObj[0])
    alert("\" " +selectedObj[0].name +" \"   is added to your WishList!!")

    
    

    localStorage.setItem("wishlist" , JSON.stringify(wishlistll))

    location.reload();
}

/* radio button hide and un hide functionality ---------*/

var radio1 = document.querySelector("#pp-main-top-h-right-pOffer-radio1")
var radio2 = document.querySelector("#pp-main-top-h-right-pOffer-radio2")

radio1.addEventListener("click" , hidehiddenOffer)
radio2.addEventListener("click", showhiddenOffer)

radio1.checked = true

function showhiddenOffer() {
    console.log("entered show hidden offer div")

    var hiddenDiv = document.querySelector("#pp-main-top-h-right-phidden")
    var ppriceBelowHidden = document.querySelector("#pp-main-top-h-right-pPrice")

    hiddenDiv.style.display = "block"
    radio1.checked = false
    ppriceBelowHidden.style.display = "none"
}

function hidehiddenOffer(){

    var hiddenDiv = document.querySelector("#pp-main-top-h-right-phidden")
    var ppriceBelowHidden = document.querySelector("#pp-main-top-h-right-pPrice")

    hiddenDiv.style.display = "none"
    radio2.checked = false
    ppriceBelowHidden.style.display = "block"
}