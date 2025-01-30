function toggleMenu() {
    const menuButton = document.querySelector('.menu-button');
    const mobileNav = document.getElementById('mobileNav');
    menuButton.classList.toggle('active');
    mobileNav.classList.toggle('open');
}