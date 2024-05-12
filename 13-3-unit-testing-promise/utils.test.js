const { generateRandomStringProm } = require("./utils");

describe("generateRandomStringProm function", () => {
  test("should generate a random string of specified length", () => {
    return generateRandomStringProm(10).then((randomString) => {
      expect(randomString).toHaveLength(10);
    });
  });

  test("should throw an error if length is not a number", () => {
    return expect(generateRandomStringProm("not a number")).rejects.toThrow(
      "Length must be a number"
    );
  });

  test("should throw an error if length is less than 1", () => {
    return expect(generateRandomStringProm(0)).rejects.toThrow(
      "Length must be greater than 0"
    );
  });
});
