//slides.length = 3
// index : 0,1,2

//Intialize the slide index
let currentSlideIndex = 0;

//creating the show and hide logic
function showSlide(index) {
  const slides = document.getElementsByClassName("carousel-slide");
  console.log(slides);
  const dots = document.getElementsByClassName("dot");
  //condition check if the index is greater than or equal to the number of slides.
  //It it is true then it will reset the currentSlideindex to 0(first image). This will loop back
  // to the beginning if the user clicks next on the last slide.
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  }

  //Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("dot-active", "");
  }

  //Display the current slide and set the corresponding dot as active
  slides[currentSlideIndex].style.display = "block";
  dots[currentSlideIndex].className += " dot-active";
} // class= "dotdot-active"

// Function to change the slide
function changeSlide(n) {
  showSlide((currentSlideIndex += n));
}

//function  to jump to a specific slide
function currentSlide(n) {
  showSlide((currentSlideIndex = n));
}

//Intial Display Setup

showSlide(currentSlideIndex);
