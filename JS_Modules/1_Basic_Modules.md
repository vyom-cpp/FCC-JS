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

- > **Stand in Line**
```js
function nextInLine(arr, item) {
  arr.push(item); // It adds a number at the end of the array
  const removed = arr.shift(); // It remves the first element of the array
  return removed; // It returns the removed number
}
let testArr = [1, 2, 3, 4, 5]; 
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
```

- > **Understanding Boolean Values**
```js
function welcomeToBooleans() {
  return true;
}
// Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive. Boolean values are never written with quotes.
```

- > **Use Conditional Logic with If Statements**
```js
// Pseudo Code
if (condition is true) {
  statement is executed
}
function isCondition(wasThatTrue) {
  if(wasThatTrue) {
    return "Yes, that is true";
  }
  return "No, that is false";
}
```

- > **Comparison with the Equality Operator**
```js
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);
// The most basic operator is the equality operator ==.
```

- > **Comparison with the Strict Equality Operator**
```js
function testStrict(val) {
  if (val===7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);  // The function will return the string Equal when val is strictly equal to 7.
// Strict equality (===) is the counterpart to the equality operator (==). 
```

- > **Practice comparing different values**
```js
function compareEquality(a, b) {
  if (a === b) { // This function returns the string Equal only when the values are strictly equal.
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");
// 3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed. To determine the type of a variable or a value with the typeof operator, as follows:
typeof 3  // It will return the string number
typeof '3'  // It will return the string string
```

- > **Comparison with Inequality Operators**
```js
function testNotEqual(val) {
  if (val != 99) { // The function will return Not Equal  when val is not equal to 99
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);
// The inequality operator (!=) is the opposite of the equality operator. 
```

- > **Comparison with Strict Inequality Operators**
```js
function testStrictNotEqual(val) {
  if (val !== 17) { // The function will return Not Equal when val is not strictly equal to 17.
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);
// The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal"
```

- > **Comparison with Greater Than Operator**
```js
function testGreaterThan(val) {
  if (val > 100) {  // The function will work for val greater than 100
    return "Over 100";
  }
  if (val > 10) {  // The function will work for val greater than 10
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);
// It compares values of two numbers (>), if the number to left is greater than the number to right, it returns true otherwise it returns false.
```

- > **Comparison with Greater Than Or Equal To Operator**
```js
function testGreaterOrEqual(val) {
  if (val>=20) {  // The function will work for val greater or equal to 20
    return "20 or Over";
  }
  if (val>=10) {  // The function will work for val greater or equal to 10
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);
// If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.
```

- > **Comparison with the Less Than Operator**
```js
function testLessThan(val) {
  if (val<25) {  // The function will work for val less than 25
    return "Under 25";
  }
  if (val<55) {  // The function will work for val less than 55
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);
// If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false.
```

- > **Comparison with the Less Than Or Equal To Operator**
```js
function testLessOrEqual(val) {
  if (val<=12) {  // The function will work for value equal or less than 12
    return "Smaller Than or Equal to 12";
  }
  if (val<=24) {  // The function will work for value equal or less than 24
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);
//  If the number to the left is less than or equal to the number to the right, it returns true, otherwise it returns false.
```

- > **Comparison with Logical And Operator**
```js
function testLogicalAnd(val) {
  if (val<=50 && val>=25) {
      return "Yes"; 
  }
  return "No";
}
testLogicalAnd(10);
// The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
```

- > **Comparison with Logical Or Operator**
```js
function testLogicalOr(val) {
  if (val<10 || val>20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.
```

- > **Introducing Else Statements**
```js
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }else{
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);
// When a condition for an if statement is false, then with an else statement, an alternate block of code will be executed.
```

- > **Introducing Else If Statements**
```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

- > **Logical Order in If Else Statements**
```js
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);
```

- > **Chaining If Else Statements**
```js
function testSize(num) {
if(num < 5){
  return "Tiny";
} else if(num < 10){
  return "Small";
} else if(num < 15){
  return "Medium";
} else if(num < 20){
  return "Large";
} else if(num >= 20){
  return "Huge";
} else{
  return "Change Me";
}
}
testSize(7);
```

- > **Golf Code**
```js
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if(strokes == 1){
    return "Hole-in-one!"
  } else if(strokes <= par-2){
    return "Eagle";
  } else if(strokes == par-1){
    return "Birdie";
  } else if(strokes == par){
    return "Par";
  } else if(strokes == par+1){
    return "Bogey";
  } else if(strokes == par+2){
    return "Double Bogey"
  } else if(strokes >= par+3){
    return "Go Home!"
  } else {
    return "Change Me";
  }
}
golfScore(5, 4);
```

- > **Selecting from many options with Switch Statements**
```js
function caseInSwitch(val) {
  let answer = "";
  switch(val) {
    case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;
  }
  return answer;
}
caseInSwitch(1);
// A switch statement compares the value to the case statements which define various possible values. Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.
```

- > **Adding a Default Option in Switch Statements**
```js
function switchOfStuff(val) {
  let answer = "";
  switch(val){
    case "a":
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
  }
  return answer;
}
switchOfStuff(1);
```

- > **Multiple Identical Options in Switch Statements**
```js
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }
  return answer;
}
sequentialSizes(1);
```

- > **Replacing If Else Chains with Switch**
```js
function chainToSwitch(val) {
  let answer = "";
  switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
}
  return answer;
}
chainToSwitch(7);
```

- > **Returning Boolean Values from Functions**
```js
function isLess(a, b) {
  return a <= b;
}
isLess(10, 15);
```

- > **Return Early Pattern for Functions**
```js
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);
// When a return statement is reached, the execution of the current function stops and control returns to the calling location.
```

- > **Counting Cards**
```js
let count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

// From GPT-3.5
var count = 0;
function cardCount(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    return "Current count: " + count;
}
console.log(cardCount(2)); // Current count: 1
console.log(cardCount('K')); // Current count: 0
console.log(cardCount(4)); // Current count: 1
console.log(cardCount('A')); // Current count: 0
console.log(cardCount(7)); // Current count: 0
// Cards 2 through 6 are considered low, so when any of them is dealt, the count is increased by 1.
// Cards 10, J, Q, K, and A are considered high, so when any of them is dealt, the count is decreased by 1.
```

- > **Build JavaScript Objects**
```js
const myDog = {
  name: "Pluto",
  legs: 4,
  tails: 1,
  friends: ["humans", "other dogs"]
};
// Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through properties. All properties are stored as string but if the object has non-string properties then JS will automatically typecast it as a string.
```

- > **Accessing Object Properties with Dot Notation**
```js
const testObj = {
  "hat": "ballcap",    // Alternate way [hat: "ballcap",]
  "shirt": "jersey",    // Alternate way [shirt: "jersey",]
  "shoes": "cleats"  // Alternate way [shoes: "cleats"]
};
const hatValue = testObj.hat;      // Property hat is accessed
const shirtValue = testObj.shirt;  // Property shirt is accessed
// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
```

- > **Accessing Object Properties with Bracket Notation**
```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

- > **Accessing Object Properties with Variables**
```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed); // The String Doberman will be displayed
// Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
```

- > **Updating Object Properties**
```js
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
// After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
```

- > **Add New Properties to a JavaScript Object**
```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof";  // First way to add a new property to a JS Object
myDog["bark"] = "woof"; // Second way to add a new property to a JS Object
```

- > **Delete Properties from a JavaScript Object**
```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;  // First way to delete a property from a JS Object
delete myDog["tails"];  // Second way to delete a property from a JS Object
```

- > **Using Objects for Lookups**
```js
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
//We can make use of the variable `result` to let the function return the correct value.
  result = lookup[val];
  return result;
}
```

- > **Testing Objects for Properties**
```js
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  } else{
  return "Not Found";
  }
}
// To check if a property on a given object exists or not, you can use the .hasOwnProperty() method.
```

- > **Manipulating Complex Objects**
```js
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    artist: "Taylor Swift",
    title: "1989",
    release_year: 1989,
    formats: [
      "CD",
      "8T",
      "LP"
    ],
    gold: true
  }
];
// A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
```

- > **Accessing Nested Objects**
```js
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];  // String "maps" is accessed
// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
```

- > **Accessing Nested Arrays**
```js
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
const secondTree = myPlants[1].list[1];  // Pine is accessed
// Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.
```

- > **Record Collection**
```js
var recordCollection = {
    101: {
        title: "Abbey Road",
        artist: "The Beatles",
        tracks: ["Come Together", "Something", "Oh! Darling"]
    },
    102: {
        title: "Thriller",
        artist: "Michael Jackson",
        tracks: ["Thriller", "Beat It", "Billie Jean"]
    },
    103: {
        title: "Back in Black",
        artist: "AC/DC",
        tracks: ["Hells Bells", "Back in Black", "You Shook Me All Night Long"]
    }
};
// Accessing record information
console.log(recordCollection[101].title); // Outputs: Abbey Road
console.log(recordCollection[102].artist); // Outputs: Michael Jackson
// Adding a new record
recordCollection[104] = {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    tracks: ["Money", "Us and Them", "Time"]
};
```

- > **Iterate with JavaScript While Loops**
```js
const myArray = [];
let i=5;
while (i>=0) {
  myArray.push(i);
  i--;
} // myArray = [5,4,3,2,1,0]
```

