// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

//The variable age is declared using const age = 33; 
// A const variable cannot be reassigned. So the line age = age + 1 causes an error because we are trying to change a constant value.
// Since we want to increase the value of age by 1, the variable must be reassignable.To make a variable reassignable, we must use let instead of const.
// trying to create an age variable and then reassign the value by 1 (the correct version is)

let age = 33;
age = age + 1;

console.log(age); // 34