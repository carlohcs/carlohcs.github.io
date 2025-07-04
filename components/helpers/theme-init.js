export const getThemeInitScript = () => `
(function() {
  var STORAGE_KEY = 'carlohcs.me';

  function applyTheme() {
    if (!document.body) {
      setTimeout(applyTheme, 10);
      return;
    }

    var isDark = false;
    
    try {
      var data = JSON.parse(localStorage.getItem(STORAGE_KEY));
      var theme = data.theme;
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDark = theme === 'dark' || (!theme && prefersDark);
    } catch (e) {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Marca como hidratado após um frame
    requestAnimationFrame(function() {
      document.body.className = isDark ? 'dark-ui' : '';
      document.body.classList.add('hydrated');
      document.body.style.transition = '';
    });
  }

  // Executa quando document estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
  } else {
    applyTheme();
  }
})();
`
