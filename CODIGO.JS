/* =====================================================
   NEXUS GAMING — script.js
   Toda la lógica interactiva de la tienda
   ===================================================== */

/* ─── DATOS: CATÁLOGO DE PRODUCTOS ─────────────────── */
const PRODUCTS = [
  // ── Videojuegos ──────────────────────────────────
  {
    id: 1,
    name: "Hogwarts Legacy Standard PS5X",
    category: "videojuegos",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1065/10651666/1529-hogwarts-legacy-standard-ps5.jpg",
    price: 26.99,
    oldPrice: 74.99,
    description: "Hogwarts Legacy es un inmersivo juego de rol de mundo abierto de un jugador ambientado en el mundo mágico del siglo XIX. Los jugadores podrán experimentar la vida de estudiante del Colegio Hogwarts de Magia y Hechicería como nunca antes y embarcarse en una peligrosa aventura jamás contada para descubrir una verdad oculta del mundo mágico..",
    rating: 4.8,
    reviews: 600,
  },
  {
    id: 2,
    name: "LEGO Batman: El Legado del Caballero Oscuro PS5",
    category: "videojuegos",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1101/11016852/184-lego-batman-el-legado-del-caballero-oscuro-ps5.jpg",
    price: 56.99,
    oldPrice: 69.99,
    description: "LEGO Batman: El Legado del Caballero Oscuro es un juego de acción y aventura que se centra en la narrativa desarrollado por TT Games, los creadores de LEGO® Star Wars™: La Saga Skywalker. Embárcate en el viaje que emprende Bruce Wayne hasta que se convierte en Batman, forjando amistades con aliados de confianza mientras que se enfrenta a los supervillanos más peligrosos y legendarios de DC..",
    rating: 4.6,
    reviews: 541,
  },
  {
    id: 3,
    name: "Gran Turismo 7 PS5",
    category: "videojuegos",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/83/838537/1711-gran-turismo-7-ps5-comprar.jpg",
    price: 46.99,
    oldPrice: 79.99,
    description: "Ya seas un corredor competitivo, un coleccionista, un perfeccionista, un diseñador, un fotógrafo o un entusiasta de los arcades, alimenta tu pasión por los coches con elementos inspirados en el pasado, el presente y el futuro de Gran Turismo..",
    rating: 4.5,
    reviews: 345,
  },
  {
    id: 4,
    name: "EA SPORTS FC 26 PS5",
    category: "videojuegos",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1093/10937262/1504-ea-sports-fc-26-ps5.jpg",
    price: 27.99,
    oldPrice: 79.99,
    description: "El Club es tuyo en EA SPORTS FC™ 26. Juega a tu manera con una experiencia de juego renovada impulsada por los comentarios de  la comunidad de FC. La nueva configuración Jugabilidad auténtica ofrece nuestra experiencia más fiel al fútbol.",
    rating: 4.7,
    reviews: 769,
  },

  // ── Teclados ─────────────────────────────────────
  {
    id: 5,
    name: "Logitech G512 X 98 ",
    category: "teclados",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1105/11051236/1611-teclado-logitech-g512-x-98-magnetico-compacto-con-switches-dual-swap-y-rgb-lightsync-da0788fe-52a0-4383-8296-372ff6965b52.jpg",
    price: 219.99,
    oldPrice: null,
    description: "Teclado mecánico RGB con software personalizable, tecnología DUAL SWAP y teclas de doble moldeado.",
    rating: 4.9,
    reviews: 5,
  },
  {
    id: 6,
    name: "Huntsman V3 X Tenkeyless",
    category: "teclados",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1082/10828859/1528-huntsman-v3-x-tenkeyless-teclado-opto-mecanico-gaming-rgb-razer-box-purple-negro.jpg",
    price: 99.99,
    oldPrice: 139.99,
    description: "Formato 60% ultra-compacto, retroiluminado con RGB personalizable, y función anti-ghosting.",
    rating: 4.7,
    reviews: 24,
  },
  {
    id: 7,
    name: "Newskill Serike V2",
    category: "teclados",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1079/10790437/1474-newskill-serike-v2-teclado-mecanico-gaming-rgb-blanco-newswitch-red.jpg",
    price: 79.99,
    oldPrice: 125.99,
    description: "Teclado con acabados premium, teclas más duraderas de doble inyección y reposabrazos.",
    rating: 4.8,
    reviews: 12,
  },

  // ── Ratones ───────────────────────────────────────
  {
    id: 8,
    name: "SteelSeries Aerox 3 Wireless",
    category: "ratones",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1048/10488605/1393-steelseries-aerox-3-wireless-2022-snow-raton-gaming-inalambrico-18000dpi.jpg",
    price: 54.99,
    oldPrice: 109.99,
    description: "Cable de malla más flexible y ligero, duración de 80 millones de clics y diseño ultraligero de 68g.",
    rating: 4.9,
    reviews: 49,
  },
  {
    id: 9,
    name: "Razer Basilisk V3",
    category: "ratones",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/82/822348/1516-razer-basilisk-v3-raton-gaming-optico-rgb-26000-dpi.jpg",
    price: 49.99,
    oldPrice: 84.99,
    description: "Hasta 11 botones programables, 17 millones de colores RGB personalizables, y peso ligero (101g).",
    rating: 4.7,
    reviews: 145,
  },
  {
    id: 10,
    name: "Forgeon Vendetta Gaming",
    category: "ratones",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/43/433870/1990-forgeon-vendetta-raton-gaming-rgb-16000dpi-negro-comprar.jpg",
    price: 39.99,
    oldPrice: 59.99,
    description: "Ratón con 7 botones funcionales, hasta 16.000 de DPI y configurable para 5 modos distintos.",
    rating: 4.5,
    reviews: 65,
  },

  // ── Auriculares ───────────────────────────────────
  {
    id: 11,
    name: "Astro Gaming A30",
    category: "auriculares",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1058/10580533/1899-astro-gaming-a30-auriculares-gaming-inalambricos-blancos.jpg",
    price: 178.50,
    oldPrice: 248.99,
    description: "Múltiple conectividad, batería de +30 horas y controlable desde la app móvil.",
    rating: 4.8,
    reviews: 9,
  },
  {
    id: 12,
    name: "Razer Barracuda X Chroma",
    category: "auriculares",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1100/11000435/6946-auriculares-razer-barracuda-x-chroma-inalambricos-bluetooth-gaming-sonido-71-rgb-blancos-opiniones.jpg",
    price: 206.50,
    oldPrice: 220.99,
    description: "Sonido envolvente 7.1, iluminación RGB personalizable y cable trenzado extraíble.",
    rating: 4.6,
    reviews: 7,
  },
  {
    id: 13,
    name: "Forgeon General Gaming",
    category: "auriculares",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/43/433832/1488-forgeon-general-auriculares-gaming-inalambricos-pc-ps4-ps5-xbox-xbox-x-switch-negros.jpg",
    price: 79.99,
    oldPrice: 104.99,
    description: "Cascos gaming inalámbricos, autonomía de +60 horas y multiple compatibilidad.",
    rating: 4.7,
    reviews: 13,
  },

  // ── Sillas ────────────────────────────────────────
  {
    id: 14,
    name: "Tempest Glare RGB",
    category: "sillas",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1079/10798095/1500-tempest-glare-rgb-silla-gaming-negra.jpg",
    price: 149.99,
    oldPrice: 219.99,
    description: "Silla gaming con iluminación RGB, reposabrazos 2D y reclinación 180°.",
    rating: 4.2,
    reviews: 30,
  },
  {
    id: 15,
    name: "Forgeon Spica Fabric",
    category: "sillas",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1059/10591259/1168-forgeon-spica-fabric-silla-gaming-tela-transpirable-gris-comprar.jpg",
    price: 249.99,
    oldPrice: 359.99,
    description: "Diseño ergonómico con malla transpirable, base de aluminio y ruedas silenciosas.",
    rating: 4.7,
    reviews: 21,
  },

  // ── Monitores ─────────────────────────────────────
  {
    id: 16,
    name: "LG Quad HD 32\" 180Hz",
    category: "monitores",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1097/10971709/1500-monitor-lg-32g600a-b-32-quad-hd-180hz-va-curvo-1ms-freesync-premium-hdr10.jpg",
    price: 194.99,
    oldPrice: 259.99,
    description: "Diseñado para romper los límites del gaming competitivo y la productividad avanzada.",
    rating: 4.5,
    reviews: 43,
  },
  {
    id: 17,
    name: "Samsung Odyssey G5 27\" Curvo",
    category: "monitores",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1081/10811202/1210-samsung-odyssey-ls27cg552euxen-27-led-qhd-165hz-freesync-curvo-review.jpg",
    price: 169.99,
    oldPrice: 289.99,
    description: "Pantalla curva 27\" ultrawide 21:9, 165Hz, HDR10 y 1ms de respuesta.",
    rating: 4.9,
    reviews: 102,
  },
  {
    id: 18,
    name: "Monitor Acer KA272 Full HD",
    category: "monitores",
    image: "https://thumb.pccomponentes.com/w-530-530/articles/1086/10869838/1276-acer-ka272-g0bi-27-led-ips-fullhd-120hz-freesync-foto.jpg",
    price: 120.00,
    oldPrice: "+ económico",
    description: "Monitor gaming 27\" Full HD, 120Hz, 1ms ideal para FPS competitivo.",
    rating: 4.3,
    reviews: 86,
  },
];

