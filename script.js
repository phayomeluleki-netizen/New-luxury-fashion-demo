const hero = document.querySelector(".hero");

const images = [
  "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80"
];

let index = 0;

function changeHero() {
  hero.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

changeHero();
setInterval(changeHero, 5000);
