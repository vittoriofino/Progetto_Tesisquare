document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library with faster durations
    AOS.init({
        duration: 600, // Reduced from 800 to 600
        easing: 'ease-in-out',
        once: false,
        mirror: true 
    });
    
    // Initialize fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
