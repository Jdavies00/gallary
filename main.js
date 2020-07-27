var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');



/* Looping through images */
for(let i= 1; i <=5; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', + i + '.jpg');  
  thumbBar.appendChild(newImage);

    
  }
        

  






/* Wiring up the Darken/Lighten button */
btn.onclick = fuintion () {
  const bntClass= btn.getAttribute('class');
  if (btnClass === 'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = Ligthen;
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}

