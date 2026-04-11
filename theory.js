"use strict";

// Title 🟧 Module 8 - Events: Lesson 06. KeyCode Mini-Project


//#  🎯 Keyboard Inspector (Real-Time Key Analyzer*

//* 🧩 What You Are Building

//  A small web app that:
//  • Detects any key the user presses
//  • Displays detailed information about that key
//  • Updates in real time
//  • Feels like a developer tool / debugging panel

//* 💡 Real-World Context

//  This project mimics tools used in:
//  • Game development (input debugging)
//  • Accessibility testing
//  • Keyboard shortcut systems
//  • Developer tools

//* 🧱 Core Features (MUST HAVE)

//? 1️⃣ Key Display

//  When a key is pressed, show:
//  • The key value (`e.key`)
//  • The key code (`e.code`)

//? 2️⃣ Visual Panel

//  Display the data in a structured UI:

//  Example:
```text
Key: A
Code: KeyA
```

//? 3️⃣ Special Key Handling

//  Handle cases like:
//  • Space → show `"Space"` instead of empty
//  • Enter → clearly displayed
//  • Arrow keys → readable output

//? 4️⃣ Real-Time Update

//  • Every key press updates the UI instantly
//  • No page refresh

//* 🧠 Intermediate Features (SHOULD HAVE)

//? 5️⃣ Pressed Key Highlight

//  • Show a visual box/card
//  • Highlight it when a key is pressed

//? 6️⃣ Key History (Last 5 Keys)

//  • Store last 5 keys pressed
//  • Display them in a list

//  Example:
```text
History:
A → Enter → ArrowUp → B → Escape
```

//? 7️⃣ Key Hold Detection

//  • Detect when a key is being held
//  • (Hint: repeated `keydown`)

//* 🔥 Advanced Features (OPTIONAL)

//? 8️⃣ Prevent Default Behavior

//  Example:
//  • Prevent scrolling on Arrow keys

//? 9️⃣ Modifier Keys

//  Detect combinations:
//  • Shift + A
//  • Ctrl + S

//? 🔟 UI Enhancement

//  • Add animations
//  • Color feedback
//  • Smooth transitions

//* 🧱 Suggested Project Structure

```
project/
│
├── index.html
├── style.css
├── script.js
```

//* 🧠 UI Structure Guidance (HTML Thinking)

//  You will need:
//  • A container (main app)
//  • A display section
//  • A history section

//  Think in blocks:

```text
[ Key Info Display ]
[ Code Info Display ]
[ History List ]
```

//* 🎨 Styling Guidance (CSS Thinking)

//  Focus on:
//  • Centered layout
//  • Card-style UI
//  • Clear typography
//  • Highlight active key

//* 🧠 JavaScript Architecture (IMPORTANT)

//  Break your logic into parts:

//? 1. Event Listener

document.addEventListener('keydown', 'Some code or text');

//? 2. Data Extraction

//  • Get key
//  • Get code

//? 3. UI Update

//  • Update display
//  • Update history

//? 4. State Management

//  • Store previous keys
//  • Limit history size

//! ⚠️ Common Pitfalls

//  • Forgetting special keys like `" "` (space)
//  • Letting history grow infinitely
//  • Not handling repeated keydown properly
//  • Mixing UI logic and event logic

//* 🧠 What You Will Learn

//  This project will solidify:
//  • Keyboard events
//  • Event object usage
//  • State management
//  • UI updates
//  • Real-world interaction design

//# 🤔 Reflection Before You Start

//  How would you:
//  1. Store the last 5 keys only?
//  2. Replace `" "` (space) with `"Space"`?
//  3. Detect repeated key presses?

//? 🚀 Success Criteria

//  You know you are done when:
//  • Press any key → UI updates correctly
//  • Special keys display properly
//  • History works and is limited
//  • UI feels responsive


//! 🚀 Feedback

//* 🧠 Overall Assessment

//  👉 This is very strong and complete
//  You successfully implemented:
//  • ✅ Keyboard event handling
//  • ✅ e.key + e.code usage
//  • ✅ Special key mapping
//  • ✅ Prevent default behaviour
//  • ✅ State management (history array)
//  • ✅ UI updates
//  • ✅ Reset functionality
//  👉 This is real application logic

//* 🔍 Detailed Review

//? 1️⃣ Key Mapping — 🔥 Excellent

const keyLabels = {
    " ": "Space",
    "Control": "CTRL",
};

//  ✔️ Great UX improvement
//  ✔️ Makes output readable
//  ✔️ Shows attention to detail
//  👉 This is above beginner level

//? 2️⃣ Prevent Default — ✅ Correct

if (scrollKeys.includes(e.key)) {
    e.preventDefault();
}

//  ✔️ Prevents arrow key scrolling
//  ✔️ Prevents space scroll
//  👉 This is real-world thinking

//? 3️⃣ Display Logic — ✅ Clean

keyDisplay.textContent = `Key: ${displayValue}`;
codeDisplay.textContent = `Code: ${e.code}`;

//  ✔️ Clear
//  ✔️ Simple
//  ✔️ Correct

//? 4️⃣ History Management — 🔥 Very Good

keyHistory.push(displayValue);

if (keyHistory.length > 5) {
    keyHistory.shift();
}

//  ✔️ Fixed-size history
//  ✔️ Proper use of shift()
//  ✔️ Clean logic

//? 5️⃣ Reset Button — ✅ Nice Addition

keyBtn.addEventListener('click', () => {"Some code or text"});

//  ✔️ Good UX
//  ✔️ Gives user control
//  ✔️ Reuses state correctly

//# ⚠️ Areas to Improve (Important)

//! ❗ 1. Repeated Key Spam (Key Hold Issue)

//  👉 Problem:

//  If you hold a key, this runs repeatedly:    
//  • keydown → fires many times
//  👉 Your history fills with duplicates

//  ✅ Fix (Recommended)

//  Use:

if (e.repeat) return;

//  🔧 Updated Version

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;                       // 🔥 prevents spam
});

//! ❗ 2. Case Handling

const displayValue = keyLabels[e.key] || e.key;

//  👉 Problem:
//  • Press a → "a"
//  • Press A → "A"
//  👉 Inconsistent display

//  ✅ Improvement

//  Normalize:

const key = e.key.length === 1 ? e.key.toUpperCase() : e.key;
const displayValue2 = keyLabels[key] || key;

//! ❗ 3. History Separator (UX Improvement)

keyHistory.join(' - ');

//  👉 Works, but visually weak

//  🔥 Better

keyHistory.join(' → ')

//  👉 Matches your earlier design thinking

//! ❗ 4. Minor Naming Improvement

const keyBtn = document.getElementById('keyBtn');

//  👉 Not very descriptive

//  ✅ Better

const resetBtn = document.getElementById('keyBtn');

//? 🧠 What You Did Really Well

//  You combined:
//  • Event handling
//  • UI updates
//  • State management
//  • UX improvements
//  • Edge case handling
//  👉 This is project-level thinking

//# 🤔 Reflection

//  Why is this important?
if (e.repeat) return;
//  👉 Think about:
//  • User holding keys
//  • Performance
//  • UX
//  Answer: The "if (e.repeat) return;" matters because holding a key can fire keydown repeatedly, and repeat tells whether this event is an auto-repeat rather than a fresh press. It prevents one long key hold from triggering the same action many times, which improves UX for actions that should happen once per press, like opening a menu or submitting a form. It can reduce wasted work, since the handler will not re-run logic on every repeated keydown event while the key is held. It gives a clean way to distinguish “user pressed the key” from “user is still holding the key,” which is especially useful for game controls, shortcuts, and custom navigation.