// const fetchData = async () => {
//   try {
//     const response = await fetch('./data.json');
//     const data = await response.json();
//     const { composition1, composition2 } = data;
//     new Slider('.composition__slider', composition1);
//     new Slider('.composition__slider-2', composition2);
//   } catch (error) {
//     alert(error.message);
//   }
// };
// fetchData();

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

const blogs = [
  {
    id: 1,
    imageURL: './assets/images/blog-1.jpg',
    imageTitle: 'Software Development',
    date: '16 Nov 2020',
    title: 'Necessity May Give Us Your Best Virtual Court System',
  },
  {
    id: 2,
    imageURL: './assets/images/blog-2.jpg',
    imageTitle: 'Web Development',
    date: '20 December 2020',
    title: 'Tech Products That Makes Its Easier to Stay at Home',
  },
  {
    id: 3,
    imageURL: './assets/images/blog-3.jpg',
    imageTitle: 'IT Services',
    date: '22 December 2020',
    title: 'Open Source Job Report Show More Openings Fewer',
  },
  {
    id: 4,
    imageURL: './assets/images/blog-4.jpg',
    imageTitle: 'Artificial Intelligence',
    date: '26 December 2020',
    title: 'Types of Social Proof What its Makes Them Effective',
  },
  {
    id: 5,
    imageURL: './assets/images/blog-5.jpg',
    imageTitle: 'Digital Technology',
    date: '28 December 2020',
    title: 'Tech Firms Support Huawei Restriction, Balk at Cost',
  },
  {
    id: 6,
    imageURL: './assets/images/blog-6.jpg',
    imageTitle: 'It services',
    date: '30 December 2020',
    title: 'Servo Project Joins The Linux Foundation Fold Desco',
  },
];

const testimonials = [
  {
    id: 1,
    imageURL: './assets/images/testimonial-user1.jpg',
    name: 'Mariya Khan',
    job: 'CEO, Brick Consulting',
  },
  {
    id: 2,
    imageURL: './assets/images/testimonial-user2.jpg',
    name: 'Sonia Akther',
    job: 'CEO, Keen IT Solution',
  },
  {
    id: 3,
    imageURL: './assets/images/testimonial-user3.jpg',
    name: 'Felando',
    job: 'Web Developer',
  },
  {
    id: 4,
    imageURL: './assets/images/testimonial-user4.jpg',
    name: 'Neymar Vuya',
    job: 'Artist',
  },
];
//=========================================================
class Slider {
  constructor(selector, data) {
    this.selector = document.querySelector(selector);
    this.data = data;
  }

  renderImageGallery() {
    let html = '';
    for (const imgSrc of this.data) {
      html += `<img src=${imgSrc} alt="company" />`;
    }
    this.selector.insertAdjacentHTML('afterbegin', html);
  }

  renderBlogs() {
    let html = '';
    for (const blog of this.data) {
      html += `
              <div class="blog-card">
                <a href="#" class="blog-card__image-container">
                  <img
                    src=${blog.imageURL}
                    alt="blog card"
                    class="blog-card__image"
                  />
                  <p class="blog-card__title">${blog.imageTitle}</p>
                </a>

                <div class="blog-card__content">
                  <div class="blog-card__date">
                    <p class="blog-card__date--time">
                      <i class="fa-regular fa-calendar-check"></i>${blog.date}
                    </p>
                    <p class="blog-card__date--admin">
                      <i class="fa-regular fa-user"></i>admin
                    </p>
                  </div>
                  <a href="#"
                    ><h4 class="blog-card__content--title">
                      ${blog.title}
                    </h4></a
                  >
                  <p class="blog__description">
                    We denounce with righteous indige nation and dislike men who are so
                    beguiled...
                  </p>
                  <a href="#">Learn More<i class="fa-solid fa-chevron-right"></i></a>
                </div>
              </div>`;
    }
    this.selector.insertAdjacentHTML('afterbegin', html);
  }

  renderTestimonials() {
    let html = '';
    for (const review of this.data) {
      html += `<div class="review">
                  <img src="./assets/images/testimonial-marks.png" alt="marks" />
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value added
                    activity to beta test. Override the digital divide with additional
                    clickthroughs from DevOps. Nanotechnology immersion along the
                    information highway.
                  </p>
                  <div class="review__author">
                    <img src=${review.imageURL} alt="reviewer" />
                    <div class="review__author-content">
                      <h4>${review.name}</h4>
                      <p>${review.job}</p>
                    </div>
                  </div>
                </div>`;
    }
    this.selector.insertAdjacentHTML('afterbegin', html);
  }
}

const composition1 = new Slider('.composition__slider', imageList);
composition1.renderImageGallery();

const composition2 = new Slider('.composition__slider-2', imageList2);
composition2.renderImageGallery();

const blogComposition = new Slider('.blog-cards', blogs);
blogComposition.renderBlogs();

const testimonialsComposition = new Slider('.testimonials-reviews', testimonials);
testimonialsComposition.renderTestimonials();
//=======================================================
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

const slider3 = tns({
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

const slider4 = tns({
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
