//## svolgimento

//- recuperare gli elementi html precedentemente creati (il contenitore della griglia e il pulsate di generazione della griglia)

const gameBoardElement = document.getElementById("gameboard");
const playButonElement = document.getElementById("play-button");

generateGrid(gameBoardElement);

//- generare con una funzione la griglia

function generateGrid(container) {
  container.innerHTML = "";

  // genero le celle  per 100 volte
  for (let i = 0; i < 100; i++) {
    // collego la funzione genera cella-
    const cellElement = generateCell();
    container.append(cellElement);
  }
}

//- genrare con una funzione le celle dentro la griglia

function generateCell() {
  const cell = document.createElement("div");
  cell.classList.add("box");
  cell.addEventListener("click", function () {
    handCellClick(this);
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
