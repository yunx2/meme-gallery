

const gallery = document.querySelector('main');

const imageUrls = [];

const imageUrlInput = document.querySelector('input');
const addImageButton = document.querySelector('button');

const handleClick = function() {
  if (inputValue === '') {
    console.log('add an url')
  } else {
    imageUrls.push(imageUrlInput.value);
    imageUrlInput.value = '';
    updateGallery();
    // console.log(imageUrls);
  }
}

addImageButton.addEventListener('click', handleClick);

function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    const imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.setAttribute('src', imageUrls[i]);
    gallery.appendChild(imageElement);
  }
}

updateGallery();
