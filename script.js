document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const servicesDropdown = document.querySelector('.services-dropdown');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    servicesDropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            servicesDropdown.classList.toggle('active');
        }
    });

    const dropdownToggle = servicesDropdown.querySelector('.nav-link');
    dropdownToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            servicesDropdown.classList.toggle('active');
        }
    });
});

/* ------------- Navbar Section End ----------------- */


// ---------------- Add interactivity for hamburger menu ----------------- 