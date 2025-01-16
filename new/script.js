function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Update button text based on mode
    const toggleButton = document.querySelector('.dark-mode-toggle');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
}
