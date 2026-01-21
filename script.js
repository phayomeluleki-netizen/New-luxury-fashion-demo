
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
        <img src="${p.image}" alt="${p.name}">
        <span class="tag">${p.tag}</span>
        <h3>${p.name}</h3>
        <p>${p.price}</p>
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
