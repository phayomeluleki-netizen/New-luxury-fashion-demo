const hero = document.querySelector(".hero");

const heroImages = [
  "images/hero/hero1.jpg",
  "images/hero/hero2.jpg",
  "images/hero/hero3.jpg"
];

let currentIndex = 0;

function changeHeroImage() {
  hero.style.backgroundImage = `url(${heroImages[currentIndex]})`;
  currentIndex = (currentIndex + 1) % heroImages.length;
}

// Load first image
changeHeroImage();

// Change image every 5 seconds
setInterval(changeHeroImage, 5000);
