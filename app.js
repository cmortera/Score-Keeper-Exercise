const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

const scoreSelect = document.querySelector("#playto");
const reset = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

function p1Win() {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.remove("game");
      p2Display.classList.remove("game");
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
    p1Display.textContent = p1Score;
  }
}

p1Button.addEventListener("click", p1Win);

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p1Display.classList.remove("game");
      p2Display.classList.remove("game");
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
    p2Display.textContent = p2Score;
  }
});

scoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetGame();
});

reset.addEventListener("click", resetGame);

function resetGame() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.add("game");
  p2Display.classList.add("game");
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
}
