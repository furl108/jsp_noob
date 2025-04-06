const images = ['golden01.jpg', 'golden02.jpg', 'golden03.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `bg_image/${chosenImage}`;

document.body.appendChild(bgImage);
