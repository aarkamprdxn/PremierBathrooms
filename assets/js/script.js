/* Author: Arkam Ansari*/

//---To the top start-------------------------------------------------------
var topBtn = document.getElementById("top");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

document.getElementById("top").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//----To the Top end------------------------------------------------------

// Hamburger function start here------------------------------------------

var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',function(){
  var navigationUl = document.querySelector('nav ul');
  if(navigationUl.classList.contains('navScale')) {
    navigationUl.classList.remove('navScale');
    hamburger.classList.remove('hamburger-active');
  } else {
    navigationUl.classList.add('navScale');
    hamburger.classList.add('hamburger-active');
  }
})

// Hamburger function ends here---------------------------------------------

// Slider Starts -------------------------------------
var slideIndex = 1;
var slides = document.getElementsByClassName('slides');
if (slides.length > 1) {
  showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Indicators controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var indicators = document.getElementsByClassName('indicator');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  indicators[slideIndex - 1].className += ' active';
}
// ---------------------------------------------------