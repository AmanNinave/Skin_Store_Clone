/*  everything will be pushed into the container div */ 
// inside each card div

// image 
// heart right-top side of the image 
// name
// discount - save 30%
// MSRP : previous price 
// current selling price
// quick buy  

// console.log(arr) YES able to  access arr

var container = document.querySelector("#ProductsDisplayGrid")

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
        tbuy.textContent = "QUICK BUY"
        tbuy.addEventListener("click", function (){
            addCardToLocalStorage(elem)
        })
        tbuy.classList.add("t-button")

    tbuttonBottom.append(tbuy)
    tbuttonBottom.classList.add("t-button-Bottom")

    tcard.append(timgDiv, tinfoMiddle, tbuttonBottom)

    container.append(tcard)
});

/* function store selected card to local storage */ 

function addCardToLocalStorage(elem){
    var pname = elem.name
    alert("product added to the cart : " + pname)
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