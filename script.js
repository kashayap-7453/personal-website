const btn = document.querySelector('#btn');

const  hiddenVideo = document.querySelector('.hidden-video');

const close = document.querySelector('.cross')

btn.addEventListener('click',()=>{
  hiddenVideo.classList.add('show');
})

close.addEventListener('click',()=>{
  hiddenVideo.classList.remove('show');
})


// Testimonial Section start


document.getElementsByTagName('button')[0].addEventListener("click",function(){
  document.getElementsByClassName("testimoinal-userinterface-section")[0].style.display="block";
  document.getElementsByClassName("testimoinal-userinterface-section")[1].style.display="none";
  document.getElementsByClassName("testimoinal-userinterface-section")[2].style.display="none";
  document.getElementsByTagName("button")[0].classList.add("active");
  document.getElementsByTagName("button")[1].classList.remove("active");
  document.getElementsByTagName("button")[2].classList.remove("active");
})


document.getElementsByTagName('button')[1].addEventListener("click",function(){
  document.getElementsByClassName("testimoinal-userinterface-section")[1].style.display="block";
  document.getElementsByClassName("testimoinal-userinterface-section")[0].style.display="none";
  document.getElementsByClassName("testimoinal-userinterface-section")[2].style.display="none";
  document.getElementsByTagName("button")[1].classList.add("active");
  document.getElementsByTagName("button")[0].classList.remove("active");
  document.getElementsByTagName("button")[2].classList.remove("active");
})

document.getElementsByTagName('button')[2].addEventListener("click",function(){
  document.getElementsByClassName("testimoinal-userinterface-section")[2].style.display="block";
  document.getElementsByClassName("testimoinal-userinterface-section")[0].style.display="none";
  document.getElementsByClassName("testimoinal-userinterface-section")[1].style.display="none";
  document.getElementsByTagName("button")[2].classList.add("active");
  document.getElementsByTagName("button")[0].classList.remove("active");
  document.getElementsByTagName("button")[1].classList.remove("active");
})




// =========================================
//     My services popup section  start 
// =========================================

//      My service 1st box start
// --------------------------------

document.querySelector(".box-my-services-parent").addEventListener('click' , function(){
  document.querySelector(".services-hidden-box-parent").style.display = "block";
})

document.querySelector(".service-close").addEventListener('click' , function(){
  document.querySelector(".services-hidden-box-parent").style.display = "none";
})

//      My service 1st box end
// ----------------------------------


//      My service 2nd box start
// --------------------------------

document.querySelector(".box-a-parent").addEventListener('click' , function(){
  document.querySelector(".services-second-popup").style.display = "block";
})

document.querySelector(".second-popup-close").addEventListener('click' , function(){
  document.querySelector(".services-second-popup").style.display = "none";
})

//      My service 2nd box end
// ----------------------------------


//      My service 3nd box start
// --------------------------------

document.querySelector(".box-c-parent").addEventListener('click' , function(){
  document.querySelector(".services-third-popup").style.display = "block";
})

document.querySelector(".close-third-popup").addEventListener('click' , function(){
  document.querySelector(".services-third-popup").style.display = "none";
})

//      My service 3nd box end
// ----------------------------------



//      My service 4th box start
// --------------------------------

document.querySelector(".box-d-parent").addEventListener('click' , function(){
  document.querySelector(".services-fourth-popup").style.display = "block";
})

document.querySelector(".close-fourth-popup").addEventListener('click' , function(){
  document.querySelector(".services-fourth-popup").style.display = "none";
})


//      My service 4th box end
// ----------------------------------



//      My service 5th box start
// --------------------------------

document.querySelector(".box-e-parent").addEventListener('click' , function(){
  document.querySelector(".services-fifth-popup").style.display = "block";
})

document.querySelector(".fifth-popup-close").addEventListener('click' , function(){
  document.querySelector(".services-fifth-popup").style.display = "none";
})


//      My service 5th box end
// ----------------------------------



//      My service 6th box start
// --------------------------------

document.querySelector(".box-f-parent").addEventListener('click' , function(){
  document.querySelector(".services-six-popup").style.display = "block";
})

document.querySelector(".six-popup-close").addEventListener('click' , function(){
  document.querySelector(".services-six-popup").style.display = "none";
})


//      My service 6th box end
// ----------------------------------


// =========================================
//     My services popup section  end
// =========================================


// =========================================
//     Navbar icon
// =========================================

const moblieNav = document.querySelector(".click-button");
const navHeader = document.querySelector(".navbar-container");

const toggleNavbar = () => {
    // alert("hello");
    navHeader.classList.toggle("active");
};

moblieNav.addEventListener("click" , () => toggleNavbar());