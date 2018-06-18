class Matrix {
  constructor(width, height, gridWidth) {
    this.gridWidth = gridWidth;
    this.cells = [];
    for (var i = 0; i < height; i += this.gridWidth) {
      let row = [];
      for (var j = 0; j < width; j += this.gridWidth) {
        row.push(new Cell(i, j, i + gridWidth, j + gridWidth));
      }
      this.cells.push(row);
    }
  }

  draw() {
    Matrix.each(this.cells, cell => cell.draw());
  }

  conway() {
    let copy = Matrix.copy(this.cells);
    Matrix.each(this.cells, (cell, i, j) => {
      let neighbors = 0;
      for (let y = Math.max(0, i - 1); y < Math.min(i + 2, this.cells.length); y++) {
        for (let x = Math.max(0, j - 1); x < Math.min(j + 2, this.cells.length); x++) {
          if (!(y === i && x === j) && this.cells[y][x].alive) {
            neighbors++;
          }
        }
      }
      if (neighbors < 2) {
        copy[i][j].kill();
      } else if (neighbors === 3) {
        copy[i][j].resurrect();
      } else if (neighbors > 3) {
        copy[i][j].kill();
      }
    });
    this.cells = copy;
    this.draw();
  }

  static copy(mtx) {
    let newMtx = [];
    for (let i = 0; i < mtx.length; i++) {
      let row = [];
      for (let j = 0; j < mtx[0].length; j++) {
        row.push(mtx[i][j].copy());
      }
      newMtx.push(row);
    }
    return newMtx;
  }

  static each(mtx, fn) {
    for (var i = 0; i < mtx.length; i++) {
      for (var j = 0; j < mtx[0].length; j++) {
        fn(mtx[i][j], i, j);
      }
    }
  }
}