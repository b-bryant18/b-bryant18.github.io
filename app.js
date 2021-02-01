const boxes = Array.from(document.getElementsByClassName('box'));
//Creates an array from array like objects
const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartButton');

const spaces = [];
const O_TEXT = "O";
const X_TEXT = "X";
//First player will use Os
let currentPlayer;

//Styling for gameboard rows
const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        //top row: 0, 1, 2
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--blue);`;
        }
        //left column: 0, 3, 6
        if (index % 3 === 0) {
            styleString += `border-right: 3px solid var(--blue);`;
        }
        //right column: 2, 5, 8
        if (index % 3 === 2) {
            styleString += `border-left: 3px solid var(--blue);`;
        }
        //bottom row: 6, 7, 8
        if (index > 5) {
            styleString += `border-top: 3px solid var(--blue);`;
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked)
    });
};

//Mark boxes according to players
const boxClicked = (e) => {
    //gets box's ID when clicked
    const id = e.target.id;
    //if box is not currently taken set it to current player
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        //sets box's text to X or O based on currentPlayer
        e.target.innerText = currentPlayer;

        if (playerHasWon()) {
            playText.innerText = `${currentPlayer} Has Won!`
            return;
        }

        //Changes players from Os to Xs
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
};

const playerHasWon = () => {
    //Checks top, left, and diagnol referencing box 0
    //Checks top for 3 in a row
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} Wins Up Top`)
            return true;
        }
        //Checks left for 3 in a row
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} Wins On The Left`)
            return true;
        }
        //Checks diagnol for 3 in a row
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} Wins Diagonally`)
            return true;
        }
    }
    //Checks bottom and right referencing box 8
    if (spaces[8] === currentPlayer) {
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} Wins On The Right`)
            return true;
        }
        //Checks left for 3 in a row
        if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} Wins On The Left`)
            return true;
        }
        //Diagnol check already written above
    }
    //Checks middle row vertically
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} Wins Vertically In The Middle`)
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} Wins Horizontally In The Midde`)
            return true;
        }
    }
};

const restart = () => {
    spaces.forEach((space, index) => {
        //Removes player IDs from spaces
        spaces[index] = null;
    })
    //Removes Xs & Os from board
    boxes.forEach((box) => {
        box.innerText = "";
    })
    //Resets winner text
    playText.innerText = `Let's Play!`;
    //Reset starting player
    currentPlayer = O_TEXT;
}

//Event listener for restart function
restartBtn.addEventListener('click', restart);

restart();

drawBoard();