var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i= 1; i <=5; i++){
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'https://cdn.glitch.com/9d586b50-22d7-4dcf-a5a9-6127acd909c0%2Fpic' + i + '.jpg?v=1571602267425');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
  displayedImage.src = e.target.src;   
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
  const btnClass= btn.getAttribute('class');
  if (btnClass === 'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = 'Ligthen';
    overlay.style.backgroundColor = 'rgba(0,0,0,.5)';
  } else{
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}

