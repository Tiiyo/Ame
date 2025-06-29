const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
    
}

createBtn.addEventListener("click", () => {
let inputBox = document.createElement("p");
let img = document.createElement("img");
img.setAttribute("src", "images/mdi--delete.svg");
inputBox.className += "input-box";
inputBox.setAttribute("contenteditable", "true");
notesContainer.appendChild(inputBox).appendChild(img);

});


notesContainer.addEventListener("click", function(x) {
if (x.target.localName === "img"){
    x.target.parentElement.remove();
    updateStorage();
}
else if ( x.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach (nt => {
        nt.onkeyup = function (){
            updateStorage();
        }
    })}

document.addEventListener("keydown", event => {
    if (event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

});
