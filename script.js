

const illumination = document.querySelector('.Illumination');


document.addEventListener('mousemove', (e) => {


    illumination.style.setProperty('--x', e.clientX + 'px');
    
    illumination.style.setProperty('--y', e.clientY + 'px');


});