var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i= 1; i <=5; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'image/pic' + i + '.jpg');  
  thumbBar.appendChild(newImage);
  // newImage.onclick = funtion(e){
    
  // }

}




/* Wiring up the Darken/Lighten button */

