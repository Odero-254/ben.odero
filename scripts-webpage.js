function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('visible'); // Adds the visible class for smooth transition
    popup.classList.remove('hidden'); // Ensures it's not hidden
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden'); // Adds the hidden class to fade out
    setTimeout(() => {
      popup.classList.remove('visible'); // Removes visibility after fade-out
    }, 30000); // Delay for smooth transition
  }
  
  function toggleDescription(button) {
    const description = button.parentElement.previousElementSibling; // Gets the relevant description
    
    // Toggle expanded class to control content visibility
    if (description.classList.contains('expanded')) {
      description.classList.remove('expanded');
      button.innerHTML = '<i class="fas fa-info-circle"></i> More'; // Updates button text/icon
    } else {
      description.classList.add('expanded');
      button.innerHTML = '<i class="fas fa-minus-circle"></i> Less'; // Updates button text/icon
    }
  }
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


  