const { generateRandomString } = require("./utils");

describe("generateRandomString function", () => {
  test("should generate a random string of specified length", (done) => {
    generateRandomString(10, (error, randomString) => {
      expect(error).toBeNull();
      expect(randomString).toHaveLength(10);
      done();
    });
  });

  test("should throw an error if length is not a number", (done) => {
    generateRandomString("not a number", (error, randomString) => {
      expect(error).toBeInstanceOf(Error);
      done();
    });
  });

  test("should throw an error if length is less than 1", (done) => {
    generateRandomString(0, (error, randomString) => {
      expect(error).toBeInstanceOf(Error);
      done();
    });
  });
});
