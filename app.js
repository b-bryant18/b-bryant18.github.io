const boxes = Array.from(document.getElementsByClassName('box'));
//Creates an array from array like objects
console.log(boxes);

const spaces = [null, null, null, null, null, null, null, null, null,]
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;
console.log(boxes);

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

const boxClicked = (e) => {
    console.log("Box was clicked")
};

drawBoard();