/* ─── ESTADO GLOBAL ─────────────────────────────────── */
let cart    = [];            // Array de ítems del carrito
let filter  = "all";         // Filtro de categoría activo
let search  = "";            // Texto de búsqueda

/* ─── REFERENCIAS AL DOM ────────────────────────────── */
const productsGrid  = document.getElementById("productsGrid");
const cartPanel     = document.getElementById("cartPanel");
const cartOverlay   = document.getElementById("cartOverlay");
const cartBody      = document.getElementById("cartBody");
const cartFooter    = document.getElementById("cartFooter");
const cartEmpty     = document.getElementById("cartEmpty");
const cartCount     = document.getElementById("cartCount");
const cartSubtotal  = document.getElementById("cartSubtotal");
const cartShipping  = document.getElementById("cartShipping");
const cartTotal     = document.getElementById("cartTotal");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const cartCloseBtn  = document.getElementById("cartCloseBtn");
const cartGoShopBtn = document.getElementById("cartGoShopBtn");
const checkoutBtn   = document.getElementById("checkoutBtn");
const clearCartBtn  = document.getElementById("clearCartBtn");
const confirmModal  = document.getElementById("confirmModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const orderNumber   = document.getElementById("orderNumber");
const modalTotal    = document.getElementById("modalTotal");
const searchInput   = document.getElementById("searchInput");
const noResults     = document.getElementById("noResults");
const resultsCount  = document.getElementById("resultsCount");
const hamburgerBtn  = document.getElementById("hamburgerBtn");
const navLinks      = document.getElementById("navLinks");
const siteHeader    = document.querySelector(".site-header");
const toastContainer= document.getElementById("toastContainer");
const contactForm   = document.getElementById("contactForm");

/* =====================================================
   1. RENDERIZADO DE PRODUCTOS
   ===================================================== */

/**
 * Filtra los productos según categoría y búsqueda activas
 * y los renderiza en el grid.
 */
function renderProducts() {
  const filtered = PRODUCTS.filter((p) => {
    const matchCategory = filter === "all" || p.category === filter;
    const matchSearch   =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  resultsCount.textContent =
    filtered.length === 0
      ? ""
      : `${filtered.length} producto${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`;

  noResults.classList.toggle("hidden", filtered.length > 0);
  productsGrid.classList.toggle("hidden", filtered.length === 0);

  productsGrid.innerHTML = "";
  filtered.forEach((product, index) => {
    const card = createProductCard(product, index);
    productsGrid.appendChild(card);
  });
}

/**
 * Crea el elemento DOM de una tarjeta de producto.
 * @param {Object} product - Datos del producto
 * @param {number} index   - Índice para el delay de animación
 * @returns {HTMLElement}
 */
function createProductCard(product, index) {
  const inCart       = cart.find((item) => item.id === product.id);
  const starsHtml    = generateStars(product.rating);
  const oldPriceHtml = product.oldPrice
    ? `<span class="product-price-old">${formatPrice(product.oldPrice)}</span>`
    : "";

  const categoryLabels = {
    videojuegos: "Videojuego",
    teclados:    "Teclado",
    ratones:     "Ratón",
    auriculares: "Auriculares",
    sillas:      "Silla Gaming",
    monitores:   "Monitor",
  };

  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.id = product.id;
  card.style.animationDelay = `${index * 0.06}s`;

  card.innerHTML = `
    <span class="product-badge">${categoryLabels[product.category] || product.category}</span>

    <div class="product-image-wrapper">
      <img
        class="product-img"
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1593640408182-31c228b29b46?w=400&h=300&fit=crop&auto=format';"
      />
      <div class="product-image-overlay">
        <button class="quick-add-btn" onclick="addToCart(${product.id})" aria-label="Añadir rápidamente al carrito">
          + Añadir al carrito
        </button>
      </div>
    </div>

    <div class="product-body">
      <span class="product-category-label">${categoryLabels[product.category] || product.category}</span>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-rating">
        <span class="stars" aria-label="Valoración: ${product.rating} de 5">${starsHtml}</span>
        <span class="rating-count">(${product.reviews.toLocaleString("es-ES")})</span>
      </div>
    </div>

    <div class="product-footer">
      <div>
        ${oldPriceHtml}
        <span class="product-price">${formatPrice(product.price)}</span>
      </div>
      <button
        class="add-cart-btn ${inCart ? "added" : ""}"
        id="cartBtn-${product.id}"
        onclick="addToCart(${product.id})"
        aria-label="Añadir ${product.name} al carrito"
      >
        <span>${inCart ? "✓ Añadido" : "🛒 Añadir"}</span>
      </button>
    </div>
  `;

  return card;
}

/**
 * Genera HTML de estrellas a partir de la valoración.
 */
function generateStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

/* =====================================================
   2. CARRITO DE COMPRA
   ===================================================== */

function addToCart(productId) {
  const product  = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCardButton(productId, true);
  updateCartUI();

  cartCount.classList.remove("bump");
  void cartCount.offsetWidth;
  cartCount.classList.add("bump");

  showToast(`✅ "${product.name}" añadido al carrito`);
}

function removeFromCart(productId) {
  const product = cart.find((item) => item.id === productId);
  cart = cart.filter((item) => item.id !== productId);
  updateCartUI();
  updateCardButton(productId, false);
  if (product) showToast(`🗑️ "${product.name}" eliminado del carrito`);
}

function changeQty(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    updateCartUI();
  }
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  updateCartUI();
  PRODUCTS.forEach((p) => updateCardButton(p.id, false));
  showToast("🗑️ Carrito vaciado");
}

function updateCardButton(productId, added) {
  const btn = document.getElementById(`cartBtn-${productId}`);
  if (!btn) return;
  btn.classList.toggle("added", added);
  btn.querySelector("span").textContent = added ? "✓ Añadido" : "🛒 Añadir";
}

function updateCartUI() {
  const isEmpty = cart.length === 0;
  cartBody.classList.toggle("hidden", isEmpty);
  cartFooter.classList.toggle("hidden", isEmpty);
  cartEmpty.classList.toggle("hidden", !isEmpty);

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCount.textContent = totalItems;

  if (isEmpty) return;

  cartBody.innerHTML = "";
  cart.forEach((item) => {
    const itemEl = createCartItem(item);
    cartBody.appendChild(itemEl);
  });

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping  = subtotal >= 50 ? 0 : 4.99;
  const total     = subtotal + shipping;

  cartSubtotal.textContent = formatPrice(subtotal);
  cartShipping.textContent = shipping === 0 ? "Gratis 🚚" : formatPrice(shipping);
  cartTotal.textContent    = formatPrice(total);
}

/**
 * Crea el elemento DOM de un ítem del carrito con imagen real.
 */
function createCartItem(item) {
  const div = document.createElement("div");
  div.className = "cart-item";
  div.dataset.id = item.id;

  div.innerHTML = `
    <div class="cart-item-img-wrapper">
      <img
        class="cart-item-img"
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
      />
    </div>
    <div class="cart-item-info">
      <p class="cart-item-name" title="${item.name}">${item.name}</p>
      <p class="cart-item-price">${formatPrice(item.price * item.qty)}</p>
      <div class="cart-qty-controls">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Disminuir cantidad">−</button>
        <span class="qty-value" aria-label="Cantidad: ${item.qty}">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, +1)" aria-label="Aumentar cantidad">+</button>
      </div>
    </div>
    <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Eliminar ${item.name} del carrito" title="Eliminar">✕</button>
  `;

  return div;
}

/* =====================================================
   3. FINALIZAR COMPRA
   ===================================================== */

function checkout() {
  if (cart.length === 0) return;

  const orderId  = "NX-" + Math.random().toString(36).substr(2, 8).toUpperCase();
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping  = subtotal >= 50 ? 0 : 4.99;
  const total     = subtotal + shipping;

  orderNumber.textContent = orderId;
  modalTotal.textContent  = formatPrice(total);

  closeCart();
  confirmModal.classList.add("open");

  cart = [];
  updateCartUI();
  PRODUCTS.forEach((p) => updateCardButton(p.id, false));
}

/* =====================================================
   4. FILTROS Y BÚSQUEDA
   ===================================================== */

function setFilter(category) {
  filter = category;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === category);
  });
  renderProducts();
}

