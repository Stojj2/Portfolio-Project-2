let guessCount = 0;
let gameWord = "";

/**
 * This function will be caled when the DOM content is loaded
 * and run the setup steps for the game
 */
function setup() {
    document.getElementById("answer-box").disabled = true;
    document.getElementById("button-submit").disabled = true;
    document.getElementById("hint-header").textContent = "WELCOME!";

    let buttons = document.getElementsByTagName("button");
    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    for (let button of buttons) {
        button.addEventListener("click", buttonClicked);
    }
}

/**
 * Checks which button is clicked
 */
function buttonClicked(clickEvent) {
    if (clickEvent.target.getAttribute("data-type") === "planets") {
        startGame("planets");
    } else if (clickEvent.target.getAttribute("data-type") === "cars") {
        startGame("cars");
    } else if (clickEvent.target.getAttribute("data-type") === "submit") {
        checkAnswer();
    }
}

/**
 * The start game function prepare the game area with game data.
 */
function startGame(category) {
    document.getElementById("guesses-field").style.backgroundColor = "";
    document.getElementById("hint-field").style.backgroundColor = "";
    document.getElementById("hint-header").textContent = "Hint:";
    document.getElementById("answer-box").disabled = false;
    document.getElementById("button-submit").disabled = false;
    document.getElementById("answer-box").select();
    guessCount = 3;
    let guesses = document.getElementById("guesses-field");
    guesses.textContent = guessCount;
    let word = getWord(category);

    let hint = document.getElementById("hint-field");
    hint.textContent = word.fact;
    let wordToBeGuessed = document.getElementById("word-field");

    let wordLength = word.word.length;
    let hiddenWord = "";

    for (let i = 0; i < wordLength; i++) {
        hiddenWord += "_ ";
    }
    gameWord = word.word;
    wordToBeGuessed.textContent = hiddenWord;
}

/**
 * Checks which button where pressed 
 * and get a random object from cars or planets array
 */
function getWord(choosen) {
    if (choosen === "planets") {
        return selectPlanetObject();
    } else if (choosen === "cars") {
        return selectCarObject();
    }
}

/**
 * Selects a random object from PLANETS array
 */
function selectPlanetObject() {
    return PLANETS[getRandomIndex()];
}

/**
 * Selects a random object from CARS array 
 */
function selectCarObject() {
    return CARS[getRandomIndex()];
}

/**
 * Check if the answer typed in is matching the right answer
 */
function checkAnswer() {
    let guessedWord = document.getElementById("answer-box").value.trim();
    if (guessedWord.toLowerCase() === gameWord.toLowerCase() && guessedWord != "") {
        let hint = document.getElementById("hint-field");

        document.getElementById("hint-header").textContent = "CONGRATULATION!";
        hint.textContent = "You guessed right!";
        document.getElementById("answer-box").disabled = true;
        document.getElementById("button-submit").disabled = true;
        document.getElementById("hint-field").style.backgroundColor = "#63b23dc7";
        let wordToBeGuessed = document.getElementById("word-field");
        wordToBeGuessed.textContent = gameWord;

    } else {
        document.getElementById("guesses-field").style.backgroundColor = "#c52f2f94";
        decreaseGuessCount();
    }

    if (guessCount === 0) {
        endGame();
    }
    clearInput();
}

/**
 * Decrease the value of guesses left by 1
 */
function decreaseGuessCount() {
    guessCount--;
    let guesses = document.getElementById("guesses-field");
    guesses.textContent = guessCount;
}

/**
 * Generates a random number and returns the value
 */
function getRandomIndex() {
    let index = Math.floor(Math.random() * 10);
    return index;
}

/**
 * Ending the game and notifies the player
 */
function endGame() {
    document.getElementById("hint-header").textContent = "SORRY!";
    document.getElementById("answer-box").disabled = true;
    document.getElementById("button-submit").disabled = true;
    let guesses = document.getElementById("guesses-field");
    guesses.textContent = 0;
    let hint = document.getElementById("hint-field");
    hint.textContent = "GAME OVER!";
    let wordToBeGuessed = document.getElementById("word-field");
    wordToBeGuessed.textContent = gameWord;

}

/**
 * Clears the input field from content
 */
function clearInput() {
    document.getElementById("answer-box").value = "";
}

document.addEventListener("DOMContentLoaded", setup);