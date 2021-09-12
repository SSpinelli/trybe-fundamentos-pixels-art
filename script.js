// Cria o grid;
function createGrid(number) {
  const parentElement = document.querySelector('#pixel-board')
  for (let index = 0; index < number; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    parentElement.appendChild(pixel);
  }
}
createGrid("25")
// Coloca o addEventListener nas 4 cores da paleta;
const colors = document.getElementsByClassName('color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', activeColor) 
}
// Coloca a clace de ativado para a div que foi selecionada pelo usuário;
function activeColor(click) {
  const black = document.getElementById('black');
  const color1 = document.getElementById('color1');
  const color2 = document.getElementById('color2');
  const color3 = document.getElementById('color3');

  if (click.target === color2) {
    black.classList.remove('selected')
    color1.classList.remove('selected')
    color2.classList.add('selected')
    color3.classList.remove('selected')
    console.log('roxo selecionado')
  } if (click.target === color1) {
    black.classList.remove('selected')
    color1.classList.add('selected')
    color2.classList.remove('selected')
    color3.classList.remove('selected')
    console.log('verde selecionado')
  } if (click.target === color3) {
    black.classList.remove('selected')
    color1.classList.remove('selected')
    color2.classList.remove('selected')
    color3.classList.add('selected')
    console.log('laranja selecionado')
  } if (click.target === black) {
    black.classList.add('selected')
    color1.classList.remove('selected')
    color2.classList.remove('selected')
    color3.classList.remove('selected')
    console.log('preto selecionado')
  }
}
// Pinta um quadro do grid com a cor selecionada;
function theBobRossShow(click) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  const style = window.getComputedStyle(selectedColor);
  click.target.style.backgroundColor = style.getPropertyValue('background-color')
}
// Coloca o addEventListener em cada uma das 25 div's
const pixel = document.getElementsByClassName('pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', theBobRossShow)
}
// Faz com que ao clicar no botão o quadro fique limpo;
function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white'
  }
}
const button = document.querySelector('#clear-board');
button.addEventListener('click', clearBoard)
// fazer com que as cores da paleta sejam geradas automáticamente
function randomColor() {
  const color1 = document.getElementById('color1');
  const color2 = document.getElementById('color2');
  const color3 = document.getElementById('color3');
  color1.style.background = '#' + (Math.random().toString(16) + "000000").substring(2,8);
  color2.style.background = '#' + (Math.random().toString(16) + "000000").substring(2,8);
  color3.style.background = '#' + (Math.random().toString(16) + "000000").substring(2,8);
}
randomColor()