- > **Iterate with JavaScript For Loops**
```js
const myArray = [];
for(let i=1; i<=5; i++){
  myArray.push(i);
} // myArray = [1,2,3,4,5]
```

- > **Iterate Odd Numbers with a For Loop**
```js
const myArray = [];
for(let i=1; i<10; i+=2){
  myArray.push(i);
} // myArray = [1,3,5,7,9]
// For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.
```

- > **Count backwards with a For Loop**
```js
const myArray = [];
for(let i=9; i>0; i-=2){
  myArray.push(i); 
} // myArray = [9,7,5,3,1]
```

- > **Iterate through an array with a For Loop**
```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
// total + myArr[0] -> 0 + 2 = 2 
// total + myArr[1] -> 2 + 3 = 5
// total + myArr[2] -> 5 + 4 = 9
// total + myArr[3] -> 9 + 5 = 14 
// total + myArr[4] -> 14 + 6 = 20
```

- > **Nesting For Loops**
```js
function multiplyAll(arr) {
  var product = 1;
  for(var i=0;i<arr.length;i++){ // 'i' is used to access each array in the 'arr'
    for(var j=0; j<arr[i].length;j++){
      product*=arr[i][j];
    }
  }
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

- > **Iterate with JavaScipt Do...While Loops**
```js
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while(i<10);
```

- > **Replace Loops using Recursion**
```js
function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
} // It returns the sum of the first n elements of the array 'arr'.
// Recursion is a function that calls itself.
```

- > **Profile Lookup**
```js
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
lookUpProfile("Akira", "likes");
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
```

- > **Generate Random Fractions with JavaScipt**
```js
function randomFraction() {
  return Math.random();
} // It will return a random number instead of returning 0.
// JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.
```

- > **Generate Random Whole Numbers with JavaScipt**
```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
} // It will return 0 to 9.
// You can generate random decimal numbers with Math.random(), but sometimes you need to generate random whole numbers. The following process will give you a random whole number less than 20:
// 1. Use Math.random() to generate a random decimal number.
// 2. Multiply that random decimal number by 20.
// 3. Use Math.floor() to round this number down to its nearest whole number.
```

- > **Generate Random Whole Numbers within a Range**
```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax-myMin+1))+myMin;
}
// This formula gives a random whole number in the range from min to max. Take a moment to read it and try to understand what this code is doing.
```

- > **Use the Parselnt Functions**
```js
function convertToInteger(str) {
return parseInt(str);
}
convertToInteger("56"); // It will return 56.
// The parseInt() function parses a string and returns an integer.
```

- > **Use the Parselnt Function with a Radix**
```js
function convertToInteger(str) {
  return parseInt(str,2);
}
convertToInteger("10011");// It converts a binary number to an integer & returns it.
// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
// parseInt(string, radix);  
// const a = parseInt("11", 2);
// const a = parseInt("11", 2);
// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.
```

- > **Use the Conditional(Ternary) Operators**
```js
function checkEqual(a, b) {
  return a===b? "Equal" : "Not Equal";
}
checkEqual(1, 2); 
// The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
```

- > **Use Multiple Conditional(ternary) Operators**
```js
function checkSign(num) {
  return (num === 0)? "zero":(num>0)? "positive" : "negative";
}
checkSign(10);
```

- > **Use Recursion to Create a Countdown** 
```js
function countdown(n) { // Function definition
  if (n < 1) { // base case
    return [];
  } else { // recursion
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
//1. If the value of n is greater than or equal to 1, the countdown function is called recursively with n - 1. This generates the countdown for the numbers smaller than the current value of n.
//2. The result of the countdown(n - 1) call is stored in the variable arr.
//3. The current value of n is added to the beginning of the arr array using arr.unshift(n). This effectively adds the current number to the countdown array.
//4. The modified array arr is returned.
}
// When you call countdown with a specific number, say countdown(5), it generates an array containing a countdown from 5 down to 1.
// Output: [5,4,3,2,1]
```

- > **Use Recursion to Create a Range of Numbers**
```js
function rangeOfNumbers(startNum, endNum) { // Function definition
  if (endNum < startNum) { // base case
    return [];
  } else { // recursion
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
  // How Recursion works here:
//1. If the endNum is greater than or equal to the startNum, the function makes a recursive call to rangeOfNumbers with the endNum decremented by 1.
//2. The result of the recursive call to rangeOfNumbers(startNum, endNum - 1) is stored in the variable numbers.
//3. The current endNum is added to the numbers array using numbers.push(endNum).
//4. The modified array numbers is returned.
}
// When you call rangeOfNumbers with a specific start and end number, say rangeOfNumbers(3, 7), it generates an array containing a sequence of numbers from the start number to the end number.
// Output: [3,4,5,6,7]
```