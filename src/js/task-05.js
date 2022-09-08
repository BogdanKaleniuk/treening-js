const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.oninput = function () {
    if (textInput.value === "") {
        output.innerHTML = 'Anonymous';
    } else {
        output.innerHTML = textInput.value;
    }
};
console.log(output.innerHTML);