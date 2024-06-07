const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector(".nextButton");
const prevButton = document.querySelector(".previousButton");

let scrollPosition = 0;
const imageWidth = 250;

nextButton.addEventListener('click', () => {
    scrollPosition -= imageWidth;
    if (scrollPosition <= imageWidth - (carousel.scrollWidth - 900)) {
        scrollPosition = 0;
    }
    carousel.style.transform = `translateX(${scrollPosition}px`;
});

prevButton.addEventListener('click', () => {
    scrollPosition += imageWidth;
    if (scrollPosition > 0) {
        scrollPosition = 0;
    }
    carousel.style.transform = `translateX(${scrollPosition}px)`;
});