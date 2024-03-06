// Default Grid 16x16
const grid = document.querySelector('#grid');

function resizeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.classList.toggle('row');
        for (let j = 0; j < width; j++) {
            let square = document.createElement('div');
            square.classList.toggle('square');

            square.addEventListener('mouseover', () => {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                let color = `rgb(${red}, ${green}, ${blue})`;
    
                square.style.backgroundColor = color;
            })

            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

resizeGrid(16,16)

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