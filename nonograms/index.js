function createElementWithClass(elementType, className) {
  const element = document.createElement(elementType);
  element.classList.add(className);
  return element;
}
const blackSound = new Audio("./assets/black.mp3");
const emptySound = new Audio("./assets/white.mp3");
const victorySound = new Audio("./assets/win.mp3");
const click = new Audio("./assets/click.mp3");

function playBlackSound() {
  blackSound.currentTime = 0;
  blackSound.play();
}

function playEmptySound() {
  emptySound.currentTime = 0;
  emptySound.play();
}

function playVictorySound() {
  victorySound.currentTime = 0;
  victorySound.play();
}

function clickSound() {
  click.currentTime = 0;
  click.play();
}

const startBlock = createElementWithClass("div", "startBlock");
document.body.appendChild(startBlock);

const soundToggle = document.createElement("div");
soundToggle.id = "soundToggle";
soundToggle.innerHTML = `
    <label for="soundCheckbox">Sound:</label>
    <input type="checkbox" id="soundCheckbox" checked>
`;
startBlock.appendChild(soundToggle);
const soundCheckbox = document.getElementById("soundCheckbox");
let toggle = true;

const menu = createElementWithClass("ul", "menu");
startBlock.appendChild(menu);

const pickPictureButton = createElementWithClass("li", "pickPictureButton");
pickPictureButton.textContent = "Pick Picture";
menu.appendChild(pickPictureButton);

const blockPicture = createElementWithClass("div", "blockPicture");
document.body.appendChild(blockPicture);

const restartButton = createElementWithClass("li", "restartButton");
restartButton.textContent = "Restart";
menu.appendChild(restartButton);

const pictures = [
  "./assets/tree.jpg",
  "./assets/leo.jpg",
  "./assets/pig.jpg",
  "./assets/duck.jpg",
  "./assets/rose.jpg",
];
pictures.forEach((imageUrl) => {
  const imgElement = document.createElement("img");
  imgElement.classList.add("imgElement");
  imgElement.src = imageUrl;
  imgElement.alt = "Picture";
  blockPicture.appendChild(imgElement);
});

pickPictureButton.addEventListener("click", () => {
  blockPicture.classList.toggle("visible");
  if (toggle) {
    clickSound();
  }
});
const gameGrid = [
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
];
const rowHints = [
  [2, 1],
  [3, 1],
  [1, 3],
  [3, 1],
  [2, 1],
];
const colHints = [[5], [2, 2], [3], [1], [5]];
const gameGridOne = [
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
];
const rowHintsOne = [
  [2, 1],
  [3, 1],
  [1, 3],
  [3, 1],
  [2, 1],
];
const colHintsOne = [[5], [2, 2], [3], [1], [5]];
const gameGridTwo = [
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];
const rowHintsTwo = [[2, 1], [5], [5], [5], [2]];
const colHintsTwo = [[3], [4], [4], [4], [5]];
const gameGridThree = [
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
  [1, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
];
const rowHintsThree = [[1, 3], [5], [2, 2], [5], [1, 1]];
const colHintsThree = [[4], [4], [2, 1], [5], [4]];
const gameGridFour = [
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];
const rowHintsFour = [[2], [5], [1, 3], [5], [4]];
const colHintsFour = [[3], [1, 2], [4], [5], [5]];
const gameGridFive = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];
const rowHintsFive = [[3], [4], [5], [4], [3]];
const colHintsFive = [[5], [5], [5], [3], [1]];

const wrapper = createElementWithClass("div", "wrapper");
document.body.appendChild(wrapper);

function updateGameGrid(index) {
  if (index === 0) {
    gameGrid.splice(0, gameGrid.length, ...gameGridOne);
    rowHints.splice(0, rowHints.length, ...rowHintsOne);
    colHints.splice(0, colHints.length, ...colHintsOne);
  }
  if (index === 1) {
    gameGrid.splice(0, gameGrid.length, ...gameGridTwo);
    rowHints.splice(0, rowHints.length, ...rowHintsTwo);
    colHints.splice(0, colHints.length, ...colHintsTwo);
  }
  if (index === 2) {
    gameGrid.splice(0, gameGrid.length, ...gameGridThree);
    rowHints.splice(0, rowHints.length, ...rowHintsThree);
    colHints.splice(0, colHints.length, ...colHintsThree);
  }
  if (index === 3) {
    gameGrid.splice(0, gameGrid.length, ...gameGridFour);
    rowHints.splice(0, rowHints.length, ...rowHintsFour);
    colHints.splice(0, colHints.length, ...colHintsFour);
  }
  if (index === 4) {
    gameGrid.splice(0, gameGrid.length, ...gameGridFive);
    rowHints.splice(0, rowHints.length, ...rowHintsFive);
    colHints.splice(0, colHints.length, ...colHintsFive);
  }
}

