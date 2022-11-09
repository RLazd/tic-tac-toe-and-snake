export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
  turn: XO = 'X' 

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
      //rows
      if(this.getCells()[0] === this.getCells()[1] && this.getCells()[1] === this.getCells()[2] ) {
        return this.getCells()[0];
      }
      if(this.getCells()[3] === this.getCells()[4] && this.getCells()[4] === this.getCells()[5] ) {
        return this.getCells()[3];
      }
      if(this.getCells()[6] === this.getCells()[7] && this.getCells()[7] === this.getCells()[8] ) {
        return this.getCells()[6];
      }

      //columns
      if(this.getCells()[0] === this.getCells()[3] && this.getCells()[3] === this.getCells()[6] ) {
        return this.getCells()[0];
      }
      if(this.getCells()[2] === this.getCells()[5] && this.getCells()[5] === this.getCells()[8] ) {
        return this.getCells()[2];
      }
      if(this.getCells()[1] === this.getCells()[4] && this.getCells()[4] === this.getCells()[7]) {
        return this.getCells()[1];
      }

      //diagonals
      if(this.getCells()[0] === this.getCells()[4] && this.getCells()[4] === this.getCells()[8]) {
        return this.getCells()[0];
      }
      if(this.getCells()[2] === this.getCells()[4] && this.getCells()[4] === this.getCells()[6] ) {
        return this.getCells()[2];
      }
    return '-'
  }

  isTie(): boolean {
    if (!this.getCells().includes('-') && this.getWinner() === '-') {
      return true
    }
    return false
  }

  onClick(i: number): void {
    if (this.cells[i] === '-' && this.getWinner() === '-') {    
      this.cells[i] = this.turn;
      this.turn = this.turn === 'X' ? 'O' : 'X'
    }

  }

  restart(): void {
    if (this.getWinner() !== '-' || this.isTie() == true) {
      console.log("restart called");
      this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
      this.turn = 'X' 
      }
  }
}