function resetFilters() {
  filter = "all";
  search = "";
  searchInput.value = "";
  setFilter("all");
}
window.resetFilters = resetFilters;

function filterByCategory(category) {
  filter = category;
  search = "";
  searchInput.value = "";
  setFilter(category);
  document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
}
window.filterByCategory = filterByCategory;

/* =====================================================
   5. APERTURA / CIERRE DEL CARRITO
   ===================================================== */

function openCart() {
  cartPanel.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartPanel.classList.remove("open");
  document.body.style.overflow = "";
}

/* =====================================================
   6. TOASTS (NOTIFICACIONES)
   ===================================================== */

function showToast(message, duration = 3000) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-icon">🎮</span><span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-out");
    toast.addEventListener("animationend", () => toast.remove(), { once: true });
  }, duration);
}

/* =====================================================
   7. UTILIDADES
   ===================================================== */

function formatPrice(amount) {
  return amount.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/* =====================================================
   8. PARTÍCULAS DEL HERO
   ===================================================== */

function createParticles() {
  const container = document.getElementById("heroParticles");
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left    = Math.random() * 100 + "%";
    particle.style.top     = Math.random() * 100 + "%";
    particle.style.setProperty("--dur",   (4 + Math.random() * 6) + "s");
    particle.style.setProperty("--delay", (Math.random() * 6) + "s");

    if (Math.random() > 0.7)       particle.style.background = "var(--neon-magenta)";
    else if (Math.random() > 0.85) { particle.style.background = "var(--neon-green)"; particle.style.width = "2px"; particle.style.height = "2px"; }

    container.appendChild(particle);
  }
}

