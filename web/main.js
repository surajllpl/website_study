const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isOpen =navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen? "ri-close-line":"ri-menu-line")
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

window.onscroll = function() {stickNavbar()};

const navbar = document.getElementById("navbar");
console.log(navbar);

const sticky = navbar.offsetTop;

function stickNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const scrollRevealOption ={
    distance :"50px",
    origin : "bottom",
    duration : 1000,
};

ScrollReveal().reveal(".container_left h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".nav_links li", {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
    interval: 200,  // Each link will animate with a slight delay
});
ScrollReveal().reveal(".container_left .container_btn",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".container_right h4",{
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".container_right h2",{
    ...scrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".container_right h3",{
    ...scrollRevealOption,
    delay: 3000,
});

ScrollReveal().reveal(".container_right p",{
    ...scrollRevealOption,
    delay: 3500,
});

ScrollReveal().reveal(".container_right .tent-1",{
    duration :1000,
    delay: 4000,
});

ScrollReveal().reveal(".container_right .tent-2",{
    duration :1000,
    // ...scrollRevealOption,
    delay: 4500,
});

ScrollReveal().reveal(".tent-images",{
    
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".content-tent h4",{
    ...scrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".content-tent h2",{
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".content-tent h3",{
    ...scrollRevealOption,
    delay: 3000,
});

ScrollReveal().reveal(".content-tent b",{
    ...scrollRevealOption,
    delay: 3300,
});
ScrollReveal().reveal(".content-tent p",{
    ...scrollRevealOption,
    delay: 3500,
});
ScrollReveal().reveal(".location",{
    ...scrollRevealOption,
    origin:"left",
    delay: 4000,
});

ScrollReveal().reveal(".socials span",{
    ...scrollRevealOption,
    origin:"top",
    delay: 4500,
    interval : 500,
});


