// first random number from 1- 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// random image from dice1.png - dice6.png selected
var randomDiceImage = "dice" + randomNumber1 + ".png";

// first image - provided from  images/dice1.png - images/dice6.png
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//  second random number from 1- 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// second image - provided from  images/dice1.png - images/dice6.png
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

// function to refresh page
function refreshPage() {
  window.location.reload();
}
