const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >=images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
},1000)
/* const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >=images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
},1000) 

alt + shft + a for multiline comment
*/ 