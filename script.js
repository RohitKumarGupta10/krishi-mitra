document.addEventListener('DOMContentLoaded', () => {
  // Initialize an empty cart
  let cart = [];

  // Save cart to local storage
  function updateCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
      document.getElementById('cart-count').textContent = cart.length;
  }

  // Add items to the cart
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
          const price = parseInt(button.getAttribute('data-price'), 10);
          const name = button.getAttribute('data-name');
          cart.push({ name, price });
          updateCart(); // Save the cart and update the count
      });
  });

  // Redirect to cart page when clicking the cart icon
  document.getElementById('cart-icon').addEventListener('click', () => {
      window.location.href = 'cart.html';
  });
});


document.querySelectorAll('.nav-item a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const navList = document.getElementById('nav-list');

  hamburger.addEventListener('click', function() {
      navList.classList.toggle('active');
  });
});
