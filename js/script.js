const imgs = document.getElementsByClassName("carroseul-item");
const img = document.querySelectorAll(".carroseul-item img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1);
// CAROUSEL

// Obtenha os elementos do DOM
const carousel = document.querySelector('.carousel');
const slideContainer = carousel.querySelector('.carousel-container');
const slide = carousel.querySelector('.carousel-slide');
const prevBtn = carousel.querySelector('#prevBtn');
const nextBtn = carousel.querySelector('#nextBtn');
const slideWidth = slide.clientWidth;

// Defina a posição inicial do slide
let position = 0;

// Event listener para o botão anterior
prevBtn.addEventListener('click', () => {
  // Verifique se não está no primeiro slide
  if (position > 0) {
    position -= slideWidth;
    slide.style.transform = `translateX(-${position}px)`;
  }
});

// Event listener para o botão próximo
nextBtn.addEventListener('click', () => {
  // Verifique se não está no último slide
  if (position < (slide.scrollWidth - slideWidth)) {
    position += slideWidth;
    slide.style.transform = `translateX(-${position}px)`;
  }
});
