
/* HERO SLIDER */
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);

/* PRODUCTS */
const productsData = [
  {
    name: "Evening Dress",
    price: "$499",
    category: "women",
    tag: "Exclusive Drop",
    image: "evening-dress.jpg"
  },
  {
    name: "Designer Bag",
    price: "$699",
    category: "accessories",
    tag: "Limited Edition",
    image: "designer-bag.jpg"
  },
  {
    name: "Luxury Shoes",
    price: "$399",
    category: "limited",
    tag: "Exclusive Drop",
    image: "luxury-shoes.jpg"
  }
];

const productsContainer = document.querySelector(".products");

function renderProducts(list) {
  productsContainer.innerHTML = "";
  list.forEach(p => {
    productsContainer.innerHTML += `
      <div class="product">
  <div class="img-box">
    <img src="${p.image}" alt="${p.name}">
    <span class="price">${p.price}</span>
    <span class="tag">${p.tag}</span>
  </div>
  <h3>${p.name}</h3>
</div>
    `;
  });
}

function filterProducts(category) {
  if (category === "all") {
    renderProducts(productsData);
  } else {
    renderProducts(productsData.filter(p => p.category === category));
  }
}

renderProducts(productsData);
const productsContainer = document.getElementById("products");

function loadProducts(category = "all") {
  productsContainer.innerHTML = "";

  const filtered = category === "all"
    ? products
    : products.filter(p => p.category === category);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product fade-in";

    card.innerHTML = `
      <div class="img-box">
        <img src="${product.image}" alt="${product.name}">
        <span class="price">${product.price}</span>
      </div>
      <h3>${product.name}</h3>
    `;

    card.addEventListener("click", () => openModal(product));
    productsContainer.appendChild(card);
  });
}

// INITIAL LOAD
loadProducts();
function openModal(product) {
  document.getElementById("modal-img").src = product.image;
  document.getElementById("modal-title").textContent = product.name;
  document.getElementById("modal-price").textContent = product.price;
  document.getElementById("quick-view-modal").style.display = "block";
}
