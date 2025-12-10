//start
document.addEventListener('DOMContentLoaded',() => {

    // Set current year in footer
    document.getElementById('currrentYear').innerText = new Date().getFullYear();

    //Navbar Toggle in Mobile menu
    const navToggle = document.getElementById('navToggle');
    const mainNav = getElementById('mainNav').querySelector('.nav-list');
    navToggle.addEventListener('click', () =>
        mainNav.classList.toggle('show'));
    
    // Open Roadmap Modal
    const modal = document.getElementById('roadmapModal');
    const generateBtns = [
        document.getElementById('generateBtn'),
        document.getElementById('heroGenerate')
    ];

    // Attach event listeners to open modal
    generateBtns.forEach(btn => btn && btn.addEventListener('click', () => {
        modal.setAttribute('aria-hidden', 'false');
    }));

    // Close Roadmap Modal
    document.getElementById('closeModal').addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
    document.getElementById('cancelModal').addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));

    //contact form handling

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks! Message sent (demo).');
        contactForm.requestFullscreen();
    });

    alert('Thanks! Message sent (demo).');
contactForm.reset();

// fetch('posts.json')
//   .then(r => r.json())
//   .then(renderPosts)


});