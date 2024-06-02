function showProjects(language) {
    // Hide all project grids
    const projectGrids = document.querySelectorAll('.project-grid');
    projectGrids.forEach(grid => grid.style.display = 'none');

    // Show the selected language's projects
    const selectedProjects = document.getElementById(language + 'Projects');
    if (selectedProjects) {
        selectedProjects.style.display = 'flex';
    }
}

function buyProject(projectName) {
    const userConfirmed = confirm(`Do you want to buy ${projectName}?`);
    if (userConfirmed) {
        alert(`Thank you for purchasing ${projectName}!`);
        // Here you can integrate your payment gateway or further process the purchase
    }
}

// Show C++ projects by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showProjects('cpp');
});

