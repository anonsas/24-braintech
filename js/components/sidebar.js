const sidebarOpenBtn = document.getElementById('sidebar-open');
const sidebarCloseBtn = document.getElementById('sidebar-close');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

sidebarOpenBtn.addEventListener('click', () => {
  sidebar.classList.add('sidebar-open');
  overlay.classList.add('overlay-open');
});

sidebarCloseBtn.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-open');
  overlay.classList.remove('overlay-open');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-open');
  overlay.classList.remove('overlay-open');
});
