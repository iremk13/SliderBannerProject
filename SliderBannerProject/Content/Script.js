////let slideIndex = 0;
////showSlides(slideIndex);

////function plusSlides(n) {
////    showSlides(slideIndex += n);
////}

////function currentSlide(n) {
////    showSlides(slideIndex = n);
////}

////function showSlides(n) {
////    let i;
////    let slides = document.getElementsByClassName("mySlides");
////    let dots = document.getElementsByClassName("dot");
////    if (n > slides.length) { slideIndex = 1 }
////    if (n < 1) { slideIndex = slides.length }
////    for (i = 0; i < slides.length; i++) {
////        slides[i].style.display = "none";
////    }
////    for (i = 0; i < dots.length; i++) {
////        dots[i].className = dots[i].className.replace(" active", "");
////    }
////    slides[slideIndex - 1].style.display = "block";
////    dots[slideIndex - 1].className += " active";
////}

//let slideIndex = 0;
//showSlides(slideIndex);

//function showSlides() {
//  let i;
//  let slides = document.getElementsByClassName("mySlides");
//  let dots = document.getElementsByClassName("dot");
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";  
//  }
//  slideIndex++;
//  if (slideIndex > slides.length) {slideIndex = 1}    
//  for (i = 0; i < dots.length; i++) {
//    dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";  
//  dots[slideIndex-1].className += " active";
//  setTimeout(showSlides, 2000); // Change image every 2 seconds
//}


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


var responsiveSlider = function () {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize', function () {
        sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function () {
        if (count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function () {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if (count = items) {
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function () {
        nextSlide();
    });

    prev.addEventListener("click", function () {
        prevSlide();
    });

    setInterval(function () {
        nextSlide()
    }, 5000);

};

window.onload = function () {
    responsiveSlider();
}
