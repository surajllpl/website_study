// show navbar

const nav = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");
navToggle.onclick = function(){
    nav.classList.toggle("show-nav");
}

// Remove NavBar
const navLink = document.querySelectorAll(".nav-link");
function linkAction(){
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.remove("show-nav");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

//change active color
const navLinkColor = document.querySelectorAll(".nav-link");
function linkColor(){
    if(navLinkColor){
        navLinkColor.forEach(a => a.classList.remove('active'))
        this.classList.add('active')
    }
}

navLinkColor.forEach(a => a.addEventListener("click", linkColor))
