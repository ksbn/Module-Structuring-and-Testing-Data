## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

✔ What does this mean?
It tells us that console.log is a function.
The phrase "[native code]" means the function is built into the browser, not written in JavaScript that we can see.

Now enter just `console` in the Console, what output do you get back?
Console { ... }

✔ What does this mean?
console is an object.
It stores many functions that are tools for debugging.

Try also entering `typeof console`
We will get: "object"
✔ Meaning:
console is indeed an object in JavaScript.

Answer the following questions:

What does `console` store?
Answer:
console stores an object that contains many methods (functions) used for debugging and interacting with the developer console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
Answer:
The . means ‘get the property named after the dot from the object before the dot’.

console.log and console.assert use dot notation.

console is an object
log and assert are properties of that object

Those properties happen to be functions

✔ console.log means
“Access the log function inside the console object.”

✔ console.assert means
“Access the assert function inside the console object.”

✔ What does the . mean?
The dot (.) is the JavaScript operator used to access a property of an object.
