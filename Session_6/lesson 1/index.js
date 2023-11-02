//SETTING THE STAGE
const player = "Dee"
const opponent = "Nechi"
const game = "AmazingFighter"

let points = 0
let hasWon = false

//PLAYING THE GAME
points += 100
hasWon = true

//ANNOUNCING THE WINNER
IF (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}