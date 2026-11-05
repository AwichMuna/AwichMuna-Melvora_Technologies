
/* =========================================
   1. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });

}


/* =========================================
   2. CONTACT FORM VALIDATION
========================================= */

const contactForm = document.querySelector("#contact-form form");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Prevent the browser's default form submission
        event.preventDefault();

        // Retrieve form values
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate required fields
        if (fullName === "" || email === "" || message === "") {

            formMessage.textContent = "Please complete all required fields.";
            formMessage.style.color = "#f87171";

            return;
        }

        // Display success feedback
        formMessage.textContent = "Thank you! Your enquiry details are valid. We'll enable message submission soon.";
        formMessage.style.color = "#4ade80";

        // Clear the form
        contactForm.reset();

    });

}


/* =========================================
   3. PROJECT FILTERING
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the selected project category
        const selectedCategory = button.dataset.filter;

        // Check each project card
        projectCards.forEach(function(card) {

            const projectCategory = card.dataset.category;

            // Display matching projects
            if (selectedCategory === "all" || selectedCategory === projectCategory) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

        // Remove active class from all filter buttons
        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        // Highlight the selected filter button
        button.classList.add("active");

    });

});



/* =========================================
   4. SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    "main section > h2, main section > p, " +
    ".service-card, .service-detail, .value-card, " +
    ".category-card, .project-card, .contact-card"
);

// Add the reveal class to each selected element
revealElements.forEach(function(element) {
    element.classList.add("reveal");
});

// Create an observer to detect visible elements
const revealObserver = new IntersectionObserver(
    function(entries, observer) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                // Stop observing after the animation
                // has happened once
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

// Observe all selected elements
revealElements.forEach(function(element) {
    revealObserver.observe(element);
});
