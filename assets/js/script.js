// Main JavaScript file for Portfolio Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        initNavigation();
        initSmoothScrolling();
        initContactForm();
        // initParticleBackground(); // Removed particle background
        initProjectFilters();
        initScrollAnimations();
        initHeroAnimations();
        initLazyLoading();
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link highlighting based on scroll position
    function updateActiveLink() {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Navbar background on scroll
    function updateNavbarBackground() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.9)';
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', function() {
        updateActiveLink();
        updateNavbarBackground();
    });

    // Initial check
    updateActiveLink();
    updateNavbarBackground();
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Initialize EmailJS with public key if config exists
        if (typeof EMAILJS_CONFIG !== 'undefined' && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY_HERE') {
            emailjs.init(EMAILJS_CONFIG.publicKey);
        }

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Check if EmailJS is configured
            if (typeof EMAILJS_CONFIG === 'undefined' || EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY_HERE') {
                console.log('EmailJS not configured. Form data:', formData);
                showNotification('Email service not configured. Please contact via LinkedIn or direct email.', 'warning');
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            try {
                // Send email using EmailJS
                const response = await emailjs.send(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.templateId,
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        user_email: formData.email,
                        reply_to: formData.email,
                        message: formData.message,
                        to_email: 'ace.samdan@gmail.com'
                    }
                );

                console.log('Email sent successfully:', response);
                showNotification('Thank you for your message! I will get back to you soon.', 'success');

                // Reset form
                contactForm.reset();
            } catch (error) {
                console.error('Failed to send email:', error);
                showNotification('Failed to send message. Please try again or contact via LinkedIn.', 'error');
            } finally {
                // Restore button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
    // Create notification element if it doesn't exist
    let notification = document.getElementById('notification');

    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 1001;
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateX(100%);
        `;
        document.body.appendChild(notification);
    }

    // Set styles based on type
    const colors = {
        success: 'linear-gradient(135deg, #00ff88, #00d9ff)',
        error: 'linear-gradient(135deg, #ff0044, #ff00d4)',
        info: 'linear-gradient(135deg, #00d9ff, #00ff88)'
    };

    notification.style.background = colors[type] || colors.info;
    notification.style.color = '#0a0a0f';
    notification.style.fontWeight = '600';
    notification.textContent = message;

    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);

    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
    }, 5000);
}

// Particle background with interactive effects
function initParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;

    // Configuration
    const config = {
        particleCount: 100,
        particleSize: 2,
        connectionDistance: 150,
        mouseRadius: 100,
        baseSpeed: 0.5,
        colors: {
            particle: 'rgba(0, 217, 255, 0.8)',
            connection: 'rgba(0, 217, 255, 0.2)'
        }
    };

    // Adjust particle count for mobile devices
    if (window.innerWidth < 768) {
        config.particleCount = 50;
    }

    // Resize canvas to window size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * config.baseSpeed;
            this.vy = (Math.random() - 0.5) * config.baseSpeed;
            this.radius = config.particleSize;
        }

        update() {
            // Move particle
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off walls
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

            // Mouse interaction
            if (isMouseMoving) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.mouseRadius) {
                    const force = (config.mouseRadius - distance) / config.mouseRadius;
                    const angle = Math.atan2(dy, dx);

                    // Repel from mouse
                    this.vx -= Math.cos(angle) * force * 0.5;
                    this.vy -= Math.sin(angle) * force * 0.5;

                    // Damping to prevent excessive speed
                    this.vx *= 0.98;
                    this.vy *= 0.98;
                }
            }

            // Return to base speed
            this.vx += (Math.random() - 0.5) * 0.01;
            this.vy += (Math.random() - 0.5) * 0.01;

            // Limit maximum speed
            const maxSpeed = 2;
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed > maxSpeed) {
                this.vx = (this.vx / speed) * maxSpeed;
                this.vy = (this.vy / speed) * maxSpeed;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = config.colors.particle;
            ctx.fill();
        }
    }

    // Create particles
    function createParticles() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Draw connections between particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);

                    // Fade connection based on distance
                    const opacity = 1 - (distance / config.connectionDistance);
                    ctx.strokeStyle = `rgba(0, 217, 255, ${opacity * 0.2})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            // Connect to mouse if close
            if (isMouseMoving) {
                const dx = particles[i].x - mouseX;
                const dy = particles[i].y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.mouseRadius) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouseX, mouseY);

                    const opacity = 1 - (distance / config.mouseRadius);
                    ctx.strokeStyle = `rgba(0, 255, 136, ${opacity * 0.4})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        drawConnections();

        requestAnimationFrame(animate);
    }

    // Mouse move handler
    function handleMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseMoving = true;

        // Reset mouse moving flag after a delay
        clearTimeout(window.mouseTimeout);
        window.mouseTimeout = setTimeout(() => {
            isMouseMoving = false;
        }, 100);
    }

    // Touch move handler for mobile
    function handleTouchMove(e) {
        if (e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
            isMouseMoving = true;

            clearTimeout(window.mouseTimeout);
            window.mouseTimeout = setTimeout(() => {
                isMouseMoving = false;
            }, 100);
        }
    }

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', () => {
        isMouseMoving = false;
    });
}

// Project filter functionality
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter projects with animation
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Add transition styles to project cards
    projectCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
}

// Scroll-triggered animations using Intersection Observer
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section, .glass-card, .timeline-item, .skill-card, .project-card');

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(element => {
            element.classList.add('animate-ready');
            observer.observe(element);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        animatedElements.forEach(element => {
            element.classList.add('animate-in');
        });
    }
}

// Hero section text animations
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroTagline = document.querySelector('.hero-tagline');
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');

    // Typewriter effect for hero title
    if (heroTitle) {
        const titleText = heroTitle.textContent;
        heroTitle.innerHTML = '<span class="text-gradient typewriter"></span>';
        const typewriterElement = heroTitle.querySelector('.typewriter');

        let charIndex = 0;
        function typeWriter() {
            if (charIndex < titleText.length) {
                typewriterElement.textContent = titleText.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeWriter, 100);
            } else {
                typewriterElement.classList.add('typing-complete');
            }
        }

        setTimeout(typeWriter, 500);
    }

    // Fade in animations for other hero elements
    const fadeInElements = [heroSubtitle, heroTagline, ...heroButtons];
    fadeInElements.forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 1000 + (index * 200));
        }
    });

    // Add floating animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('floating');
    }
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

// Export functions for potential use in other scripts
window.portfolioUtils = {
    showNotification,
    initParticleBackground,
    initProjectFilters,
    initScrollAnimations,
    initLazyLoading
};