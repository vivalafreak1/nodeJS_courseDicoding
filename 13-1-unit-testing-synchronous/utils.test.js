const { generateRandomStringSync } = require("./utils");

describe("generateRandomStringSync function", () => {
  test("should generate a random string of specified length", () => {
    const length = 10;
    const randomString = generateRandomStringSync(length);
    expect(randomString).toHaveLength(length);
  });

  test("should throw an error if length is not a number", () => {
    expect(() => {
      generateRandomStringSync("not a number");
    }).toThrow("Length must be a number");
  });

  test("should throw an error if length is less than 1", () => {
    expect(() => {
      generateRandomStringSync(0);
    }).toThrow("Length must be at least 1");
  });
});
