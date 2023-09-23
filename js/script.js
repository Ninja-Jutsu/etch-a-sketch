const containers = []
const divList = []

const DEFAULT_COLOR = 'black'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 2


let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

const box = document.querySelector('.box')
const clearBtn = document.querySelector('.clear')
const picker = document.getElementById('colorPicker')
const sizeSlider = document.getElementById('sizeSlider')
const restart = document.querySelectorAll('.container')

picker.oninput = (e) => setCurrentColor(e.target.value)
clearBtn.onclick = () =>clearBox()
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')
sizeSlider.onchange = (e) => changeSize(e.target.value)
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)

function numOfSquares(){
        box.innerHTML = '';
        for (i=0; i < currentSize ; i++){ 
            containers[i] = document.createElement('div');
            containers[i].setAttribute('class', 'container')
            for (y=0; y < currentSize ; y++){
                divList[y] = document.createElement('div');
                divList[y].setAttribute('class', 'square');
                divList[y].addEventListener('mousemove', hoverOn);
                containers[i].append(divList[y])
            };
            box.append(containers[i]);
        };
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
    for (i=0; i<restart.length ; i++){
        restart[i].remove()
    }
    numOfSquares()
};

function setCurrentColor(newColor) {
    currentColor = newColor
  }

function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
  }

  function setCurrentSize(newSize) {
    currentSize = newSize
  }

  function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
  }

function activateButton(newMode) {
if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active')
} else if (currentMode === 'color') {
    colorBtn.classList.remove('active')
} else if (currentMode === 'eraser') {
    eraserBtn.classList.remove('active')
};

if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active')
} else if (newMode === 'color') {
    colorBtn.classList.add('active')
} else if (newMode === 'eraser') {
    eraserBtn.classList.add('active')
};
};

function changeSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    numOfSquares()
};

window.onload = () => {
    activateButton(DEFAULT_MODE)
    numOfSquares()
}

// numOfSquares()