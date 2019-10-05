var wins = 0;
var losses = 0;
var guesses = 10;
var userClick = [];
var computerGuess = computerGuess;
var options = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

// Random Letter Generator
function computerGuesses() {
    computerGuess = options[Math.floor(Math.random() * options.length)];

}

// keyboard keyup event
document.onkeyup = function (event) {
    var userGuess = event.key;

    if (userGuess === computerGuess) {
        wins++;
        guesses = 10;
        userClick = [];
    }

    computerGuesses();
    if (userGuess !== computerGuess) {
        guesses--;

    }

    if (guesses == 0) {
        losses++;
        userClick = []
        guesses = 10;
    }


    if (userClick.indexOf(userGuess) >= 0) {

    } else {

        userClick.push(userGuess);
        document.getElementById('Clicks').innerHTML = userClick;
    }

    // display values
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('left').innerHTML = guesses;
    document.getElementById('loss').innerHTML = losses;
}

function reset() {

    if (losses === 10) {
        losses = 10;

        alert('Game over!')
        reset(

        );
    }
}
