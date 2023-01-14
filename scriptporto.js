// script untuk button pencarian dan login //
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

// video slider script//
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// slider review script//
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

// function validasi login script//
function login()
    {
        if(form_login.email.value == '')
        {
            alert("Masukan Email")
        }
        else if(form_login.password.value== '')
        {
            alert("Masukan Password")
        }
        else if(form_login.username.value==''){
            alert("Masukan Username anda")
        }
        else
        {
            alert("Login Sukses, Welcome To TripVel " + form_login.username.value);
        }
    }
// script untuk tulisan ketik //
    var typed = new Typed(".auto-type", {
      strings: ["Hotels", "Flight Ticket", "Train Ticket", "Staycation in Batam", 
      "Tour in Hawaii", "Car Rental","Shopping", "Villa in Mexico","Event in Jakarta","Resort","Food and Drink"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true
  })

  

