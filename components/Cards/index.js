// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function Card(obj){
    let card = document.createElement("div")
    card.classList.add("card")

    let headLine = document.createElement('div')
    headLine.classList.add("headline")
    headLine.textContent = obj.headline
    
    let author = document.createElement("div")
    author.classList.add("author")

    let img_cont = document.createElement("div")
    img_cont.classList.add("img-container")

    let img = document.createElement("img")
    img.src = obj.authorPhoto

    let authorname = document.createElement("span")
    authorname.textContent = `By ${obj.authorName}`

card.appendChild(headLine)
card.appendChild(author)
author.appendChild(img_cont)
img_cont.appendChild(img)
author.appendChild(authorname)

return card
}
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then( response => {
  // deal with the response data in here
  
  let articles = Object.values(response.data.articles)
  let containerCard = document.querySelector(".cards-container")
  for (let x = 0; x < articles.length; x++ ){
  articles[x].forEach(i => containerCard.appendChild(Card(i)))
  }

})
.catch( err => {
  // deal with the error in here
})



