let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let  isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


function startGame() {
  renderGame()
}

function startGame() {
  cardEl .textContent = "Card: " + firstCard + " " + secondCard
  sumEl.textContent = "Sum: " + sum
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


  function newCard() {
    let card =6
    sum += card
    renderGame()
  }