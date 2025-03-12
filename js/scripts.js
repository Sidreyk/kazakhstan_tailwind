document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    function showNextImage() {
        // Remove active class from the current image
        images[currentIndex].classList.remove("active");

        // Calculate the next index
        currentIndex = (currentIndex + 1) % images.length;

        // Add active class to the new current image
        images[currentIndex].classList.add("active");
    }

    // Initially set the first image as active
    images[currentIndex].classList.add("active");

    // Automatically change the image every 5 seconds
    setInterval(showNextImage, 5000);
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('[data-collapse-toggle="navbar-menu"]');
    const menu = document.getElementById('navbar-menu');

    button.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});
