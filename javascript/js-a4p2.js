/*
    Name: Rachel Boden
	File: js-a4p2.js
	Date: 20 July 2024
	Assignment 4 part 2, creating an image gallery
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['../images/pic1.jpg', '../images/pic2.jpg', '../images/pic3.jpg', '../images/pic4.jpg', '../images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = ['Closeup of a human eye', 'Rippled rock', 'Purple flowers', 'Egyption mural', 'Moth'];

/* Looping through images */
for (let i = 0; i < imageFiles.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageFiles[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', imageFiles[i]);
        displayedImage.setAttribute('alt', altText[i]);
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') == 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
})