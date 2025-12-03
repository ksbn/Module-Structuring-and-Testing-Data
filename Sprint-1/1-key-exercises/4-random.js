const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Answers:
// num represents a random integer between the minimum and maximum values, inclusive.
With our values minimum = 1 and maximum = 100, num is a random whole number between 1 and 100.

/Our expression: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
a) Math.random()
//Returns a random decimal number between 0 (inclusive) and 1 (exclusive).
//For example: 0.12345, 0.98765, etc.

b) Math.random() * (maximum - minimum + 1)
// Multiplies the random decimal by the size of the desired range.
// (maximum - minimum + 1) gives the number of possible integers in the range.
// For 1–100 → 100 - 1 + 1 = 100.
// Now we have a random decimal between 0 and 99.999…

c) Math.floor(...)
//Rounds the number down to the nearest whole integer.
//This produces an integer between 0 and 99.

d) + minimum
//Shifts the range up so that it starts at the minimum value instead of 0.
//Final result becomes an integer between 1 and 100.

//JavaScript evaluates this expression from the inside out:
1.	(maximum - minimum + 1)
2.	Math.random() * (that result)
3.	Math.floor(...)
4.	+ minimum
5.	Final value stored in num

//If we do:
console.log(num);
//and run the script multiple times, we will notice that the value changes every time and it always stays within the range 1 to 100.
//This helps confirm that the expression generates a random number in that interval.






