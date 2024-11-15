let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev"); 
let carousel = document.querySelector(".carousel");
let list = document.querySelector(".list");
let item = document.querySelector(".item");
let runningTime = document.querySelector(".timerunning");

let timeRunning =3000;
let timeAutoNext =7000;

nextBtn.onclick = function(){
    showSlider('next')
}
prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut;
let runNextAuto = setTimeout(()=>{
    nextBtn.click();
},timeAutoNext);

function resetTimeAnimation(){
    runningTime.style.animation ='none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null;
    runningTime.style.animation = 'runningTime 7s liner 1 forwords'
}
function showSlider(type){
    let sliderItemsDom = list.querySelectorAll(".carousel .list .item")
    if (type == 'next'){
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
    }else{
        list.prepend(sliderItemsDom[sliderItemsDom.length-1] );
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carousel.classList.remove('next');
        carousel.classList.remove('prev');

    },timeAutoNext);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(()=>{
       nextBtn.click();

    },timeAutoNext);
    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation();

document.querySelector('a[href="#about-section"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#about-section');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  