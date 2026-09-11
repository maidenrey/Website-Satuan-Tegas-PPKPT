/**
 * Website Satgas PPKPT ITESA Muhammadiyah Semarang
 * Lightweight & Vanilla JavaScript (Mobile-Friendly & High Performance)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderAndScroll();
  initMobileDrawer();
  initScrollSpy();
  initFaqAccordion();
});

/* ==========================================================================
   1. HEADER SCROLL & BACK-TO-TOP BUTTON
   ========================================================================== */
function initHeaderAndScroll() {
  const header = document.getElementById('siteHeader');
  const btnBackToTop = document.getElementById('btnBackToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header sticky shadow
    if (scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Floating Back-to-Top visibility
    if (btnBackToTop) {
      if (scrollY > 400) {
        btnBackToTop.classList.add('visible');
      } else {
        btnBackToTop.classList.remove('visible');
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   2. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileToggle');
  const closeBtn = document.getElementById('drawerClose');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const drawerLinks = document.querySelectorAll('.drawer-item-click');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

function toggleMobileSubmenu() {
  const submenu = document.getElementById('mobileSubmenu');
  if (submenu) {
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
  }
}

/* ==========================================================================
   3. ACTIVE NAV SCROLLSPY
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   4. TENTANG SATGAS TAB SWITCHER
   ========================================================================== */
function switchAboutTab(tabKey) {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  tabButtons.forEach(btn => {
    const isTarget = btn.getAttribute('data-tab') === tabKey;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
  });

  tabPanels.forEach(panel => {
    const isPanelTarget = panel.id === `tab-${tabKey}`;
    panel.classList.toggle('active', isPanelTarget);
  });
}

/* ==========================================================================
   5. PUSAT INFORMASI & UNDUHAN FILTER & SEARCH
   ========================================================================== */
function filterDocs(category, buttonElement) {
  const filterBtns = document.querySelectorAll('.filter-tag-btn');
  filterBtns.forEach(btn => btn.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');

  const docCards = document.querySelectorAll('.doc-card');
  const searchInput = document.getElementById('searchDocInput');
  const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

  docCards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    const cardName = card.getAttribute('data-name') || '';

    const matchesCategory = category === 'all' || cardCat === category;
    const matchesSearch = searchQuery === '' || cardName.includes(searchQuery);

    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function searchDocuments() {
  const searchInput = document.getElementById('searchDocInput');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  // Get current active category button
  const activeBtn = document.querySelector('.filter-tag-btn.active');
  const currentCategory = activeBtn ? activeBtn.getAttribute('data-category') : 'all';

  const docCards = document.querySelectorAll('.doc-card');
  docCards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    const cardName = card.getAttribute('data-name') || '';

    const matchesCategory = currentCategory === 'all' || cardCat === currentCategory;
    const matchesSearch = query === '' || cardName.includes(query);

    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ==========================================================================
   6. FAQ ACCORDION LOGIC
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  // Open first item by default for better initial UX
  const firstItem = faqItems[0];
  const firstAnswer = firstItem.querySelector('.faq-answer');
  const firstButton = firstItem.querySelector('.faq-question');
  firstItem.classList.add('active');
  if (firstAnswer) firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 40 + 'px';
  if (firstButton) firstButton.setAttribute('aria-expanded', 'true');
}

function toggleFaq(button) {
  const faqItem = button.closest('.faq-item');
  const answer = faqItem.querySelector('.faq-answer');
  const isActive = faqItem.classList.contains('active');

  // Close other open accordions (optional accordion behavior)
  document.querySelectorAll('.faq-item').forEach(item => {
    if (item !== faqItem && item.classList.contains('active')) {
      item.classList.remove('active');
      const otherAns = item.querySelector('.faq-answer');
      const otherBtn = item.querySelector('.faq-question');
      if (otherAns) otherAns.style.maxHeight = null;
      if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
    }
  });

  if (isActive) {
    faqItem.classList.remove('active');
    answer.style.maxHeight = null;
    button.setAttribute('aria-expanded', 'false');
  } else {
    faqItem.classList.add('active');
    answer.style.maxHeight = (answer.scrollHeight + 40) + 'px';
    button.setAttribute('aria-expanded', 'true');
  }
}



/* ==========================================================================
   8. MODAL PANDUAN PELAPORAN AMAN
   ========================================================================== */
function openReportGuideModal() {
  const modal = document.getElementById('reportGuideModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeReportGuideModal() {
  const modal = document.getElementById('reportGuideModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on Escape key or backdrop click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeReportGuideModal();
  }
});

const reportModal = document.getElementById('reportGuideModal');
if (reportModal) {
  reportModal.addEventListener('click', (e) => {
    if (e.target === reportModal) {
      closeReportGuideModal();
    }
  });
}
