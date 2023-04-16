import Cell from "./Cell";

describe("Given a constructor class named Cell", () => {
  describe("When it receives a firtsNumber 1 , a secondNumber 1 and a true", () => {
    test("Then it should return a new Object Cell", () => {
      const firtsNumber = 1;
      const secondNumber = 1;
      const expectedNewCell = {
        positionX: firtsNumber,
        positionY: secondNumber,
        isAlive: true,
      };
      const result = new Cell(1, 1, true);

      expect(expectedNewCell).toEqual(result);
    });
  });
});
