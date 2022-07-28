const imageList = [
  './assets/companies/1.png',
  './assets/companies/2.png',
  './assets/companies/3.png',
  './assets/companies/4.png',
  './assets/companies/5.png',
  './assets/companies/6.png',
  './assets/companies/7.png',
  './assets/companies/8.png',
];

const imageList2 = [
  './assets/companies/1-hover.png',
  './assets/companies/2-hover.png',
  './assets/companies/3-hover.png',
  './assets/companies/4-hover.png',
  './assets/companies/5-hover.png',
  './assets/companies/6-hover.png',
  './assets/companies/7-hover.png',
  './assets/companies/8-hover.png',
];

class Slider {
  constructor(selector, data) {
    this.selector = document.querySelector(selector);
    this.parentElement = this.selector.parentElement;
    this.data = data;
    this.render();
  }

  render() {
    this.events();
    this.renderHTML();
  }

  events() {
    this.parentElement.addEventListener('mousedown', () => {
      this.parentElement.style.cursor = 'grabbing';
    });

    this.parentElement.addEventListener('mouseup', () => {
      this.parentElement.style.cursor = 'grab';
    });
  }

  renderHTML() {
    let html = '';

    for (const imgSrc of this.data) {
      html += `
            <div class="composition__slide">
              <img src=${imgSrc} alt="company" />
            </div>
      `;
    }
    this.selector.insertAdjacentHTML('afterbegin', html);
  }
}

new Slider('.composition__slider', imageList);
new Slider('.composition__slider-2', imageList2);
