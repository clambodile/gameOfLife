class Cell {
  constructor(x1, y1, x2, y2, color = 255, alive = false) {
    this.alive = alive;
    this.color = color;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  copy() {
    return new Cell(this.x1, this.y1, this.x2, this.y2, this.color, this.alive);
  }

  updateColor() {
    if (this.alive) {
      this.color = 0;
    } else {
      this.color = 255;
    }
    this.draw();
  }

  underMouse() {
    return mouseX > this.x1 && mouseY > this.y1 && mouseX < this.x2 && mouseY < this.y2;
  }

  onClick() {
    if (this.underMouse()) {
      this.toggle();
    }
  }

  draw() {
    fill(this.color);
    rect(this.x1, this.y1, this.x2, this.y2);
  }

  toggle() {
    this.alive ? this.kill() : this.resurrect();
  }

  kill() {
    this.alive = false;
    this.updateColor();
  }

  resurrect() {
    this.alive = true;
    this.updateColor();
  }
}