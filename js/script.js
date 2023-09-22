// const container = document.getElementById('container');
const containers = [];
const divList = [];
const body = document.querySelector('body')
const btnContainer = document.createElement('div');
const btnStart = document.createElement('button');
const btnClear = document.createElement('button');
btnStart.innerText = 'Dimensions';
btnClear.innerText = 'Clear';
btnContainer.setAttribute('class', 'btns-css')
btnStart.setAttribute('class','start');
btnClear.setAttribute('class','clear')
body.append(btnContainer);
btnContainer.append(btnStart);
btnContainer.append(btnClear);




function numOfSquares(){
    let squareNum = prompt('How big?', '100 MAX')
for (i=0; i < squareNum ; i++){ 
    const box = document.querySelector('.box');
    containers[i] = document.createElement('div');
    containers[i].setAttribute('class', 'container')
    for (y=0; y < squareNum ; y++){
        divList[y] = document.createElement('div');
        divList[y].setAttribute('class', 'square');
        divList[y].addEventListener('mouseover', hoverOn);
        containers[i].append(divList[y])
    };
    box.append(containers[i]);
    };
};




function hoverOn(){
    this.style.backgroundColor = "black";
};
function clearBox(){
    const restart = document.querySelectorAll('.container');
    for (i=0; i<restart.length ; i++){
        restart[i].remove()
    }
};

// Make a button that sets the number of squares needed.
const btn = document.querySelector('.start');
btn.addEventListener('click', numOfSquares);

// Make a button that resets the entire box.
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearBox);
