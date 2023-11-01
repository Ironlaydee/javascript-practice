const wecomeEl = document.getElementById("welcome-el")

                                 
function greetUser(greeting, name, emoji) {
  wecomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Holla", "Molyn", "/") 