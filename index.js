const display = document.getElementById("display");
const keysContainer = document.getElementById("teclas");

const keys = [
    { label: 'C', type: 'clear' },
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '/', type: 'operator' },
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '*', type: 'operator' },
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '-', type: 'operator' },
    { label: '0', type: 'number' },
    { label: '.', type: 'number' },
    { label: '=', type: 'equals' },
    { label: '+', type: 'operator' }
];
keys.forEach(key => {
    const button = document.createElement("button");
    button.textContent = key.label;
    button.className = key.type === 'operator' || key.type === 'clear' ? 'operator-btn' : '';

    button.onclick = () => {
        if (key.type === 'number' || key.type === 'operator') {
            appendToDisplay(key.label);
        } else if (key.type === 'clear') {
            clearDisplay();
        } else if (key.type === 'equals') {
            calculate();
        }
    };

    keysContainer.appendChild(button);
});

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}
