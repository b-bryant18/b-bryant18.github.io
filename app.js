const boxes = Array.from(document.getElementsByClassName('box'));
//Creates an array from array like objects

const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "O";
const X_TEXT = "X";
//First player will use Os
let currentPlayer = O_TEXT;

//Styling for gameboard rows
const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        //top row: 0, 1, 2
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        //left column: 0, 3, 6
        if (index % 3 === 0) {
            styleString += `border-right: 3px solid var(--purple);`;
        }
        //right column: 2, 5, 8
        if (index % 3 === 2) {
            styleString += `border-left: 3px solid var(--purple);`;
        }
        //bottom row: 6, 7, 8
        if (index > 5) {
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked)
    });
};

//Mark boxes according to player
const boxClicked = (e) => {
    //gets box's ID when clicked
    const id = e.target.id;
    console.log(id);
    //if box is not currently taken set it to current player
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        //sets box's text to X or O based on currentPlayer
        e.target.innerText = currentPlayer;
        //Changes players from Os to Xs
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
};

drawBoard();