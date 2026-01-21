(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // 1. Lógica del Preloader con Escritura de Letras
        var nameText = "BURLEH LEONARD";
        var preloaderName = document.getElementById('preloader-name');
        var idx = 0;

        function typeName() {
            if (preloaderName && idx < nameText.length) {
                preloaderName.innerHTML += nameText.charAt(idx);
                idx++;
                setTimeout(typeName, 100);
            } else {
                setTimeout(function() {
                    var preloader = document.getElementById('preloader');
                    if (preloader) {
                        preloader.classList.add('fade-out');
                        document.body.style.overflow = 'auto';
                    }
                }, 800);
            }
        }

        // Bloqueamos scroll al inicio
        document.body.style.overflow = 'hidden';
        typeName();

        // 2. Animaciones de Scroll (Reveal)
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            var revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(function(el) {
                observer.observe(el);
            });
        }

        // 3. Menú Hamburguesa Móvil
        var toggle = document.querySelector('.menu-toggle');
        var menu = document.querySelector('.nav-links');
        
        if (toggle && menu) {
            toggle.addEventListener('click', function() {
                var isActive = menu.classList.toggle('active');
                toggle.classList.toggle('active');
                document.body.style.overflow = isActive ? 'hidden' : 'auto';
            });

            var links = document.querySelectorAll('.nav-links a');
            links.forEach(function(l) {
                l.addEventListener('click', function() {
                    menu.classList.remove('active');
                    toggle.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            });
        }
    });
})();