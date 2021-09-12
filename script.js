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
  const green = document.getElementById('green');
  const purple = document.getElementById('purple');
  const orange = document.getElementById('orange');

  if (click.target === purple) {
    black.classList.remove('selected')
    green.classList.remove('selected')
    purple.classList.add('selected')
    orange.classList.remove('selected')
    console.log('roxo selecionado')
  } if (click.target === green) {
    black.classList.remove('selected')
    green.classList.add('selected')
    purple.classList.remove('selected')
    orange.classList.remove('selected')
    console.log('verde selecionado')
  } if (click.target === orange) {
    black.classList.remove('selected')
    green.classList.remove('selected')
    purple.classList.remove('selected')
    orange.classList.add('selected')
    console.log('laranja selecionado')
  } if (click.target === black) {
    black.classList.add('selected')
    green.classList.remove('selected')
    purple.classList.remove('selected')
    orange.classList.remove('selected')
    console.log('preto selecionado')
  }
}
// Pinta um quadro do grid com a cor selecionada;
function theBobRossShow(click) {
  const selectedColor = document.getElementsByClassName('selected')[0].id
  click.target.style.backgroundColor = selectedColor
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