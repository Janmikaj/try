function navigate(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('section');

    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Display the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Initialize by displaying only the home section
window.onload = function() {
    navigate('home');
};
