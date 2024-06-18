        const toggleButton = document.getElementById('theme-toggle');

        // Load the preferred theme from localStorage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.classList.add(currentTheme);
        }

        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark-mode');
            } else {
                localStorage.removeItem('theme');
            }
        });
