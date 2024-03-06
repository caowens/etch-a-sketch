// Default Grid 16x16
const grid = document.querySelector('#grid');

for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.toggle('row');
    for (let j = 0; j < 16; j++) {
        let square = document.createElement('div');
        square.classList.toggle('square');
        row.appendChild(square);
    }
    grid.appendChild(row);
}

function resizeGrid(height, width) {
    console.log(typeof(height));
    console.log(typeof(width));
    for (let i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.classList.toggle('row');
        for (let j = 0; j < width; j++) {
            let square = document.createElement('div');
            square.classList.toggle('square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

resizeBtn = document.querySelector('#resize-btn');

resizeBtn.addEventListener('click', () => {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    let height = document.querySelector("#height").value;
    let width = document.querySelector("#width").value;

    if (height && width) {
        resizeGrid(height, width);
    } 
});