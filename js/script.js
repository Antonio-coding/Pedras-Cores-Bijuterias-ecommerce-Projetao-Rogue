//PARALAX
const parallax01 = document.querySelector('.Parallax01');
const imgJoias05 = document.querySelector('#img-joias05');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;

  // Ajuste a velocidade de movimento do parallax conforme necessário
  const parallaxSpeed = 0.35;

  // Calcula a nova posição do plano de fundo com base no scroll
  const imagePosition = -(scrollPosition * parallaxSpeed) + 'px';

  // Aplica a nova posição à imagem
  imgJoias05.style.transform = `translateY(${imagePosition})`;
});
