// JavaScript code to add interactivity

// Get all member images
const memberImages = document.querySelectorAll('.member-image');

// Add event listeners to each member image
memberImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    // Increase the size of the image when hovered
    image.style.transform = 'scale(1.1)';
  });

  image.addEventListener('mouseout', () => {
    // Reset the image size when the mouse is not over it
    image.style.transform = 'scale(1)';
  });
});
// JavaScript code to create the parallax effect
const backgroundSection = document.querySelector('.background-section');
const background = document.querySelector('.background-image');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  background.style.transform = `translateY(-${scrollY}px)`;
});
