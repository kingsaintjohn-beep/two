// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-container');

menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('active');
  });


// Dark Mode Toggle
const themeBtn = document.getElementById('themeBtn');
const currentTheme = localStorage.getItem('theme');

// Check for saved user preference
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

themeBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = '☀️';
    }
});

// Initialize state from localStorage or start at 0
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

// Function to update the DOM visual and persist state
function updateNavbarUI(count) {
  const badge = document.getElementById('navbar-cart-count');
  if (badge) {
    badge.textContent = count;
  }
}

// Handle global custom events triggered by any product component
document.addEventListener('updateCart', (e) => {
  const action = e.detail.action;
  
  if (action === 'add') {
    cartCount += 1;
  } else if (action === 'remove' && cartCount > 0) {
    cartCount -= 1;
  }
  
  localStorage.setItem('cartCount', cartCount);
  updateNavbarUI(cartCount);
});

// Run on page load to set correct initial value
document.addEventListener('DOMContentLoaded', () => {
  updateNavbarUI(cartCount);
});



document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.category-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Remove 'active' class from all buttons and add to the clicked button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 2. Fetch selected category key
      const selectedCategory = button.getAttribute('data-category');

      // 3. Filter products using an optimized layout toggler
      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
});
