const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//The code will not work because cardNumber is a number, and numbers do not have the .slice() method.
//.slice() only works on strings and arrays, not on numeric values.
//So I expect the code to throw a TypeError, saying something like:"cardNumber.slice is not a function".
//Actual error:TypeError: cardNumber.slice is not a function
//the error matches the prediction.
//The issue is exactly that .slice() cannot be used on a number.
//The error happened because JavaScript numbers are primitive values, they do not have array or string methods. To use slice, the value must first be converted to a string.
//We need to convert the number to a string before slicing:

const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

console.log(last4Digits); 
//The result will be 4213
