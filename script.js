function createGrid(number) {
  const parentElement = document.querySelector('#pixel-board')
  for(let index = 0; index < number; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    parentElement.appendChild(pixel);
  }
}
createGrid("25")
// Requisito 06
function activeColor() {
  const black = document.getElementById('black')
  const green = document.getElementById('green')
  const purple = document.getElementById('purple')
  const orange = document.getElementById('orange')

  black.classList.add('selected')
  console.log(black.classList)





}
activeColor()