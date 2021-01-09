document.addEventListener('DOMContentLoaded', () => {
  
  const titleInput = document.querySelector('#title');
  titleInput.addEventListener('submit', handleTitle);

  //const authorInput = document.querySelector('#author');
  //authorInput.addEventListener('input', handleAuthor);

  //const selectOption = document.querySelector('#category');
  //selectOption.addEventListener('change', handleSelect);

  //const button = document.querySelector('#button');
  //button.addEventListener('click', handleClick);

})

const handleTitle = (event) => {
  event.preventDefault();
  const resultParagraph = document.querySelector('#reading-list');
  resultParagraph.textContent = `Resulting text: ${event.target.value}`;
}

const handleAuthor = (event) => {
  event.preventDefault();
  const resultParagraph = document.querySelector('#reading-list');
  resultParagraph.textContent = `Resulting text: ${event.target.value}`;
}


const handleSelect = (event) => {
  event.preventDefault();
  const resultParagraph = document.querySelector('#reading-list');
  resultParagraph.textContent = `Selected category: ${event.target.value}`;
}

const handleClick = function(event) {
  // const resultParagraph = document.querySelector('#button');
  const newListItem = document.createElement('li');

  newListItem.textContent = authorInput;
  newListItem.classList.add('authorInput');
  const list = document.querySelector('ul');
  list.appendChild(newListItem);

  newListItem2.textContent = titleInput;
  newListItem2.classList.add('titleInput');
  // const list = document.querySelector('ul');
  list.appendChild(newListItem2);

  newListItem3.textContent = selectOption;
  newListItem3.classList.add('selectOption');
  // const list = document.querySelector('ul');
  list.appendChild(newListItem3);

}

// // 1. Create the element
// const newListItem = document.createElement('li');

// // 2. Modify the element
// newListItem.textContent = "Purple";
// newListItem.classList.add('purple');

// // 3. Append the element to the DOM
// const list = document.querySelector('ul');
// list.appendChild(newListItem);

const handleFormSubmit = (event) => {
  event.preventDefault();
  const resultParagraph = document.querySelector('#form-result');
  resultParagraph.textContent = `Your name: 
  ${event.target.first_name.value}
  ${event.target.last_name.value}`
}