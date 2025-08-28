document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces que abren modales
    const modalLinks = document.querySelectorAll('.box-button a');
    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = link.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    // Cerrar el modal al hacer clic en la X o fuera del contenido
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

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
