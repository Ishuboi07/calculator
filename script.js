const display = document.getElementById("display");
const buttons = document.querySelectorAll(".number, .operator");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

calculateButton.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});

clearButton.addEventListener("click", () => {
    display.value = "";
});
