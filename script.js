document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica del Menú Desplegable ---
    const dropdownButton = document.getElementById('menu-dropdown-button');
    const dropdownMenu = document.getElementById('menu-dropdown');

    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que el click se propague al window
            dropdownMenu.classList.toggle('hidden');
        });
    }

    // Cierra el menú si se hace clic fuera de él
    window.addEventListener('click', () => {
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // --- Lógica del Formulario para WhatsApp ---
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = this.querySelector('[name="name"]').value;
            const servicio = this.querySelector('[name="service"]').value;
            const fecha = this.querySelector('[name="date"]').value;
            
            const numero = "5212212396187";
            
            const mensaje = `Hola! 👋 Me gustaría agendar una cita.\n\n*Nombre:* ${nombre}\n*Servicio:* ${servicio}\n*Fecha preferida:* ${fecha}`;
            
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
            
            window.open(url, '_blank');
            this.reset();
        });
    }
});
