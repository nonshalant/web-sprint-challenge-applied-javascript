  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

import axios from "axios";

  
const Card = (article) => {
  // creating the elements 
  const cardWrapper = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');

  // adding the class 
  cardWrapper.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');
  
  // adding the text to the element
  headlineDiv.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  // appending the elements 
  cardWrapper.appendChild(headlineDiv);
  cardWrapper.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(authorPhoto);
  authorDiv.appendChild(authorName);

  cardWrapper.addEventListener('click', ()=>{
    console.log(headlineDiv)
  })

  return cardWrapper;

}

const cardAppender = (selector) => {

  axios.get(`http://localhost:5000/api/articles`)
  .then(resp =>{
    const newObj = resp.data.articles;
    console.log(newObj)
  })
  .catch(err =>{
    console.log(err)
  })
}

export { Card, cardAppender }
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //