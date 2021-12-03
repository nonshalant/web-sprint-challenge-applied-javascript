import axios from "axios";

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

const Tabs = (topics) => {
  // creating the topics container div
  const topicsDiv = document.createElement('div'); 
  topicsDiv.classList.add('topics');

  // creating the tabs & appending to the container 
  for(let i = 0; i < topics.length; i++){
    let createTab = document.createElement('div');
    createTab.classList.add('tab');
    createTab.textContent = topics[i];
    topicsDiv.appendChild(createTab);
  }

  return topicsDiv

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/topics`)
  .then(resp =>{
    const topicsArr = resp.data.topics;
    const entryPoint = document.querySelector(selector);
    entryPoint.appendChild(Tabs(topicsArr))
    return entryPoint
  })
  .catch(err =>{
    console.log('sorry we got an error!');
    console.error(err)
  })

}

export { Tabs, tabsAppender }
