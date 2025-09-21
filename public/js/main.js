// main.js - Main functionality and event handlers

// Mobile menu functionality
function openmenu() {
    document.getElementById('sidemenu').classList.add('open');
}

function closemenu() {
    document.getElementById('sidemenu').classList.remove('open');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            closemenu();
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Add animation class to elements
document.querySelectorAll('.card, .project-card, .work, .sub-title').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.bg-animation');
    if (parallax) {
        const speed = scrolled * 0.3;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Navigation background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
});

// Contact form submission
const scriptURL = 'YOUR_GOOGLE_SHEETS_SCRIPT_URL_HERE';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        // Simulate form submission for demo
        msg.innerHTML = "Thank you! Your message has been sent successfully.";
        setTimeout(() => {
            msg.innerHTML = "";
            form.reset();
        }, 5000);

        // Uncomment below for actual Google Sheets integration
        /*
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank you! Your message has been sent successfully.";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Sorry, there was an error sending your message.";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        });
        */
    });
}

// Dynamic content loading
document.addEventListener('DOMContentLoaded', function () {
    // Load all content from separate JS files
    loadSkills();
    loadExperience();
    loadEducation();
    loadProjects();

    // Set profile information
    document.getElementById('firstName').textContent = 'Harsh';
    document.getElementById('lastName').textContent = 'Shrivastava';
    document.getElementById('profile').textContent = 'Frontend Developer';

    // Set description
    const desc = document.getElementById('desc');
    if (desc) {
        desc.innerHTML = `I'm a passionate Frontend Developer with expertise in modern web technologies. 
                I create engaging, responsive, and user-friendly web applications using HTML, CSS, JavaScript, 
                and popular frameworks like React and Flutter. With a keen eye for design and attention to detail, 
                I transform ideas into beautiful digital experiences.
                <br><br>
                My journey in web development started with a curiosity for creating interactive websites, 
                and now I specialize in building scalable applications that provide excellent user experiences 
                across all devices and platforms.`;
    }

    // Add loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Typing animation for header
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation after page load
setTimeout(() => {
    const profileElement = document.getElementById('profile');
    if (profileElement) {
        typeWriter(profileElement, 'Frontend Developer');
    }
}, 1000);

// Add hover effects for cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skills animation
function animateSkills() {
    const skillCards = document.querySelectorAll('.skill-item');
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize animations when sections come into view
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('skills')) {
                animateSkills();
            }
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});