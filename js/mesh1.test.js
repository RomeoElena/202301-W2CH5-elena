import { createMesh } from "../js/mesh.js";

describe("Given the createMesh function", () => {
  describe("When it receives 3", () => {
    test("Then it should return [[false, false, false],[false, false, false],[false, false, false]]", () => {
      const size = 3;

      const sizeMesh = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      const newMesh = createMesh(size);

      expect(newMesh).toStrictEqual(sizeMesh);
    });
  });
});
