// Initialize EmailJS
(function() {
    // EmailJS public key
    emailjs.init("-C8WuflYADvKSVH23G1vq");
})();

// Typing Animation
const typedTextElement = document.querySelector('.typed-text');
const textArray = [
    'Software Engineering Student',
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver'
];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Form Handling
const contactForm = document.getElementById('contact-form');
const submitButton = contactForm.querySelector('.submit-btn');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Send email using EmailJS
    emailjs.send(
        "service_f9djakl", // EmailJS service ID
        "template_dtojsgr", // EmailJS template ID
        {
            from_name: name,
            from_email: email,
            message: message,
            to_name: "Touani Larry",
            to_email: "touanilarry@gmail.com"
        }
    ).then(
        function(response) {
            console.log("SUCCESS", response);
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            // Reset form
            contactForm.reset();
        },
        function(error) {
            console.log("FAILED", error);
            // Show error message
            alert('Oops! Something went wrong. Please try again later.');
        }
    ).finally(() => {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
