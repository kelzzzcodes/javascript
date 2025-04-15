# 🚀 JavaScript Basics Assignment

Welcome! This assignment is designed to help you understand the **fundamentals of JavaScript** — including working with user input/output, basic arithmetic operations, conditionals, loops, and the console.

---

## 🎯 Assignment Goals

- Learn how to use `prompt()`, `alert()`, and `console.log()`
- Practice **arithmetic operators**, **conditional statements**, and **loops**
- Understand how input/output works in JavaScript
- Build foundational problem-solving skills with JavaScript

---

## 📁 Files to Create

### `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript Basics</title>
  </head>
  <body>
    <h1>Learning JavaScript Basics</h1>
    <script src="script.js"></script>
  </body>
</html>
```

### `script.js`

This file will contain solutions to **all the exercises (1–8)** listed below.

---

## 🧪 Exercises

### 1. ✅ Even or Odd Checker

- Ask the user to enter a number
- Use `%` to determine if it’s even or odd
- Display the result using `alert()`

**Sample Output:**
```
Prompt: Enter a number → 5  
Alert: The number is odd
```

---

### 2. 🧮 Basic Calculator

- Prompt the user for two numbers and an operator (`+`, `-`, `*`, `/`)
- Use `if...else` to compute and show the result

**Sample Output:**
```
Prompt: 8, "/", 2  
Alert: Result: 4
```

---

### 3. 🗳️ Voting Eligibility Checker

- Ask the user for their age
- If age ≥ 18: show “Eligible”
- Else: show “Not eligible”

**Sample Output:**
```
Prompt: 17  
Alert: You are not eligible to vote yet.
```

---

### 4. 🔢 Print Numbers from 1 to 10

- Use a `for` loop to print numbers 1–10
- Output with `console.log()` only

**Sample Console Output:**
```
1
2
3
...
10
```

---

### 5. ✖️ Multiplication Table Generator

- Ask user for a number
- Use a loop to print multiplication table (1–12)

**Sample Console Output (3):**
```
3 x 1 = 3
3 x 2 = 6
...
3 x 12 = 36
```

---

### 6. 📝 Grade Checker

- Ask user to enter a score (0–100)
- Use `if...else` to display:

| Score Range | Result              |
|-------------|---------------------|
| 70–100      | "Excellent"         |
| 50–69       | "Good"              |
| Below 50    | "Needs Improvement" |

**Sample Output:**
```
Prompt: 65  
Alert: Good
```

---

### 7. 🎲 Guess the Number Game

- Generate a random number (1–5)
- Ask user to guess
- Use `alert()` to show if they’re right or wrong

**Sample Output:**
```
Prompt: 2  
Alert: You guessed right!
```

---

### 8. 🔁 FizzBuzz Challenge

- Loop from 1–15
- For each number:
  - Divisible by 3 → `Fizz`
  - Divisible by 5 → `Buzz`
  - Divisible by both → `FizzBuzz`
  - Otherwise → print the number

**Sample Output:**
```
1  
2  
Fizz  
4  
Buzz  
Fizz  
...
FizzBuzz
```

---

## 💡 Sample: prompt() and alert()

```js
let name = prompt("What is your name?");
alert("Hello, " + name + "! Welcome to JavaScript.");
```

---

## 🧠 Resources

- [JS Arithmetic Operators](https://www.geeksforgeeks.org/javascript-arithmetic-operators/)
- [JS if...else Statements](https://www.geeksforgeeks.org/javascript-if-else-statement/)
- [JS Comparison Operators](https://www.geeksforgeeks.org/javascript-comparison-operators/)
- [JS for Loop](https://www.geeksforgeeks.org/javascript-for-loop/)
- [JS Math.random()](https://www.geeksforgeeks.org/javascript-math-random-function/)
- [JS Loops Overview](https://www.geeksforgeeks.org/loops-in-javascript/)

---

## ✅ Completion Checklist

- [ ] Created `index.html` and `script.js`
- [ ] Completed all 8 exercises
- [ ] Used `prompt()`, `alert()`, and `console.log()` appropriately
- [ ] No errors in the browser console
- [ ] Code is clean and readable

---

Happy Coding! 💻✨

If you have questions or need help, feel free to reach out!