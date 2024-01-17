let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImg = "dice" + randomNumber1 + ".png";

let randomImgSource = "images/" + randomImg;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImgSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}