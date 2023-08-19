const display = document.getElementById("display");
const buttons = document.querySelectorAll(".number, .operator");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

// Function to perform calculation
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to clear display
function clearDisplay() {
    display.value = "";
}

// Event listener for keyboard key press
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (/[\d+\-*/.=]/.test(key)) {
        handleKeyPress(key);
    }
});

// Function to handle key press
function handleKeyPress(key) {
    if (key === "Enter") {
        calculate();
    } else if (key === "Escape") {
        clearDisplay();
    } else {
        display.value += key;
    }
}

// Attach click event listeners to buttons
calculateButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clearDisplay);
