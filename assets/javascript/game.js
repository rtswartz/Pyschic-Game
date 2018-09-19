

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
	console.log(computerGuess);

var updateGuessesLeft = function() {
		document.querySelector('#guessesLeft').innerHTML = "Number of guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
	  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessedLetters = function() {
		document.querySelector('#guessedLetters').innerHTML = "Your guesses: " + guessedLetters;

};

var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateGuessesLeft();
	updateGuessedLetters();
	updateLetterToGuess();
}

updateLetterToGuess();


function displayWinPsychic() {
    var x = document.createElement("IMG");
    // x.setAttribute("src", ""); add image
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "");
    document.body.appendChild(x);
}

function displayLosePsychic() {
    var x = document.createElement("IMG");
    // x.setAttribute("src", ""); add image
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "");
    document.body.appendChild(x);
}


document.onkeyup = function() {
		guessesLeft--;
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
				console.log(userGuess);

	guessedLetters.push(userGuess);
	updateGuessedLetters();
	updateGuessesLeft();

		if (guessesLeft > 0){
			            if (userGuess===computerGuess){
                wins++, reset();
                alert("Whoah! You're right! How'd you do that? You ARE psychic!"); 
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                displayWinPsychic();
                       
        } 

        } else if (guessesLeft == 0){
                      losses++, reset();
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you lost. The letter was " + letterToGuess + ".");
            displayLosePsychic();
        }    
};