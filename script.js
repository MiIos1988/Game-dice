const name1 = document.querySelector(".pl1 > .name >h2")
const name2 = document.querySelector(".pl2 > .name >h2")
const roundTag = document.querySelector(".round")

let round = 1;

const player1 = {
    name: "Milos",
    dice: document.querySelector(".diceAnimationL > img"),
    allDice: document.querySelector(".pl1 >.allDace"),
    score: 0,
}
const player2 = {
    name: "Danilo",
    dice: document.querySelector(".diceAnimationR > img"),
    allDice: document.querySelector(".pl2 >.allDace"),
    score: 0,
}
let dices = [
    null,
    "img/dice-1.png",
    "img/dice-2.png",
    "img/dice-3.png",
    "img/dice-4.png",
    "img/dice-5.png",
    "img/dice-6.png",
];

let players = [player1, player2]


function random(max, min) {

    return Math.floor(Math.random() * (max - min) + min)
}

function startGame() {
    let whoPlaysFirst = players[random(2, 0)]

    roundTag.innerText = round;
    name1.innerText = player1.name
    name2.innerText = player2.name

    // if ((player1.allDice.querySelectorAll("img").length) === (player2.allDice.querySelectorAll("img").length)) {
    //     round++
    // }

    rotateDice(whoPlaysFirst)

   

}

function saveThrow(score, player) {
    player.score += score
    player.allDice.innerHTML += `<img src="${dices[`${score}`]}">`;
    if (player1.allDice)
        startGame()
}

function rotateDice(player) {
    let numberImg = random(7, 1)
    let stopDice = setInterval(() => {

        player.dice.setAttribute("src", dices[random(7, 1)])
        // player.score = numberImg;

    }, 100)
    setTimeout(() => {
        clearInterval(stopDice)
        player.dice.setAttribute("src", dices[numberImg])
        saveThrow(numberImg, player)


    }, 3000
    )

}

function startDice(player) {
    console.log("object");
    let numberImg = random(7, 1)
    player.dice.setAttribute("src", `img/dice-${numberImg}.png`)
}

startGame()