const rows = createElementWithClass("div", "rows"),
  flex = createElementWithClass("div", "flex"),
  colums = createElementWithClass("div", "colums"),
  container = createElementWithClass("div", "container");
wrapper.appendChild(rows);
wrapper.appendChild(flex);
flex.appendChild(colums);
flex.appendChild(container);

function displayGame(rowsGame = rowHints) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  while (colums.firstChild) {
    colums.removeChild(colums.firstChild);
  }
  while (rows.firstChild) {
    rows.removeChild(rows.firstChild);
  }

  for (let i = 0; i < rowsGame.length; i++) {
    const hintRow = document.createElement("div");
    hintRow.classList.add("hintRow");

    for (let j = 0; j < rowsGame[i].length; j++) {
      const hintCell = document.createElement("div");
      hintCell.classList.add("cell");
      hintCell.classList.add("hintCell");
      hintCell.innerText = rowsGame[i][j];
      hintRow.appendChild(hintCell);
    }
    rows.appendChild(hintRow);
  }

  for (let i = 0; i < colHints.length; i++) {
    const hintCol = document.createElement("div");
    hintCol.classList.add("hint");

    for (let j = 0; j < colHints[i].length; j++) {
      const hintCell = document.createElement("div");
      hintCell.classList.add("cell");
      hintCell.classList.add("hintCell");
      hintCell.innerText = colHints[i][j];
      hintCol.appendChild(hintCell);
    }

    colums.appendChild(hintCol);
  }

  for (let i = 0; i < gameGrid.length; i++) {
    for (let j = 0; j < gameGrid[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add("container_cell");
      cell.innerText = gameGrid[i][j];
      container.appendChild(cell);
    }
  }
}
displayGame();

let startTime, durationElement, timerInterval;

durationElement = document.createElement("div");
durationElement.classList.add("duration");
startBlock.appendChild(durationElement);
function startTimer() {
  startTime = Date.now();
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}
function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;

  const elapsedSeconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  durationElement.textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function displayDuration() {
  clearInterval(timerInterval);
  updateTimer();

  const endTime = Date.now();
  const durationInSeconds = Math.floor((endTime - startTime) / 1000);

  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  durationElement.textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function resetTimer() {
  clearInterval(timerInterval);

  if (durationElement) {
    durationElement.textContent = "";
  }

  startTime = null;
}
function checkSolution() {
  const cells = document.querySelectorAll(".container .cell");

  const handleClick = () => {
    let allCellsHaveWinClass = true;

    cells.forEach((cell) => {
      const content = cell.innerText.trim();

      if (content === "1" && !cell.classList.contains("win")) {
        allCellsHaveWinClass = false;
        return;
      }
    });

    if (allCellsHaveWinClass) {
      const endTime = Date.now();
      const durationInSeconds = Math.floor((endTime - startTime) / 1000);
      if (toggle) {
        playVictorySound();
      }
      displayDuration();
      alert(
        `Great! You have solved the nonogram in ${durationInSeconds} seconds!`
      );
      document.removeEventListener("click", handleClick);
    }
  };

  document.addEventListener("click", handleClick);

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const content = cell.innerText.trim();
      if (!startTime) {
        startTimer();
      }
      if (content === "1") {
        cell.classList.toggle("win");
        if (toggle) {
          playBlackSound();
        }
      } else {
        cell.classList.toggle("loss");
        if (toggle) {
          playEmptySound();
        }
      }
    });
  });
}
checkSolution();

const images = document.querySelectorAll(".imgElement");
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    if (toggle) {
      clickSound();
    }
    updateGameGrid(index);
    displayGame();
    checkSolution();
    blockPicture.classList.toggle("visible");
    resetTimer();
  });
});

restartButton.addEventListener("click", () => {
  if (toggle) {
    clickSound();
  }
  resetTimer();
  updateGameGrid();
  displayGame();
  checkSolution();
});

soundCheckbox.addEventListener("change", () => {
  toggle === false ? (toggle = true) : (toggle = false);
  if (toggle) {
    clickSound();
  }
});
