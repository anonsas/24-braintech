// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import Navbar from '../components/Navbar.js';
import Sidebar from '../components/Sidebar.js';
import Slider from '../components/Slider.js';
import ButtonToTop from '../components/ButtonToTop.js';
import Services from '../components/services.js';

import TinySlider from '../3rd-party/Tiny-slider.js';

// if (module.hot) {
//   module.hot.accept();
// }

new Navbar();
new Sidebar();
new ButtonToTop();

//================================================
const fetchData = async () => {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();

    const { compositionList1, compositionList2, services, blogs, testimonials } = data;

    new Slider('.composition__slider', compositionList1).renderImageGallery();
    new Slider('.composition__slider-2', compositionList2).renderImageGallery();
    new Services('.services__cards', services).renderServices();
    new Slider('.blog-cards', blogs).renderBlogs();
    new Slider('.testimonials-reviews', testimonials).renderTestimonials();

    new TinySlider();
  } catch (error) {
    alert(error.message);
  }
};

fetchData();
