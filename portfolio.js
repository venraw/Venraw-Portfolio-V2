 const menuBtn = document.querySelector('.menu-btn');
        const overlay = document.querySelector('.overlay');
        const navBtn = document.querySelector('nav ul');
        const closeBtn = document.querySelector('.close-btn')

        menuBtn.addEventListener('click', () => {
            navBtn.classList.add('active');
            overlay.classList.add('active');
            document.body.classList.add('menu-open');
        })

        const closeMenu = () => {
            navBtn.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        };

        closeBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);


        document.getElementById('current-year').textContent = new Date().getFullYear();


        const scrollBtn = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
            if (scrollY > 800) {
                scrollBtn.classList.add('show')
            } else {
                scrollBtn.classList.remove('show')
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });