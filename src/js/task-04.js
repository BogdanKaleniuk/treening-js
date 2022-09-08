const decBtn = document.querySelector('[data-action="decrement"]');
const incBrn = document.querySelector('[data-action="increment"]');


let counterValue = 0;

decBtn.addEventListener('click', decFun);

function decFun() {
    counterValue -= 1;
    value.textContent = counterValue;
};

incBrn.addEventListener('click', incFun);

function incFun() {
  counterValue += 1;
  value.textContent = counterValue;
};



