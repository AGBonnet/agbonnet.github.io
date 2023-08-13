document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll('.image-container');
    const overlay = document.querySelector('.overlay');
    const zoomedImage = document.querySelector('.zoomed-image');
    const portfolioTitle = document.querySelector('.portfolio-title');
    const portfolioInfobox = document.querySelector('.portfolio-infobox');
  
    portfolioTitle.addEventListener('click', () => {
      portfolioInfobox.classList.toggle('open');
    });
  

    // Function to open the overlay and display the clicked image
    function openOverlay(imageSrc) {
        overlay.classList.add('active');
        zoomedImage.src = imageSrc;
        overlay.style.cursor = 'cursor';
    }

    // Function to close the overlay
    function closeOverlay() {
        overlay.classList.remove('active');
        overlay.style.cursor = 'default';
    }
  
    // Attach click event listeners to each image container
    imageContainers.forEach(container => {
        // Select all elements img in imageContainer
        const images = container.querySelectorAll('img');

        // For each image, addEventListener click to open overlay their imageSrc
        for (let i = 0; i < images.length; i++) {
            let imageSrc = images[i].getAttribute('src');
            images[i].addEventListener('click', () => {
                openOverlay(imageSrc);
            });
        }
    });
  
    // Close overlay when clicking outside the zoomed image
    overlay.addEventListener('click', event => {
        if (event.target === overlay) {
            closeOverlay();
        }
    });
});
  