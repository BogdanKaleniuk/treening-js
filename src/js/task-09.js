function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const bgColor = document.querySelector('.color');

body.addEventListener('click', changeColor);

function changeColor() {
body.style.backgroundColor = getRandomHexColor();
bgColor.textContent = body.style.backgroundColor;
}

  