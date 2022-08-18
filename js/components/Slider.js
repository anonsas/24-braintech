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

export default Slider;
