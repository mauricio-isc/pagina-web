const img = document.getElementById('productImage');
const lens = document.getElementById('zoomLens');

lens.style.backgroundImage = `url('${img.src}')`;

function moveLens(e) {
    const rect = img.getBoundingClientRect();
    const x = e.pageX - rect.left - window.pageXOffset;
    const y = e.pageY - rect.top - window.pageYOffset;


    let lensX = x - lens.offsetWidth / 2;
    let lensY = y - lens.offsetHeight / 2;

    if (lensX < 0) lensX = 0;
    if (lensY < 0) lensY = 0;
    if (lensX > img.width - lens.offsetWidth) lensX = img.width - lens.offsetWidth;
    if (lensY > img.height - lens.offsetHeight) lensY = img.height - lens.offsetHeight;

    lens.style.left = `${lensX}px`;
    lens.style.top = `${lensY}px`;

    const zoomFactor = 2;
    lens.style.backgroundPosition = `-${lensX * zoomFactor}px -${lensY * zoomFactor}px`;
    lens.style.visibility = 'visible';
}

img.addEventListener('mousemove', moveLens);
img.addEventListener('mouseenter', () => lens.style.visibility = 'visible');
img.addEventListener('mouseleave', () => lens.style.visibility = 'hidden');