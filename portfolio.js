document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const overlay = document.querySelector('.overlay');
    const navBtn = document.querySelector('nav ul');
    const closeBtn = document.querySelector('.close-btn');

    if (menuBtn && navBtn && overlay) {
        menuBtn.addEventListener('click', () => {
            navBtn.classList.add('active');
            overlay.classList.add('active');
            document.body.classList.add('menu-open');
        });
    }

    const closeMenu = () => {
        if (navBtn) navBtn.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const scrollBtn = document.querySelector('.back-to-top');

    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Close mobile menu when clicking any navigation link
    const navLinks = document.querySelectorAll('nav ul a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
});

// Force window to top instantly before rendering completes
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  
  // Clear hash from URL without reloading page
  if (window.location.hash) {
    history.replaceState(null, null, ' ');
  }
});