const gameOfLife = () => {
  const newBoard = [];
  const rows = 3;
  const columns = 3;
  class Cell {
    positionX;
    postionY;
    alive;
    aliveNeighbours = 0;

    constructor(positionX, positionY) {
      this.alive = false;
      this.positionX = positionX;
      this.postionY = positionY;
    }
  }

  const createBoard = () => {
    for (let x = 0; x < rows; x++) {
      newBoard.push([]);
      for (let y = 0; y < columns; y++) {
        newBoard[x].push(new Cell(x, y));
      }
    }

    return newBoard;
  };

  const firstTurn = () => {
    newBoard[1][0].alive = true;
    newBoard[1][1].alive = true;
    newBoard[1][2].alive = true;
  };

  createBoard();
  firstTurn();
};

gameOfLife();
