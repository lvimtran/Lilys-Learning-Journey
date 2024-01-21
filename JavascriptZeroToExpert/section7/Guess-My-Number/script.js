"use strict";

// //Read content in .message => Start guessing...
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// //empty value
// document.querySelector(".guess").value;

// //store value 23
// document.querySelector(".guess").value = 23;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
});
