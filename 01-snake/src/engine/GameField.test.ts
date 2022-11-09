//import { Snake } from "./Snake";
//import { Game } from "../Game";
import { GameField } from "./GameField";
import { Cell } from "./Cell";

describe("Game Field", () => {

  it("SHOULD BE TRUE", () => {
    expect(1).toEqual(1);
  });

  it("should have five apples present", () => {
    const field = new GameField();

    const apples = field.getApples();

    expect(apples.length).toBe(5);
  });
  
  it("should have five apples present", () => {
    const field = new GameField();

    const apples = field.getApples();

    expect(apples.length).toBe(5);
  });

  it("isAppleInside should be true if cell (snake.head) matches apples cell "+
  " & apple should be removed", () => {
    const field = new GameField();
 
    //Snake.head = [18, 16];
    let cell = new Cell(18, 16);
    expect(field.isAppleInside(cell)).toEqual(true);

    //Snake.head = [1, 1];
    cell = new Cell(1, 1);
    expect(field.isAppleInside(cell)).toEqual(false);

  });

  it("should be empty if no apples are left", () => {
    const field = new GameField();
    
    field.apples.length = 0;
    field.isEmpty();

    expect(field.isEmpty()).toEqual(true);

  });

  it("should not be empty if there are apples left", () => {
    const field = new GameField();
    
    field.apples.length = 1;
    field.isEmpty();

    expect(field.isEmpty()).toEqual(false);

  });

  it("should seed 5 apples if no apples are left", () => {
    const field = new GameField();
    
    field.apples.length =0;
    
    field.isEmpty();
    expect(field.isEmpty()).toEqual(true);

    field.seed();
    expect(field.getApples().length).toBe(5);

  });
});
