
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> Here:
// the function argument is written as the number 3, but the parameter name must be an identifier (variable name)
// the variable num is used inside the function, but it is not defined
// Therefore, a SyntaxError will occur before the code is even executed.
// Expected message: SyntaxError: Invalid or unexpected token or SyntaxError: Unexpected number.


function square(3) {
    return num * num;
}

// =============> SyntaxError: Unexpected token '}'

// =============> The names of the parameters, such as x or num, should be in parentheses (round brackets) after the function name.
// We cannot write the number 3.
// JavaScript sees a number where there should be an identifier → the syntax is invalid, so a SyntaxError is thrown.
// Even if the function were declared, we are using a variable inside it: return num * num; But num is not declared anywhere — this would cause a ReferenceError.

// Finally, correct the code to fix the problem

// =============> 
function square(num) {
    return num * num;
}

console.log(square(3)); // 9

