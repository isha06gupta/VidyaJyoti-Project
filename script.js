document.addEventListener("DOMContentLoaded", () => {
    // Options for the IntersectionObserver
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the target is visible
    };

    // Callback function for the IntersectionObserver
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Check if the target is intersecting
            if (entry.isIntersecting) {
                // Add the 'animate' class to trigger the animation
                entry.target.classList.add("animate");
                // Stop observing the target
                observer.unobserve(entry.target);
            }
        });
    };

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Get all elements to be observed
    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll to the 'Get Involved' section when the 'Join Us' button is clicked
    const joinUsButton = document.querySelector(".hero-btn");
    if (joinUsButton) {
        joinUsButton.addEventListener("click", (event) => {
            event.preventDefault();
            const getInvolvedSection = document.querySelector("#get-involved");
            if (getInvolvedSection) {
                getInvolvedSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // Handle form submission
    const submitBtn = document.getElementById("submit-btn");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const closeBtn = document.querySelector(".close-btn");

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const volunteer = document.getElementById("volunteer").checked;
        const sponsor = document.getElementById("sponsor").checked;
        const partner = document.getElementById("partner").checked;

        // Validate form
        if (name && email && phone && address && (volunteer || sponsor || partner)) {
            popupMessage.textContent = "Thank you for joining us! Your membership details have been submitted successfully. Together, we can make a difference!";

            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("address").value = "";
            document.getElementById("volunteer").checked = false;
            document.getElementById("sponsor").checked = false;
            document.getElementById("partner").checked = false;
        } else {
            popupMessage.textContent = "Oops! Please ensure all fields are filled out correctly before submitting the form.";
        }

        // Display popup
        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});