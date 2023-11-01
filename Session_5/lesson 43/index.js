const wecomeEl = document.getElementById("welcome-el")

function greetUser(name) {
  wecomeEl.textContent = "Welcome back, " + name + " "
}

greetUser("Dee")



function greetUser(greeting) {
  wecomeEl.textContent = greeting + " Dolapo Osho " "
}

greetUser("Holla") 