
// side-nav 

function cli1() {
    document.querySelector(".side-nav").classList.toggle("mobile-menu");
}





// back-to-top onscroll

let backtotop = document.getElementById("back-to-top");

// When the user scrolls down 100px from the top of the document, show the button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
}


// land page ---- typed js


var typed = new Typed('#type', {
  strings: ['Web Designer', 'Web Developer', 'Freelancer'],
  typeSpeed : 80,
  backSpeed : 80,
  backDelay: 2000,
  loop : true
});


// resume page

$(document).ready(function () {
  // function scrollFunction() {
    // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 

    $(window).onscroll(function(){
    $(".contact-under-left").slideLeft("slow");
  });

});






