// const container = document.getElementById('container');
const containers = []
const divList = []
const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'


let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE

const box = document.querySelector('.box')
const setBtn = document.querySelector('.start')
const clearBtn = document.querySelector('.clear')
const colorPicker = document.getElementById('colorPicker')

colorPicker.oninput = (e) => setCurrentColor(e.target.value)
setBtn.onclick = () => numOfSquares()
clearBtn.onclick = () =>clearBox()
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')


function numOfSquares(){
    let squareNum = prompt('Insert a valid number (Max 100)', 100);
    if (squareNum<=100){
        box.innerHTML = '';
        for (i=0; i < squareNum ; i++){ 
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
    } else {
        numOfSquares();
    }
};

function hoverOn(){
    console.log(currentMode)
    if (currentMode !== 'eraser'){
    this.style.backgroundColor = currentColor;}
    else if (currentMode === 'eraser'){
    this.style.backgroundColor = '#efefce';
    }
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`}
};

function clearBox(){
    const restart = document.querySelectorAll('.container');
    for (i=0; i<restart.length ; i++){
        restart[i].remove()
    }
};

function setCurrentColor(newColor) {
    currentColor = newColor
  }

function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
  }

function activateButton(newMode) {
if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active')
} else if (currentMode === 'color') {
    colorBtn.classList.remove('active')
} else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active')
}

if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active')
} else if (newMode === 'color') {
    colorBtn.classList.add('active')
} else if (newMode === 'eraser') {
    eraserBtn.classList.add('active')
}
}

window.onload = () => {
    activateButton(DEFAULT_MODE)
  }
