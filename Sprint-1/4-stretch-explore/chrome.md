Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

1. Calling alert("Hello world!")

When we type into the Chrome Console:

alert("Hello world!");

🔹 What effect does calling alert have?

It opens a popup dialog box with the message:

Hello world!


The user must click OK to close it.

While the alert is open, JavaScript execution is paused.

🔹 What does alert return?
alert() returns undefined.
Its only purpose is to display a message.

2. Calling prompt("What is your name?")

Type into the Console:

const myName = prompt("What is your name?");

🔹 What effect does calling prompt have?

It opens a popup dialog box with a text input field and the message:

What is your name?


The user can type something and then click:

OK, or

Cancel

🔹 What is the return value of prompt?

It depends on what the user does:
Types something + presses OK -> A string with the user’s input
Leaves input empty + presses OK -> "" (empty string)
Presses Cancel -> null

So the code:
const myName = prompt("What is your name?");
will store one of the following in myName:

"Maya" (or any text the user types)
"" (empty string)
null (if Cancel is clicked)