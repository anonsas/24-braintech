class Services {
  constructor(selector, data) {
    this.selector = document.querySelector(selector);
    this.data = data;
  }

  renderServices() {
    let html = '';

    for (const service of this.data) {
      html += `
          <div class="card services-card-${service.id}">
            <div div class="services-card__images">
              <img src=${service.icon} alt="service" />
              <div class="serial-number">0${service.id}</div>
            </div>
            <h4>${service.title}</h4>
            <p>${service.desc}</p>
          </div>
      `;
    }

    this.selector.insertAdjacentHTML('afterbegin', html);
  }
}

export default Services;
