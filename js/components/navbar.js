class Navbar {
  #headerBG = document.querySelector('.header-background');
  #toggleButton = document.querySelector('.toggle-button');
  #headerLogo = document.querySelector('.header__logo');
  #navbar = document.querySelector('.navbar');

  constructor() {
    this.showNavbar();
    this.showNavbarOnScroll();
  }

  showNavbar() {
    this.#toggleButton.addEventListener('click', () => {
      this.#navbar.classList.toggle('navbar-show');
    });
  }

  showNavbarOnScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        this.#headerBG.classList.add('header-background-scrolled');
        this.#toggleButton.classList.add('toggle-button-scrolled');
        this.#headerLogo.src = './assets/logos/main-logo-dark.png';
      } else {
        this.#headerBG.classList.remove('header-background-scrolled');
        this.#toggleButton.classList.remove('toggle-button-scrolled');
        this.#headerLogo.src = './assets/logos/main-logo-light.png';
      }
    });
  }
}

export default Navbar;
