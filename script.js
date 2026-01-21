/* ======================
   HERO SLIDER
====================== */
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5000);

/* ======================
   PRODUCTS LOAD
====================== */
const productsContainer = document.getElementById("products");

function loadProducts(category = "all") {
  productsContainer.innerHTML = "";

  const filtered =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <div class="img-box">
        <img src="${product.image}" alt="${product.name}">
        <span class="price">${product.price}</span>
      </div>
      <h3>${product.name}</h3>
      <button class="whatsapp-btn"
        onclick="orderWhatsApp('${product.name}','${product.price}')">
        Order on WhatsApp
      </button>
    `;

    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("whatsapp-btn")) {
        openModal(product);
      }
    });

    productsContainer.appendChild(card);
  });
}

// INITIAL LOAD
loadProducts();

/* ======================
   WHATSAPP ORDER
====================== */
function orderWhatsApp(name, price) {
  const message = `Hello, I want to order:\n\nProduct: ${name}\nPrice: ${price}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ======================
   MODAL
====================== */
const modal = document.getElementById("quick-view-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const closeModal = document.querySelector(".close");

function openModal(product) {
  modalImg.src = product.image;
  modalTitle.textContent = product.name;
  modalPrice.textContent = product.price;
  modal.style.display = "block";
}

closeModal.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
