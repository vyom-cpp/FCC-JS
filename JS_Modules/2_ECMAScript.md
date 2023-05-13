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