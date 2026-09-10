// ==========================================================
// LEOVISION TECH — MAIN JAVASCRIPT
// ==========================================================


// ==========================================================
// THEME SYSTEM
// ==========================================================

// Theme buttons
const themeButtons = document.querySelectorAll(".theme-btn");

// Theme icons
const themeIcons = document.querySelectorAll(".theme-btn img");

// Body
const body = document.body;


// ==========================================================
// THEME IMAGES / ELEMENTS
// ==========================================================

// Navbar logo
const siteLogo = document.getElementById("siteLogo");

// Homepage hero image
const heroImage = document.getElementById("heroImage");

// About section image
const aboutImage = document.getElementById("aboutImage");

// Why section lion
const whyLion = document.getElementById("whyLion");

// Footer logo
const footerLogo = document.getElementById("footerLogo");

// About page hero image
const aboutHeroImage = document.getElementById("aboutHeroImage");

const ctaLion = document.getElementById("ctaLion");

const servicesHeroLion = document.getElementById("servicesHeroLion");


// ==========================================================
// UPDATE THEME
// ==========================================================

function updateTheme() {

    const isLight = body.classList.contains("light-theme");


    // ======================================================
    // THEME ICONS
    // ======================================================

    themeIcons.forEach(icon => {

        if (isLight) {

            icon.src = "assets/images/sun.svg";
            icon.alt = "Light Theme";

        } else {

            icon.src = "assets/images/moon.svg";
            icon.alt = "Dark Theme";

        }

    });


    // ======================================================
    // NAVBAR LOGO
    // ======================================================

    if (siteLogo) {

        siteLogo.src = isLight
            ? "assets/images/logo-light.png"
            : "assets/images/logo-dark.png";

    }


    // ======================================================
    // HOMEPAGE HERO
    // ======================================================

    if (heroImage) {

        heroImage.src = isLight
            ? "assets/images/hero-light.png"
            : "assets/images/hero-dark.png";

    }


    // ======================================================
    // ABOUT SECTION
    // ======================================================

    if (aboutImage) {

        aboutImage.src = isLight
            ? "assets/images/about-light.png"
            : "assets/images/about-dark.png";

    }


    // ======================================================
    // WHY CHOOSE US — LION
    // ======================================================

    if (whyLion) {

        whyLion.src = isLight
            ? "assets/images/lion-light.png"
            : "assets/images/lion-dark.png";

    }

    // ======================================================
    // FINAL CTA — LION
    // ======================================================

    if (ctaLion) {

        ctaLion.src = isLight
            ? "assets/images/cta-lion-light.png"
            : "assets/images/cta-lion-dark.png";

    }

    // ======================================================
    // SERVICES HERO — LION
    // ======================================================
    if (servicesHeroLion) {
        servicesHeroLion.src = isLight
            ? "assets/images/about-hero-light.png"
            : "assets/images/about-hero-dark.png";
    }


    // ======================================================
    // FOOTER LOGO
    // ======================================================

    if (footerLogo) {

        footerLogo.src = isLight
            ? "assets/images/logo-light.png"
            : "assets/images/logo-dark.png";

    }


    // ======================================================
    // ABOUT PAGE HERO
    // ======================================================

    if (aboutHeroImage) {

        aboutHeroImage.src = isLight
            ? "assets/images/about-hero-light.png"
            : "assets/images/about-hero-dark.png";

    }

}


// ==========================================================
// LOAD SAVED THEME
// ==========================================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light-theme");

} else {

    body.classList.remove("light-theme");

}


// Apply theme immediately
updateTheme();


// ==========================================================
// THEME BUTTON CLICK
// ==========================================================

themeButtons.forEach(button => {

    button.addEventListener("click", () => {

        body.classList.toggle("light-theme");


        // Save selected theme
        if (body.classList.contains("light-theme")) {

            localStorage.setItem("theme", "light");

        } else {

            localStorage.setItem("theme", "dark");

        }


        // Update all theme elements
        updateTheme();

    });

});


// ==========================================================
// MOBILE MENU
// ==========================================================

const menuToggle = document.getElementById("menuToggle");

const closeMenu = document.getElementById("closeMenu");

const mobileMenu = document.querySelector(".mobile-menu");


// ==========================================================
// OPEN MOBILE MENU
// ==========================================================

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

        mobileMenu.classList.add("active");

        body.classList.add("menu-open");

    });

}


// ==========================================================
// CLOSE MOBILE MENU
// ==========================================================

if (closeMenu && mobileMenu) {

    closeMenu.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        body.classList.remove("menu-open");

    });

}


