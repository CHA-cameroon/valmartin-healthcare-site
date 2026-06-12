// Valmartin Healthcare - shared site scripts
(function () {
  'use strict';

  // Mobile nav toggle
  var menuBtn = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var closeBtn = document.querySelector('.mobile-nav-close');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && mobileNav) {
    closeBtn.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close mobile nav on link click
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

      btn.classList.add('active');
      // Future: load French translations from /assets/i18n/fr.json
      var lang = btn.textContent.trim().toLowerCase();
      document.documentElement.setAttribute('data-lang', lang);
    });
  });


  // Close mobile nav with the Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Smooth scroll for anchor links (with offset for sticky nav)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (href.length > 1) {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          var offset = 80;
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
    });
  });

  // Contact / appointment form: handled by Netlify Forms
  // No JS needed; the data-netlify="true" attribute on the form does the work.
})();
