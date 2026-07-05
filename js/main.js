(function () {
  const APP_STORE_URL = 'https://apps.apple.com/bg/app/pictris/id6739788238';

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      document.querySelector('.nav-links')?.classList.remove('open');
    });
  });

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
    });
  }

  document.querySelectorAll('.app-store-link').forEach((link) => {
    link.href = APP_STORE_URL;
  });

  const video = document.querySelector('.preview-video');
  const unmuteBtn = document.querySelector('.video-unmute-btn');
  if (video && unmuteBtn) {
    unmuteBtn.addEventListener('click', () => {
      video.muted = false;
      video.play();
      unmuteBtn.hidden = true;
    });
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches && video) {
    video.removeAttribute('autoplay');
  }
})();
