export const getThemeInitScript = () => `
(function() {
  try {
    const STORAGE_KEY = 'carlohcs.me';
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY))

    var theme = data.theme || 'light';
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (theme === 'dark' || (theme === 'system' && prefersDark)) {
      document.body.classList.add('dark-ui');
    }
  } catch (e) {}
})();
`
