/**
 * Product Detail Page JavaScript
 * Dynamically renders individual product pages from products-data.js
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initProductDetail();
    initTabs();
    initGallery();
  });

  /* ===================== PRODUCT DETAIL ===================== */
  function initProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const slug   = params.get('product');

    if (!slug) {
      showNotFound();
      return;
    }

    const product = typeof getProductBySlug === 'function' ? getProductBySlug(slug) : null;

    if (!product) {
      showNotFound();
      return;
    }

    // Update page title & meta
    document.title = `${product.name} - Rahul's Herbal World`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = `${product.name}: ${product.shortDesc} — Buy online from Rahul's Herbal World. Call/WhatsApp: 8587071499.`;

    // Breadcrumb
    const bcCurrent = document.getElementById('bcCurrent');
    if (bcCurrent) bcCurrent.textContent = product.name;

    // Category
    setEl('pdCategory', `<i class="fa-solid fa-tag"></i> ${product.categories[0].replace('-', ' ')}`, true);

    // Name
    setEl('pdName', product.name);

    // Description
    setEl('pdDesc', product.description);

    // Benefits list
    const benGrid = document.getElementById('pdBenefits');
    if (benGrid) {
      benGrid.innerHTML = product.benefits.map(b =>
        `<div class="pd-benefit-item"><i class="fa-solid fa-check"></i>${b}</div>`
      ).join('');
    }

    // Gallery
    const mainImg = document.getElementById('pdMainImg');
    if (mainImg) {
      mainImg.innerHTML = `<div style="font-size:8rem;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:${product.bgGradient}">${product.icon}</div>`;
    }
    const thumbsContainer = document.getElementById('pdThumbs');
    if (thumbsContainer) {
      const thumbIcons = ['🌿','🌱','🍃','✨'];
      thumbsContainer.innerHTML = thumbIcons.slice(0, 4).map((icon, i) =>
        `<div class="pd-thumb ${i === 0 ? 'active' : ''}" data-index="${i}" style="background:${product.bgGradient}">
          <span style="font-size:1.6rem;display:flex;height:100%;align-items:center;justify-content:center">${icon}</span>
        </div>`
      ).join('');
    }

    // Schema markup
    const schemaSlot = document.getElementById('pdSchema');
    if (schemaSlot) {
      const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "brand": { "@type": "Brand", "name": "Rahul's Herbal World" },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "seller": { "@type": "Person", "name": "Rahul", "telephone": "+918587071499" }
        }
      };
      schemaSlot.textContent = JSON.stringify(schema);
    }

    // Tab content (inner content divs)
    setEl('tabIngredients', `<p>${product.ingredients}</p>`, true);
    setEl('tabUsage',       `<p>${product.usage}</p>`,       true);
    setEl('tabStorage',     `<p>${product.storage}</p>`,     true);

    // FAQs on detail page
    const faqContainer = document.getElementById('pdFaqs');
    if (faqContainer && product.faqs?.length) {
      faqContainer.innerHTML = product.faqs.map(f => `
        <div class="faq-item">
          <div class="faq-q">
            <span>${f.q}</span>
            <div class="faq-icon"><i class="fa-solid fa-plus"></i></div>
          </div>
          <div class="faq-body"><div class="faq-body-inner">${f.a}</div></div>
        </div>
      `).join('');

      // Re-init FAQ accordion for newly rendered items
      faqContainer.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-q')?.addEventListener('click', () => {
          item.classList.toggle('open');
        });
      });
    }

    // Enquiry buttons
    const enquireLinks = document.querySelectorAll('[data-enquire]');
    enquireLinks.forEach(link => {
      link.href = `contact.html?product=${product.slug}&name=${encodeURIComponent(product.name)}`;
    });

    const whatsappLinks = document.querySelectorAll('[data-whatsapp]');
    whatsappLinks.forEach(link => {
      link.href = `https://wa.me/918587071499?text=${encodeURIComponent(`Hello Rahul, I am interested in ${product.name}. Please share details.`)}`;
    });

    // Related products
    const related = typeof getRelatedProducts === 'function' ? getRelatedProducts(slug, 3) : [];
    const relatedGrid = document.getElementById('relatedGrid');
    if (relatedGrid && related.length) {
      relatedGrid.innerHTML = related.map(p => {
        const benefitTags = p.benefits.slice(0, 2).map(b =>
          `<span class="benefit-tag-pill">${b.split(' ').slice(0, 3).join(' ')}</span>`
        ).join('');
        return `
          <div class="product-card reveal">
            <div class="product-card-img-wrap">
              ${p.badge ? `<span class="product-card-badge">${p.badge}</span>` : ''}
              <div class="product-card-img-placeholder" style="background:${p.bgGradient}">${p.icon}</div>
              <div class="product-card-overlay">
                <button class="product-quick-view" onclick="window.location.href='product-detail.html?product=${p.slug}'">
                  View Details <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div class="product-card-body">
              <div class="product-icon">${p.icon}</div>
              <h3 class="product-card-name">${p.name}</h3>
              <p class="product-card-desc">${p.shortDesc}</p>
              <div class="product-benefit-tags">${benefitTags}</div>
              <div class="product-card-footer">
                <a href="contact.html?product=${p.slug}&name=${encodeURIComponent(p.name)}" class="btn-enquire-sm">
                  <i class="fa-solid fa-envelope"></i> Enquire
                </a>
                <a href="product-detail.html?product=${p.slug}" class="btn-detail-sm">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  /* ===================== TABS ===================== */
  function initTabs() {
    const tabBtns  = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    if (!tabBtns.length) return;

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
  }

  /* ===================== GALLERY ===================== */
  function initGallery() {
    const thumbsContainer = document.getElementById('pdThumbs');
    if (!thumbsContainer) return;

    thumbsContainer.addEventListener('click', e => {
      const thumb = e.target.closest('.pd-thumb');
      if (!thumb) return;

      thumbsContainer.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      // Update main image (here we just update background to show a different pattern)
      const mainImg = document.getElementById('pdMainImg');
      if (mainImg) {
        mainImg.style.animation = 'none';
        mainImg.offsetHeight; // trigger reflow
        mainImg.style.animation = 'fadeInUp 0.3s ease';
      }
    });
  }

  /* ===================== HELPERS ===================== */
  function setEl(id, content, asHTML = false) {
    const el = document.getElementById(id);
    if (!el) return;
    if (asHTML) el.innerHTML = content;
    else el.textContent = content;
  }

  function showNotFound() {
    const content = document.getElementById('pdContent');
    if (content) {
      content.innerHTML = `
        <div style="text-align:center; padding:80px 20px;">
          <div style="font-size:4rem; margin-bottom:20px;">🌿</div>
          <h2 style="font-family:var(--font-display); margin-bottom:14px; color:var(--text-900);">Product Not Found</h2>
          <p style="color:var(--text-500); margin-bottom:28px;">The product you're looking for doesn't exist or may have been moved.</p>
          <a href="products.html" class="btn btn-primary">Browse All Products</a>
        </div>
      `;
    }
  }

})();
