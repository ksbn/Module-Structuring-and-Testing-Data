const getAngleType = require("./1-get-angle-type");

describe("getAngleType", () => {
  test("should identify right angle (90°)", () => {
    expect(getAngleType(90)).toBe("Right angle");
  });

  test("should identify acute angle (less than 90°)", () => {
    expect(getAngleType(45)).toBe("Acute angle");
  });

  test("should identify obtuse angle (greater than 90° and less than 180°)", () => {
    expect(getAngleType(120)).toBe("Obtuse angle");
  });

  test("should identify straight angle (180°)", () => {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  test("should identify reflex angle (greater than 180° and less than 360°)", () => {
    expect(getAngleType(270)).toBe("Reflex angle");
  });
});
