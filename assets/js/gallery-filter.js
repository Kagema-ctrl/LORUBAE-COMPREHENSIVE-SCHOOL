// Gallery Filter Functionality

document.addEventListener('DOMContentLoaded', function() {
  initGalleryFilter();
  initLightbox();
});

function initGalleryFilter() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterPills.forEach(pill => {
    pill.addEventListener('click', function() {
      const category = this.getAttribute('data-category');

      // Update active pill
      filterPills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');

      // Filter items
      galleryItems.forEach(item => {
        if (category === 'all') {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.3s ease-in';
        } else if (item.getAttribute('data-category') === category) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.3s ease-in';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initLightbox() {
  // Use GLightbox if available
  if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
      selector: '.gallery-item',
      touchNavigation: true,
      loop: true
    });
  }
}

// Fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);
