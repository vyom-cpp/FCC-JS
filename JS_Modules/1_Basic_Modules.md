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