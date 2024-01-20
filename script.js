// Selecting the overlay and popup-box
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addButton = document.querySelector(".add-button");

addButton.addEventListener("click", function () {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

var cancelButton = document.querySelector(".cancel-button"); // Corrected to use querySelector instead of getElementById

cancelButton.addEventListener("click", function (event) {
    popupBox.style.display = "none";
    popupOverlay.style.display = "none";
    event.preventDefault();
});

// Select the container,plus-button,title-input-box,author-input-box,short-input

var container = document.querySelector(".container");
var plusButton = document.querySelector(".plus-button");
var titleInput = document.querySelector(".title-input-box");
var authorInput = document.querySelector(".author-input-box");
var shortInput = document.querySelector(".short-input");

plusButton.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h1 class="title ">${titleInput.value}</h1>
    <h5>${authorInput.value}</h5>
    <p>${shortInput.value}</p>
    <button class="btn" onclick="deletePopup(event)">Delete</button>`
    container.append(div);
    popupBox.style.display = "none";
    popupOverlay.style.display = "none";
})

function deletePopup(event){
    event.target.parentElement.remove();
}