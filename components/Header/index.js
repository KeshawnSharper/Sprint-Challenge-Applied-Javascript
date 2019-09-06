// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
let div = document.createElement('div')
div.classList.add("header")
let span = document.createElement("span")
span.textContent = "SMARCH 28, 2019"
span.classList.add("date")
let h1 = document.createElement("h1")
h1.textContent = "Lambda Times"
let nexSpan = document.createElement("span")
nexSpan.textContent = "98°"
nexSpan.classList.add("temp")

div.appendChild(span)
div.appendChild(h1)
div.appendChild(nexSpan)

return  div 
}
let heading = document.querySelector(".header-container")
heading.appendChild(Header())
