// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//The error:

//We are trying to use the variable cityOfBirth before it is declared.
//With const, the variable is not accessible before its declaration because of the temporal dead zone.So the code throws an error.
//JavaScript reads the file from top to bottom, so cityOfBirth does not exist yet when the console.log line runs and const variables must be declared before we use them.
//We need to move the declaration above the console.log

//The corrected code:

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
//The result will be: I was born in Bolton