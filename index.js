//
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//
// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//
// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//
// var image1 = document.querySelectorAll("img")[0];
//
// image1.setAttribute("src", randomImageSource);
//
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//
//
// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
var pick1 = Math.floor(Math.random() * 6) +1;
var image1 = "Images/dice" + pick1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);
var pick2 = Math.floor(Math.random() * 6) +1;
var image2 = "Images/dice" + pick2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);
if(pick1 > pick2){
    document.querySelector("h1").innerHTML = "Player 1 is the winner";

}
else if(pick1 === pick2){
    document.querySelector("h1").innerHTML = "The Game is a tie";

}
else {
    document.querySelector("h1").innerHTML = "Player 2 is the winner";
}
