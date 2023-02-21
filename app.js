const playerContainer = document.querySelector('.player-container')
const gameContainer = document.querySelector('.game-container')
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const restart = document.querySelector('.restart')
const squares = document.querySelectorAll('.game-container > div')

const restartGame = () => {
    restart.addEventListener('click', () => {
        console.log('asd')
    })
}
restart.addEventListener('click', () => {
    squares.forEach((square) => {
        square.textContent = '';
        moveTracker.xCounter = [];
        moveTracker.oCounter = [];
        moveTracker.checkWin = false;
    })
})

const moveTracker = {
    xCounter: [],
    oCounter: [],
    checkWin: false
}

const victoryTracker = {
    xVictory: 0,
    oVictory: 0,
}

const playerScores = () => {
    player1.textContent = `Player 1 ${victoryTracker.xVictory}`;
    player2.textContent = `Player 2 ${victoryTracker.oVictory}`;
}

console.log(playerScores(), player1, player1.textContent)

const textCon = function (str, className) {
    if (str.textContent.length === 0 && moveTracker.xCounter.length > moveTracker.oCounter.length) {
        str.textContent = 'O'
        moveTracker.oCounter.push(className[className.length-1])
    }
    else if (str.textContent.length === 0) {
        str.textContent = 'X'
        moveTracker.xCounter.push(className[className.length-1])
    }
}

squares.forEach((square) => {
    square.addEventListener('click', () => {
    if (moveTracker.checkWin === false) {
        textCon(square, square.className)
        game()
        playerScores()
    }
    else {
        square.removeEventListener('click', () => {
            textCon(square, square.className)
            game()
        })
    }
})
})

function scenariosArr(arr) {
    let arrPoss = [];
    let counter = -1;

    for (let i = 2; i >= 0; i--) {
        let arrIndex = [];
        counter++
        let cdm = counter * 5;

        for (let j = 0; j < 5; j++) {
            arrPoss.push([])

            if (arrIndex[arrIndex.length-1] !== arr[arr.length - counter - 1]) {

                for (let k = 0; k < arr.length; k++) {

                    if (!arrIndex.includes(arr[k]) && arrPoss[j + cdm].length === i) {
                        arrPoss[j + cdm].push(arr[k])
                        arrIndex.push(arr[k])
                    }

                    else if (arrPoss[j + cdm].length >= 3) {}

                    else if (!arrIndex.includes(arr[k])) {
                        arrPoss[j + cdm].push(arr[k])
                    }
                }
            }            
        }
    }
    return arrPoss;
}

const winningScenarios = [`[1,2,3]`, `[4,5,6]`, `[7,8,9]`, `[1,4,7]`, `[2,5,8]`, `[3,6,9]`, `[1,5,9]`, `[3,5,7]`]

function sortArrays(arrArrays) {
    for (let i = 0; i < arrArrays.length; i++) {
        arrArrays[i].sort()
    }
    return arrArrays;
}

function winner(arrArrays) {
    let newArr = [];
    for (let i = 0; i < arrArrays.length; i++) {
        newArr.push(`[${arrArrays[i]}]`)
        if (winningScenarios.includes(newArr[i])) return true;
    }
}

const game = () => {
    if (!moveTracker.checkWin && winner(sortArrays(scenariosArr(moveTracker.xCounter)))) {
        console.log('X Won')
        victoryTracker.xVictory++
        moveTracker.checkWin = true;
    }
    else if (!moveTracker.checkWin && winner(sortArrays(scenariosArr(moveTracker.oCounter)))) {
        console.log('O Won')
        victoryTracker.oVictory++
        moveTracker.checkWin = true;
    }
}

let arr1 = [1,2,3,4,5]
console.log(scenariosArr(arr1))
let arr2 = [[1,2,4], [1,3,2]]
console.log(winner(arr2))
console.log(sortArrays(arr2))
console.log(winner(sortArrays(scenariosArr(moveTracker.xCounter))))