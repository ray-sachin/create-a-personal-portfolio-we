(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const yearEl = document.getElementById('year');

  // Year in footer
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Theme: initialize from localStorage or system
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (themeToggle) themeToggle.setAttribute('aria-pressed', 'true');
    } else if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      if (themeToggle) themeToggle.setAttribute('aria-pressed', 'false');
    } else {
      root.removeAttribute('data-theme'); // fall back to system
      if (themeToggle) themeToggle.setAttribute('aria-pressed', prefersDark ? 'true' : 'false');
    }
  }

  applyTheme(stored || '');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      // rotate: system -> dark -> light -> system
      let next;
      if (!current) next = 'dark';
      else if (current === 'dark') next = 'light';
      else next = ''; // system
      if (next) {
        localStorage.setItem('theme', next);
      } else {
        localStorage.removeItem('theme');
      }
      applyTheme(next);
    });
  }

  // Keep in sync with system when set to system
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }
})();