document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add items to the cart
  document.querySelectorAll('.add-to-cart').forEach(btn =>
      btn.addEventListener('click', () => {
          cart.push({ name: btn.dataset.name, price: +btn.dataset.price });
          localStorage.setItem('cart', JSON.stringify(cart));
          alert(`${btn.dataset.name} added to cart`);
      })
  );

  // Redirect to cart page
  document.getElementById('cart-icon').addEventListener('click', () => {
      window.location.href = 'cart.html';
  });

  // ✅ FIXED: Only enable smooth scroll for internal section links
  document.querySelectorAll('.nav-item a').forEach(link => {
      const href = link.getAttribute('href');

      if (href.startsWith("#")) {
          link.addEventListener('click', e => {
              e.preventDefault();
              document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
          });
      }
  });

  // ✅ FIXED: Allow login page to open normally
  document.getElementById("auth-link").addEventListener("click", function (event) {
      if (this.getAttribute("href") === "login.html") {
          return; // Let the browser handle navigation
      }
  });

  // ✅ Toggle hamburger menu
  document.getElementById('hamburger-menu').addEventListener('click', () => {
      document.getElementById('nav-list').classList.toggle('active');
  });

  // ✅ Authentication Handling
  const authLink = document.getElementById("auth-link");
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated === "true") {
      authLink.textContent = "Logout";
      authLink.href = "#";
      authLink.addEventListener("click", () => {
          localStorage.removeItem("isAuthenticated");
          alert("Logged out successfully!");
          window.location.href = "login.html";
      });
  }
});
