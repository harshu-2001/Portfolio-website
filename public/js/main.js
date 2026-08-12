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

document.querySelectorAll('.card, .project-card, .sub-title').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Nav background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 12, 17, 0.92)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.16)';
    } else {
        nav.style.background = 'rgba(10, 12, 17, 0.72)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.09)';
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

    // Set profile information (aligned with resume)
    document.getElementById('firstName').textContent = 'Harsh';
    document.getElementById('lastName').textContent = 'Shrivastava';
    document.getElementById('profile').textContent = 'AI & Automation Developer';

    const secondary = document.getElementById('secondary-role');
    if (secondary) secondary.textContent = '\u00B7 Full-Stack Engineer';

    // Set description (resume summary)
    const desc = document.getElementById('desc');
    if (desc) {
        desc.innerHTML =
            "I'm an AI & Automation Developer with 3+ years of engineering experience, specializing in Copilot Studio agents, Power Platform, and LLM-based automation. I currently build Copilot Studio agents and Power Platform solutions for the Immigration Control System at Ernst & Young (EY), alongside biometric integrations for Government of India projects." +
            '<br/><br/>' +
            "My background spans full-stack engineering — React, Next.js, Python, FastAPI — to agentic AI systems like RAG pipelines and Azure AI Foundry agents. I like working close to production: shipping things that real teams depend on, not just prototypes.";
    }

    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Reveal page
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover lift for skill/education cards handled via CSS; JS hover kept minimal
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-6px)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});