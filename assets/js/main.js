// Main JavaScript - Navbar and Global Functionality

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initScrollEffects();
  initActiveLink();
  initCounterAnimation();
  setCurrentYear();
});

// Navigation
function initNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navDrawer = document.querySelector('.nav-drawer');
  const navDrawerLinks = document.querySelectorAll('.nav-drawer a');

  if (hamburger && navDrawer) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      navDrawer.classList.toggle('open');
    });

    navDrawerLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        navDrawer.classList.remove('open');
      });
    });

    // Close drawer on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navDrawer.classList.contains('open')) {
        hamburger.classList.remove('open');
        navDrawer.classList.remove('open');
      }
    });
  }
}

// Scroll effects
function initScrollEffects() {
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// Set active navigation link
function initActiveLink() {
  const navLinks = document.querySelectorAll('.nav-links a, .nav-drawer a');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Check if current page matches link
    if (currentPath === '/' && href === '/index.html' || href === '/') {
      link.classList.add('active');
    } else if (currentPath.includes(href.replace('.html', '')) && href !== '/index.html') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Counter animation for stats
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-item h3, .metric-item h3');

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseInt(target.getAttribute('data-target')) || parseInt(target.textContent);
        
        animateCounter(target, finalValue);
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

function animateCounter(element, finalValue) {
  let currentValue = 0;
  const increment = finalValue / 30;
  const duration = 2000;
  const steps = 30;
  const stepDuration = duration / steps;

  const interval = setInterval(() => {
    currentValue += increment;
    if (currentValue >= finalValue) {
      element.textContent = finalValue.toLocaleString();
      clearInterval(interval);
    } else {
      element.textContent = Math.floor(currentValue).toLocaleString();
    }
  }, stepDuration);
}

// Set current year in footer
function setCurrentYear() {
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Utility: Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
