// const container = document.getElementById('container');
const containers = [];
const divList = [];
function numOfSquares(){
    let squareNum = prompt('How big?', '100 MAX')
for (i=0; i < squareNum ; i++){ 
    const body = document.querySelector('body');
    containers[i] = document.createElement('div');
    containers[i].setAttribute('class', 'container')
    for (y=0; y < squareNum ; y++){
        divList[y] = document.createElement('div');
        divList[y].setAttribute('class', 'square');
        containers[i].append(divList[y])
    }
    body.append(containers[i])
};
};
// for (i=0; i < 16 ; i++){ // Hover function to add and remove background
//     const collection = document.getElementsByClassName("square");
//     collection[i].addEventListener("mouseover", hoverOn);
//     collection[i].addEventListener("mouseout", hoverOut);
// }

function hoverOn(){
    this.style.backgroundColor = "black";
};
function hoverOut(){
    this.style.backgroundColor = "white";
};

// Make a button that sets the number of squares needed.

const btn = document.querySelector('button');
btn.addEventListener('click', numOfSquares);


