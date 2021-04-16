


// ===== Scroll to bottom ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 10) {        
        $('#click-to-bottom').fadeIn(0);    
    }
  });
  $('#click-to-bottom').click(function() {      
    $('body,html').animate({
        scrollTop : 2000                      
    }, 500);
  });


// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);   
    }
  });
  $('#return-to-top').click(function() {     
    $('body,html').animate({
        scrollTop : 0                      
    }, 500);
  });


  /* Slideshow JavaScript */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("active");
}
/* Slideshow JavaScript */