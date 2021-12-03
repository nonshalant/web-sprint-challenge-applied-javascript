const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>

  const headerDiv = document.createElement('div');
  const createSpan1 = document.createElement('span');
  const createH1 = document.createElement('h1');
  const createSpan2 = document.createElement('span');

  headerDiv.appendChild(createSpan1);
  headerDiv.appendChild(createH1);
  headerDiv.appendChild(createSpan2);

  headerDiv.classList.add('header');
  createSpan1.classList.add('date');
  createSpan2.classList.add('temp');
  
  createSpan1.textContent = date;
  createH1.textContent = title;
  createSpan2.textContent = temp;

  return headerDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  const entryPoint = document.querySelector(selector);
  entryPoint.appendChild(Header('Lambda Times','January 6 2021','26'));
  return entryPoint

}

export { Header, headerAppender }
