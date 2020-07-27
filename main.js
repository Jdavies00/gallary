var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i= 1; i <=5; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'https://cdn.glitch.com/9d586b50-22d7-4dcf-a5a9-6127acd909c0%2Fpic1.jpg' + i + '.jpg');  
  thumbBar.appendChild(newImage);
  // newImage.onclick = funtion(e){
    
  // }

}




/* Wiring up the Darken/Lighten button */

