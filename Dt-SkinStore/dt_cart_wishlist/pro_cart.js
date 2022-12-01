var dataofaddedcart = JSON.parse(localStorage.getItem(""));

var loadedcart = JSON.parse(localStorage.getItem("cartsList")) || [];

window .addEventListener("load", fnction(){
    displayData(dataofaddedcart);
});

function displayData(dataofaddedcart){
    document.querySelector("tbody").textcontent ="";
    dataofaddedcart.map(function (elem){
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        var image = document.createElement("img");
        image.setAttribute("src", elem.image_url);
        image.setAttribute("alt", elem.name);
        image.setAttribute("class", "images");

        
        td1.textContent = elem.image
    })
}