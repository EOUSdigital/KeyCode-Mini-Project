"use strict";

//Title 🟧 Module 8 - Events: Lesson 06. KeyCode Mini-Project

//? ⌨️ Keyboard Inspector (Real-Time Key Analyzer)

const keyDisplay = document.getElementById('keyDisplay');
const codeDisplay = document.getElementById('codeDisplay');
const historyDisplay = document.getElementById('historyDisplay');
const resetBtn = document.getElementById('keyBtn'); 

let keyHistory = [];

const keyLabels = {
    " ": "Space",
    "Control": "CTRL",
    "Escape": "ESC",
    "ArrowUp": "↑",
    "ArrowDown": "↓",
    "ArrowLeft": "←",
    "ArrowRight": "→",
    "Shift": "SHIFT",
    "Alt": "ALT",
    "Backspace": "⌫",
    "Enter": "ENTER ↵"
};

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const key = e.key.length === 1 ? e.key.toUpperCase() : e.key;
    const displayValue = keyLabels[key] || key;
    const scrollKeys = [" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (scrollKeys.includes(e.key)) {
        e.preventDefault();
    }

    keyDisplay.textContent = `Key: ${displayValue}`;
    codeDisplay.textContent = `Code: ${e.code}`;

    keyHistory.push(displayValue);

    if (keyHistory.length > 5) {
        keyHistory.shift();
    }

    historyDisplay.textContent = `History: ${keyHistory.join(' → ')}`;
});

resetBtn.addEventListener('click', () => {
    keyHistory = [];
    keyDisplay.textContent = "Key: -";
    codeDisplay.textContent = "Code: -";
    historyDisplay.textContent = "History: -";
});



