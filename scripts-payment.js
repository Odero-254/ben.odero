document.addEventListener("DOMContentLoaded", function () {
    const serviceTypes = document.querySelectorAll(".service-type");

    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to reveal elements in the viewport
    const revealOnLoad = () => {
        serviceTypes.forEach((service) => {
            if (isInViewport(service)) {
                service.classList.add("show");
            }
        });
    };

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    }, {
        threshold: 0.33 // Trigger when 33% of the element is visible
    });

    // Observe all service-type elements
    serviceTypes.forEach((service) => {
        observer.observe(service);
    });

    // Check for elements in the viewport on page load
    revealOnLoad();
});

// Get the Back to Top element
const backToTop = document.getElementById('backToTop');

// Show or hide the Back to Top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

// Smooth scroll to the top when the button is clicked
backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Get the current year and set it in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();