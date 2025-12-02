const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//The code contains the following lines:
//const movieLength = 8784;
//const remainingSeconds = movieLength % 60;
//const totalMinutes = (movieLength - remainingSeconds) / 60;
//const remainingMinutes = totalMinutes % 60;
//const totalHours = (totalMinutes - remainingMinutes) / 60;
//const result = \${totalHours}:${remainingMinutes}:${remainingSeconds}`;`
//A total of 6 variables have been declared.

// b) How many function calls are there?
//The function is called using (). In this code:
//console.log(result);
//console.log() → 1 function called
//There are no functions in the remaining lines.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//movieLength % 60 is the number of seconds that do not fit into full minutes.
//The % operator — remainder of division.
//Take movieLength in seconds.
//Divide by 60 (seconds in a minute).
//Take the remainder.
//movieLength = 8784
//8784 / 60 = 146 minutes and a remainder of 24 seconds
//movieLength % 60 = 24

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//totalMinutes is the total number of minutes, rounded down ( without the remainder in seconds).
//totalMinutes = (movieLength - remainingSeconds) / 60;
//First, subtract remainingSeconds → only full minutes remain in seconds.
//Divide by 60 → get the total number of minutes without seconds.
//movieLength = 8784
//remainingSeconds = 24
//8784 - 24 = 8760 seconds
//8760 / 60 = 146 minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
//result is the movie duration in hours:minutes:seconds format.
//For example: 2:26:24
//Better variable name is:
//const movieTimeFormatted = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Limitations:
//If remainingSeconds or remainingMinutes < 10 → the output will be without a leading zero.
//For example: 2:5:3 instead of 02:05:03
//If movieLength = 0 → it will work normally → 0:0:0
//If movieLength is negative → the code will output negative hours and minutes, which may be illogical
//For very large numbers, it still works, but the format may be inconvenient
//Improvement: add String.padStart(2, “0”) for formatting:
//const result = `${String(totalHours).padStart(2,'0')}:${String(remainingMinutes).padStart(2,'0')}:${String(remainingSeconds).padStart(2,'0')}`;