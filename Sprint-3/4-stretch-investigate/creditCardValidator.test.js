const validateCreditCard = require("./creditCardValidator");
describe("Credit Card Validator", () => {
  
  test("valid card numbers", () => {
    expect(validateCreditCard("9999777788880000")).toBe(true);
    expect(validateCreditCard("6666666666661666")).toBe(true);
  });

  test("invalid characters", () => {
    expect(validateCreditCard("a92332119c011112")).toBe(false);
    expect(validateCreditCard("1234abcd5678efgh")).toBe(false);
  });

  test("only one type of number", () => {
    expect(validateCreditCard("4444444444444444")).toBe(false);
    expect(validateCreditCard("1111111111111111")).toBe(false);
  });

  test("sum of digits less than or equal to 16", () => {
    expect(validateCreditCard("1111111111111110")).toBe(false);
    expect(validateCreditCard("0000000000000000")).toBe(false);
  });

  test("odd final number", () => {
    expect(validateCreditCard("6666666666666661")).toBe(false);
    expect(validateCreditCard("1234567890123451")).toBe(false);
  });

});
