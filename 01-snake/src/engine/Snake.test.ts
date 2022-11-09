import { Snake } from "./Snake";
import { Cell } from "./Cell";

describe("Snake", () => {
  it("should take three cells at the beginning", () => {
    const snake = new Snake();

    expect(snake.getHead()).toEqual(new Cell(2, 0));
    expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)]);
  });

  it("should move right", () => {
    const snake = new Snake();

    snake.move()
   
    expect(snake.getDirection()).toEqual('Right');
    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1,0), new Cell(2, 0)]);
  });

  it("should move down", () => {
    const snake = new Snake();

    snake.setDirection('Down');
    snake.move()

    expect(snake.getDirection()).toEqual('Down');
    expect(snake.getHead()).toEqual(new Cell(2, 1));
    expect(snake.getTail()).toEqual([new Cell(1,0), new Cell(2, 0)]);
  });

  it("should move up", () => {
    const snake = new Snake();

    snake.setDirection('Up');
    snake.move()

    expect(snake.getDirection()).toEqual('Up');
    expect(snake.getHead()).toEqual(new Cell(2, -1));
    expect(snake.getTail()).toEqual([new Cell(1,0), new Cell(2, 0)]);
  });

  it("should move left", () => {
    const snake = new Snake();

    snake.setDirection('Down');
    snake.move()
    snake.setDirection('Left');
    snake.move()

    expect(snake.getDirection()).toEqual('Left');
    expect(snake.getHead()).toEqual(new Cell(1, 1));
    expect(snake.getTail()).toEqual([new Cell(2,0), new Cell(2, 1)]);
  });

  it("should not be able to move in opposite directions", () => {
    const snake = new Snake();

    snake.setDirection('Left');

    expect(snake.getDirection()).toEqual('Right');
   
  });

  it("should ignore invalid directions if set during single tick ", () => {
    const snake = new Snake();
    //initial direction - right
    snake.setDirection('Left');
    snake.setDirection('Down');

    expect(snake.getDirection()).toEqual('Down');

    snake.move();

    snake.setDirection('Left');
    snake.setDirection('Up');

    expect(snake.getDirection()).toEqual('Down');
    
    snake.move();

    expect(snake.getDirection()).toEqual('Down');
   
  });

  it(" should grow 1 cell if eaten apple", () => {
    const snake = new Snake();

    expect(snake.getHead()).toEqual(new Cell(2, 0));
    expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)]);

    snake.move();
    
    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);

    snake.grow(); 

    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0), new Cell(2, 0)]);

    snake.move();

    expect(snake.getHead()).toEqual(new Cell(4, 0));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 0), new Cell(3, 0)]);
    
    snake.move();
    expect(snake.getHead()).toEqual(new Cell(5, 0));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(3, 0), new Cell(4, 0)]);
  
  });

  it("should return 'IsTakenBySnake: True' if snake head is inside itself", () => {
    const snake = new Snake();

    snake.move();
    snake.grow();
    
    expect(snake.getDirection()).toEqual('Right');
    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1,0), new Cell(2, 0), new Cell(2, 0)]);
    expect(snake.isTakenBySnake(new Cell(3,0))).toEqual(false);
    
    snake.move();
    snake.grow();
    
    expect(snake.getDirection()).toEqual('Right');
    expect(snake.getHead()).toEqual(new Cell(4, 0));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 0), new Cell(3, 0), new Cell(3, 0)]);
    expect(snake.isTakenBySnake(new Cell(4,0))).toEqual(false);

    snake.setDirection('Down');
    snake.move();

    expect(snake.getDirection()).toEqual('Down');
    expect(snake.getHead()).toEqual(new Cell(4, 1));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(3, 0), new Cell(3, 0), new Cell(4, 0)]);
    expect(snake.isTakenBySnake(new Cell(4,1))).toEqual(false);


    snake.setDirection('Left');
    snake.move();

    expect(snake.getDirection()).toEqual('Left');
    expect(snake.getHead()).toEqual(new Cell(3, 1));
    expect(snake.getTail()).toEqual([new Cell(3, 0), new Cell(3, 0), new Cell(4, 0), new Cell(4, 1)]);
    expect(snake.isTakenBySnake(new Cell(3,1))).toEqual(false);

    snake.setDirection('Up');
    snake.move();
    
    expect(snake.getDirection()).toEqual('Up');
    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(3,0), new Cell(4,0), new Cell(4,1), new Cell(3, 1)]);
    expect(snake.isTakenBySnake(new Cell(3,0))).toEqual(true);
  });

});
