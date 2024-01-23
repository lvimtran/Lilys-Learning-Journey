"use strict";

// //Read content in .message => Start guessing...
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// //empty value
// document.querySelector(".guess").value;

// //store value 23
// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //No input
  if (!guess) {
    //document.querySelector(".message").textContent = "No number!";
    displayMessage("No number!");

    //Player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct number!";
    displayMessage("Correct number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b367";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore");
      textContent = highscore;
    }

    //Guess is wrong
  } else if (guess > secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent = guess > secretNumber ? "Too high!" : "Too low!";
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "You lost the game!";
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }

    //     //Guess is higher
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "Too high!";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "You lost the game!";
    //       document.querySelector(".score").textContent = 0;
    //     }

    //     //Guess is lower
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "Too low!";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "You lost the game!";
    //       document.querySelector(".score").textContent = 0;
    //     }
  }
});

//"Again" button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
