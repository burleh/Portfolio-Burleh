document.addEventListener('DOMContentLoaded', function() {
    var nameText = "BURLEH LEONARD";
    var preloaderName = document.getElementById('preloader-name');
    var preloader = document.getElementById('preloader');
    var idx = 0;

    // 1. Forzamos la desaparición del preloader tras 5 segundos como máximo (por seguridad)
    setTimeout(function() {
        if (preloader && !preloader.classList.contains('fade-out')) {
            preloader.classList.add('fade-out');
            document.body.classList.remove('loading-active');
        }
    }, 5000);

    // 2. Función de escritura
    function typeName() {
        if (preloaderName && idx < nameText.length) {
            preloaderName.innerHTML += nameText.charAt(idx);
            idx++;
            setTimeout(typeName, 100);
        } else {
            setTimeout(function() {
                if (preloader) {
                    preloader.classList.add('fade-out');
                    document.body.classList.remove('loading-active');
                }
            }, 800);
        }
    }

    // Iniciamos escritura
    document.body.classList.add('loading-active');
    typeName();

    // 3. Animaciones de Scroll
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
        // Si el navegador es viejo, mostramos todo directamente
        document.querySelectorAll('.reveal').forEach(function(el) {
            el.classList.add('active');
        });
    }

    // 4. Menú móvil
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