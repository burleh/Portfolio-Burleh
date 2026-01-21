document.addEventListener('DOMContentLoaded', function() {
    var nameText = "BURLEH LEONARD";
    var preloaderName = document.getElementById('preloader-name');
    var preloader = document.getElementById('preloader');
    var idx = 0;

    function typeName() {
        if (preloaderName && idx < nameText.length) {
            preloaderName.innerHTML += nameText.charAt(idx);
            idx++;
            setTimeout(typeName, 100);
        } else {
            setTimeout(function() {
                if (preloader) {
                    preloader.classList.add('fade-out');
                    document.body.style.overflow = 'auto';
                }
            }, 800);
        }
    }

    document.body.style.overflow = 'hidden';
    typeName();

    // Animaciones de scroll
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(function(el) {
        observer.observe(el);
    });
});