const letters = document.querySelector(".guessed-letters");
const button = document.querySelector(".guess");
const text = document.querySelector(".letter");
const paragraph = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function(word) {
    const placeholderDots = [];
    for (const letter of word) {
        console.log(letter);
        placeholderDots.push("●");
    }
    paragraph.innerText = placeholderDots.join("")
};

placeholder(word);

button.addEventListener("click", function(e) {
    e.preventDefault();
    const inputValue = text.value;
    console.log(inputValue);
    text.value = ""
});