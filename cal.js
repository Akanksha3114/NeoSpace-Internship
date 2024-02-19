let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function operate(operator) {
    if (currentInput !== '' && !isNaN(currentInput.charAt(currentInput.length - 1))) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function calculate() {
    if (currentInput !== '' && !isNaN(currentInput.charAt(currentInput.length - 1))) {
        try {
            currentInput = eval(currentInput);
            display.value = currentInput;
        } catch (error) {
            display.value = 'Error';
        }
    }
}