// ==========================================================
// CLOSE MENU WHEN LINK IS CLICKED
// ==========================================================

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (mobileMenu) {

            mobileMenu.classList.remove("active");

        }

        body.classList.remove("menu-open");

        body.style.overflow = "auto";

    });

});


// ==========================================================
// PORTFOLIO SLIDER
// ==========================================================

const portfolioTrack =
    document.querySelector(".portfolio-track");

const portfolioCards =
    document.querySelectorAll(".project-card");

const portfolioPrev =
    document.querySelector(".portfolio-prev");

const portfolioNext =
    document.querySelector(".portfolio-next");

const portfolioDots =
    document.querySelectorAll(".portfolio-dot");


// Current slide
let portfolioIndex = 0;


// ==========================================================
// UPDATE PORTFOLIO SLIDER
// ==========================================================

function updatePortfolio() {

    // Stop if portfolio doesn't exist on this page
    if (!portfolioTrack || portfolioCards.length === 0) {

        return;

    }


    // Move slider
    portfolioTrack.style.transform =
        `translateX(-${portfolioIndex * 100}%)`;


    // Update dots
    portfolioDots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === portfolioIndex
        );

    });

}


// ==========================================================
// NEXT PROJECT
// ==========================================================

if (portfolioNext) {

    portfolioNext.addEventListener("click", () => {

        portfolioIndex++;


        // Return to first project
        if (portfolioIndex >= portfolioCards.length) {

            portfolioIndex = 0;

        }


        updatePortfolio();

    });

}


// ==========================================================
// PREVIOUS PROJECT
// ==========================================================

if (portfolioPrev) {

    portfolioPrev.addEventListener("click", () => {

        portfolioIndex--;


        // Go to last project
        if (portfolioIndex < 0) {

            portfolioIndex =
                portfolioCards.length - 1;

        }


        updatePortfolio();

    });

}


// ==========================================================
// PORTFOLIO DOTS
// ==========================================================

portfolioDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        portfolioIndex = index;

        updatePortfolio();

    });

});


// ==========================================================
// INITIAL PORTFOLIO STATE
// ==========================================================

updatePortfolio();


// ==========================================================
// EMAILJS — CONTACT FORM
// ==========================================================

// Contact form
const contactForm =
    document.getElementById("contactForm");

const contactSubmit =
    document.getElementById("contactSubmit");

const formStatus =
    document.getElementById("formStatus");


// ==========================================================
// EMAILJS INITIALIZATION
// ==========================================================

if (typeof emailjs !== "undefined") {

    emailjs.init({

        publicKey: "CA0GbM3c8-LqU_F1_"

    });

}


// ==========================================================
// CONTACT FORM SUBMIT
// ==========================================================

if (contactForm && typeof emailjs !== "undefined") {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        // Prevent multiple submissions
        if (contactSubmit) {

            contactSubmit.disabled = true;

        }


        // Change button text
        if (contactSubmit) {

            const buttonText =
                contactSubmit.querySelector(
                    "span:first-child"
                );

            if (buttonText) {

                buttonText.textContent = "Sending...";

            }

        }


        // Clear previous status
        if (formStatus) {

            formStatus.textContent = "";

            formStatus.className = "form-status";

        }


        // ==================================================
        // SEND EMAIL
        // ==================================================

        emailjs.sendForm(

            "service_ruvb64c",

            "template_ap2lmw6",

            contactForm

        )

        .then(function(response) {

            console.log(
                "Email sent successfully:",
                response.status,
                response.text
            );


            // Success message
            if (formStatus) {

                formStatus.textContent =
                    "Message sent successfully! We'll get back to you soon.";

                formStatus.classList.add("success");

            }


            // Reset form
            contactForm.reset();


            // Enable button
            if (contactSubmit) {

                contactSubmit.disabled = false;


                const buttonText =
                    contactSubmit.querySelector(
                        "span:first-child"
                    );

                if (buttonText) {

                    buttonText.textContent =
                        "Send Message";

                }

            }

        })

        .catch(function(error) {

            console.error(
                "EmailJS Error:",
                error
            );


            // Error message
            if (formStatus) {

                formStatus.textContent =
                    "Something went wrong. Please try again.";

                formStatus.classList.add("error");

            }


            // Enable button
            if (contactSubmit) {

                contactSubmit.disabled = false;


                const buttonText =
                    contactSubmit.querySelector(
                        "span:first-child"
                    );

                if (buttonText) {

                    buttonText.textContent =
                        "Send Message";

                }

            }

        });

    });

}