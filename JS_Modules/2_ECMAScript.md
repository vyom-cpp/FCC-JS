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