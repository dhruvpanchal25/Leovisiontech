/* =========================
   SCROLL REVEAL OBSERVER
========================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // animate once only
    }
  });
}, { threshold: 0.2 });


/* =========================
   ABOUT SECTION ANIMATION
========================= */

const aboutText = document.querySelector(".about-text");
const aboutImage = document.querySelector(".about-image");

if (aboutText) observer.observe(aboutText);
if (aboutImage) observer.observe(aboutImage);


/* =========================
   PROJECTS SECTION
========================= */

document.querySelectorAll(".tech-card").forEach((card, index) => {
    observer.observe(card);
    card.style.transitionDelay = `${index * 0.1}s`;
});

/* =========================
   SECTION TITLE ANIMATION
========================= */

const projectTitle = document.querySelector(".projects-title");
const techTitle = document.querySelector(".tech-title");
const coreTitle = document.querySelector(".core-title");
const contacttitle = document.querySelector(".contact-title")

if (projectTitle) observer.observe(projectTitle);
if (techTitle) observer.observe(techTitle);
if (coreTitle) observer.observe(coreTitle);
if (contacttitle) observer.observe(contacttitle);

/* =========================
   CORE SERVICES ANIMATION
========================= */

document.querySelectorAll(".service-card").forEach((card, index) => {
    observer.observe(card);
    card.style.transitionDelay = `${index * 0.15}s`;
});


/* =========================
   PROJECT CARD ANIMATION
========================= */

document.querySelectorAll(".project-card").forEach((card, index) => {
    observer.observe(card);
    card.style.transitionDelay = `${index * 0.15}s`;
});

/* =========================
   CONTACT SECTION ANIMATION
========================= */

const contactTitle = document.querySelector(".contact-title");
const contactFormCard = document.querySelector(".contact-form-card");
const contactInfoCard = document.querySelector(".contact-info-card");

if (contactTitle) observer.observe(contactTitle);
if (contactFormCard) observer.observe(contactFormCard);
if (contactInfoCard) observer.observe(contactInfoCard);

lucide.createIcons();

/* =========================
   backend of form 
========================= */
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_ruvb64c", "template_ap2lmw6", this)
    .then(function() {
        alert("Message sent successfully ✅");
        form.reset();
    }, function(error) {
        alert("Failed ❌ " + error.text);
    });
});


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
});