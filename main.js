//## svolgimento

//- recuperare gli elementi html precedentemente creati (il contenitore della griglia e il pulsate di generazione della griglia)

const gameBoardElement = document.getElementById("gameboard");
const playButonElement = document.getElementById("play-button");
const levelSelectorElement = document.getElementById("level-selector");
const easyLevelElement = document.getElementById("easy");
const mediumLevelElement = document.getElementById("medium");
const hardLevelElement = document.getElementById("hard");

generateGrid(gameBoardElement);

//- generare con una funzione la griglia

function generateGrid(container) {
  container.innerHTML = "";

  // genero le celle  per 100 volte
  for (let i = 0; i < 100; i++) {
    // collego la funzione genera cella-
    const cellElement = generateCell(i);
    container.append(cellElement);
  }
}

// * generazione 16 bombe

// funzione generazione numero randomico

let randomBombs = [];

while (randomBombs.length < 16) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  if (!randomBombs.includes(randomNumber)) {
    randomBombs.push(randomNumber);
  }
}

console.log(randomBombs);

levelSelectorElement.addEventListener("select", function () {
  if (levelSelectorElement == easyLevelElement) {
    for (let i = 0; i < 100; i++) {
      // collego la funzione genera cella-
      const cellElement = generateCell(i);
      container.append(cellElement);
    }
  } else if (levelSelectorElement == mediumLevelElement) {
    for (let i = 0; i < 81; i++) {
      // collego la funzione genera cella-
      const cellElement = generateCell(i);
      container.append(cellElement);
    }
  } else if (levelSelectorElement == hardLevelElement) {
    for (let i = 0; i < 49; i++) {
      // collego la funzione genera cella-
      const cellElement = generateCell(i);
      container.append(cellElement);
    }
  }
});

//- genrare con una funzione le celle dentro la griglia

function generateCell(text) {
  const cell = document.createElement("div");
  cell.classList.add("box");
  cell.addEventListener("click", function () {
    //handCellClick(this);
    cell.innerText = text;

    this.classList.toggle("clicked");
  });

  return cell;
}

// - generare la funzione del click del bottone

playButonElement.addEventListener("click", function () {
  generateGrid(gameBoardElement);
});

//- creare la funzione del click della cella

function handCellClick(element) {
  element.classList.toggle("clicked");
}

//- collegare le celle al loro numero di creazione del ciclo for
