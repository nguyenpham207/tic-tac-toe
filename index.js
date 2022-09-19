//game board has got to be done
// 9 divs - clickable - .addEventListener
// 3 X 3 placement
// js is going to create these for me
// reset button
// btn - clickable - .addEventListener
// clear the board
// clear messaging
// message board
// div

// game logic
// place x or o on a spot
// spot has to be blank
// check if there is a win
// change player from x to o

// getting the game board
const gameBoard = document.querySelector('#game-board')
// get the message board
const messageBoard = document.querySelector('#message-board')
// get the reset button
const resetBtn = document.querySelector('#reset')
let isPlayerOne = true
let currentPlayedBoard = ['', '', '', '', '', '', '', '', '']
let isGameOver = false
let moveCount = 0

const checkWin = () => {
	const winX1 =
		currentPlayedBoard[0] === 'x' &&
		currentPlayedBoard[1] === 'x' &&
		currentPlayedBoard[2] === 'x'
	const winX2 =
		currentPlayedBoard[0] === 'x' &&
		currentPlayedBoard[3] === 'x' &&
		currentPlayedBoard[6] === 'x'
	const winX3 =
		currentPlayedBoard[0] === 'x' &&
		currentPlayedBoard[4] === 'x' &&
		currentPlayedBoard[8] === 'x'
	const winX4 =
		currentPlayedBoard[1] === 'x' &&
		currentPlayedBoard[4] === 'x' &&
		currentPlayedBoard[7] === 'x'
	const winX5 =
		currentPlayedBoard[2] === 'x' &&
		currentPlayedBoard[5] === 'x' &&
		currentPlayedBoard[8] === 'x'
	const winX6 =
		currentPlayedBoard[2] === 'x' &&
		currentPlayedBoard[4] === 'x' &&
		currentPlayedBoard[6] === 'x'
	const winX7 =
		currentPlayedBoard[3] === 'x' &&
		currentPlayedBoard[4] === 'x' &&
		currentPlayedBoard[5] === 'x'
	const winX8 =
		currentPlayedBoard[6] === 'x' &&
		currentPlayedBoard[7] === 'x' &&
		currentPlayedBoard[8] === 'x'
	const winO1 =
		currentPlayedBoard[0] === 'o' &&
		currentPlayedBoard[1] === 'o' &&
		currentPlayedBoard[2] === 'o'
	const winO2 =
		currentPlayedBoard[0] === 'o' &&
		currentPlayedBoard[3] === 'o' &&
		currentPlayedBoard[6] === 'o'
	const winO3 =
		currentPlayedBoard[0] === 'o' &&
		currentPlayedBoard[4] === 'o' &&
		currentPlayedBoard[8] === 'o'
	const winO4 =
		currentPlayedBoard[1] === 'o' &&
		currentPlayedBoard[4] === 'o' &&
		currentPlayedBoard[7] === 'o'
	const winO5 =
		currentPlayedBoard[2] === 'o' &&
		currentPlayedBoard[5] === 'o' &&
		currentPlayedBoard[8] === 'o'
	const winO6 =
		currentPlayedBoard[2] === 'o' &&
		currentPlayedBoard[4] === 'o' &&
		currentPlayedBoard[6] === 'o'
	const winO7 =
		currentPlayedBoard[3] === 'o' &&
		currentPlayedBoard[4] === 'o' &&
		currentPlayedBoard[5] === 'o'
	const winO8 =
		currentPlayedBoard[6] === 'o' &&
		currentPlayedBoard[7] === 'o' &&
		currentPlayedBoard[8] === 'o'

    ++moveCount
    if (moveCount === 9 ) {
        messageBoard.innerText = 'Tie'
        return true
    }

	if (winX1 || winX2 || winX3 || winX4 || winX5 || winX6 || winX7 || winX8) {
		messageBoard.innerText = 'Winner is x!'
		return true
	} else if (
		winO1 ||
		winO2 ||
		winO3 ||
		winO4 ||
		winO5 ||
		winO6 ||
		winO7 ||
		winO8
	) {
        messageBoard.innerText = 'Winner is o!'
        return true
	}
}

const playSpot = (event) => {
	// target a single know what that spot is `id`
	
	const playedSpot = event.target.getAttribute('id')
	const currentPlayer = isPlayerOne ? 'x' : 'o'
    if (isGameOver) return
	if (!currentPlayedBoard[playedSpot]) {
        messageBoard.innerText = ''
		isPlayerOne = !isPlayerOne
		event.target.innerText = currentPlayer
		currentPlayedBoard[playedSpot] = currentPlayer
		isGameOver = checkWin()
	} else {
		messageBoard.innerText = 'Choose another'
	}

	// place the correct player at that spot
	// change the player
	// record what player played at what square
	// check if there is a winner
}

const makeBoard = () => {

    while(gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild)
    }

	for (let i = 0; i < 9; i++) {
		// create a playable spot `div`
		const playableSpot = document.createElement('div')
		// set an `id` with the `i`
		playableSpot.setAttribute('id', i)
		// adding the css style to the playble spot
		playableSpot.classList.add('playableSpot')
		// push the playable spot into the game board
		gameBoard.appendChild(playableSpot)
		// add the event listener
		playableSpot.addEventListener('click', playSpot)
	}
}

const resetGame = () => {
    isPlayerOne = true
	currentPlayedBoard = ['', '', '', '', '', '', '', '', '']
	isGameOver = false
	moveCount = 0
    messageBoard.innerText = ''
    makeBoard()
}

// wait till the content of the html page is loaded
document.addEventListener('DOMContentLoaded', makeBoard)

resetBtn.addEventListener('click', resetGame)