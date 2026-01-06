// Predict and explain first...

// Why will an error occur when this program runs?
// =============> When the programme starts:

//Inside the function, the variable decimalNumber, which is already a function parameter, is declared again → this will cause a SyntaxError.
//Below is console.log(decimalNumber);, but the variable decimalNumber does not exist in the global scope, so there will be a ReferenceError.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> In JavaScript, we cannot declare const decimalNumber if the function parameter is already named decimalNumber → this causes a SyntaxError.
////The variable decimalNumber:
// exists only within the function
// outside the function it does not exist → will be: ReferenceError: decimalNumber is not defined.

// Finally, correct the code to fix the problem
// =============> 
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); //50%


