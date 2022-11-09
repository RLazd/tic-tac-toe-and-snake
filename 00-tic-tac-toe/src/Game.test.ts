import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("add X/O to clicked cell", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");   
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to click on cell only once ", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(0)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");   
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should win if row is filled by player", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(4)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if column is filled by player", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    game.onClick(3)
    game.onClick(4)
    game.onClick(6)

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "X", "O", "-",
      "X", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win if diagonal is filled by player", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    game.onClick(4)
    game.onClick(3)
    game.onClick(8)

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "O", "X", "-",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should be a tie if game field is filled but no winner", () => {
    const game = new Game();

    game.onClick(1)
    game.onClick(0)
    game.onClick(2)
    game.onClick(4)
    game.onClick(3)
    game.onClick(5)
    game.onClick(6)
    game.onClick(7)
    game.onClick(8)
    
    expect(game.getCells()).toEqual([
      "O", "X", "X",
      "X", "O", "O",
      "X", "O", "X"
    ]);
    
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });


});
