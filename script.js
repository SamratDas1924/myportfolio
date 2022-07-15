
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




// let backinleft = document.getElementById("about-under-left");

// // When the user scrolls down 20px from the top of the document, show the button

// window.onscroll = function() {vv()};

// function vv() {
//   if (document.documentElement.scrollTop > 400) {
//     backinleft.style.display = "block";
//   } 
//   else {
//     backinleft.style.display = "none";
//   }
// }


