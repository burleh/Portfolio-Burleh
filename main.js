(function() {
    // Función para quitar el preloader
    function removePreloader() {
        var preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            document.body.style.overflow = 'auto';
            console.log("Preloader removed");
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var nameText = "BURLEH LEONARD";
        var preloaderName = document.getElementById('preloader-name');
        var idx = 0;

        // Bloqueo de seguridad: Si algo falla, el preloader se quita a los 5 segundos sí o sí
        setTimeout(removePreloader, 5000);

        // Bloqueamos scroll al inicio
        document.body.style.overflow = 'hidden';

        // Función de escritura
        function typeName() {
            if (preloaderName && idx < nameText.length) {
                preloaderName.innerHTML += nameText.charAt(idx);
                idx++;
                setTimeout(typeName, 100);
            } else {
                // Al terminar de escribir, esperamos un segundo y quitamos preloader
                setTimeout(removePreloader, 1000);
            }
        }

        // Iniciamos la escritura
        typeName();

        // --- ANIMACIONES DE SCROLL (REVEAL) ---
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(function(el) {
                observer.observe(el);
            });
        } else {
            // Si el navegador es antiguo, mostramos todo
            document.querySelectorAll('.reveal').forEach(function(el) {
                el.classList.add('active');
            });
        }

        // --- MENÚ MÓVIL ---
        var toggle = document.querySelector('.menu-toggle');
        var menu = document.querySelector('.nav-links');
        if (toggle && menu) {
            toggle.onclick = function() {
                var active = menu.classList.toggle('active');
                toggle.classList.toggle('active');
                document.body.style.overflow = active ? 'hidden' : 'auto';
            };
        }
    });
})();