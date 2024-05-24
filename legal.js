// navbar.js

// Function to update the copyright year
function updateCopyrightYear() {
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `<p>&copy; ${currentYear} Nightshift Studios. All rights reserved.</p>`;
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    updateCopyrightYear();
});