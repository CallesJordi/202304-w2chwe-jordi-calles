import World from "./world";

describe("Given a function called createBoard", () => {
  describe("When it receives a rowNumber 2 and a colNumber 2", () => {
    test("Then it should return a 3", () => {
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
