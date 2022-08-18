// Tiny-slider package
class TinySlider {
  constructor() {
    this.showComposition1();
    this.showComposition2();
    this.showBlogs();
    this.showTestimonials();
  }

  showComposition1() {
    tns({
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
  }

  showComposition2() {
    tns({
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
  }

  showBlogs() {
    tns({
      container: '.blog-cards',
      items: 6,
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
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });
  }

  showTestimonials() {
    tns({
      container: '.testimonials-reviews',
      items: 1,
      gutter: 0,
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
          items: 1,
        },
      },
    });
  }
}

export default TinySlider;
