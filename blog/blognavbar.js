document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    if (!header) {
        console.error('Header element not found!');
        return;
    }

    const nav = document.createElement('nav');
    nav.style.cssText = 'display: flex; justify-content: center; align-items: center; width: 100%; position: relative;';

    const ul = document.createElement('ul');
    ul.style.cssText = 'list-style-type: none; display: flex; justify-content: center; align-items: center; padding: 0; margin: 0;';

    const links = [
        { href: 'index.html', text: 'Home' },
        { href: 'about.html', text: 'About' },
        { href: 'games.html', text: 'Games' },
        { href: 'bloghome.html', text: 'Blog' },
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

    // Add image to the right of the nav bar
    const img = document.createElement('img');
    img.src = 'images/Nightshift Studioslogo(Light).png'; // Replace with the actual path to your image
    img.alt = 'Description of image';
    img.style.cssText = 'height: 60px; position: absolute; left: 50px;'; // Adjust the size and positioning as needed

    header.appendChild(nav);
    header.appendChild(img);
});