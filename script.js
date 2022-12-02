const name1 = document.querySelector(".pl1 > .name >h2")
const name2 = document.querySelector(".pl2 > .name >h2")
const roundTag = document.querySelector(".round")
const win = document.querySelector(".win >h3")

let maxRound = 3;
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
let currentPlayer = null
let playersIndex = null

startGame()

function random(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
}

function startGame() {
    playersIndex = random(2, 0)
    currentPlayer = players[playersIndex]
    name1.innerText = player1.name
    name2.innerText = player2.name

    rotateDice()
}

function rotateDice() {
    let numberImg = random(7, 1)
    let stopDice = setInterval(() => {

        currentPlayer.dice.setAttribute("src", dices[random(7, 1)])

    }, 100)
    setTimeout(() => {
        clearInterval(stopDice)
        currentPlayer.dice.setAttribute("src", dices[numberImg])
        saveThrow(numberImg)
        // rotateDice(player)

    }, 3000
    )
}

function saveThrow(score) {
    currentPlayer.score += score
    currentPlayer.allDice.innerHTML += `<img src="${dices[`${score}`]}">`;

    switchPlayer()

    if (currentPlayer.allDice.querySelectorAll("img").length < maxRound) {
        if (player1.allDice.querySelectorAll("img").length === player2.allDice.querySelectorAll("img").length) {
            upRound()
        }
        rotateDice()
    } else {
        if (player1.score > player2.score) {
            win.innerText = `Winner is ${player1.name} - ${player1.score}`
        } else if (player2.score > player1.score) {
            win.innerText = `Winner is ${player2.name} - ${player2.score}`
        } else {
            win.innerText = "No winner"
        }
    }
}

function switchPlayer() {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
}

function upRound() {
    round++
    roundTag.innerText = round
}

function startDice(player) {
    let numberImg = random(7, 1)
    player.dice.setAttribute("src", `img/dice-${numberImg}.png`)
}
