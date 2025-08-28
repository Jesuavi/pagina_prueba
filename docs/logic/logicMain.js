document.addEventListener("DOMContentLoaded", function() {
    // Botón "más info"
    const btn = document.getElementById('btn-mas-info');
    if (btn) {
        btn.addEventListener('click', function() {
            window.location.href = '/html/servicios.html';
        });
    }

    // Animación de aparición al hacer scroll
    function mostrarElementos() {
        const elementos = document.querySelectorAll('.aparecer');
        const trigger = window.innerHeight * 0.85;
        elementos.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < trigger) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', mostrarElementos);
    mostrarElementos();
});