document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para inicializar las partículas de fondo ---
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        particles: {
            number: {
                value: 40, // Cantidad de partículas
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#D4AF37" // Color dorado
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true,
            },
            size: {
                value: 2,
                random: true,
            },
            move: {
                enable: true,
                speed: 1, // Velocidad de movimiento
                direction: "none",
                out_mode: "out",
                bounce: false,
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: false, // Desactivamos interactividad para que sea sutil
                },
                onClick: {
                    enable: false,
                },
                resize: true
            }
        },
        detectRetina: true,
    });

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

            // Capturamos todos los campos del formulario
            const nombre = this.querySelector('[name="name"]').value;
            const servicio = this.querySelector('[name="service"]').value;
            const fecha = this.querySelector('[name="date"]').value;
            const hora = this.querySelector('[name="time"]').value; // <-- NUEVO CAMPO

            const numero = "5212212396187";

            // Construimos el mensaje incluyendo la hora
            const mensaje = `Hola! 👋 Me gustaría agendar una cita.\n\n*Nombre:* ${nombre}\n*Servicio:* ${servicio}\n*Fecha preferida:* ${fecha}\n*Hora preferida:* ${hora}`;

            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

            window.open(url, '_blank');
            this.reset();
        });
    }
});
