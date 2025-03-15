class Board {
  // ctx (context) is the object that provides methods and properties for drawing on the canvas.
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = this.getEmptyBoard();
  }
  getEmptyBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }
}
