const container = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
let autoSlideInterval; // Declare the variable to hold the interval ID

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + container.children.length) % container.children.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % container.children.length;
  updateCarousel();
});

// Function to start the auto-slide timer
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % container.children.length;
    updateCarousel();
  }, 3500); // Adjust the interval (in milliseconds) as needed (e.g., 5000 for 5 seconds)
}

// Function to stop the auto-slide timer
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start the auto-slide when the page loads
startAutoSlide();

// Pause auto-slide when the user interacts with the carousel
container.addEventListener('mouseover', stopAutoSlide);
container.addEventListener('mouseout', startAutoSlide);

function updateCarousel() {
  const offset = -currentIndex * container.clientWidth;
  container.style.transform = `translateX(${offset}px)`;
}