/* =====================================================
   9. SCROLL Y NAVBAR ACTIVO
   ===================================================== */

function updateActiveNavLink() {
  const sections = ["inicio", "productos", "contacto"];
  let currentSection = "inicio";

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.getBoundingClientRect().top <= 120) currentSection = id;
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.section === currentSection);
  });
}

function handleScroll() {
  siteHeader.classList.toggle("scrolled", window.scrollY > 50);
  updateActiveNavLink();
}

/* =====================================================
   10. FORMULARIO DE CONTACTO
   ===================================================== */

function handleContactSubmit(e) {
  e.preventDefault();

  const name    = document.getElementById("contactName").value.trim();
  const email   = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    showToast("⚠️ Por favor completa todos los campos obligatorios");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast("⚠️ Por favor introduce un email válido");
    return;
  }

  showToast("✅ Mensaje enviado correctamente. ¡Te responderemos pronto!");
  contactForm.reset();
}

/* =====================================================
   11. INICIALIZACIÓN Y EVENT LISTENERS
   ===================================================== */


  document.addEventListener("DOMContentLoaded", () => {

  renderProducts();
  createParticles();

  // Carrito
  cartToggleBtn.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  cartGoShopBtn.addEventListener("click", () => {
    closeCart();
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
  });
  checkoutBtn.addEventListener("click", checkout);
  clearCartBtn.addEventListener("click", clearCart);

  
  // Modal
  modalCloseBtn.addEventListener("click", () => {
    confirmModal.classList.remove("open");
    showToast("🎉 ¡Gracias por tu compra en MDAStore Gaming!");
  });
  confirmModal.addEventListener("click", (e) => {
    if (e.target === confirmModal) confirmModal.classList.remove("open");
  });

  // Filtros
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => setFilter(btn.dataset.filter));
  });

  // Búsqueda
  searchInput.addEventListener("input", (e) => { search = e.target.value; renderProducts(); });
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { searchInput.value = ""; search = ""; renderProducts(); }
  });

  // Hamburguesa mobile
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  // Scroll
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Formulario contacto
  contactForm.addEventListener("submit", handleContactSubmit);

  // Escape global
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (cartPanel.classList.contains("open")) closeCart();
      if (confirmModal.classList.contains("open")) confirmModal.classList.remove("open");
    }
  });

  updateCartUI();

  // Animación teclas del hero
  setInterval(() => {
    document.querySelectorAll(".hero-device .key:not(.space)").forEach((key) => {
      if (Math.random() > 0.6) key.classList.toggle("lit");
    });
  }, 800);

  console.log(
    "%c MDAStore GAMING 🎮 ",
    "background: #00f5ff; color: #050508; font-size: 16px; font-weight: bold; padding: 8px 16px; border-radius: 4px;"
  );
  console.log(
    "%c Tienda cargada · " + PRODUCTS.length + " productos",
    "color: #7878a0; font-size: 12px;"
  );
});

