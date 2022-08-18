class ButtonToTop {
  #element = document.querySelector('.btn-to-top');

  constructor() {
    this.showOnScroll();
    this.scrollToTop();
  }

  showOnScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        this.#element.classList.add('btn-to-top-show');
      } else {
        this.#element.classList.remove('btn-to-top-show');
      }
    });
  }

  scrollToTop() {
    this.#element.addEventListener('click', () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    });
  }
}

export default ButtonToTop;
