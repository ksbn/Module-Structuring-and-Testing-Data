let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// The function is called every time functionName() appears. Here are all the function calls:

//replaceAll() → string:
//carPrice.replaceAll(“,”, “”)

//Number() → string:
//Number(carPrice.replaceAll(“,”, “”))

//replaceAll() (in the erroneous line) → string:
//priceAfterOneYear.replaceAll(“,” “”) 

//Number() (in an erroneous string) → string:
//Number(priceAfterOneYear.replaceAll(“,” “”))

//console.log() → string:
//console.log(...)

//Total number of function calls: 5. Although one line contains two calls, each of them is counted.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//The error is located here: 
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//Error: Incorrect syntax inside replaceAll
//There should be a comma between the arguments inside replaceAll(), not a space.
//Currently there: replaceAll("," "")
//JavaScript thinks we are calling a function with one argument and interprets the second text as a syntax error.
//The correct version is: 
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
//These are the lines:
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
// Variable declarations are lines:
//let carPrice = "10,000";
//let priceAfterOneYear = "8,543";
//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//carPrice.replaceAll(“,”, “”)
//Takes the string “10,000”
//Removes all commas
//The result is “10000” (still a string).

//Number(“10000”)
//Converts the string to a number
//The result is 10000 (number)
//Result:
//The expression converts the string with the format “10,000” to a regular number 10000.