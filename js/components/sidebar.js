class Sidebar {
  #sidebarOpenBtn = document.getElementById('sidebar-open');
  #sidebarCloseBtn = document.getElementById('sidebar-close');
  #sidebar = document.querySelector('.sidebar');
  #overlay = document.querySelector('.overlay');

  constructor() {
    this.openSidebar();
    this.closeSidebar();
    this.controlOverlay();
  }

  openSidebar() {
    this.#sidebarOpenBtn.addEventListener('click', () => {
      this.#sidebar.classList.add('sidebar-open');
      this.#overlay.classList.add('overlay-open');
    });
  }

  closeSidebar() {
    this.#sidebarCloseBtn.addEventListener('click', () => {
      this.#sidebar.classList.remove('sidebar-open');
      this.#overlay.classList.remove('overlay-open');
    });
  }

  controlOverlay() {
    this.#overlay.addEventListener('click', () => {
      this.#sidebar.classList.remove('sidebar-open');
      this.#overlay.classList.remove('overlay-open');
    });
  }
}

export default Sidebar;
