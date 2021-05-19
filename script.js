"use strict";

let number = Math.floor(Math.random() * 20) + 1;
const status = document.querySelector(".status");
let tries = document.querySelector(".tries").textContent;

console.log(tries);
console.log(number);

document.querySelector(".submit").addEventListener("click", () => {
  const guess = Number(document.querySelector(".input").value);

  if (guess === number) {
    document.querySelector("body").style.backgroundColor = "#5abd4a";
    console.log("you win");
    status.textContent = "✔ Correct guess";
    document.querySelector(".logo").textContent = number;
    if (tries > Number(document.querySelector(".highscore").textContent)) {
      document.querySelector(".highscore").textContent = tries;
    }
  } else if (tries > 1) {
    if (guess > number) {
      status.textContent = "📈 Too high";
      tries--;
      document.querySelector(".tries").textContent = tries;
      document.querySelector(".input").value = null;
    } else {
      status.textContent = "📉 Too low";
      tries--;
      document.querySelector(".tries").textContent = tries;
      document.querySelector(".input").value = null;
    }
  } else {
    status.textContent = "❌ Game Over";
    tries--;
    document.querySelector(".tries").textContent = tries;
    document.querySelector("body").style.backgroundColor = "#b03500";
  }
});

document.querySelector(".again").addEventListener("click", () => {
  status.textContent = "Start guessing . . .";
  document.querySelector(".logo").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#313131";
  number = Math.floor(Math.random() * 20) + 1;
  tries = 20;
  document.querySelector(".tries").textContent = tries;
  document.querySelector(".input").value = null;
  console.log(number);
});
