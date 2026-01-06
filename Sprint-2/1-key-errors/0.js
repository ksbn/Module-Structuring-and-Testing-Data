// Predict and explain first...
//  =============> An error (SyntaxError) will occur before the function is executed.


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> Inside the function, we declare a variable named str, even though the same name is already used as a function parameter. 
// In JavaScript, we cannot declare a variable let str if we already have a parameter with that name.
// This causes: SyntaxError: Identifier 'str' has already been declared.
// =============> We just need to use the str parameter without redefining it:
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

//capitalise("hello"); // "Hello"
