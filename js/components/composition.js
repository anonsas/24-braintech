const slider = tns({
  container: '.composition__slider',
  items: 5,
  gutter: 30,
  slideBy: 1,
  controlsPosition: 'bottom',
  navPosition: 'bottom',
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  controls: false,
});

const slider2 = tns({
  container: '.composition__slider-2',
  items: 5,
  gutter: 30,
  slideBy: 1,
  controlsPosition: 'bottom',
  navPosition: 'bottom',
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  controls: false,
});

// const imageList = [
//   './assets/logos/composition-logo-1.png',
//   './assets/logos/composition-logo-2.png',
//   './assets/logos/composition-logo-3.png',
//   './assets/logos/composition-logo-4.png',
//   './assets/logos/composition-logo-5.png',
//   './assets/logos/composition-logo-6.png',
//   './assets/logos/composition-logo-7.png',
//   './assets/logos/composition-logo-8.png',
// ];

// const imageList2 = [
//   './assets/logos/composition-logo-1-hover.png',
//   './assets/logos/composition-logo-2-hover.png',
//   './assets/logos/composition-logo-3-hover.png',
//   './assets/logos/composition-logo-4-hover.png',
//   './assets/logos/composition-logo-5-hover.png',
//   './assets/logos/composition-logo-6-hover.png',
//   './assets/logos/composition-logo-7-hover.png',
//   './assets/logos/composition-logo-8-hover.png',
// ];

// class Slider {
//   constructor(selector, data) {
//     this.selector = document.querySelector(selector);
//     this.parentElement = this.selector.parentElement;
//     this.data = data;
//     this.render();
//   }

//   render() {
//     this.events();
//     this.renderHTML();
//   }

//   events() {
//     this.parentElement.addEventListener('mousedown', () => {
//       this.parentElement.style.cursor = 'grabbing';
//     });

//     this.parentElement.addEventListener('mouseup', () => {
//       this.parentElement.style.cursor = 'grab';
//     });
//   }

//   renderHTML() {
//     let html = '';

//     for (const imgSrc of this.data) {
//       html += `
//             <div class="composition__slide">
//               <img src=${imgSrc} alt="company" />
//             </div>
//       `;
//     }
//     this.selector.insertAdjacentHTML('afterbegin', html);
//   }
// }

// new Slider('.composition__slider', imageList);
// new Slider('.composition__slider-2', imageList2);
