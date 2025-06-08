document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('#hero .image img');
    if (heroImage) {
        heroImage.addEventListener('click', function() {
            // Only handle clicks on mobile devices
            if (window.matchMedia('(hover: none)').matches) {
                this.classList.toggle('toggled');
            }
        });
    }
}); 