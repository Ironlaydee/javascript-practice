let cards = []
let sum = 0
let hasBlackJack = false
let  isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard() {
  let Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  let  isAlive = false
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  let cards = [firstCard, secondCard]
  let sum = firstCard + secondCard

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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }