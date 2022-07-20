const composition = document.querySelector('.composition');
const compositionSlider = document.querySelector('.composition__slider');

let pressed = false;
let startx;
let x;

composition.addEventListener('mousedown', (e) => {
  pressed = true;
  startx = e.offsetX - compositionSlider.offsetLeft;
  compositionSlider.style.cursor = 'grabbing';
});

compositionSlider.addEventListener('mouseenter', () => {
  compositionSlider.style.cursor = 'grab';
});

compositionSlider.addEventListener('mouseup', () => {
  compositionSlider.style.cursor = 'grab';
});

window.addEventListener('mouseup', () => {
  pressed = false;
});

composition.addEventListener('mousemove', (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;
  compositionSlider.style.left = `${x - startx}px`;
  checkBoundary();
});

function checkBoundary() {
  let outer = composition.getBoundingClientRect();
  let inner = compositionSlider.getBoundingClientRect();

  if (parseInt(compositionSlider.style.left > 0)) {
    compositionSlider.style.left = '0';
  } else if (inner.right < outer.right) {
    compositionSlider.style.left = `-${inner.width - outer.width}px`;
  }
}
