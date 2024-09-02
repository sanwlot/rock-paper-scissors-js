const choicesBtns = document.querySelectorAll(".choice")
const humanScoreEl = document.querySelector(".humanScore")
const computerScoreEl = document.querySelector(".computerScore")
const tiesCountEl = document.querySelector(".tiesCount")
const messageEl = document.querySelector(".message")
const resetScoreBtn = document.querySelector(".resetScoreBtn")
const clickSound = document.querySelector(".click-sound")
const winSound = document.querySelector(".win-sound")
const loseSound = document.querySelector(".lose-sound")
const tieSound = document.querySelector(".tie-sound")
const resetSound = document.querySelector(".reset-sound")

let humanScore = 0
let computerScore = 0
let tiesCount = 0
const emojies = {
  rock: "👊",
  paper: "👋",
  scissors: "✌️",
}

function updateScores() {
  humanScoreEl.textContent = humanScore
  computerScoreEl.textContent = computerScore
  tiesCountEl.textContent = tiesCount
}
function displayResult(humanChoice, computerChoice, result, sound) {
  sound.play()
  messageEl.innerHTML = `<div>
    <p>
      You <span class="emoji">${emojies[humanChoice]}</span> 
      <span class="emoji">${emojies[computerChoice]}</span> Computer
    </p>
    <h2>${result}</h2>
  </div>`
}

choicesBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    updateScores()
    clickSound.play()
    function getHumanChoice() {
      let userChoice = e.target.textContent
      if (userChoice === "👊") return "rock"
      if (userChoice === "👋") return "paper"
      if (userChoice === "✌️") return "scissors"
    }
    function getComputerChoice() {
      const moves = ["rock", "paper", "scissors"]
      return moves[Math.floor(Math.random() * moves.length)]
    }
    function playGame() {
      let humanChoice = getHumanChoice()
      let computerChoice = getComputerChoice()

      if (humanChoice === computerChoice) {
        tiesCount++
        tiesCountEl.textContent = tiesCount
        displayResult(humanChoice, computerChoice, "It's a Tie", tieSound)
      } else if (
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")
      ) {
        humanScore++
        humanScoreEl.textContent = humanScore
        displayResult(humanChoice, computerChoice, "You Win", winSound)
      } else {
        computerScore++
        computerScoreEl.textContent = computerScore
        displayResult(humanChoice, computerChoice, "You Lose", loseSound)
      }
    }
    playGame()
  })
})

resetScoreBtn.addEventListener("click", () => {
  humanScore = computerScore = tiesCount = 0
  updateScores()
  resetSound.play()
})
