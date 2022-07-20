const headerBG = document.querySelector('.header-background');
const toggleButton = document.querySelector('.toggle-button');
const headerLogo = document.querySelector('.header__logo');
const navbarEl = document.querySelector('.navbar');
const navbarList = document.querySelector('.navbar__list');

toggleButton.addEventListener('click', () => {
  navbarList.classList.toggle('navbar__list-show');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    headerBG.classList.add('header-background-scrolled');
    toggleButton.classList.add('toggle-button-scrolled');
    headerLogo.src = '../../assets/logo/logo-dark.png';
  } else {
    headerBG.classList.remove('header-background-scrolled');
    toggleButton.classList.remove('toggle-button-scrolled');
    headerLogo.src = '../../assets/logo/logo-light.png';
  }
});
