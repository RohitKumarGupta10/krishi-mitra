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
    document.getElementById('cart-icon').addEventListener('click', () => window.location.href = 'cart.html');
  
    // Smooth scroll for navbar links
    document.querySelectorAll('.nav-item a').forEach(link =>
      link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      })
    );
  
    // Toggle hamburger menu
    document.getElementById('hamburger-menu').addEventListener('click', () =>
      document.getElementById('nav-list').classList.toggle('active')
    );
  });
  
  document.getElementById('homeLink').addEventListener('click', function() {
    document.getElementById('menuToggle').checked = false;
  });
  
