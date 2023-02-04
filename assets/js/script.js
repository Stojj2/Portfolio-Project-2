let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function () {
        if (this.getAttribute("data-type") === "planets") {
            startGame("planets")
        } else if (this.getAttribute("data-type") === "cars") {
            startGame("cars")
        }
    });
}
document.getElementById("answer-box").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
})


let guessCount = 3;

let cars = [
    {
        'fact': "Inventor of the seatbelt",
        "word": "volvo"
    },

    {
        'fact': "The company is located in Germany",
        "word": "bmw"
    },

    {
        'fact': "The company is located in Germany",
        "word": "bmw"
    },

    {
        'fact': "The company is located in Germany",
        "word": "bmw"
    },

    {
        'fact': "The company is located in Germany",
        "word": "bmw"
    },

    {
        'fact': "The company is located in Germany",
        "word": "bmw"
    },

    {
        'fact': "The company is located in Germany",
        "word": "bmw"
    },

    {
        'fact': "The company is located in Germany",
        "word": "bmw"
    },

    {
        'fact': "The company is located in Germany",
        "word": "bmw"
    },

    {
        'fact': "The company is located in Germany",
        "word": "bmw"
    }
]

let planets = [
    {
        'fact': "This planet is the biggest in our solar system",
        "word": "jupiter"
    },

    {
        'fact': "This planet is counted as a dworf planet",
        "word": "pluto"
    },

    {
        'fact': "This planet is counted as a dworf planet",
        "word": "pluto"
    },

    {
        'fact': "This planet is counted as a dworf planet",
        "word": "pluto"
    },

    {
        'fact': "This planet is counted as a dworf planet",
        "word": "pluto"
    },

    {
        'fact': "This planet is counted as a dworf planet",
        "word": "pluto"
    },

    {
        'fact': "This planet is counted as a dworf planet",
        "word": "pluto"
    },

    {
        'fact': "This planet is counted as a dworf planet",
        "word": "pluto"
    },

    {
        'fact': "This planet is counted as a dworf planet",
        "word": "pluto"
    },

    {
        'fact': "This planet is counted as a dworf planet",
        "word": "pluto"
    }
]


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function startGame(category) {
    let guesses = document.getElementById("guesses-field");
    guesses.textContent = guessCount;
    let word = getWord(category);

    let hint = document.getElementById("hint-field");
    hint.textContent = word.fact;

    wordToBeGuessed = document.getElementById("word-field");
    wordLenght = word.word.length;

    wordToBeGuessed.textContent = word.word

}

function getWord(choosen) {
    if (choosen === "planets") {
        return selectPlanetObject();
    } else if (choosen === "cars") {
        return selectCarObject();
    }
}

function selectPlanetObject() {
    return planets[randomIndex()];
}

function selectCarObject() {
    return cars[randomIndex()];
}


function checkAnswer() {

}

function decreaseGuessCount() {
    guessCount --
    let guesses = document.getElementById("guesses-field");
    guesses.textContent = guessCount;


}

function randomIndex() {
    let index = Math.floor(Math.random() * 10);
    return index;
}