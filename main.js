let myMatrix;
let value;

function setup() {
  createCanvas(640, 360);
  rectMode(CORNERS);
  myMatrix = new Matrix(width, height, 10);
  myMatrix.draw();
  while (keyIsDown(' ')) {
    myMatrix.conway();
  }
}

function draw() {
  if (keyIsDown(32)) {
    myMatrix.conway();
  }
}

function mouseReleased() {
  Matrix.each(myMatrix.cells, cell => {
    cell.onClick();
  });
  return false;
}

// function keyPressed() {
//   if (key === ' ') {
//     myMatrix.conway();
//   }
//   return false;
// }

