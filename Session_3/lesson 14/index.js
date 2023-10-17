let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let  isAlive = true

let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startGame() {
   if (sum < 21) 
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
  } else (sum > 21) {
    message = "You're out of the game!"
    isAlive = false
}

messageEl.textContent = message

  console.log(message)