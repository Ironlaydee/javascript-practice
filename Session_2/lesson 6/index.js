let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num 1
document.getElementById("num2-el").textContent = num 2

let sumEl = document.getElemenyById("sum-el")

function add() {
  let result = num1 + num2
  sumEl.textContent "Sum: " + result
}

function subtract() {
  let result = num1 - num2
  sumEl.textContent "Sum: " + result
}

function divide() {
  let result = num1 / num2
  sumEl.textContent "Sum: " + result
}

function multiply() {
  let result = num1 * num2
  sumEl.textContent "Sum: " + result
}
// num1 & num2 is not showing & my buttons are not working on my live server 