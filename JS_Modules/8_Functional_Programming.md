1. Learn about Functional Programming
```js
// Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT

// Functional programming is about:

// 1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

// 2. Pure functions - the same input always gives the same output

// 3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

// Answer to the step
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line
```

2. Understand Functional Programming Terminology
```js
// Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. 

// Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

// The functions that take a function as an argument, or return a function as a return value, are called higher order functions.

// When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

3. Understand the Hazards of Using Imperative Code
```js
// In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

// Functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

// The map method which handles the details of iterating over an array.

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.slice(0, index); // get the tabs before the tab
 const tabsAfterIndex = this.tabs.slice(index + 1); // get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

4. Avoid Mutations and Side Effects Using Functional Programming
```js
// The global variable
let fixedValue = 4;
function incrementer() {
  // Only change code below this line
  return fixedValue + 1;
  // Only change code above this line
}
incrementer();
```

5. Pass Arguments to Avoid External Dependence in a Function
```js
// The global variable
let fixedValue = 4;
// Only change code below this line
function incrementer(fixedValue) {
  return fixedValue + 1;
  // Only change code above this line
}
```

6. Refactor Global Variables Out of Functions
```js
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
function add(bookList, bookName) {
  const newBookList = [...bookList];
  newBookList.push(bookName);
  return newBookList;
}

function remove(bookList, bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    const newBookList = [...bookList];
    newBookList.splice(book_index, 1);
    return newBookList;
  }
  return bookList;
}
```

7. Use the map Method to Extract Data from an Array
```js
// The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

// When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.

const names = users.map(user => user.name);
// The arrow function takes each `user` object from the `users` array and returns only the `name` property of each user

// Answer to the step

// Only change code below this line
const ratings = watchList.map(movie => ({
  title: movie["Title"],
  rating: movie["imdbRating"]
}));
// Only change code above this line
console.log(JSON.stringify(ratings));

// The map() method iterates over each element of the watchList array.

// For each movie object (movie), it returns a new object containing the title and imdbRating properties extracted from the original movie object.

// The arrow function inside map() implicitly returns an object with the specified properties (title and rating).

// Finally, the ratings array contains the transformed objects, each representing a movie with only the title and imdbRating properties.
```

8. Implement map on a Prototype
```js
// Map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Change the code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Chnage the code above this line
  return newArray;
};
```

9. Use Filter Method to Extract Data from an Array
```js
// The filter() method is used to create a new array containing elements from the original array that satisfy a specified condition. It iterates over each element of the array and applies a callback function to determine whether each element should be included in the new array.

// Only change code below this line

const filteredList = watchList.filter(movie => movie.imdbRating > 8).map(movie => ({
  title: movie.Title,
  rating: movie.imdbRating
}));

// Only change code above this line
```

10. Implement the filter method on a prototype
```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};
```

11. Return Part of an Array Using the slice Method
```js
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  return anim.slice(beginSlice, endSlice);
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

12. Remove Elements from an Array Using Slice instead of splice
```js
// array.slice(startIndex, endIndex)    endIndex is not coounted
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}
```

13. Concat Two Arrays Using the Concat Method
```js
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach)
  // Only change code above this line
}
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat([1, 2, 3], [4, 5]);
```

14. Add elements to the End of the Array using concat instead of Push
```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);
  // Only change code above this line
}
const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
```

15. Use Reduce Method to Analyze Data
```js
// array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
function getRating(watchList){
  // Change code below this line
  const averageRating = watchList
  .filter(film => film.Director === "Christopher Nolan")
    .map(film => Number(film.imdbRating))
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  // Change code above this line
  return averageRating;
}
```

16. Use Higher-Order Functions map, filter, or reduce to solve a Complex Problem
```js
const squareList = (arr) => {
  // Only change code below this line
  return arr
          .filter(num => num > 0 && num % parseInt(num) === 0)
          .map(num => Math.pow(num, 2));
  // Only change code above this line
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

17. Sort an Array Alphabetically using the sort method
```js
function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort()
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

18. Return a Sorted Array without changing the Original Array
```js
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
// Only change code below this line
return [].concat(arr).sort((a,b)=>{
    return a-b;
})
// Only change code above this line
}

nonMutatingSort(globalArray);
```

19. Split a String into an Array Using the Split Method
```js
// string.split(separator, limit)

// Separator: Specifies the character, or the regular expression, to use for splitting the string. This parameter is mandatory.

// Limit (Optional): An integer specifying a limit on the number of splits to be found. If omitted or zero, all elements following the limit parameter are omitted and are not included in the returned array.

function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);
  // The regular expression /\W/ matches any non-word character. In this case, it matches the comma, space, and exclamation mark in the string str.

  // Only change code above this line
}

splitify("Hello World,I-am code");
```

20. Combine an Array into a String Using the join Method
```js
function sentensify(str) {
  // Change code below this line
  return str.split(/\W/).join(" ");
  // Change code above this line
}
sentensify("May-the-force-be-with-you");
```

21. Apply Functional Programming to Convert Strings to URL Slugs
```js
const globalTitle = "Winter Is Coming";

// Change code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}
// Change code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
```

22. Use the every Method to Check that Every Element in an Array Meets a Criteria
```js
function checkPositive(arr) {
  // Change code below this line
  return arr.every(val => val > 0);
  // Change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

23. Use the some Method to Check that Any Elements in an Array Meet a Criteria
```js
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
checkPositive([1, 2, 3, -4, 5]);
```

24. Introduction to Currying and Partial Application
```js
function add(x) {
  // Change code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
  // Change code above this line
}
add(10)(20)(30);
```