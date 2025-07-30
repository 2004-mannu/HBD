document.addEventListener('DOMContentLoaded', () => {
    // --- Surprise Button Functionality ---
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseContent = document.getElementById('surpriseContent');

    if (surpriseBtn && surpriseContent) {
        surpriseBtn.addEventListener('click', () => {
            surpriseContent.classList.toggle('hidden'); // Toggles the 'hidden' class
            if (surpriseContent.classList.contains('hidden')) {
                surpriseBtn.textContent = 'Click for a Surprise!';
            } else {
                surpriseBtn.textContent = 'Hide Surprise';
            }
        });
    }

    // --- Simple Photo Slideshow (Click to show next) ---
    const photoContainer = document.querySelector('.photo-container');
    const nextPhotoBtn = document.getElementById('nextPhotoBtn');
    const images = photoContainer ? photoContainer.querySelectorAll('img') : [];
    let currentPhotoIndex = 0;

    if (nextPhotoBtn && images.length > 0) {
        // Hide all but the first image initially
        images.forEach((img, index) => {
            if (index !== 0) {
                img.style.display = 'none';
            }
        });

        nextPhotoBtn.addEventListener('click', () => {
            // Hide current photo
            images[currentPhotoIndex].style.display = 'none';

            // Move to next photo, loop back if at end
            currentPhotoIndex = (currentPhotoIndex + 1) % images.length;

            // Show next photo
            images[currentPhotoIndex].style.display = 'block';
        });
    }
});