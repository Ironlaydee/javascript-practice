let firstCard = 7
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false

  if (sum < 21) {
    console.log("Do you want to draw a new card?")
  } else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack!")
    hasBlackJack = true
  } else (sum > 21) {
    console.log("You're out of the game!")
  }

  console.log(hasBlackJack)