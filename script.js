// const btn = document.querySelector('#btn');

// const  hiddenVideo = document.querySelector('.hidden-video');

// const close = document.querySelector('.cross')

// btn.addEventListener('click',()=>{
//   hiddenVideo.classList.add('show');
// })

// close.addEventListener('click',()=>{
//   hiddenVideo.classList.remove('show');
// })





// =========================================
//     My services popup section  start 
// =========================================

// //      My service 1st box start
// // --------------------------------

// document.querySelector(".box-my-services-parent").addEventListener('click' , function(){
//   document.querySelector(".services-hidden-box-parent").style.display = "block";
// })

// document.querySelector(".service-close").addEventListener('click' , function(){
//   document.querySelector(".services-hidden-box-parent").style.display = "none";
// })

// //      My service 1st box end
// // ----------------------------------


// //      My service 2nd box start
// // --------------------------------

// document.querySelector(".box-a-parent").addEventListener('click' , function(){
//   document.querySelector(".services-second-popup").style.display = "block";
// })

// document.querySelector(".second-popup-close").addEventListener('click' , function(){
//   document.querySelector(".services-second-popup").style.display = "none";
// })

// //      My service 2nd box end
// // ----------------------------------


// //      My service 3nd box start
// // --------------------------------

// document.querySelector(".box-c-parent").addEventListener('click' , function(){
//   document.querySelector(".services-third-popup").style.display = "block";
// })

// document.querySelector(".close-third-popup").addEventListener('click' , function(){
//   document.querySelector(".services-third-popup").style.display = "none";
// })

// //      My service 3nd box end
// // ----------------------------------



// //      My service 4th box start
// // --------------------------------

// document.querySelector(".box-d-parent").addEventListener('click' , function(){
//   document.querySelector(".services-fourth-popup").style.display = "block";
// })

// document.querySelector(".close-fourth-popup").addEventListener('click' , function(){
//   document.querySelector(".services-fourth-popup").style.display = "none";
// })


// //      My service 4th box end
// // ----------------------------------



// //      My service 5th box start
// // --------------------------------

// document.querySelector(".box-e-parent").addEventListener('click' , function(){
//   document.querySelector(".services-fifth-popup").style.display = "block";
// })

// document.querySelector(".fifth-popup-close").addEventListener('click' , function(){
//   document.querySelector(".services-fifth-popup").style.display = "none";
// })


// //      My service 5th box end
// // ----------------------------------



// //      My service 6th box start
// // --------------------------------

// document.querySelector(".box-f-parent").addEventListener('click' , function(){
//   document.querySelector(".services-six-popup").style.display = "block";
// })

// document.querySelector(".six-popup-close").addEventListener('click' , function(){
//   document.querySelector(".services-six-popup").style.display = "none";
// })


//      My service 6th box end
// ----------------------------------


// =========================================
//     My services popup section  end
// =========================================


// =========================================
//     Navbar section start
// =========================================

const moblieNav = document.querySelector(".click-button");
const navHeader = document.querySelector(".navbar-container");

const toggleNavbar = () => {
  // alert("hello");
  navHeader.classList.toggle("active");
};

moblieNav.addEventListener("click", () => toggleNavbar());


// =========================================
//     Navbar section end
// =========================================


// =========================================
//     My blog section start
// =========================================

// // box 1
// // -------
// document.querySelector("#blog-box-a").addEventListener("click", function(){
//   document.querySelector(".blog-hidden-a").style.display = "block";
// })

// document.querySelector(".blog-close-a").addEventListener("click" , function(){
//   document.querySelector(".blog-hidden-a").style.display = "none";
// })

// // box 2
// // -------

// document.querySelector("#blog-box-b").addEventListener("click" , function(){
//   document.querySelector(".blog-hidden-b").style.display = "block";
// })

// document.querySelector(".blog-close-b").addEventListener("click" ,function(){
//   document.querySelector(".blog-hidden-b").style.display = "none";
// })

// // box 3
// // -------

// document.querySelector("#blog-box-c").addEventListener("click" , function(){
//   document.querySelector(".blog-hidden-c").style.display = "block";
// })

// document.querySelector(".blog-close-c").addEventListener("click" ,function(){
//   document.querySelector(".blog-hidden-c").style.display = "none";
// })

// // box 4
// // -------

// document.querySelector("#blog-box-d").addEventListener("click" , function(){
//   document.querySelector(".blog-hidden-d").style.display = "block";
// })

// document.querySelector(".blog-close-d").addEventListener("click" , function(){
//   document.querySelector(".blog-hidden-d").style.display =  "none";
// })

// // box 5
// // -------

// document.querySelector("#blog-box-e").addEventListener("click" , function(){
//   document.querySelector(".blog-hidden-e").style.display = "block";
// })

// document.querySelector(".blog-close-e").addEventListener("click" ,function(){
//   document.querySelector(".blog-hidden-e").style.display = "none";
// })

// // box 6
// // -------

// document.querySelector("#blog-box-f").addEventListener("click" , function(){
//   document.querySelector(".blog-hidden-f").style.display = "block";
// })

// document.querySelector(".blog-close-f").addEventListener("click" ,function(){
//   document.querySelector(".blog-hidden-f").style.display = "none";
// })

// // box 7
// // -------

// document.querySelector("#blog-box-g").addEventListener("click" , function(){
//   document.querySelector(".blog-hidden-g").style.display = "block";
// })

// document.querySelector(".blog-close-g").addEventListener("click" ,function(){
//   document.querySelector(".blog-hidden-g").style.display = "none";
// })

// =========================================
//     My blog section end
// =========================================




// =========================================
//     Testimonial section start
// =========================================


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimoinal-userinterface-section");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// =========================================
//     Testimonial section end
// =========================================


// =========================================
//     Recently Project work hide boxes
// =========================================
// box a
// -----------

// document.querySelector('#project_a').addEventListener("click" , function(){
//   document.querySelector(".swiper-a").style.display = "block";
// })

// document.querySelector(".swiper_close_a").addEventListener("click" ,function(){
//   document.querySelector(".swiper-a").style.display = "none";
// })

// box b
// ----------
// document.querySelector('#project_b').addEventListener("click" , function(){
//   document.querySelector(".swiper-b").style.display = "block";
// })

// document.querySelector(".swiper_close_b").addEventListener("click" ,function(){
//   document.querySelector(".swiper-b").style.display = "none";
// })

// // box c
// // ----------
document.querySelector('#typing-certificate').addEventListener("click", function () {
  document.querySelector(".swiper-c").style.display = "block";
})

document.querySelector(".swiper_close_c").addEventListener("click", function () {
  document.querySelector(".swiper-c").style.display = "none";
})

// // box d
// // ----------
// document.querySelector('#project_d').addEventListener("click" , function(){
//   document.querySelector(".swiper-d").style.display = "block";
// })

// document.querySelector(".swiper_d").addEventListener("click" ,function(){
//   document.querySelector(".swiper-d").style.display = "none";
// })
// =========================================
//     Recently Project work hide boxes
// =========================================





// =========================================
//          Loading section start
// =========================================
let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1800);
}

function showPage() {
  document.getElementById("center").style.display = "none";
  document.getElementById("web-material").style.display = "block";
}


const counters = document.querySelectorAll('.run');

counters.forEach((counter) => {

  const updateCounter = () => {
    const targetCount = +counter.getAttribute('data-target');

    const startingCount = Number(counter.innerHTML);

    const incr = targetCount / 100;

    if (startingCount < targetCount) {
      counter.innerHTML = `${Math.round(startingCount + incr)}`;
      setTimeout(updateCounter, 10)
    } else {
      counter.innerHTML = targetCount;
    }

  }

  updateCounter();
});


// =========================================
//            Loading section end
// =========================================

