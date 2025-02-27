document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const prevBtn = document.querySelector(".fa-chevron-left");
    const nextBtn = document.querySelector(".fa-chevron-right");
    const images = document.querySelectorAll(".carousel_img img");
    const menuIcon = document.querySelector(".menu");
    let currentIndex = 0;
    
    // Array of image sources
    const imageSources = Array.from(images).map(img => img.src);
    
    // Function to update the hero background image with a smooth transition
    function updateHeroImage(index) {
        hero.style.backgroundImage = `url('${imageSources[index]}')`;
        hero.style.transition = "background-image 0.5s ease-in-out";
    }
    
    // Next button functionality
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        updateHeroImage(currentIndex);
        resetAutoSlide();
    });
    
    // Previous button functionality
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
        updateHeroImage(currentIndex);
        resetAutoSlide();
    });
    
    // Click event on carousel images to set hero background
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            updateHeroImage(currentIndex);
            resetAutoSlide();
        });
    });
    
    // Initialize the hero with the first image
    updateHeroImage(currentIndex);
    
    // Auto slide functionality
    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        updateHeroImage(currentIndex);
    }, 1500);
    
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % imageSources.length;
            updateHeroImage(currentIndex);
        }, 1500);
    }
    
    // Toggle "Book a Tour Today" button on menu icon click
    menuIcon.addEventListener("click", () => {
        const bookButton = document.querySelector(".book_button_container");
        bookButton.style.display = bookButton.style.display === "none" || bookButton.style.display === "" ? "flex" : "none";
    });
});
