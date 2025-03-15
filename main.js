const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
// ctx.fillRect(x, y, width, height);

// const { width, height } = this.ctx.canvas;
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 10, 10);
// ctx.clearRect(0, 0, width, height);
ctx.fillRect(1, 1, 10, 10);

// Calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board(ctx);

function play() {
  board = new Board(ctx);
  console.table(board.grid);
}
