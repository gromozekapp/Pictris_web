function setTheme(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}

function initTheme() {
  if (!window.matchMedia) {
    setTheme(false);
    return;
  }

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setTheme(darkQuery.matches);
  darkQuery.addEventListener('change', (e) => setTheme(e.matches));
}

initTheme();
