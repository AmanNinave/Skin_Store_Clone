console.log("hereeeeeeeeee")

document.querySelector("#altimg1").addEventListener("click" , chnageImg)
document.querySelector("#altimg2").addEventListener("click" , chnageImg)
document.querySelector("#altimg3").addEventListener("click" , chnageImg)

var mainMidImg = document.querySelector("#mainMidImg")
var mainMidImg_src = mainMidImg.src

function chnageImg(event){
    mainMidImg.src =  event.target.src
}

/* ---------------- add to local storage */

objDataforLL = [
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


document.querySelector("#pp-main-top-h-right-cart-button > button").addEventListener("click" , addProductLL)

function addProductLL(){
    var pnamediv = document.querySelector("#pp-main-top-h-right-pName")

    var selectedObj = objDataforLL.filter( function(elem){
        if(pnamediv.textContent == elem.name)
            return true
        else    
            return false 
    })

    console.log(selectedObj[0].name)

    alert("\" "+ selectedObj[0].name + " \"   is added to the cart!!")

    var cartll = JSON.parse( localStorage.getItem("cartdata")) || []

    var check = false
    cartll.forEach(element => {
        if(element.name == selectedObj[0].name)
            check = true
    });

    if(!check)
        cartll.push(selectedObj[0])
    
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

    console.log(selectedObj[0])
    alert("\" " +selectedObj[0].name +" \"   is added to your WishList!!")

    var wishlistll = JSON.parse( localStorage.getItem("wishlist")) || []

    var check = false
    wishlistll.forEach(element => {
        if(element.name == selectedObj[0].name)
            check = true
    });

    if(!check)
        wishlistll.push(selectedObj[0])

    localStorage.setItem("wishlist" , JSON.stringify(wishlistll));

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