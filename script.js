// HERO SLIDER
// HERO SLIDER (LOCAL IMAGES)
document.addEventListener("DOMContentLoaded",document.querySelector(".hero-content").classList.add("visible"); () => {
  const hero = document.querySelector(".hero");

  const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
  ];

  let currentIndex = 0;

  function changeHero() {
    hero.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % heroImages.length;
  }

  changeHero();
  setInterval(changeHero, 5000);
});
// ================================
// DYNAMIC PRODUCT LOADING
// ================================

const products = [
  {
    name: "Luxury Shirt",
    price: "$299",
    category: "men",
    tag: "Limited Edition",
    image: "images/products/luxury-shirt.jpg"
  },
  {
    name: "Evening Dress",
    price: "$499",
    category: "women",
    tag: "Exclusive Drop",
    image: "images/products/evening-dress.jpg"
  },
  {
    name: "Designer Bag",
    price: "$699",
    category: "accessories",
    tag: "Limited Edition",
    image: "images/products/designer-bag.jpg"
  },
  {
    name: "Luxury Shoes",
    price: "$399",
    category: "limited",
    tag: "Exclusive Drop",
    image: "images/products/luxury-shoes.jpg"
  }
];

const productsGrid = document.getElementById("products-grid");

function loadProducts() {
  productsGrid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card fade-in";
    card.dataset.category = product.category;
    card.dataset.name = product.name;

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-overlay"><p>${product.tag}</p></div>
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="btn quick-view-btn">Quick View</button>
    `;

    productsGrid.appendChild(card);
  });

  attachQuickView();
}

// LOAD PRODUCTS ON PAGE LOAD
window.addEventListener("DOMContentLoaded", loadProducts);

// HERO TEXT ANIMATION
const heroText = document.querySelector('.hero-text');
window.addEventListener('load', () => {
  heroText.classList.add('visible');
});

// SCROLL ANIMATIONS
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// PRODUCT FILTER
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const productCards = document.querySelectorAll('.product-card');

const filterProducts = () => {
  const searchValue = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;

  productCards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category;

    if ((name.includes(searchValue) || searchValue === '') &&
        (filterValue === 'all' || category === filterValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterProducts);
filterSelect.addEventListener('change', filterProducts);

// QUICK VIEW MODAL
function attachQuickView() {
  document.querySelectorAll(".quick-view-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");
      modal.style.display = "block";
      modalImg.src = card.querySelector("img").src;
      modalTitle.textContent = card.dataset.name;
      modalPrice.textContent = card.querySelector("p").textContent;
    });
  });
}

// MOBILE HAMBURGER
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;';
document.querySelector('header').appendChild(hamburger);

const nav = document.querySelector('header nav ul');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
});
