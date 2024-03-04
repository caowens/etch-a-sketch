const cdiv = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  cdiv.appendChild(div);

  div.addEventListener("mouseover", (event) => {
    div.setAttribute('style', 'background-color: blue;');
  })
}
