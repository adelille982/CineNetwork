/*javascript cinéNetwork*/

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const curtainLeft = document.querySelector(".curtain.left");
const curtainRight = document.querySelector(".curtain.right");
const backgroundSlide = document.querySelector(".background-slide");

function openCurtains() {
    curtainLeft.style.width = "0%";
    curtainRight.style.width = "0%";
    setTimeout(() => {
        backgroundSlide.style.display = "none";
    }, 5000);
}

function initializeSlides() {
    slides.forEach((slide) => {
        slide.style.display = "block";
        slide.style.opacity = 0;
    });
    slides[currentIndex].style.opacity = 1;
}

function changeSlide() {
    const oldIndex = currentIndex;
    currentIndex = (currentIndex + 1) % slides.length;

    slides[oldIndex].style.opacity = 0;
    slides[currentIndex].style.opacity = 1;
}

window.onload = () => {
    initializeSlides();
    openCurtains();
    setInterval(changeSlide, 5000);
};
