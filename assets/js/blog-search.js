// Blog Search and Filter Functionality

document.addEventListener('DOMContentLoaded', function() {
  initBlogSearch();
  initBlogFilter();
});

function initBlogSearch() {
  const searchBar = document.querySelector('.search-bar');
  const blogCards = document.querySelectorAll('.blog-card');

  if (searchBar) {
    searchBar.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();

      blogCards.forEach(card => {
        const title = card.querySelector('.blog-card-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.blog-card-excerpt').textContent.toLowerCase();

        if (title.includes(searchTerm) || excerpt.includes(searchTerm) || searchTerm === '') {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.3s ease-in';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

function initBlogFilter() {
  const categoryPills = document.querySelectorAll('.category-pill');
  const blogCards = document.querySelectorAll('.blog-card');

  categoryPills.forEach(pill => {
    pill.addEventListener('click', function() {
      const category = this.getAttribute('data-category');

      // Update active pill
      categoryPills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');

      // Filter cards
      blogCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all') {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.3s ease-in';
        } else if (cardCategory === category) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.3s ease-in';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
