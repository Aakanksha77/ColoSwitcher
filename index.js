
let savedColorsCount = 0;

function changeColor(color) {
    document.body.style.background = color;
    document.getElementById('colorCode').innerText = 'Current Color: ' + color;
}

function randomColor() {
    let colors = ['Red', 'Blue', 'Green', 'Purple', 'Pink', 'Orange'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    changeColor(randomColor);
}

function saveColor() {
    let color = document.body.style.background;
    let savedColors = document.getElementById('savedColors');
    let colorBox = document.createElement('div');
    colorBox.classList.add('saved-color');
    colorBox.style.background = color;
    colorBox.onclick = function () { changeColor(color); };
    savedColors.appendChild(colorBox);
    savedColorsCount++;
    document.getElementById('favCount').innerText = savedColorsCount;
}

function toggleTheme() {
    let body = document.body;
    if (body.style.background === 'black') {
        body.style.background = 'linear-gradient(45deg, #ff9a9e, #fad0c4)';
        body.style.color = 'white';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
    }
}
