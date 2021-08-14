
const imageUrls = [];
const imageUrlInput = document.querySelector('input');
const addImageButton = document.querySelector('button');


addImageButton.addEventListener('click', () => {
  let inputValue = imageUrlInput.value;
  if (inputValue === '') {
    console.log('add an url')
  } else {
    imageUrls.push(inputValue);
    inputValue = '';
    console.log('img urls array:', imageUrls);
  }
});
