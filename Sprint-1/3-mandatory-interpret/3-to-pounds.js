const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
//Create a variable called penceString.
//Store the initial value “399p” — the price in pence with the letter p at the end.
//Purpose: initial data for further processing.

//2. Remove the last character p
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//We use substring(start, end) to take part of the string.

//start = 0 → from the beginning of the string
//end = penceString.length - 1 → to the last character

//Result: “399” (only numbers, without p)
//Goal: to leave only the numerical value so that the numbers can be manipulated later.

//3. Create a string with a minimum length of 3 characters with leading zeros.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//padStart(3, “0”) → if the string length is less than 3, adds leading zeros

//In our case, “399” is already 3 characters long → the string remains “399”

//If it were “99” → it would become “099”
//Goal: to ensure that there are always at least 3 digits for safe allocation of pounds and pence

//4. We obtain the number of pounds
  const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

//Take all characters except the last two → this is the number of pounds.
//“399” → length 3 → 3 characters minus 2 → leave “3”.
//Result: “3”
//Goal: separate pounds from pence.

//5. We get the number of pence
  const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
//substring(paddedPenceNumberString.length - 2) → take the last two characters of the string

//“399” → the last two characters “99”
//.padEnd(2, “0”) → if there are fewer than two characters, add a zero character at the end (e.g. ‘5’ → “50”)
//Result: “99”
//Goal: correctly obtain pence, always as a two-digit number

//6. We form the final line and display it.
   console.log(`£${pounds}.${pence}`);
//We use a template string to combine pounds and pence.
//We substitute the variables pounds and pence.
//The output: £3.99
//Goal: to display the price nicely in the familiar pounds and pence format.

