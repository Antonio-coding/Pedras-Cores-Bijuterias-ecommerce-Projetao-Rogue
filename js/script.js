// Obtenha os elementos do DOM
const carousel = document.querySelector(".carousel");
const slideContainer = carousel.querySelector(".carousel-container");
const slide = carousel.querySelector(".carousel-slide");
const prevBtn = carousel.querySelector("#prevBtn");
const nextBtn = carousel.querySelector("#nextBtn");
const slideWidth = slide.clientWidth;
let position = 0;
let transitioning = false;

// Função para mover o carrossel
const moveCarousel = (amount) => {
  if (!transitioning) {
    transitioning = true;
    position += amount;
    slide.style.transition = `transform 0.5s ease-in-out`;
    slide.style.transform = `translateX(-${positi-on}px)`;
  }
};

// Event listener para o botão anterior
prevBtn.addEventListener("click", () => {
  if (position > 0) {
    moveCarousel(-slideWidth);
  }
});

// Event listener para o botão próximo
nextBtn.addEventListener("click", () => {
  if (position < slide.scrollWidth - slideWidth) {
    moveCarousel(slideWidth);
  }
});

// Resetar a posição do carrossel quando a transição terminar
slide.addEventListener("transitionend", () => {
  if (position === slide.scrollWidth - slideWidth) {
    position = 0;
    slide.style.transition = `none`;
    slide.style.transform = `translateX(0)`;
  }
  transitioning = false;
});

// Transição automática para o próximo slide a cada 5 segundos
setInterval(() => {
  if (!transitioning && position < slide.scrollWidth - slideWidth) {
    moveCarousel(slideWidth);
  }
}, 5000);

//PARALAX
const parallax01 = document.querySelector('.Parallax01');
const imgJoias05 = document.querySelector('#img-joias05');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;

  // Ajuste a velocidade de movimento do parallax conforme necessário
  const parallaxSpeed = 0.5;

  // Calcula a nova posição do plano de fundo com base no scroll
  const imagePosition = -(scrollPosition * parallaxSpeed) + 'px';

  // Aplica a nova posição à imagem
  imgJoias05.style.transform = `translateY(${imagePosition})`;
});
