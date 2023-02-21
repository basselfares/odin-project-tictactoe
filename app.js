const playerContainer = document.getElementsByClassName('player-container')
const gameContainer = document.getElementsByClassName('game-container')
const squares = document.querySelectorAll('.game-container > div')

const moveTracker = {
    xCounter: [],
    oCounter: []
}

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
        textCon(square, square.className)
        game()
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

const winningScenarios = [`[1,2,3]`, `[4,5,6]`, `[7,8,9]`, `[1,4,7]`, `[2,5,8]`, `[3,6,9]`, `[1,5,9]`, `[3,5,6]`]

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
    if (winner(sortArrays(scenariosArr(moveTracker.xCounter)))) {
        console.log('X Won')
    }
    else if (winner(sortArrays(scenariosArr(moveTracker.oCounter)))) {
        console.log('O Won')
    }
}

let arr1 = [1,2,3,4,5]
console.log(scenariosArr(arr1))
let arr2 = [[1,2,4], [1,3,2]]
console.log(winner(arr2))
console.log(sortArrays(arr2))
console.log(winner(sortArrays(scenariosArr(moveTracker.xCounter))))