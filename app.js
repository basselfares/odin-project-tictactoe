const playerContainer = document.getElementsByClassName('player-container')
const gameContainer = document.getElementsByClassName('game-container')
const squares = document.querySelectorAll('.game-container > div')

const tracker = {
    xCounter: 0,
    oCounter: 0
}

const textCon = function (str) {
    if (str.textContent.length === 0 && tracker.xCounter > tracker.oCounter) {
        str.textContent = 'O'
        tracker.oCounter++
    }
    else if (str.textContent.length === 0) {
        str.textContent = 'X'
        tracker.xCounter++
    }
}

squares.forEach((square) => {
    square.addEventListener('click', () => {
        textCon(square)
    })
})

