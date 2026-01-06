function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// First 0, then index++ after each iteration.

// b) What is the if statement used to check
// Does the current character in the string match the searched char

// c) Why is index++ being used?
// To move to the next character and not get stuck in an infinite loop.

// d) What is the condition index < str.length used for?
// To avoid going beyond the line and correctly stop the cycle if the character is not found
