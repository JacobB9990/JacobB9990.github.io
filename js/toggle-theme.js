document.addEventListener('DOMContentLoaded', function () {
    function initThemeToggle() {
        const themeToggleButton = document.getElementById('theme-toggle');
        const stylesheet = document.getElementById('theme-stylesheet');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            stylesheet.setAttribute('href', `/css/${currentTheme}.css`);
        }

        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', () => {
                const currentTheme = stylesheet.getAttribute('href');

                if (currentTheme.includes('style-dark.css')) {
                    stylesheet.setAttribute('href', '/css/style-light.css');
                    localStorage.setItem('theme', 'style-light');
                } else {
                    stylesheet.setAttribute('href', '/css/style-dark.css');
                    localStorage.setItem('theme', 'style-dark');
                }
            });
        }
    }

    const observer = new MutationObserver(() => {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');

        if (header && footer) {
            initThemeToggle();
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
