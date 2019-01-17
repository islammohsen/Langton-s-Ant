class Ant{

  constructor(r, c){
    this.rows = r;
    this.cols = c;
    this.x = floor(random(r));
    this.y = floor(random(c));
    this.dir = floor(random(4));
    this.dx = [-1, 0, 1, 0];
    this.dy = [0, 1, 0, -1];
  }

  move(){
    this.x = (this.x + this.dx[this.dir] + this.rows) % this.rows;
    this.y = (this.y + this.dy[this.dir] + this.cols) % this.cols;
  }

  rotateRight(){
    this.dir = (this.dir + 1) % 4;
  }

  rotateLeft(){
    this.dir = (this.dir - 1 + 4) % 4;
  }
}
