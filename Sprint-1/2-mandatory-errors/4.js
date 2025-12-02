const 12HourClockTime = "20:53";
const 24hourClockTime = "08:53";

//This causes a syntax error because in JavaScript, a variable name cannot start with a number.Therefore, 12HourClockTime and 24HourClockTime are incorrect identifiers, and the interpreter reports errors:Variable declaration expectedAn identifier or keyword cannot immediately follow a numeric literal
//We need to rename the variables so that they start with a letter:

const hour12ClockTime = "20:53";
const hour24ClockTime = "08:53";


