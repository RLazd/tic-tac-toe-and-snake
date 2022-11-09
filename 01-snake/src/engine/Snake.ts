import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0)
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)]
  direction: Direction = "Right"
  tempDirections: Direction[] = ['Right']

  setDirection(newDirection: Direction, isTemp: boolean = true) {
    isTemp
    ? this.tempDirections.push(newDirection) 
    : this.direction = newDirection
  }
    
  isNewDirectionValid(dir: Direction): boolean {
    if (dir === this.direction) return false;
    if (this.direction === 'Right' && dir === 'Left') return false;
    if (this.direction === 'Left' && dir === 'Right') return false;
    if (this.direction === 'Up' && dir === 'Down') return false;
    if (this.direction === 'Down' && dir === 'Up') return false;
    return true ;
  }

  move() {
    const direction = this.getDirection();
    this.tempDirections = [direction];
    const oldHeadPosition = new Cell(this.head.x, this.head.y);
    
    if (direction === 'Right') {
      this.head = new Cell(this.head.x+1, this.head.y);
    } else if  (direction === 'Down'){
      this.head = new Cell (this.head.x, this.head.y+1);
    } else if (direction === 'Up') {
      this.head = new Cell (this.head.x, this.head.y-1);
    } else if (direction === 'Left') {
      this.head = new Cell (this.head.x - 1, this.head.y);
    }
    this.tail.shift();
    this.tail.push(oldHeadPosition);

  }

  grow() { 
    this.tail.push(new Cell(this.tail[this.tail.length-1].x,
       this.tail[this.tail.length-1].y)); 
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    const lastTemp = this.tempDirections[this.tempDirections.length-1];
    if (this.isNewDirectionValid(lastTemp)) {
      this.setDirection(lastTemp, false)
    }
    return this.direction 
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean { 
    for (let i =0; i < this.tail.length; i++) {
      if (this.tail[i].x == cell.x && this.tail[i].y == cell.y) {
        return true;
      }
    }
    return false;
  }
}
