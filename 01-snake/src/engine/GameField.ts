import { Snake } from "./Snake";
import { Cell } from "./Cell";

export class GameField {
  apples: Cell[] = [
    new Cell(18, 16),
    new Cell(20, 16),
    new Cell(22, 16),
    new Cell(24, 16),
    new Cell(26, 16)
  ];
  
  
  /**
   * Called when level completed
   */
  seed(): void { 
    this.apples = [
      new Cell(Math.floor(Math.random()*45), Math.floor(Math.random()*25)),
      new Cell(Math.floor(Math.random()*45), Math.floor(Math.random()*25)),
      new Cell(Math.floor(Math.random()*45), Math.floor(Math.random()*25)),
      new Cell(Math.floor(Math.random()*45), Math.floor(Math.random()*25)),
      new Cell(Math.floor(Math.random()*45), Math.floor(Math.random()*25))
    ]
    
  }


  getApples(): Cell[] {
    return this.apples;
  }

  isAppleInside(cell: Cell): boolean { 
    for (let i =0; i < this.apples.length; i++) {
      if (this.apples[i].x == cell.x && this.apples[i].y == cell.y) {     
        return true;
      }
    } 
    return false;
  }
  

  removeApple(cell: Cell): void { 
    console.log(this.apples.length);
    this.apples.splice(this.apples.findIndex(applePosition =>  
      applePosition.x === cell.x && applePosition.y === cell.y), 1); 
  }

  isEmpty(): boolean { 
    console.log(this.apples.length);
    if (this.apples.length === 0) {
      return true;
    };
    return false;
  }
}
