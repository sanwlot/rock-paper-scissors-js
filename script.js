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

choicesBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    humanScoreEl.textContent = humanScore
    computerScoreEl.textContent = computerScore
    tiesCountEl.textContent = tiesCount
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

      const emojies = {
        rock: "👊",
        paper: "👋",
        scissors: "✌️",
      }

      if (humanChoice === computerChoice) {
        tiesCount++
        tiesCountEl.textContent = tiesCount
        tieSound.play()
        messageEl.innerHTML = `<div>
          <p>You <span class="emoji">${emojies[humanChoice]}</span> <span class="emoji">${emojies[computerChoice]}</span> Computer</p>
          <h2>It's a Tie!</h2>
        </div>`
      } else if (
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")
      ) {
        humanScore++
        humanScoreEl.textContent = humanScore
        winSound.play()
        messageEl.innerHTML = `<div>
          <p>You <span class="emoji">${emojies[humanChoice]}</span> <span class="emoji">${emojies[computerChoice]}</span> Computer</p>
          <h2>You Win!</h2>
        </div>`
      } else {
        computerScore++
        computerScoreEl.textContent = computerScore
        loseSound.play()
        messageEl.innerHTML = `<div>
          <p>You <span class="emoji">${emojies[humanChoice]}</span> <span class="emoji">${emojies[computerChoice]}</span> Computer</p>
          <h2>You Lose!</h2>
        </div>`
      }
    }
    playGame()
  })
})

resetScoreBtn.addEventListener("click", () => {
  humanScore = computerScore = tiesCount = 0
  humanScoreEl.textContent = 0
  computerScoreEl.textContent = 0
  tiesCountEl.textContent = 0
  resetSound.play()
})
