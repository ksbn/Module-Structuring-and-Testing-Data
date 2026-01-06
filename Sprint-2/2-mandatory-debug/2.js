// Predict and explain first...

// Predict the output of the following code:
// =============> 
// The function does not accept arguments, even though we pass them (getLastDigit(42)).
// It always uses the global variable num = 103.
// This means:
// All three calls will ignore the numbers passed.
// The function always returns the last digit of the number 103 → ‘3’.
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3


const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> (matches the prediction)
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3 ()

// Explain why the output is the way it is
// =============> 
// Function: does not use the passed argument
// always refers to the variable num declared at the top:
// const num = 103;
// Therefore, for any call: 
//getLastDigit(42)
//getLastDigit(105)
//getLastDigit(806)
// → The function still returns the last character of the string ‘103’,  ‘3’.

// Finally, correct the code to fix the problem
// =============> 
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`); //The last digit of 42 is 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`); //The last digit of 105 is 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`); //The last digit of 806 is 6

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The function should take a number and work with it, rather than with a global variable.