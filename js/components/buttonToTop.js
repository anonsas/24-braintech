const moveToTopBtn = document.querySelector('.btn-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    moveToTopBtn.classList.add('btn-to-top-show');
  } else {
    moveToTopBtn.classList.remove('btn-to-top-show');
  }
});

moveToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
});
