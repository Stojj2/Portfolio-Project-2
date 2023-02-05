let guessCount = 0;
let gameWord = "";

let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function () {
        if (this.getAttribute("data-type") === "planets") {
            startGame("planets")
        } else if (this.getAttribute("data-type") === "cars") {
            startGame("cars")
        } else if (this.getAttribute("data-type") === "submit") {
            checkAnswer();
        }
    });
}

/**
 * The start game function prepare the game area with game data.
 */
document.getElementById("answer-box").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
})

/**
 * The start game function prepare the game area with game data.
 */
function startGame(category) {
    guessCount = 3;
    let guesses = document.getElementById("guesses-field");
    guesses.textContent = guessCount;
    let word = getWord(category);
    
    let hint = document.getElementById("hint-field");
    hint.textContent = word.fact;
    let wordToBeGuessed = document.getElementById("word-field");
    
    wordLenght = word.word.length;
    let lenght = "";

    for (let i = 0; i < wordLenght; i++) {
        lenght += "_ ";
    }
    gameWord = word.word;
    wordToBeGuessed.textContent = lenght;
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
 * Selects a random object from planets array
 */
function selectPlanetObject() {
    return PLANETS[randomIndex()];
}

/**
 * Selects a random object from car array 
 */
function selectCarObject() {
    return CARS[randomIndex()];
}

/**
 * Check if the answer typed in is right or wrong
 */
function checkAnswer() {
    let guessedWord = document.getElementById("answer-box").value;
    console.log(guessedWord);
    if (guessedWord.toLowerCase() === gameWord.toLowerCase() && guessedWord !="") {
        let hint = document.getElementById("hint-field");
        hint.textContent = "You guessed right!";
        let wordToBeGuessed = document.getElementById("word-field");
        wordToBeGuessed.textContent = gameWord;

    } else if (guessCount === 0) {
        endGame();
    } else {
        decreaseGuessCount();
    }
    clearInput()
}

/**
 * Decrease the value of guesses left by 1
 */
function decreaseGuessCount() {
    guessCount --
    let guesses = document.getElementById("guesses-field");
    guesses.textContent = guessCount;
}

/**
 * Generates a random number and returns the value
 */
function randomIndex() {
    let index = Math.floor(Math.random() * 10);
    return index;
}

function endGame() {
    let guesses = document.getElementById("guesses-field");
    guesses.textContent = 0;
    let hint = document.getElementById("hint-field");
    hint.textContent = "GAME OVER!";
    let wordToBeGuessed = document.getElementById("word-field");
    wordToBeGuessed.textContent = gameWord;
    
}

function clearInput() {
    document.getElementById("answer-box").value = "";
}