document.addEventListener('DOMContentLoaded', () => {
  
  const titleInput = document.querySelector('#title');
  textInput.addEventListener('input', handleTitle);

  const authorInput = document.querySelector('#author');
  textInput.addEventListener('input', handleAuthor);

  // const selectOption = document.querySelector('.form-item');
  // selectOption.addEventListener('change', handleSelect);

  // const button = document.querySelector('#button');
  // button.addEventListener('click', handleClick);

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


// const handleSelect = (event) => {
//   event.preventDefault();
//   const resultParagraph = document.querySelector('#category');
//   resultParagraph.textContent = `Selected category: ${event.target.value}`;
// }

// const handleClick = function() {
//   const resultParagraph = document.querySelector('#button')
// }