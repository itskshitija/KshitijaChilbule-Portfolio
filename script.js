function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showImage(index) {
  // Ensure index is within the range
  if (index < 0) index = totalImages - 1;
  if (index >= totalImages) index = 0;

  // Calculate the position of the images
  const offset = -index * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

  // Update current index
  currentIndex = index;
}

function nextImage() {
  showImage(currentIndex + 1);
}

function prevImage() {
  showImage(currentIndex - 1);
}
