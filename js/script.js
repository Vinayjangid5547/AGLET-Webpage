// Document Ready Function
document.addEventListener('DOMContentLoaded', function () {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Login/Signup Form Toggle
    const showSignUpBtn = document.getElementById('showSignUp');
    const showLoginBtn = document.getElementById('showLogin');

    if (showSignUpBtn) {
        showSignUpBtn.addEventListener('click', function () {
            document.querySelector('.login-form').classList.add('d-none');
            document.querySelector('.signup-form').classList.remove('d-none');
            document.querySelector('.login-right-panel').classList.add('d-none');
            document.querySelector('.login-left-panel').classList.remove('d-none');
        });
    }

    if (showLoginBtn) {
        showLoginBtn.addEventListener('click', function () {
            document.querySelector('.signup-form').classList.add('d-none');
            document.querySelector('.login-form').classList.remove('d-none');
            document.querySelector('.login-left-panel').classList.add('d-none');
            document.querySelector('.login-right-panel').classList.remove('d-none');
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('mainNav');

    function checkScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        document.querySelector('.navbar-toggler').click();
                    }

                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Initialize Bootstrap Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add animation on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;

        animateElements.forEach(function (element) {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;

            // Check if element is in view
            if (
                (elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)
            ) {
                element.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Check on page load
});