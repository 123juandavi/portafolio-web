const textElements = document.querySelectorAll('.text-to-animate');
let currentIndex = 0;

function animateText() {
  const currentText = textElements[currentIndex];
  const nextIndex = (currentIndex + 1) % textElements.length;
  const nextText = textElements[nextIndex];

  setTimeout(() => {
    currentText.style.opacity = '0';
    setTimeout(() => {
      nextText.style.opacity = '1';
      currentIndex = nextIndex;
      setTimeout(animateText, 2000); // Cambiar el texto cada 2 segundos (2000 ms)
    }, 1000); // Esperar 1 segundo antes de mostrar el siguiente texto
  }, 1000); // Esperar 1 segundo antes de ocultar el texto actual
}

animateText(); // Comenzar la animación
