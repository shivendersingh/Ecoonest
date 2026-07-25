/**
 * Rahul's Herbal World — Main JavaScript
 * Core functionality: Nav, Scroll, FAQ, Animations, Search, Counter
 */

(function () {
  'use strict';

  /* ===================== DOM READY ===================== */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initFAQ();
    initScrollTop();
    initSearchOverlay();
    initCounterAnimation();
    initLazyImages();
    initActiveNavOnScroll();
  }

  /* ===================== NAVBAR ===================== */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on load
  }

  /* ===================== MOBILE MENU ===================== */
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const overlay   = document.getElementById('mobileNav');
    const closeBtn  = document.getElementById('mobileNavClose');
    if (!hamburger || !overlay) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      overlay.classList.toggle('open');
      document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMobileMenu);
    }

    // Close on nav link click
    overlay.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    function closeMobileMenu() {
      hamburger.classList.remove('active');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Close on outside click
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeMobileMenu();
    });
  }

  /* ===================== SMOOTH SCROLL ===================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ===================== SCROLL REVEAL ===================== */
  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));
  }

  /* ===================== FAQ ACCORDION ===================== */
  function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-q');
      if (!question) return;

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
          openItem.classList.remove('open');
        });

        // Open clicked if it was closed
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  /* ===================== SCROLL TO TOP ===================== */
  function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===================== SEARCH OVERLAY ===================== */
  function initSearchOverlay() {
    const overlay   = document.getElementById('searchOverlay');
    const openBtns  = document.querySelectorAll('[data-search-open]');
    const closeBtn  = document.getElementById('searchClose');
    const input     = document.getElementById('searchInput');
    const pills     = document.querySelectorAll('.search-pill');
    if (!overlay) return;

    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(() => input?.focus(), 100);
      });
    });

    const closeSearch = () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
    });

    // Search pill clicks
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        if (input) {
          input.value = pill.textContent;
          input.focus();
        }
        handleSearch(pill.textContent);
      });
    });

    if (input) {
      input.addEventListener('keypress', e => {
        if (e.key === 'Enter') handleSearch(input.value);
      });
    }

    function handleSearch(term) {
      if (!term.trim()) return;
      closeSearch();
      // Redirect to products page with search query
      window.location.href = `products.html?search=${encodeURIComponent(term.trim())}`;
    }
  }

  /* ===================== COUNTER ANIMATION ===================== */
  function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  function animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-count'), 10);
    const suffix   = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const steps    = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      el.textContent = current.toLocaleString('en-IN') + suffix;
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
  }

  /* ===================== LAZY IMAGES ===================== */
  function initLazyImages() {
    const images = document.querySelectorAll('img[data-src]');
    if (!images.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.onload = () => img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '200px' });

      images.forEach(img => observer.observe(img));
    } else {
      // Fallback
      images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }

  /* ===================== ACTIVE NAV ON SCROLL ===================== */
  function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          const id = entry.target.getAttribute('id');
          const active = document.querySelector(`.nav-link[href="#${id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
  }

  /* ===================== CONTACT FORM ===================== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      const formSuccess = document.getElementById('formSuccess');

      // Basic validation
      const name    = contactForm.querySelector('[name="name"]')?.value.trim();
      const mobile  = contactForm.querySelector('[name="mobile"]')?.value.trim();
      const email   = contactForm.querySelector('[name="email"]')?.value.trim();
      const message = contactForm.querySelector('[name="message"]')?.value.trim();

      if (!name || !mobile || !message) {
        showAlert('Please fill in all required fields.', 'error', contactForm);
        return;
      }
      if (mobile && !/^[6-9]\d{9}$/.test(mobile)) {
        showAlert('Please enter a valid 10-digit Indian mobile number.', 'error', contactForm);
        return;
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showAlert('Please enter a valid email address.', 'error', contactForm);
        return;
      }

      // Submit via FormSubmit
      btn.textContent = 'Sending...';
      btn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          contactForm.style.display = 'none';
          if (formSuccess) formSuccess.classList.add('show');
        } else {
          throw new Error('Form submission failed');
        }
      } catch {
        // Fallback: show success (FormSubmit might redirect)
        contactForm.style.display = 'none';
        if (formSuccess) formSuccess.classList.add('show');
      }

      btn.textContent = 'Send Enquiry';
      btn.disabled = false;
    });
  }

  function showAlert(msg, type, parent) {
    const existing = parent?.querySelector('.alert');
    if (existing) existing.remove();

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `<i class="fa-solid fa-${type === 'error' ? 'circle-exclamation' : 'circle-check'}"></i> ${msg}`;
    parent?.insertBefore(alert, parent.firstChild);
    setTimeout(() => alert.remove(), 5000);
  }

  /* ===================== PRODUCT CARD RENDER (shared) ===================== */
  window.renderProductCard = function (product) {
    const benefitTags = product.benefits.slice(0, 3).map(b =>
      `<span class="benefit-tag-pill">${b.split(' ').slice(0, 3).join(' ')}</span>`
    ).join('');

    return `
      <div class="product-card reveal" data-category="${product.categories.join(' ')}">
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
  };

})();