/* =====================================================
   12. CONFIGURACIÓN DE LA API
   ===================================================== */

const API_URL = "https://mdastore-backend-1.onrender.com/api";

function getToken() {
  return localStorage.getItem("mda_token");
}

function getUser() {
  const raw = localStorage.getItem("mda_user");
  return raw ? JSON.parse(raw) : null;
}

function saveSession(token, user) {
  localStorage.setItem("mda_token", token);
  localStorage.setItem("mda_user", JSON.stringify(user));
}

function clearSession() {
  localStorage.removeItem("mda_token");
  localStorage.removeItem("mda_user");
}

async function apiRequest(endpoint, options = {}) {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };
  const res  = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
  const data = await res.json();
  if (res.status === 401) { clearSession(); updateAuthUI(); }
  return { ok: res.ok, status: res.status, ...data };
}

/* =====================================================
   13. AUTENTICACIÓN: UI
   ===================================================== */

function updateAuthUI() {
  const user = getUser();
  if (user) {
    authBtnLabel.textContent = user.name.split(" ")[0];
    loginBtn.classList.add("logged-in");
    userMenuName.textContent  = user.name;
    userMenuEmail.textContent = user.email;
  } else {
    authBtnLabel.textContent = "Entrar";
    loginBtn.classList.remove("logged-in");
  }
}

