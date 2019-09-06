// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
function tab(arr){
    let div = document.createElement("div")
    div.classList.add("tab")
    div.textContent = arr
    return div 
}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then( response => {
  // deal with the response data in here
  let topics = response.data.topics
  
  let top = document.querySelector(".topics")
  topics.forEach(i => top.appendChild(tab(i)))

})
.catch( err => {
  // deal with the error in here
})
