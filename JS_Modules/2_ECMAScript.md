#ECMA SCRIPT MODULES

1. Compare Scopes of the var & let keywords.
```js
function checkScope() {
"use strict";
let i = "function scope";
if (!true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
} else {
console.log("Function scope i is: ", i);
return i;
}
}
```

2. Mutate an Array Declared with const.
```js
const s = [5, 7, 2];
function editInPlace() {
// Only change code below this line
s[0]=2;
s[1]=5;
s[2]=7;
// Using s = [2, 5, 7] would be invalid

// Only change code above this line
}
editInPlace();
```

3. Prevent Object Mutation.
```js
function freezeObj() {
const MATH_CONSTANTS = {
    PI: 3.14
};
// Only change code below this line
Object.freeze(MATH_CONSTANTS);
// We can overwrite on the const word also from the above example. So by using Object.freeze() ensures that the data is prevented. Any attempt changing this will show you error.

// Only change code above this line
try {
    MATH_CONSTANTS.PI = 99;
} catch(ex) {
    console.log(ex);
}
return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

4. Use Arrow Functions to Write Concise Anonymous Functions.
```js
const magic = () => {
"use strict";
return new Date();
};

// This is an alrenative option for this `const magic = function()`
```

5. Write Arrow Functions with Parameters.
```js
const myConcat = (arr1, arr2) =>  {
return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

6. Set Default Parameter for your Function.
```js
function increment(number, value = 1) {
    return number + value;
}
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN
```

7. Use the Rest Parameter with Function Parameter.
```js 
// The rest parameter in JavaScript allows you to represent an indefinite number of arguments as an array. It provides a way to handle multiple function arguments without explicitly naming them all.
const sum = (...args) => {
let total = 0;
for (let i = 0; i < args.length; i++) {
    total += args[i];
}
return total;
}
```

8. Use the Spread Operator to Evaluate Arrays In-Place.
```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
"use strict";
arr2 = [...arr1]; // change this line
})();
console.log(arr2);
```

9. Use Destructing Assignment to Extract Values from Objects.
```js
const HIGH_TEMPERATURES = {
yesterday: 75,
today: 77,
tomorrow: 80
};

// change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES;

// change code above this line


console.log(today); // should be 77
console.log(tomorrow); // should be 80
```

10. Use Destructing Assignment to Assign Variables from Objects.
```js
const HIGH_TEMPERATURES = {
yesterday: 75,
today: 77,
tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```

11. Use  Destructing Assignment to Assign Variables from Nested Objects
```js
// Explanation and Example
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
// To extract the values of object properties and assign them to variables with same name:
const { johnDoe: { age, email }} = user;

// To assign an object properties' values to variables with different names:
const { johnDoe: { age: userAge, email: userEmail }} = user;

// Answer of the step.
const LOCAL_FORECAST = {
yesterday: { low: 61, high: 75 },
today: { low: 64, high: 77 },
tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```

12. Use Destructing Assignment to Assign Variables from Arrays.
```js
// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list.

let a = 8, b = 6;
// change code below this line
[a,b] = [b,a];
// change code above this line
console.log(a); // should be 6
console.log(b); // should be 8
```

13. Destructing via rest elements.
```js
function removeFirstTwo(list) {
// Only change code below this line
const [a, b, ...shorterList] = list; // Change this line
// Only change code above this line
return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

14. Use Destructuring Assignment to Pass an Object as a Function's Parameters.
```js
// Explanation and Example
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}
// This effectively destructures the object sent into the function. This can also be done in-place.
const profileUpdate = ({ name, age, nationality, location }) => {
}
// When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

// Answer of the step.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line
```

15. Create strings using template literals.
```js
// Explanation and Example
// Template literals are the special type of strings that makes creating complex strings easier.
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
// The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old.

// Answer for the step
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(let i = 0; i < arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  };
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

16. Write Concise Object Literal Declarations using Object Property Shorthand.
```js
const createPerson = (name, age, gender) => (
  // Only change code below this line
  {name, age, gender}
  // Only change code above this line
);
```

17. Write Concise Declarative Functions with ES6.
```js
// When defining functions within objects in ES5, we have to use the keyword function as follows.
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
// With ES6, you can remove the function keyword and colon altogehter when defining functions in objects.
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

// Answer of the step
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

18. Use class syntax to define a Constructor Function.
```js
// ES6 provides a new syntax to create objects, using the class keyword.
// It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();

// Answer of the step
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

19. Use getters and setters to control access to an object.
```js
// You can obtain values from an object and set the value of a property within an object. These are classically called getters and setters.
// Getter functions are meant to simply return (get) the value.
// Setter functions are meant to modify (set) the value.
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  
  set temperature(celsius) {
    return this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius 
```

20. Create a Module Script.
```js
<html>
  <body>
    <!-- Only change code below this line -->
    <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>
```