function openAuthModal(tab = "login") {
  switchAuthTab(tab);
  authModal.classList.add("open");
  document.body.style.overflow = "hidden";
  loginError.classList.add("hidden");
  registerError.classList.add("hidden");
  loginForm.reset();
  registerForm.reset();
}

function closeAuthModal() {
  authModal.classList.remove("open");
  document.body.style.overflow = "";
}

function switchAuthTab(tab) {
  const isLogin = tab === "login";
  tabLogin.classList.toggle("active", isLogin);
  tabRegister.classList.toggle("active", !isLogin);
  panelLogin.classList.toggle("hidden", !isLogin);
  panelRegister.classList.toggle("hidden", isLogin);
}

function showAuthError(el, msg) {
  el.textContent = msg;
  el.classList.remove("hidden");
}

async function handleLogin(e) {
  e.preventDefault();
  loginError.classList.add("hidden");
  const email    = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const btn      = document.getElementById("loginSubmitBtn");
  btn.classList.add("btn-loading");
  btn.textContent = "Entrando…";
  try {
    const data = await apiRequest("/auth/login", {
      method: "POST",
      body:   JSON.stringify({ email, password }),
    });
    if (!data.success) { showAuthError(loginError, data.message || "Credenciales incorrectas."); return; }
    saveSession(data.token, data.user);
    updateAuthUI();
    closeAuthModal();
    showToast(`👋 ¡Bienvenido de nuevo, ${data.user.name.split(" ")[0]}!`);
  } catch (err) {
    showAuthError(loginError, "No se pudo conectar con el servidor.");
  } finally {
    btn.classList.remove("btn-loading");
    btn.textContent = "Iniciar Sesión";
  }
}

