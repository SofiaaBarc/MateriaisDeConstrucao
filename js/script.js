document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '☰'; // Ícone de hambúrguer

    const header = document.querySelector('.navbar .container');
    header.insertBefore(navToggle, navLinks);

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});