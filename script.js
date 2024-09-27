const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the nav links visibility
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the navbar when a link is clicked
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 600) {
            navLinks.classList.remove('active'); // Close navbar on link click
        }
    });
});
