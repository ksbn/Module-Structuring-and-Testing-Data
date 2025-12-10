// Predict and explain first...
//  =============> The function immediately returns without a value — this stops the function from running before a + b is executed.
// Therefore: the function will return undefined
// the string will be: The sum of 10 and 32 is undefined

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> 
// The problem is that return stands alone:
// return;
// a + b;
// JavaScript:
// stops the function from executing at return
// everything below (including a + b) is completely ignored
// That is, a + b is never executed → the function always returns undefined.
// This is a typical error associated with an empty return statement.


// Finally, correct the code to fix the problem
//  =============> The correct version is to return the amount:
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`); //The sum of 10 and 32 is 42


