// Runs new game when page is loaded and sets on-click event buttons.
window.onload = function () {
  newGame();
  $("#crystal-green").on("click", crystalGreen);
  $("#crystal-orange").on("click", crystalOrange);
  $("#crystal-purple").on("click", crystalPurple);
  $("#crystal-red").on("click", crystalRed);
  $("#new-game").on("click", newGame);
  $("#next-round").on("click", nextRound);
  // $("#hide-me").on("click", hideHowTo);  Would like to add a button to toggle view of instructions.
};


//  Variables to hold value of wins, losses, and user's score.
var wins = 0;
var losses = 0;
var userScore = 0;


//  Crystal is made into an object with nested "color" objects holding a name and value.
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
var randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


//    Variable to hold winning number which should be between 19 - 120.
winningNumber = randomNumber(19, 120);


//     Crystals are given hidden values between 1 - 12.
crystal.green.value = randomNumber(1, 12);
crystal.orange.value = randomNumber(1, 12);
crystal.purple.value = randomNumber(1, 12);
crystal.red.value = randomNumber(1, 12);


//    When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
function crystalGreen() {
  if (userScore < winningNumber) {
    userScore = userScore + crystal.green.value;
    $("#user-score").html('<div>' + userScore + '</div>');
    checkScore();
  }
};

//  Repeat stuff repeat stuff repeat stuff....let's fix this.
function crystalOrange() {
  if (userScore < winningNumber) {
    userScore = userScore + crystal.orange.value;
    $("#user-score").html('<div>' + userScore + '</div>');
    checkScore();
  }
};

//  Repeat stuff repeat stuff repeat stuff....let's fix this.
function crystalPurple() {
  if (userScore < winningNumber) {
    userScore = userScore + crystal.purple.value;
    $("#user-score").html('<div>' + userScore + '</div>');
    checkScore();
  }
};

//  Repeat stuff repeat stuff repeat stuff....let's fix this.
function crystalRed() {
  if (userScore < winningNumber) {
    userScore = userScore + crystal.red.value;
    $("#user-score").html('<div>' + userScore + '</div>');
    checkScore();
  }
};


//    Function for next round.
function nextRound() {
  // Winning number and user's score resets.
  winningNumber = randomNumber(19, 120);
  $("#winning-number").html('<div>' + winningNumber + '</div>');
  userScore = 0;
  $("#user-score").html('<div>0</div>');
  console.log(winningNumber);
  //  Value of each crystal resets.
  crystal.green.value = randomNumber(1, 12);
  crystal.orange.value = randomNumber(1, 12);
  crystal.purple.value = randomNumber(1, 12);
  crystal.red.value = randomNumber(1, 12);
  console.log("Green: " + crystal.green.value);
  console.log("Orange: " + crystal.orange.value);
  console.log("Purple: " + crystal.purple.value);
  console.log("Red: " + crystal.red.value);
  //  Next round button is cleared from DOM.
  $("#next-round").html('<div>');
  confetti.stop();

}

//  Function to check user's score against the winning number.
function checkScore() {
  if (userScore === winningNumber) {
    confetti.start();
    //  Updates wins.
    wins++;
    $("#wins").html('<div>Wins: ' + wins + '</div>');
    //  Adds a button to DOM to start next round
    $("#next-round").html('<div class="btn btn-success text-white">You win! Click here to start next round.</div>');
  }
  //    * The player loses if their score goes above the random number.
  else if (userScore > winningNumber) {
    //  Updates losses.
    losses++;
    $("#losses").html('<div>Losses: ' + losses + '</div>');
    //  Adds a button to DOM to start next round.
    $("#next-round").html('<div class="btn btn-danger text-white" id="next-round">Sorry you lose! Click here to start next round.</div>');
  }
}


//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
function newGame() {
  nextRound();
  wins = 0;
  $("#wins").html('<div>Wins: ' + wins + '</div>');
  losses = 0;
  $("#losses").html('<div>Losses: ' + losses + '</div>');
}