const isProperFraction = require("./2-is-proper-fraction");

describe("isProperFraction", () => {
  test("should return true for proper fraction 2/3", () => {
    expect(isProperFraction(2, 3)).toBe(true);
  });

  test("should return false for improper fraction 5/2", () => {
    expect(isProperFraction(5, 2)).toBe(false);
  });

  test("should return true for negative numerator -4/7", () => {
    expect(isProperFraction(-4, 7)).toBe(true);
  });

  test("should return false when numerator equals denominator 3/3", () => {
    expect(isProperFraction(3, 3)).toBe(false);
  });

  // Stretch cases
  test("should return true when numerator is zero 0/5", () => {
    expect(isProperFraction(0, 5)).toBe(true);
  });

  test("should return true when denominator is negative 3/-5", () => {
    expect(isProperFraction(3, -5)).toBe(true);
  });

  test("should return false for reciprocal improper fraction 7/3", () => {
    expect(isProperFraction(7, 3)).toBe(false);
  });
});
