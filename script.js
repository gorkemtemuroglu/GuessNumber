"use script";

const again = document.querySelector(".again");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const labelScore = document.querySelector(".label-score");
const labelHighScore = document.querySelector(".label-highscore");
const button = document.querySelector(".check");

const contextMessage = (text) => {
  message.textContent = `${text}`;
};

const createRandomValue = function () {
  const num = Math.floor(Math.random() * 20) + 1;
  return num;
};

let x = createRandomValue();
let counter = 20;
let highScore = 0;

check.addEventListener("click", function () {
  if (counter > 1) {
    if (x === Number(guess.value) && counter > 0) {
      check.classList.add("hidden");
      number.textContent = guess.value;
      contextMessage("Succesfull");
      document.body.style.backgroundColor = "green";
      if (counter > highScore) {
        highScore = counter;
        labelHighScore.textContent = `🥇 Highscore : ${highScore}`;
      }
    } else if (Number(guess.value)) {
      counter = counter - 1;
      labelScore.textContent = `💯 Score : ${counter}`;
      Number(guess.value) > x
        ? contextMessage("Too high")
        : contextMessage("Too low");
    } else {
      contextMessage("Try write a number :)");
    }
  } else {
    contextMessage("Try Again :)");
    alert("GAME İS FİNİSH");
    check.classList.add("hidden");
  }
});

again.addEventListener("click", function () {
  number.textContent = "?";
  document.body.style.backgroundColor = "#222";
  guess.textContent = " ";
  contextMessage("Start Guessing...");
  check.classList.remove("hidden");
  labelScore.textContent = "💯 Score : 20";
  x = createRandomValue();
  counter = 20;
  guess.value = "";
});
