# 1 BASIC MODULES

- > **Comment your JavaScript code**
```js
// This is a single line comment
/* This is a multi-line comment */
```

- > **Declare variables in JavaScript**
```js
// JavaScript provides eight different data types which are,
// undefined, null, boolean, string, symbol, bigint, number & object
 /*Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number & statements are ended by Semicolons (;)*/
var myName;
```

- > **Storing values with assignment operators**
```js
// We can store a value in a variable with the assignment operator (=).
var  myVar;
myVar = 5;
/*First, this code creates a variable names myVar and then assigns value 5 to myVar
Now, if myVar appears again in the code then the program will treat it as 5.*/
```

- > **Assigning a vlue of one variable to another**
```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
/*The above declares a myVar variable with no value, then assigns it the value 5. Next, a variable named myNum is declared with no value. Then, the contents of myVar (which is 5) is assigned to the variable myNum. Now, myNum also has the value of 5.*/
```

- > **Initializing Variables with the Assignment Operator**
```js
var myVar = 0;
// Creates a new variable called myVar and assigns it an initial value of 0.
```

- > **Declare String Variables**
```js
var myName = "your name";
/*"your name" is called a string literal. A string literal, or string, is a series of zero or more characters enclosed in single or double quotes.*/
```

- > **Understanding Uninitialized Variables**
```js
/*When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined.*/
```

- > **Understanding Case Sensitivity in Variables**
```js
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
/*MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different casing.*/
```

- > **Explore Differences Between the var and let Keywords**
```js
var camper = "James";
var camper = "David";
console.log(camper);
/*In the code above, the camper variable is originally declared as James, and is then overridden to be David. The console then displays the string David.
If you replace var with let in the code above, it results in an error:*/
```

- > **Declare a Read-Only Variable with the const Keyword**
```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
// The console will display error.
/*const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.*/
```

- > **Add Two Numbers with JavaScript**
```js
const myVar = 10 + 10;
// myVar now has value 20
// JavaScript uses the + symbol as an addition operator when placed between two numbers.
```

- > **Subtract One Number from Another with JavaScript**
```js
const myVar = 12 - 6;
// myVar would have the value 6.
```

- > **Multiply Two Numbers with JavaScript**
```js
const myVar = 13 * 13;
// myVar would have the value 169.
```

- > **Divide One Number by Another with JavaScript**
```js
const myVar = 16 / 2;
// myVar now has the value 8.
```

- > **Increment a Number with JavaScript**
```js
i++;
// is the equivalent of
i = i + 1;
```

- > **Decrement a Number with JavaScript**
```js
i--;
// is the equivalent of
i = i - 1;
```

- > **Create Decimal Numbers with JavaScript**
```js
const myDecimal = 5.7;
// We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.
```

- > **Multiply Two Decimals with JavaScript**
```js
const product = 2.0 * 2.5;
// In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.
``` 

- > **Divide One Decimal by Another with JavaScript**
```js
const quotient = 4.4 / 2.0; 
```

- > **Finding a remainder in JavaScript**
```js
const remainder = 11%3;
// The remainder operator % gives the remainder of the division of two numbers.
```

- > **Compound Assignment With Augmented Addition**
```js
myVar = myVar + 5;
// to add 5 to myVar.
let myVar = 1;
myVar += 5;
console.log(myVar);
// It would display 6 to the console.
```

- > **Compound Assignment With Augmented Subtraction**
```js
myVar = myVar - 5;
// will subtract 5 from myVar. This can be rewritten as:
myVar -= 5;
```

- > **Compound Assignment With Augmented Multiplication**
```js
myVar = myVar * 5;
// will multiply myVar by 5. This can be rewritten as:
myVar *= 5;
```

- > **Compound Assignment With Augmented Division**
```js
myVar = myVar / 5;
Will divide myVar by 5. This can be rewritten as:
myVar /= 5;
```

- > **Escaping Literal Quotes in Strings**
```js
// In JavaScript, strings are pieces of text that you put inside either single quotes (') or double quotes (")
// To solve this problem, you "escape" the quote character. Escaping means you tell JavaScript that the quote should be part of the text, not the end of the text. You do this by putting a backslash (\) in front of the quote character.
```
```js
var singleQuotedString = 'This is a single-quoted string with a single quote: \'escaped quote\' inside.';
console.log(singleQuotedString);
```
```js
var doubleQuotedString = "This is a double-quoted string with a double quote: \"escaped quote\" inside.";
console.log(doubleQuotedString);
```
```js
var mixedQuotesString = 'This string contains "double quotes" and \'single quotes\' without any need to escape.';
console.log(mixedQuotesString);
```
```js
var escapedCharacters = "This is a string with a newline: Hello\nWorld and a tab: Hello\tWorld";
console.log(escapedCharacters);
```
```js
var backslashString = "To include a backslash, use two: \\\\";
console.log(backslashString);
```
```js
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
```

- > **Quoting Strings with Single Quotes**
```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
// A string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.
```

- > **Escape Sequences in Strings**
```js
/* \'	single quote
\"	double quote */
\\	//backslash
\n	//newline
\t	//tab
\r	//carriage return
\b	//backspace
\f	//form feed
```

- > **Concatenating Strings with Plus Operator**
```js
const myStr = "This is the start. " + "This is the end.";
// When the + operator is used with a String value, it is called the concatenation operator. Concatenation does not add spaces between concatenated strings.
```

