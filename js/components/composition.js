import { tns } from './node_modules/tiny-slider/src/tiny-slider';

const imageList = [
  './assets/logos/composition-logo-1.png',
  './assets/logos/composition-logo-2.png',
  './assets/logos/composition-logo-3.png',
  './assets/logos/composition-logo-4.png',
  './assets/logos/composition-logo-5.png',
  './assets/logos/composition-logo-6.png',
  './assets/logos/composition-logo-7.png',
  './assets/logos/composition-logo-8.png',
];

const imageList2 = [
  './assets/logos/composition-logo-1-hover.png',
  './assets/logos/composition-logo-2-hover.png',
  './assets/logos/composition-logo-3-hover.png',
  './assets/logos/composition-logo-4-hover.png',
  './assets/logos/composition-logo-5-hover.png',
  './assets/logos/composition-logo-6-hover.png',
  './assets/logos/composition-logo-7-hover.png',
  './assets/logos/composition-logo-8-hover.png',
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
