// Predict and explain first...

// =============> It does not return anything, so the return value is undefined.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> 
// The following occurs:
// First, multiply(10, 32) is called → outputs to the console: 320
// Then the result (undefined) is substituted into the template string → outputs:
// ‘The result of multiplying 10 and 32 is undefined’
// That is, two messages will be output: 
// 320
// The result of multiplying 10 and 32 is undefined.

// Problem: the function does not return anything.
// It does console.log(a * b), but does not do: return a * b;
// Therefore, the value of the function is undefined, and it is inserted into the string.


// Finally, correct the code to fix the problem
//  =============> 
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); //The result of multiplying 10 and 32 is 320


