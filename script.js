document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const checkVisibility = () => {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                const delay = element.getAttribute('data-delay') || 0; // Uzmi kašnjenje iz data-delay atributa
                setTimeout(() => {
                    element.classList.add('animate');
                }, delay);
            }
        });
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});