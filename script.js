// Requisito 02 e 03
function createColorPalette() {
  const parentElement = document.querySelector('#color-palette')

  for(index = 0; index < 4; index += 1) {
    if (index === 0) {
      const square = document.createElement('div');
      square.className = 'color';
      square.style.backgroundColor = 'black';
      parentElement.appendChild(square)
    } else if (index === 1) {
      const square = document.createElement('div');
      square.className = 'color';
      square.style.backgroundColor = 'green';
      parentElement.appendChild(square)
    } else if (index === 2) {
      const square = document.createElement('div');
      square.className = 'color';
      square.style.backgroundColor = 'red';
      parentElement.appendChild(square)
    } else {
      const square = document.createElement('div');
      square.className = 'color';
      square.style.backgroundColor = 'yellow';
      parentElement.appendChild(square)
    }
  }
}
createColorPalette()
// Requisito 04
function createGrid(number) {
  const parentElement = document.querySelector('#pixel-board')
  for(let index = 0; index < number; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel'
    parentElement.appendChild(pixel)
  }
}
createGrid("25")