document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (!header) {
        console.error('Header element not found!');
        return;
    }

    const nav = document.createElement('nav');
    nav.style.cssText = 'display: flex; justify-content: center; align-items: center; width: 100%;';

    const ul = document.createElement('ul');
    ul.style.cssText = 'list-style-type: none; display: flex; justify-content: center; align-items: center; padding: 0; margin: 0; width: auto;';

    const links = [
        { href: 'index.html', text: 'Home' }, // Change the href to point to actual pages like 'index.html'
        { href: 'about.html', text: 'About' },
        { href: 'games.html', text: 'Games' },
        { href: 'contact.html', text: 'Contact' }
    ];

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', link.href);
        a.textContent = link.text;
        a.style.cssText = 'color: #E0E0E0; margin: 0 15px; text-decoration: none; font-size: 1.1em; padding: 10px 0; transition: all 0.3s ease;';

        // Adding hover effects using JavaScript
        a.addEventListener('mouseenter', function() {
            this.style.color = '#00b5f1';
            this.style.fontSize = '1.3em';
            this.style.padding = '15px 0';
            this.style.transform = 'scale(1.1)';
        });

        a.addEventListener('mouseleave', function() {
            this.style.color = '#E0E0E0';
            this.style.fontSize = '1.1em';
            this.style.padding = '10px 0';
            this.style.transform = 'scale(1)';
        });

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);
});