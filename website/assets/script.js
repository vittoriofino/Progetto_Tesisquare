document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library with faster durations
    AOS.init({
        duration: 600, // Reduced from 800 to 600
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 120,
        anchorPlacement: 'top-bottom'
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
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add dynamic content loading for team section
    const teamMembers = [
        { initials: 'VF', name: 'Vittorio Fino', email: 'vittoriofino06@gmail.com' },
        { initials: 'LG', name: 'Luca Grosso' },
        { initials: 'BR', name: 'Beatrice Risso' },
        { initials: 'FT', name: 'Francesco Torterolo' },
        { initials: 'LB', name: 'Lorenzo Bruno' },
        { initials: 'RS', name: 'Rebecca Simondi' },
        { initials: 'VP', name: 'Viola Peruzzi' }
    ];
    
    // Generate random colors for team member avatars
    function getRandomColor(initials) {
        // Create a deterministic color based on initials
        let hash = 0;
        for (let i = 0; i < initials.length; i++) {
            hash = initials.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        // Get colors from our theme variables
        const colors = [
            '#29535A', // primary
            '#AC6244', // secondary
            '#3A7379', // primary variant
            '#C97855', // secondary variant
            '#1D3B40', // dark primary
            '#8F4E33'  // dark secondary
        ];
        
        // Use the hash to pick a color
        const index = Math.abs(hash) % colors.length;
        return colors[index];
    }
    
    // Apply random colors to team member avatars
    document.querySelectorAll('.member-img').forEach((avatar, index) => {
        if (index < teamMembers.length) {
            avatar.style.backgroundColor = getRandomColor(teamMembers[index].initials);
        }
    });
    
    // Add parallax effect to header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        const offset = window.pageYOffset;
        header.style.backgroundPositionY = offset * 0.5 + 'px';
    });
    
    // Add counter animation for data statistics
    function animateCounters() {
        document.querySelectorAll('.counter').forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1500; // milliseconds
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
    
    // Initialize counter animation when element is in view
    const counterSection = document.querySelector('#data-prep');
    if (counterSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counterObserver.observe(counterSection);
    }
    
    // Add mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const nav = document.querySelector('.nav-links');
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Add year to copyright in footer
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
