// Main JavaScript file for Portfolio Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        initViewSwitching();
        initNavigation();
        initHamburgerMenu();
        initAboutSectionAnimations();
    } catch (error) {
        console.error('Initialization error:', error);
    }
});

// View switching functionality
function initViewSwitching() {
    const views = document.querySelectorAll('.view');
    const menuLinks = document.querySelectorAll('.menu-link');
    const introSection = document.getElementById('intro');

    function switchView(targetId) {
        const targetView = document.getElementById(targetId);
        if (!targetView) return;

        // Hide all views immediately
        views.forEach(view => {
            view.classList.remove('active');
        });

        // Show target view immediately without delay
        targetView.classList.add('active');
        window.scrollTo(0, 0);

        // Show intro section only when on home view
        if (introSection) {
            if (targetId === 'home') {
                introSection.classList.add('visible');
            } else {
                introSection.classList.remove('visible');
            }
        }

        updateActiveLinks(targetId);
    }

    function updateActiveLinks(targetId) {
        menuLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${targetId}`) {
                link.classList.add('active');
            }
        });
    }

    function handleNavigation(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            switchView(targetId);
            window.location.hash = href;
        }
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            switchView(hash);
        } else {
            switchView('home');
        }
    });

    const initialHash = window.location.hash.substring(1) || 'home';
    switchView(initialHash);
}

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');

    // Navbar background on scroll
    function updateNavbarBackground() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', updateNavbarBackground);

    // Initial check
    updateNavbarBackground();
}

// Hamburger menu functionality
function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
    const menuPanel = document.getElementById('menuPanel');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    const menuLinks = document.querySelectorAll('.menu-link');
    const body = document.body;

    if (!hamburgerBtn || !menuPanel) return;

    function openMenu() {
        menuPanel.classList.add('active');
        hamburgerBtn.classList.add('active');
        body.classList.add('menu-open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        menuPanel.setAttribute('aria-hidden', 'false');
    }

    function closeMenu() {
        menuPanel.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        body.classList.remove('menu-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        menuPanel.setAttribute('aria-hidden', 'true');
    }

    function toggleMenu() {
        if (menuPanel.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    if (hamburgerWrapper) {
        hamburgerWrapper.addEventListener('click', toggleMenu);
    } else {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }

    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', closeMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuPanel.classList.contains('active')) {
            closeMenu();
        }
    });
}

// About section background animations with Intersection Observer
function initAboutSectionAnimations() {
    // Select all about sections
    const aboutSections = document.querySelectorAll('.about-me-section, .experience-section, .education-section, .interests-section');

    if (!aboutSections.length) return;

    // Create Intersection Observer with threshold for smooth transitions
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px', // Trigger when section is 20% into viewport
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add in-view class when section enters viewport
                entry.target.classList.add('in-view');
            } else {
                // Remove in-view class when section leaves viewport
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    // Observe each section
    aboutSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Alternative: For more prominent animation, use individual observers with different thresholds
    const fadeInOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of section is visible
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered fade-in animation to child elements
                const container = entry.target.querySelector('.container');
                if (container) {
                    container.style.animationDelay = '0.3s';
                }
            }
        });
    }, fadeInOptions);

    // Apply fade-in observer to sections
    aboutSections.forEach(section => {
        fadeInObserver.observe(section);
    });
}