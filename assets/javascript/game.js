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

    //if wins get to 5 I want to run a reset function
    if (wins === 10) {
        reset()
        alert("You win");
    }
    if (losses === 10) {
        reset();
        alert("Game Over!");
    }
    else {



    }
}
function reset() {
    //reset function is going to set wins/losses/guesses to original value
    wins = 0;
    losses = 0;
    guesses = 10;
    //append those values to the HTML page
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('left').innerHTML = guesses;
    document.getElementById('loss').innerHTML = losses;

}


