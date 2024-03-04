1. Use an Array to Store a Collection of Data
```js
let yourArray = [true, false, "hii", "hi", 1]; // Change this line
```

2. Access an Array's Contents Using Bracket Notation
```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "anything we want";
// Only change code above this line
console.log(myArray);
```

3. Add Items to an Array with push() and unshift()
```js
function mixedNumbers(arr) {
  // change code below this line
  arr.unshift("I", 2, "three"); // Pushes element at the beginning
  arr.push(7, "VIII", 9); // Pushes element at the end
  // change code above this line
  return arr;
}
console.log(mixedNumbers(["IV", 5, "six"]));
```

4. Remove Items from an Array with pop() and shift()
```js
function popShift(arr) {
  let popped = arr.pop(); // Pops element from the end
  let shifted = arr.shift(); // Pops element from the beginning
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

5. Remove Items Using splice()
```js
// The first two parameters of splice() are integers which represent indexes, or positions, of items in the array that splice() is being called upon.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4); // 1 represents 1st element of an array and is not counted (i.e. 2) and 4th element is 4 (i.e. counted)
console.log(arr);
```

6. Add items using Splice
```js
// Splice can take upto 3 parameters.
// You can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.
function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // change code above this line
  return arr;
}
```

7. Copy Array Items using Splice
```js
// slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).
function forecast(arr) {
  // Only change code below this line
  return arr.slice(2, 4);
}
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

8. Copy an Array with Spread Operator
```js
// ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simlpe and highly readable syntax. The spread syntax simply looks like this: `...`   
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));
```

9. Combine Arrays with the Spread Operator
```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}
console.log(spreadOut());
```

10. Check For The Presence of an Element with indexOf()
```js
function quickCheck(arr, elem) {
  // Only change code below this line
  if(arr.indexOf(elem) >= 0){
    return true;
  }
  else {
    return false;
  }
  // Only change code above this line
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

11. Iterate Through All an Array's Items Using For Loops
```js
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }
  // change code above this line
  return newArr;
}
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// This code defines a function called filteredArray that takes an array arr and an element elem as arguments. The goal of the function is to create a new array newArr that contains subarrays of arr that do not contain the element elem.
```

12. Create complex multi-dimensional arrays
```js
let myNestedArray = [
  // Only change code below this line
  'level 1',                   /* myNestedArray[0]             */
  ['level 2'],	               /* myNestedArray[1][0]          */
  [['level 3','deep']],	       /* myNestedArray[2][0][0]       */
  [[['level 4','deeper']]],    /* myNestedArray[3][0][0][0]    */
  [[[['level 5','deepest']]]]  /* myNestedArray[4][0][0][0][0] */
  // Only change code above this line
];
```

13. Add Key-Value Pairs to JavaScript Objects
```js
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};
// Only change code below this line
foods.bananas = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;
// Only change code above this line
console.log(foods);
```

14. Modify an Object Nested Within an Object
```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line
console.log(userActivity);
```

15. Access Property Names with Bracket Notation
```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}
console.log(checkInventory("apples"));
```

16. Use the delete Keywword to Remove Object Properties
```js
  let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line
console.log(foods);
```

17. Check if an Object has a Property
```js
// There are two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. 
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
 return userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan");
}

// Other away to solve it
function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
}
```

18. Iterate Through the Keys of an Object with a for...in Statement
```js
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}
console.log(countOnline(users));
```

19. Generate an Array of All Object Keys with Object.keys()
```js
// We also generate an array which contains all the keys stored in an object with the Object.keys() method.
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(users);
  // Only change code above this line
}
console.log(getArrayOfUsers(users));
```

20. Modify an Array Stored in an Object
```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
  // Only change code below this line
  user.data.friends.push(friend);
  return user.data.friends;
  // Only change code above this line
}
console.log(addFriend(user, 'Pete'));
```