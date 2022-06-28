const images = ["0.jpg","1.jpg","2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)]; 
const bgImage = document.createElement("img");
const divimage = document.querySelector('.image');

bgImage.src = `image/${chosenImage}`;

divimage.appendChild(bgImage);