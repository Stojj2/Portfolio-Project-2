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





let guessCount = 8;
let cars = [{
        'fact': "Inventor of the seatbelt",
        "word": "volvo"
    },

    {
        'fact': "The company is located in Germany",
        "word": "bmw"
    }
]


let planets = [{
        'fact': "This planet is the biggest in our solar system",
        "word": "jupiter"
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
    getWord(category)

}

function getWord(choosen) {
    for (chosen in choos) {
        console.log(choos);
    }

}

function checkAnswer() {

}

function decreaseGuessCount() {

}