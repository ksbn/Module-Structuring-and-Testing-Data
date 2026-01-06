// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

/* Bugs:
1.	Minutes ignored: The function always outputs :00 instead of preserving the original minutes. For example, "14:45" would incorrectly return "2:00 pm" instead of "2:45 pm".
2.	Midnight and noon handled incorrectly:
	"00:30" → should be "12:30 am", but currently returns "00:30 am".
	"12:30" → should be "12:30 pm", but currently returns "12:30 am".
3.	AM/PM logic incomplete: Any time 01:00–12:00 is considered am even if 12:00–12:59 should be pm.
*/

//Corrected Function
function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  const minutes = time.slice(3); // in case of minutes, if not every time will be :00
  let period = "am";

  if (hours === 0) {
    hours = 12; // midnight
  } else if (hours === 12) {
    period = "pm"; // midday
  } else if (hours > 12) {
    hours -= 12;
    period = "pm";
  }

  return `${hours.toString().padStart(2, "0")}:${minutes} ${period}`;
}
module.exports = formatAs12HourClock;

// Tests
//1.	Standard AM times
console.assert(formatAs12HourClock("08:00") === "08:00 am");
console.assert(formatAs12HourClock("11:59") === "11:59 am");
//2.	Standard PM times
console.assert(formatAs12HourClock("13:00") === "01:00 pm");
console.assert(formatAs12HourClock("23:15") === "11:15 pm");
//3.	Noon and Midnight
console.assert(formatAs12HourClock("00:00") === "12:00 am");
console.assert(formatAs12HourClock("12:00") === "12:00 pm");
//4.	Single-digit minutes
console.assert(formatAs12HourClock("09:05") === "09:05 am");
console.assert(formatAs12HourClock("21:09") === "09:09 pm");
//5.	Edge cases around 12
console.assert(formatAs12HourClock("12:01") === "12:01 pm");
console.assert(formatAs12HourClock("00:01") === "12:01 am");

