const grid = document.querySelector('#grid');

for (let i = 0; i < 6; i++) {
    let row = document.createElement('div');
    row.classList.toggle('row');
    for (let j = 0; j < 6; j++) {
        let square = document.createElement('div');
        square.classList.toggle('square');
        row.appendChild(square);
    }
    grid.appendChild(row);
}
