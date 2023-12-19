function toggleNav() {
    var navbar = document.getElementById('navbar')
    if(navbar.className === 'navbar') {
        navbar .className += " responsive";
    }else{
        navbar.className = "navbar"
    }
}


let currentIndex = 0;

const slides = document.querySelectorAll('.slider img')
const totalSlides = slides.length

const slideInterval = 4000

document.querySelector('.next').addEventListener('click', () =>{
     currentIndex = (currentIndex + 1) % totalSlides;
     updateSlider()
     resetInterval()
     
})

document.querySelector('.prev').addEventListener('click', () =>{
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateSlider()
    resetInterval()
})