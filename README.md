# ⌨️ Keyboard Inspector --- KeyCode Mini Project (Module 08, Lesson 06)

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Module](https://img.shields.io/badge/Module-08%20Events-blue)
![Lesson](https://img.shields.io/badge/Lesson-06%20Mini%20Project-green)
![Level](https://img.shields.io/badge/Level-Intermediate-informational)

------------------------------------------------------------------------

## 📌 Overview

In this lesson, you built a **Keyboard Inspector**, a real-time tool
that captures and displays keyboard interactions.

This project consolidates everything learned in:
- Mouse Events
- Event Object (`e`) 
- Keyboard Events

------------------------------------------------------------------------

## 🧠 Project Concept

The Keyboard Inspector is a **real-time key analyzer** that:

-   Detects user key presses
-   Displays key information
-   Tracks key history
-   Prevents unwanted browser behaviour

------------------------------------------------------------------------

## 🎯 Core Features

### ✅ Key Display

Displays the pressed key:

    Key: A

------------------------------------------------------------------------

### ✅ Code Display

Displays the physical key code:

    Code: KeyA

------------------------------------------------------------------------

### ✅ Key Mapping

Improves readability for special keys:

  Key       Display
  --------- ---------
  Space     Space
  ArrowUp   ↑
  Enter     ENTER ↵
  Escape    ESC

------------------------------------------------------------------------

### ✅ Key History

Stores the last 5 keys pressed:

    History: A → B → ENTER → ↑ → ESC

-   Uses an array
-   Limits size using `shift()`

------------------------------------------------------------------------

### ✅ Prevent Default Behaviour

Prevents unwanted scrolling:

-   Space
-   Arrow keys

------------------------------------------------------------------------

### ✅ Reset Functionality

Allows clearing:

-   Key display
-   Code display
-   History

------------------------------------------------------------------------

## 🧠 Key Concepts Applied

### Event Handling

    document.addEventListener('keydown', (e) => {});

------------------------------------------------------------------------

### Event Object

-   `e.key`
-   `e.code`
-   `e.preventDefault()`
-   `e.repeat`

------------------------------------------------------------------------

### State Management

    let keyHistory = [];

------------------------------------------------------------------------

### UI Updates

-   `textContent`
-   Dynamic rendering

------------------------------------------------------------------------

## ⚠️ Common Challenges

-   Handling repeated key presses (`keydown` spam)
-   Displaying special keys correctly
-   Preventing default browser actions
-   Managing fixed-size history

------------------------------------------------------------------------

## ✅ Best Practices

-   Use `e.repeat` to prevent duplicate entries
-   Normalize key values (e.g. uppercase)
-   Keep UI logic separate from event logic
-   Use descriptive variable names

------------------------------------------------------------------------

## 🧩 Project Structure

    project/
    │
    ├── index.html
    ├── style.css
    ├── script.js

------------------------------------------------------------------------

## 🎨 UI Guidelines

-   Centered layout
-   Card-based design
-   Clear typography
-   Visual feedback for interaction

------------------------------------------------------------------------

## 🚀 Possible Improvements

-   Add animations for key press
-   Highlight active key
-   Add key combination detection (Shift + A)
-   Display modifier keys (Ctrl, Alt, Shift)
-   Add dark mode

------------------------------------------------------------------------

## 🧠 Key Takeaways

-   Keyboard events enable real-time interaction
-   Event objects provide detailed context
-   State management is essential for dynamic UI
-   Small projects simulate real-world tools

------------------------------------------------------------------------

## 💬 Final Note

This project marks your transition from:

-   Learning syntax\
    ➡️
-   Building real interactive systems

You now understand how to:
- Capture user input 
- Process it 
- Display meaningful feedback

This is a core skill in modern web development.
