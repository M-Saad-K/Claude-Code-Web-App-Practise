// Simple cart functionality
let cartCount = 0;
const cartIcon = document.querySelector('.cart-icon');
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

// Update cart display
function updateCartDisplay() {
    cartIcon.textContent = `🛒 Cart (${cartCount})`;
}

// Add item to cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        updateCartDisplay();

        // Visual feedback
        const originalText = button.textContent;
        button.textContent = '✓ Added!';
        button.style.backgroundColor = '#90c95e';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '#4a7c42';
        }, 1000);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards for animation
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});