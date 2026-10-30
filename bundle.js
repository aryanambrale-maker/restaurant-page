// Home Tab Module
function loadHome() {
  const section = document.createElement("div");
  section.classList.add("tab-section");
  section.innerHTML = `
    <h1>Welcome to The Odin Bistro</h1>
    <p>Authentic wood-fired flavours crafted fresh every single day.</p>
    <img class="hero-img" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80" alt="Restaurant Interior">
    <p>Open Tuesday – Sunday | 12:00 PM – 11:00 PM</p>
  `;
  return section;
}

// Menu Tab Module
function loadMenu() {
  const section = document.createElement("div");
  section.classList.add("tab-section");
  section.innerHTML = `
    <h1>Our Signature Menu</h1>
    <div class="menu-grid">
      <div class="menu-card">
        <h3>Truffle Margherita</h3>
        <p>San Marzano tomatoes, fresh mozzarella, basil, and truffle oil.</p>
        <p class="price">₹550</p>
      </div>
      <div class="menu-card">
        <h3>Smoked Garlic Pasta</h3>
        <p>Handmade tagliatelle tossed in roasted garlic and parmesan cream.</p>
        <p class="price">₹480</p>
      </div>
      <div class="menu-card">
        <h3>Artisan Tiramisu</h3>
        <p>Espresso-soaked savoiardi layered with whipped mascarpone.</p>
        <p class="price">₹340</p>
      </div>
    </div>
  `;
  return section;
}

// Contact / About Tab Module
function loadContact() {
  const section = document.createElement("div");
  section.classList.add("tab-section");
  section.innerHTML = `
    <h1>About & Contact Us</h1>
    <p style="margin-bottom: 1rem;">Founded in 2026, The Odin Bistro brings people together over honest food and warm hospitality.</p>
    <p><strong>Phone:</strong> +91 98765 43210</p>
    <p><strong>Email:</strong> hello@odinbistro.in</p>
    <p><strong>Location:</strong> 42 High Street, Pune</p>
  `;
  return section;
}

// Tab-Switching Controller
const contentDiv = document.getElementById("content");
const buttons = document.querySelectorAll(".tab-btn");

function renderTab(tabLoader, clickedBtn) {
  contentDiv.innerHTML = "";
  buttons.forEach((btn) => btn.classList.remove("active"));
  clickedBtn.classList.add("active");
  contentDiv.appendChild(tabLoader());
}

document.getElementById("home-btn").addEventListener("click", (e) => renderTab(loadHome, e.target));
document.getElementById("menu-btn").addEventListener("click", (e) => renderTab(loadMenu, e.target));
document.getElementById("contact-btn").addEventListener("click", (e) => renderTab(loadContact, e.target));

// Initial Page Load
contentDiv.appendChild(loadHome());