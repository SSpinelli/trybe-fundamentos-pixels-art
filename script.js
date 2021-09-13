// Pinta um quadro do grid com a cor selecionada;
function theBobRossShow(click) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  const style = window.getComputedStyle(selectedColor);
  click.target.style.backgroundColor = style.getPropertyValue('background-color');
}
// grid inicial de 5 por 5
function initialGrid(number) {
  const parentElement = document.querySelector('#pixel-board');

  for (let index = 0; index < number; index += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    parentElement.appendChild(row);
    for (let index2 = 0; index2 < number; index2 += 1) {
      const squares = document.createElement('div');
      squares.className = 'pixel';
      row.appendChild(squares);
      squares.addEventListener('click', theBobRossShow);
    }
  }
}
initialGrid('8');
// gerar o grid de acordo com o input do usuário;
function modularGrid() {
  let valor = document.getElementById('board-size').value;
  if (valor >= 50) {
    valor = 50;
  } else if (valor <= 5) {
    valor = 5;
  }
  const parentElement = document.querySelector('#pixel-board');
  const remove = document.querySelectorAll('.pixel');
  // Thiago Ximenes - turma 16 - Tribo A, me ajudou com essa parte que remove o grid anterior.
  remove.forEach((element) => {
    element.remove();
  });
  for (let index = 0; index < valor; index += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    parentElement.appendChild(row);
    for (let index2 = 0; index2 < valor; index2 += 1) {
      const squares = document.createElement('div');
      squares.className = 'pixel';
      row.appendChild(squares);
      squares.addEventListener('click', theBobRossShow);
    }
  }
}
document.getElementById('generate-board').addEventListener('click', modularGrid);
// Coloca a classe de ativado para a div que foi selecionada pelo usuário;
function activeColor(click) {
  const black = document.getElementById('black');
  const color1 = document.getElementById('color1');
  const color2 = document.getElementById('color2');
  const color3 = document.getElementById('color3');

  if (click.target === color2) {
    black.classList.remove('selected');
    color1.classList.remove('selected');
    color2.classList.add('selected');
    color3.classList.remove('selected');
  } if (click.target === color1) {
    black.classList.remove('selected');
    color1.classList.add('selected');
    color2.classList.remove('selected');
    color3.classList.remove('selected');
  } if (click.target === color3) {
    black.classList.remove('selected');
    color1.classList.remove('selected');
    color2.classList.remove('selected');
    color3.classList.add('selected');
  } if (click.target === black) {
    black.classList.add('selected');
    color1.classList.remove('selected');
    color2.classList.remove('selected');
    color3.classList.remove('selected');
  }
}

// Coloca o addEventListener nas 4 cores da paleta;
const colors = document.getElementsByClassName('color');
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', activeColor);
}

// Faz com que ao clicar no botão o quadro fique limpo;
const pixel = document.getElementsByClassName('pixel');
function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
const button = document.querySelector('#clear-board');
button.addEventListener('click', clearBoard);
// fazer com que as cores da paleta sejam geradas automaticamente
function randomColor() {
  const color1 = document.getElementById('color1');
  const color2 = document.getElementById('color2');
  const color3 = document.getElementById('color3');
  // perdi o local onde encontrei esse código, mas não desenvolvi, procurei no google uma função que gerava cor automáticamente.
  color1.style.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
  color2.style.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
  color3.style.background = '#' + (Math.random().toString(16) + '000000').substring(2, 8);

}
randomColor();
// alerta quando o input estiver sem numero;
function attention() {
  const input = document.getElementById('board-size');

  if (input.value === '') {
    window.alert('Board inválido!');
  }
}
document.getElementById('generate-board').addEventListener('click', attention);

function easterEgg () {
  const bob = document.getElementById('bob');
  const phrase = document.createElement('h1');
  phrase.id = 'easterEgg';

  phrase.innerText = `We don't make mistakes, just happy little accidents.`;
  bob.appendChild(phrase);
}
document.querySelector('#bob-photo').addEventListener('click', easterEgg);
