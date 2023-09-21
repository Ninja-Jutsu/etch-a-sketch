const container = document.getElementById('container');
const divList = [];

for (i=0; i < 256 ; i++){ // create Nodelist of divs
    divList[i] = document.createElement('div');
    divList[i].setAttribute('class', 'square');
    container.append(divList[i])
};

for (i=0; i < 256 ; i++){ // Hover function to add and remove background
    const collection = document.getElementsByClassName("square");
    collection[i].addEventListener("mouseover", hoverOn);
    collection[i].addEventListener("mouseout", hoverOut);
}

function hoverOn(){
    this.style.backgroundColor = "black";
};
function hoverOut(){
    this.style.backgroundColor = "white";
};

// Make a button that sets the number of squares needed.

const btn = document.querySelector('button');
btn.addEventListener('click', numOfSquares);


