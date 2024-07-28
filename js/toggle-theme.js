document.addEventListener('DOMContentLoaded', function () {
    // Function to initialize the theme toggle
    function initThemeToggle() {
        const themeToggleButton = document.getElementById('theme-toggle');
        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', () => {
                const stylesheet = document.getElementById('theme-stylesheet');
                const currentTheme = stylesheet.getAttribute('href');

                if (currentTheme.includes('style-dark.css')) {
                    stylesheet.setAttribute('href', '/css/style-light.css');
                } else {
                    stylesheet.setAttribute('href', '/css/style-dark.css');
                }
            });
        }
    }

    // Wait for the header and footer to be included
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
