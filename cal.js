let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === 'Error') display.value = '';
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    if (display.value === 'Error') {
        display.value = '';
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculateResult() {
    try {
        // Evaluate only safe characters (digits, operators, dot)
        if (/^[0-9+\-*/.]+$/.test(display.value)) {
            let result = eval(display.value);
            display.value = result;
        } else {
            display.value = 'Error';
        }
    } catch {
        display.value = 'Error';
    }
}

// Optional: Allow keyboard input
document.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === 'Enter') {
        calculateResult();
    } else if (e.key === 'Backspace') {
        deleteLast();
    } else if (e.key === 'Escape') {
        clearDisplay();
    }
});
