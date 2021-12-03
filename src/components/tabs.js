import axios from "axios";

const Tabs = (topics) => {
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
  const topicsDiv = document.createElement('div');
  const tabDiv1 = document.createElement('div');
  const tabDiv2 = document.createElement('div');
  const tabDiv3 = document.createElement('div');

  topicsDiv.classList.add('topics');
  tabDiv1.classList.add('tab');
  tabDiv2.classList.add('tab');
  tabDiv3.classList.add('tab');

  tabDiv1.textContent = topics[0];
  tabDiv2.textContent = topics[1];
  tabDiv3.textContent = topics[2];

  topicsDiv.appendChild(tabDiv1);
  topicsDiv.appendChild(tabDiv2);
  topicsDiv.appendChild(tabDiv3);

  return topicsDiv;

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
    Tabs(topicsArr)
    const entryPoint = document.querySelector(selector);
    return entryPoint
  })
  .catch(err =>{
    console.log('sorry we got an error!');
    console.error(err)
  })

}

export { Tabs, tabsAppender }
