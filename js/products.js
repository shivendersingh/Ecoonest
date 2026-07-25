/**
 * Products Page JavaScript
 * Renders all products with category filtering and search.
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initProductsPage();
  });

  function initProductsPage() {
    const grid        = document.getElementById('productsGrid');
    const countLabel  = document.getElementById('productsCount');
    const filterPills = document.querySelectorAll('.fp');
    if (!grid) return;

    // Check URL for search/category query
    const params   = new URLSearchParams(window.location.search);
    const search   = params.get('search') || '';
    const category = params.get('category') || 'all';

    // Set active filter pill
    filterPills.forEach(pill => {
      if (pill.dataset.filter === category) pill.classList.add('active');
    });

    // Render products
    renderProducts(category, search);

    // Filter pill click
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.dataset.filter || 'all';
        renderProducts(filter, '');
        // Update URL without reload
        const url = new URL(window.location.href);
        url.searchParams.set('category', filter);
        url.searchParams.delete('search');
        window.history.replaceState({}, '', url);
      });
    });

    function renderProducts(cat, searchTerm) {
      let products = typeof productsData !== 'undefined' ? productsData : [];

      // Filter by category
      if (cat && cat !== 'all') {
        products = products.filter(p => p.categories.includes(cat));
      }

      // Filter by search
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        products = products.filter(p =>
          p.name.toLowerCase().includes(term) ||
          p.shortDesc.toLowerCase().includes(term) ||
          p.benefits.some(b => b.toLowerCase().includes(term))
        );
      }

      if (countLabel) {
        countLabel.textContent = `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;
      }

      if (!products.length) {
        grid.innerHTML = `
          <div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--text-400);">
            <div style="font-size:3rem; margin-bottom:16px;">🌿</div>
            <h3 style="font-family:var(--font-display); margin-bottom:10px; color:var(--text-700);">No products found</h3>
            <p>Try a different search term or browse all products.</p>
            <button class="btn btn-outline mt-24" onclick="window.location.href='products.html'">
              View All Products
            </button>
          </div>
        `;
        return;
      }

      grid.innerHTML = products.map(p => renderCard(p)).join('');

      // Re-init scroll reveal on new cards
      document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        observer.observe(el);
      });
    }

    function renderCard(product) {
      const benefitTags = product.benefits.slice(0, 3).map(b =>
        `<span class="benefit-tag-pill">${b.split(' ').slice(0, 3).join(' ')}</span>`
      ).join('');

      return `
        <div class="product-card reveal" data-categories="${product.categories.join(' ')}">
          <div class="product-card-img-wrap">
            ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
            <div class="product-card-img-placeholder" style="background:${product.bgGradient}">${product.icon}</div>
            <div class="product-card-overlay">
              <button class="product-quick-view" onclick="window.location.href='product-detail.html?product=${product.slug}'">
                View Details <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div class="product-card-body">
            <div class="product-icon">${product.icon}</div>
            <h3 class="product-card-name">${product.name}</h3>
            <p class="product-card-desc">${product.shortDesc}</p>
            <div class="product-benefit-tags">${benefitTags}</div>
            <div class="product-card-footer">
              <a href="contact.html?product=${product.slug}&name=${encodeURIComponent(product.name)}" class="btn-enquire-sm">
                <i class="fa-solid fa-envelope"></i> Enquire Now
              </a>
              <a href="product-detail.html?product=${product.slug}" class="btn-detail-sm" title="View Details">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    }
  }

})();
