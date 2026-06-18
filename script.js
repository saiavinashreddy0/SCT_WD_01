document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // 1. Navbar Transformation & Back-to-Top Toggle
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
            scrollTopBtn.style.display = 'flex';
        } else {
            navbar.classList.remove('scrolled');
            scrollTopBtn.style.display = 'none';
        }
        evaluateActiveSection();
    });

    // 2. Scroll Back to Top Action
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 3. Mobile Navigation Toggle Drawer
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Handle Closing drawer upon selection
    document.querySelectorAll('.nav-links a').forEach(target => {
        target.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 4. Highlight Active Nav item dynamically on Scroll
    const sections = document.querySelectorAll('section[id]');
    function evaluateActiveSection() {
        const currentPos = window.pageYOffset;
        sections.forEach(section => {
            const height = section.offsetHeight;
            const top = section.offsetTop - 120;
            const id = section.getAttribute('id');
            const matchLink = document.querySelector(`.nav-links a[href*=${id}]`);
            
            if (matchLink) {
                if (currentPos > top && currentPos <= top + height) {
                    matchLink.classList.add('active');
                } else {
                    matchLink.classList.remove('active');
                }
            }
        });
    }
});