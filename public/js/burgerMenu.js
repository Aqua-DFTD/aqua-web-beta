let menuButton = document.getElementById('menuBurger');
let navbar = document.querySelector('.burgerNav')

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show')
})