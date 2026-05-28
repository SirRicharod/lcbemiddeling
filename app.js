document.addEventListener('DOMContentLoaded', function () {

    // 1. Sticky Navigation Bar Scrolled Effect
    const headerOuter = document.getElementById('header-outer');

    function toggleHeaderState() {
        if (window.scrollY > 50) {
            headerOuter.classList.add('scrolled');
        } else {
            headerOuter.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', toggleHeaderState);
    toggleHeaderState(); // Check initial scroll state

    // 2. Mobile Responsive Menu Hamburger Toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileNavToggle.addEventListener('click', function () {
        mobileNavToggle.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Prevent scroll when mobile menu is active
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileNavToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // 3. Back to Top Button Interaction
    const toTopBtn = document.getElementById('to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            toTopBtn.classList.add('visible');
        } else {
            toTopBtn.classList.remove('visible');
        }
    });

    toTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
