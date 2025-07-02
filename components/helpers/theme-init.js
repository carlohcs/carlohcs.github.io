export const getThemeInitScript = () => `
(function() {
  var STORAGE_KEY = 'carlohcs.me';

  try {
    var data = JSON.parse(localStorage.getItem(STORAGE_KEY))

    var theme = data.theme || 'light';
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark' || (theme === 'system' && prefersDark)) {
      document.body.classList.add('dark-ui');
    }

    // Marca como hidratado após um frame
    requestAnimationFrame(function() {
      document.body.classList.add('hydrated');
    });
  } catch (e) {
   setTimeout(function() {
      document.body.classList.add('hydrated');
    }, 100);
  }
})();
`
