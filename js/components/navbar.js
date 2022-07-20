const header = document.querySelector('.header');
const toggleButton = document.querySelector('.toggle-button');
const headerLogo = document.querySelector('.header__logo');
const navbarEl = document.querySelector('.navbar');
const navbarList = document.querySelector('.navbar__list');

toggleButton.addEventListener('click', () => {
  navbarList.classList.toggle('navbar__list-show');
});

window.addEventListener('scroll', () => {});
