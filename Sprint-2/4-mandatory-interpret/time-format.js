function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> In return, we call pad three times:
`${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> num = 0
// First call — pad(totalHours).
// Let's calculate for seconds = 61:
// remainingSeconds = 61 % 60 = 1
// totalMinutes = (61 - 1) / 60 = 60 / 60 = 1
// remainingMinutes = totalMinutes % 60 = 1 % 60 = 1
// totalHours = (totalMinutes - remainingMinutes) / 60 = (1 - 1)/60 = 0

// c) What is the return value of pad is called for the first time?
// =============> 
// First call to pad → return value
// First call:
pad(totalHours)
//We calculated: totalHours = 0
//num = 0 is passed to the pad function
//Inside the function:
num.toString()       // converts 0 to "0"
"0".padStart(2, "0") // adds a leading zero, we get "00"

//Result: the first call to pad returns the string "00"
//The pad function does two things:
//Converts a number to a string
//Makes the length 2 characters long by adding leading zeros if necessary

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> Last call pad → value num
//Last call in the return string:
pad(remainingSeconds)
//remainingSeconds = seconds % 60 = 61 % 60 = 1
//The function is passed num = 1
//Why is this the last call: the function returns the string ${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}, and pad(remainingSeconds) is the last in this string.
//Result: num = 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 
// Last call pad → return value
//Inside the pad function:
num.toString()         // "1"
"1".padStart(2, "0")  // adds a leading zero → "01"
// Result: return value "01"
// Why: the function always converts a number to a string with a minimum length of 2 characters, adding a zero at the beginning if the length is less than 2.

//The string returned by the function:

`${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`

//First call: pad(totalHours)
//num = 0
//0.toString().padStart(2, "0") → "00"
//Second call: pad(remainingMinutes)
//num = 1
//1.toString().padStart(2, "0") → "01"
//Third (last) call: pad(remainingSeconds)
//num = 1
//1.toString().padStart(2, "0") → "01"
//Final string:
//return "00:01:01"