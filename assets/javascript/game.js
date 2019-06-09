// Runs when page is loaded.  On-click event buttons.

window.onload = function() {
  $("#computer-score").html('<div>' + compScore + '</div>');
  $("#crystal-green").on("click", crystalGreen);
  $("#crystal-orange").on("click", crystalOrange);
  $("#crystal-purple").on("click", crystalPurple);
  $("#crystal-red").on("click", crystalRed);
  $("#new-game").on("click", newGame);
  // $("#hide-me").on("click", hideHowTo);
};

var losses = 0;
var wins = 0;


//    * Crystal is made into an object with nested objects showing name and value.
var crystal = {
  green: {
    name: "green",
    value: 0
  },
  orange: {
    name: "orange",
    value: 0
  },
  purple: {
    name: "purple",
    value: 0
  },
  red: {
    name: "red",
    value: 0
  }
}

//    Function to generate random number for computer score.
var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//    Variable to hold computer score.
compScore = randomNumber(19, 120);
console.log(compScore);


//     Crystals are given hidden values. 
crystal.green.value = randomNumber(1, 12);
crystal.orange.value = randomNumber(1, 12);
crystal.purple.value = randomNumber(1, 12);
crystal.red.value = randomNumber(1, 12);
console.log("Green: " + crystal.green.value);
console.log("Orange: " + crystal.orange.value);
console.log("Purple: " + crystal.purple.value);
console.log("Red: " + crystal.red.value);


//    Players score starts at 0
var userScore = 0;


//    When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
function crystalGreen() {
  console.log("GREEN CLICKED!");
  userScore = userScore + crystal.green.value;
  $("#user-score").html('<div>' + userScore + '</div>');
  checkScore();
};

function crystalOrange() {
  console.log("ORANGE CLICKED!");
  userScore = userScore + crystal.orange.value;
  $("#user-score").html('<div>' + userScore + '</div>');
  checkScore();
};

function crystalPurple() {
  console.log("PURPLE CLICKED!");
  userScore = userScore + crystal.purple.value;
  $("#user-score").html('<div>' + userScore + '</div>');
  checkScore();
};

function crystalRed() {
  console.log("RED CLICKED!");
  userScore = userScore + crystal.red.value;
  $("#user-score").html('<div>' + userScore + '</div>');
  checkScore();
};


//    Function for next round.
function nextRound() {
  compScore = randomNumber(19, 120);
  $("#computer-score").html('<div>' + compScore + '</div>');
  userScore = 0;
  $("#user-score").text("0");
  console.log(compScore);
}

//    * The player wins if their total score matches the random number from the beginning of the game.
function checkScore() {
  if (userScore === compScore) {
    wins++;
    nextRound();
    $("#wins").html('<div>Wins: ' + wins + '</div>');
  }
  else if (userScore > compScore) {
    losses++;
    nextRound();
    $("#losses").html('<div>Losses: ' + losses + '</div>');
  }

}
//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. 


//     Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
function newGame() {
  console.log("NEW GAME CLICKED!");
  nextRound();
}
// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.