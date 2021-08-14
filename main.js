
const gallery = document.querySelector('main');

const imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg'
];

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

function updateGallery() {
  for (let i = 0; i < imageUrls.length; i++) {
    const imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.setAttribute('src', imageUrls[i]);
    gallery.appendChild(imageElement);
  }
}
