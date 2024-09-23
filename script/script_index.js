let container = document.getElementById('imageContainer');
let images = container.getElementsByTagName('img');
let currentIndex = 0;

setInterval(() => {
    // oculto la imagen actual
    images[currentIndex].style.opacity = 0;
    
    // Calculo el indice de la siguiente imagen
    currentIndex = (currentIndex + 1) % images.length;
    
    // Muestro la siguiente imagen
    images[currentIndex].style.opacity = 1;
    //doy un delay de 3 segundos 
}, 3000);
