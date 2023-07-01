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



// Testimonial Section end
