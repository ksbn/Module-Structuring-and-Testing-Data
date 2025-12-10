// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Function for converting kilograms to pounds
function toPounds(kg) {
    const pounds = kg * 2.20462; // 1 kg = 2.20462 pounds
    return +pounds.toFixed(2);   // round to 2 decimal places
}

console.log(toPounds(10));   // 22.05
console.log(toPounds(5));    // 11.02
console.log(toPounds(70));   // 154.32
console.log(toPounds(0));    // 0

// The function takes one parameter, kg, which is the weight in kilograms.
// We multiply by a factor of 2.20462 to convert to pounds.
// We use toFixed(2) to round to two decimal places.
// We return the result.