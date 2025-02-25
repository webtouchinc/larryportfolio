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

// Form Handling
function sendEmail(e) {
    e.preventDefault();
    
    const submitButton = document.querySelector('.submit-btn');
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Get form values
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_name: "Touani Larry",
        to_email: "touanilarry@gmail.com"
    };
    
    // Send email using EmailJS
    emailjs.send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log("SUCCESS", response);
            alert('Thank you for your message! I will get back to you soon.');
            document.getElementById('contact-form').reset();
        })
        .catch(function(error) {
            console.log("FAILED", error);
            alert('Oops! Something went wrong. Please try again later.');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        });
        
    return false;
}

document.getElementById('contact-form').addEventListener('submit', sendEmail);

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
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
