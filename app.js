// Archivo: js/app.js

// Animación simple de color swatches
const swatches = document.querySelectorAll('.color-swatch');
swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        const color = swatch.style.backgroundColor;
        alert(`Has seleccionado el color: ${color}`);
    });
});

// Smooth scroll para navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
