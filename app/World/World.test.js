import World from "./World";

describe("Given a function named World", () => {
  describe("When it receives 2, 2", () => {
    test("Then it should return 3", () => {
      const rowNumber = 2;
      const colNumber = 2;
      const newWorld = new World();
      const newBoard = newWorld.createBoard(rowNumber, colNumber);

      const expectedResult = 3;

      const result = newBoard.length;
      expect(expectedResult).toBe(result);
    });
  });
});
