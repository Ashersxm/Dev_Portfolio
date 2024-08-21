document.addEventListener('DOMContentLoaded', function() {
    // Load Navbar and Footer
    loadComponent('navbar-placeholder', 'components/navbar.html').then(() => {
        // Load the home page content by default after navbar loads
        loadContent('home');

        // Attach event listeners to the navbar links after the navbar is loaded
        document.addEventListener('click', function(event) {
            if (event.target.matches('a[data-target]')) {
                event.preventDefault();
                const target = event.target.getAttribute('data-target');
                const selectedLanguage = document.getElementById('languageSwitcher').value;
                loadContent(target, selectedLanguage);
            }
        });

        // Attach event listener to the language switcher
        document.addEventListener('change', function(event) {
            if (event.target.matches('#languageSwitcher')) {
                const selectedLanguage = event.target.value;
                const currentSection = document.querySelector('a.nav-link.active')?.getAttribute('data-target') || 'home';
                loadContent(currentSection, selectedLanguage);
            }
        });
    });

    // Load Footer
    loadComponent('footer-placeholder', 'components/footer.html');
});

// Function to load navbar and footer components
function loadComponent(id, url) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Function to load content based on the target section and language
function loadContent(section, language = 'en') {
    fetch(`sections/${section}-${language}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            updateActiveLink(section);
        })
        .catch(error => console.error('Error loading content:', error));
}

// Function to update the active link in the navbar
function updateActiveLink(section) {
    // Remove 'active' class from all links
    document.querySelectorAll('a[data-target]').forEach(function(link) {
        link.classList.remove('active');
    });

    // Add 'active' class to the current section link
    const activeLink = document.querySelector(`a[data-target="${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