async function handleRegister(e) {
  e.preventDefault();
  registerError.classList.add("hidden");
  const name     = document.getElementById("regName").value.trim();
  const email    = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const btn      = document.getElementById("registerSubmitBtn");
  if (password.length < 6) { showAuthError(registerError, "La contraseña debe tener al menos 6 caracteres."); return; }
  btn.classList.add("btn-loading");
  btn.textContent = "Creando cuenta…";
  try {
    const data = await apiRequest("/auth/register", {
      method: "POST",
      body:   JSON.stringify({ name, email, password }),
    });
    if (!data.success) { showAuthError(registerError, data.message || "No se pudo crear la cuenta."); return; }
    saveSession(data.token, data.user);
    updateAuthUI();
    closeAuthModal();
    showToast(`🎮 ¡Cuenta creada, ${data.user.name.split(" ")[0]}! Revisa tu email 📧`);
  } catch (err) {
    showAuthError(registerError, "No se pudo conectar con el servidor.");
  } finally {
    btn.classList.remove("btn-loading");
    btn.textContent = "Crear Cuenta";
  }
}

async function checkout() {
  if (cart.length === 0) return;
  if (!getUser()) {
    showToast("⚠️ Debes iniciar sesión para finalizar tu compra.");
    closeCart();
    openAuthModal("login");
    return;
  }
  checkoutBtn.disabled = true;
  checkoutBtn.textContent = "Procesando… ⏳";
  try {
    const items = cart.map((item) => ({ productId: item.id, qty: item.qty }));
    const data  = await apiRequest("/orders", {
      method: "POST",
      body:   JSON.stringify({ items }),
    });
    if (!data.success) { showToast(`❌ ${data.message}`); return; }
    const order = data.order;
    orderNumber.textContent = order.id;
    modalTotal.textContent  = formatPrice(order.total);
    closeCart();
    confirmModal.classList.add("open");
    cart = [];
    updateCartUI();
    PRODUCTS.forEach((p) => updateCardButton(p.id, false));
    showToast(`📧 Email de confirmación enviado a ${getUser().email}`);
  } catch (err) {
    showToast("❌ Error al conectar con el servidor.");
  } finally {
    checkoutBtn.disabled = false;
    checkoutBtn.textContent = "Finalizar Compra 🚀";
  }
}

/* =====================================================
   16. EVENT LISTENERS DE AUTENTICACIÓN
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
const authModal      = document.getElementById("authModal");
const authModalClose = document.getElementById("authModalClose");
const loginBtn       = document.getElementById("loginBtn");
const authBtnLabel   = document.getElementById("authBtnLabel");
const userMenuName   = document.getElementById("userMenuName");
const userMenuEmail  = document.getElementById("userMenuEmail");
const logoutBtn      = document.getElementById("logoutBtn");
const tabLogin       = document.getElementById("tabLogin");
const tabRegister    = document.getElementById("tabRegister");
const panelLogin     = document.getElementById("panelLogin");
const panelRegister  = document.getElementById("panelRegister");
const loginForm      = document.getElementById("loginForm");
const registerForm   = document.getElementById("registerForm");
const loginError     = document.getElementById("loginError");
const registerError  = document.getElementById("registerError");

  updateAuthUI();

  if (!getUser()) {
    openAuthModal("login");
  }

  loginBtn.addEventListener("click", () => {
    if (!getUser()) openAuthModal("login");
  });

  authModalClose.addEventListener("click", closeAuthModal);

  authModal.addEventListener("click", (e) => {
    if (e.target === authModal) closeAuthModal();
  });

  tabLogin.addEventListener("click",    () => switchAuthTab("login"));
  tabRegister.addEventListener("click", () => switchAuthTab("register"));

  document.querySelectorAll(".auth-switch-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchAuthTab(btn.dataset.goto));
  });

  loginForm.addEventListener("submit",    handleLogin);
  registerForm.addEventListener("submit", handleRegister);

  logoutBtn.addEventListener("click", () => {
    clearSession();
    updateAuthUI();
    showToast("👋 Sesión cerrada correctamente.");
  });

});