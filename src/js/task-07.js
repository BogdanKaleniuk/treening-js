const inputSize = document.getElementById('font-size-control');
const text = document.getElementById('text');

inputSize.oninput = function () {
  text.style.fontSize = inputSize.value + 'px';
};



// const inputSize = document.getElementById('font-size-control');
// const text = document.getElementById('text');

// function inputChange() {
//   text.style.fontSize = inputSize.value + 'px';
// };

// inputSize.addEventListener('input', inputChange);