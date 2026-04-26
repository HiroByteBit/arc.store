export const initUI = () => {
    initScrollHandler();
    initMobileMenu();
    initNewsletter();
    initStatCounters();
};

const initScrollHandler = () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
};

const initMobileMenu = () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-mobile-nav');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav-links a');

    const toggleMenu = () => {
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    };

    mobileBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    navLinks.forEach(link => link.addEventListener('click', toggleMenu));
};

const initNewsletter = () => {
    const form = document.getElementById('newsletter-form');
    const successMsg = document.getElementById('newsletter-success');
    const input = document.getElementById('newsletter-email');
    const submitBtn = form.querySelector('button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value) {
            input.disabled = true;
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
            
            // Simulate network request
            setTimeout(() => {
                form.style.display = 'none';
                successMsg.classList.remove('hidden');
            }, 500);
        }
    });
};

const initStatCounters = () => {
    const stats = document.querySelectorAll('.stat-num');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseFloat(target.dataset.target);
                const isDecimal = target.dataset.decimal === 'true';
                const duration = 2000; // ms
                const start = performance.now();
                
                const animate = (currentTime) => {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Ease out expo
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    const currentVal = endVal * easeProgress;
                    
                    if (isDecimal) {
                        target.textContent = currentVal.toFixed(1);
                    } else {
                        target.textContent = Math.floor(currentVal);
                    }
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        target.textContent = endVal;
                    }
                };
                
                requestAnimationFrame(animate);
                observer.unobserve(target); // Only animate once
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
};
