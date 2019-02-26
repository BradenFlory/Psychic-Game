
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var guessesSofar = [];

var directionsText = document.getElementById("directions-text");


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guessesleft-text")
var computerChoiceText = document.getElementById("computerchoice-text");
var guessesSofardiv = document.getElementById("userchoice-text");


document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);



    var computerGuess = options[Math.floor(Math.random() * options.length)];
    console.log(computerGuess);


    if ((userGuess !== computerGuess) && (remainingGuesses > 1)) {
        guessesSofar.push(userGuess);
        remainingGuesses--;
        guessesLeft.textContent = "Guesses left: " + remainingGuesses;
        guessesSofardiv.textContent = "Your guesses so far: " + guessesSofar.toString();

    }

    else if (userGuess === computerGuess) {
        wins++;
        reset();
    }

    else {
        losses++;
        reset();
    }

    function reset() {
        remainingGuesses = 9;
        guessesSofar = [];
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;

    }
};
