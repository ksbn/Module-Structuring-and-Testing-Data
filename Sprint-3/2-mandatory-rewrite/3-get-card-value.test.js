const getCardValue = require("./3-get-card-value");

test("returns 11 for Ace (A♠)", () => {
  expect(getCardValue("A♠")).toBe(11);
});

test("returns 5 for number card (5♥)", () => {
  expect(getCardValue("5♥")).toBe(5);
});

test("returns 10 for face card J♦", () => {
  expect(getCardValue("J♦")).toBe(10);
});

test("returns 10 for face card Q♣", () => {
  expect(getCardValue("Q♣")).toBe(10);
});

test("returns 10 for face card K♠", () => {
  expect(getCardValue("K♠")).toBe(10);
});

test("returns 10 for 10 (10♥)", () => {
  expect(getCardValue("10♥")).toBe(10);
});

test("throws an error for an invalid card rank", () => {
  expect(() => getCardValue("Z♠")).toThrow("Invalid card rank.");
});
