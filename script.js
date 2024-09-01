function getComputerChoice() {
  const moves = ["rock", "paper", "scissors"]
  return moves[Math.floor(Math.random() * moves.length)]
}

function getHumanChoice() {
  let userChoice = prompt("choose one of the three: rock, paper or scissors ")
  return userChoice.toLowerCase()
}
function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}.`)
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    humanScore++
    console.log(`You Win! ${humanChoice} beats ${computerChoice}.`)
  } else {
    computerScore++
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`)
  }

  console.log(`Total Score: You: ${humanScore} Computer: ${computerScore}`)
  return { humanScore, computerScore }
}

function playGame() {
  let humanScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    let roundResult = playRound(
      getHumanChoice(),
      getComputerChoice(),
      humanScore,
      computerScore
    )
    humanScore = roundResult.humanScore
    computerScore = roundResult.computerScore
  }

  if (humanScore > computerScore) {
    console.log("You won the game, congratulations!")
  } else if (computerScore > humanScore) {
    console.log("You lost the game, better luck next time!")
  } else {
    console.log("The game was tied!")
  }
}

playGame()
