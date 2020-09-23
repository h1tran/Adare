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
        document.body.classList.add('noscroll');
        lightbox.classList.add('active');
        const img = document.createElement('img');
        side_length = 'calc(20em + 10vw)';
        img.src = image.src;
        img.style.height = side_length;
        img.style.width = side_length;
        while(lightbox.childNodes[1]) {
            lightbox.removeChild(lightbox.childNodes[1]);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
    document.body.classList.remove('noscroll');
})

close_button.addEventListener('click', e => {
    lightbox.classList.remove('active');
    document.body.classList.remove('noscroll');
})