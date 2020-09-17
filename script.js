// Create a new 'div' element.
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const close_button = document.createElement('span');
close_button.id = 'close_button';
close_button.innerHTML = '&times;';
lightbox.appendChild(close_button);

// Select all images
const images = document.querySelectorAll('img.img_modal');
// Anonymous function for all images
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        img.style.height = '540px';
        img.style.width = '540px';
        while(lightbox.childNodes[1]) {
            lightbox.removeChild(lightbox.childNodes[1]);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
})

close_button.addEventListener('click', e => {
    lightbox.classList.remove('active');
})