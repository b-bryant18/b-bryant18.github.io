const boxes = Array.from(document.getElementsByClassName('box'));
//Creates an array from array like objects
console.log(boxes);

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        //boxes on top
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple)`;
        }
        //boxes on left
        if (index % 3) {
            styleString += `border-right: 3px solid var(--purple)`;

        }
    })
}