- > **Concatenating Strings with the Plus Equals Operator**
```js
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

- > **Constructing Strings with Variables**
```js
const myName = "Vyom";
const myStr = "My name is " + myName + " and I am well!";
// It will display My name is Vyom and I am well!
```

- > **Appending Variables to Strings**
```js
const someAdjective = "easy";
let myStr = "Learning to code is ";
myStr += someAdjective;
// ust as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.
```

- > **Find the Length of a String**
```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
// The output will be 8
// You can find the length of a String value by writing .length after the string variable or string literal.
```

- > **Use Bracket Notation to Find the First Character in a String**
```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];  // It will show the first letter i.e. L
// Bracket notation is a way to get a character at a specific index within a string.
```

- > **Understand String Immutability**
```js
let myStr = "Bob";
myStr[0] = "J";
//  The following code will produce an error because the letter B in the string Bob cannot be changed to the letter J, to change myStr would be to assign it with a new value, like this.
let myStr = "Bob";
myStr = "Job";
```

- > **Use Bracket Notation to Find the Nth Character in a String**
```js
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; 
// It will return the thrid letter i.e. v
```

- > **Use Bracket Notation to Find the Last Character in a String**
```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1]; 
// It will return the last character in the string i.e. e
```

- > **e Bracket Notation to Find the Nth-to-Last Character in a String**
```js
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
// It will return a character i.e. c. whatever is subtracted from the length, count from the last will be your answer.
```

- > **Word Blanks**
```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
```

- > **Store Multiple Values in one Variable using JavaScript Arrays**
```js
const myArray = ["Hellu", 69];
// With JavaScript array variables, we can store several pieces of data in one place.
```

- > **Nest one Array within Another Array**
```js
const myArray = [["Virat", 18], ["Rohit", 45]];
// This is also called a multi-dimensional array.
```

- > **Access Array Data with Indexes**
```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
// The console.log(array[0]) prints 50, and data has the value 60.
```

- > **Modify Array Data With Indexes**
```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
// ourArray now has the value [15, 40, 30].
```

- > **Access Multi-Dimensional Array with Indexes**
```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
// Subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], and element has the value 11.
```

- > **Manipulate Arrays With push Method**
```js
const arr1 = [1, 2, 3];
arr1.push(4, 5);
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr1 now has the value [1, 2, 3, 4, 5] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
// This function adds the element from the last
```

- > **Manipulate Arrays With pop Method**
```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
// The first console.log will display the value 6, and the second will display the value [1, 4].
// This function removes the element from the beginning
```

- > **Manipulate Arrays With shift Method**
```js
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
// removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].
// This function removes the element from the beginning
```

- > **Manipulate Arrays With unshift Method**
```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
// After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].
// This function adds the element from the beginning
```

- > **Shopping List**
```js
const myList = [["Virat", 18], ["Rohit", 45], ["Dhoni", 7], ["Ronaldo", 7], ["Messi", 10]];
// Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
```

- > **Write Resuable JavaScript with Functions**
```js
function functionName() {
  console.log("Hello World");
}
// In JavaScript, we can divide up our code into reusable parts called functions.
// Every single time we call the function i.e. functionName, it will print Hello World
```

- > **Passing Values to Functions with Arguments**
```js
function functionWithArgs(a,b) {
  console.log(a+b);
}
functionWithArgs(1,2);
// Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. The actual values that are input (or "passed") into a function when it is called are known as arguments.
```

- > **Return a Value from a Function with Return**
```js
function timesFive(a) {
  return a*5;
}
timesFive(5);
// We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.
```

- > **Global Scope and Functions**
```js
// Declare the myGlobal variable below this line
const myGlobal = 10;  // It is defined outside the function block so it is a Global Scope.

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;  // This variable  is defined without let or const hence it is a Global Scope.
}
// In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code. Variables which are declared without the let or const keywords are automatically created in the global scope. 
```

- > **Local Scope and Functions**
```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}
myTest();
console.log(loc);
// Here is a function myTest with a local variable called loc. The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.
// Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
```

- > **Global vs. Local Scope in Functions**
```js
const someVar = "Hat";
function myFun() {
  const someVar = "Head";
  return someVar;
} // The function myFun will return the string Head because the local version of the variable is present.
// It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
```

- > **Understanding Undefined Value returned from a Function**
```js
  // In JavaScript, when a function doesn't explicitly return a value, it returns undefined.
function noReturnValue() {
    // No return statement
}
var result = noReturnValue();
console.log(result); // Outputs: undefined
// In this example, the noReturnValue function doesn't return anything explicitly, so it returns undefined.
```
```js
function returnUndefined() {
    return; // No value provided
}
var result = returnUndefined();
console.log(result); // Outputs: undefined
// Here, the returnUndefined function contains a return statement, but it doesn't return any value, so it returns undefined.
```
```js
function returnUndefinedValue() {
    return undefined;
}
var result = returnUndefinedValue();
console.log(result); // Outputs: undefined
// In this case, the returnUndefinedValue function returns undefined explicitly.
```
```js
function returnNumber() {
    return 42;
}
var result = returnNumber();
console.log(result); // Outputs: 42
// Here, the returnNumber function returns the number 42.
```

- > **Assignment with a Returned Value**
```js
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
// The function returns the number i.e. 2
```