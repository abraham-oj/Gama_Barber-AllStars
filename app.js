// Espera a que todo el HTML esté cargado para ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

    // Lógica para el menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Lógica para cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('#mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Lógica para el formulario de citas
    const appointmentForm = document.querySelector('#cita form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previene que la página se recargue

            // Aquí se enviaría la información a un servidor.
            // Por ahora, solo mostramos una alerta de confirmación.
            alert('¡Gracias por agendar! Te contactaremos pronto para confirmar tu cita.');

            this.reset(); // Limpia el formulario
        });
    }

});
