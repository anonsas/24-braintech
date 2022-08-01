// Tiny-slider package
const slider = tns({
  container: '.composition__slider',
  items: 8,
  gutter: 30,
  slideBy: 1,
  controlsPosition: 'bottom',
  navPosition: 'bottom',
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  controls: false,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});

const slider2 = tns({
  container: '.composition__slider-2',
  items: 8,
  gutter: 30,
  slideBy: 1,
  controlsPosition: 'bottom',
  navPosition: 'bottom',
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  controls: false,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
