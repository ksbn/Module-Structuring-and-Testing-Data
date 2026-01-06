/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");

test("valid password passes all checks", () => {
  const history = [];
  expect(isValidPassword("Abc1!", history)).toBe(true);
});

test("password shorter than 5 characters is invalid", () => {
  const history = [];
  expect(isValidPassword("A1!a", history)).toBe(false);
});

test("password without uppercase letter is invalid", () => {
  const history = [];
  expect(isValidPassword("abc1!", history)).toBe(false);
});

test("password without lowercase letter is invalid", () => {
  const history = [];
  expect(isValidPassword("ABC1!", history)).toBe(false);
});

test("password without number is invalid", () => {
  const history = [];
  expect(isValidPassword("Abcde!", history)).toBe(false);
});

test("password without special character is invalid", () => {
  const history = [];
  expect(isValidPassword("Abcde1", history)).toBe(false);
});

test("password cannot be reused", () => {
  const history = [];
  expect(isValidPassword("Abc1!", history)).toBe(true);
  expect(isValidPassword("Abc1!", history)).toBe(false);
});
