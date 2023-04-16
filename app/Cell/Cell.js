class Cell {
  positionX;
  positionY;
  isAlive;

  constructor(positionX, positionY, isAlive) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.isAlive = isAlive;
  }

  die() {
    this.isAlive = false;
  }
}

export default Cell;
