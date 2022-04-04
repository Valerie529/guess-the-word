const guessedLetter = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const letters = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";
//player guesses
const guessedLetters = [];

//Use symbols as placeholders
const placeholder = function(word) {
    const placeholderDots = [];
    for (const letter of word) {
        console.log(letter);
        placeholderDots.push("●");
    }
    wordInProgress.innerText = placeholderDots.join("")
};

placeholder(word);

button.addEventListener("click", function(e) {
    e.preventDefault();
    //Empty message paragraph
    message.innerText = "";
    //Input
    const guess = letters.value;
    //Make sure it's a single letter
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess)
    }
    letters.value = ""
});

const validateInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;
    if(input.length === 0){
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please only enter 1 letter."
    } else if (!input.match(acceptedLetter)) {
        message.inputText = "Please enter a letter beween A to Z";
    } else {
        return input;
    }
};

const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You have already guessed that letter. Try again!"
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters)
    }
};
