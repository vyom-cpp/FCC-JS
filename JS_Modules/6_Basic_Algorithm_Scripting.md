1. Convert Celsius to Fahrenheit
```js
function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
convertCtoF(30);
```

2. Reverse a String
```js
function reverseString(str) {
  let newString = "";
  for(let i=str.length-1; i>= 0; i--){
    newString += str[i];
  }
    return newString;
}

reverseString("hello");
function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";
 
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
 
    // Step 3. Return the reversed string
    return newString; // "olleh"
}
 
reverseString('hello');
```

3. Factorialize a Number
```js
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

factorialize(5);
```

4. Find longest word in the string
```js
function findLongestWordLength(str) {
   str = str.match(/[a-zA-Z0-9]+/gi); 
   let largest = "";
   for(let i = 0; i < str.length; i++){  
        if(str[i].length > largest.length){ 
        largest = str[i] 
        } 
    }  
   return largest.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

5. Return Largest Numbers in Array
```js
function largestOfFour(arr) {
  let result = [];
  for(let i=0; i<arr.length; i++){
    let individualArray = arr[i];
    let individualArrayHighest = -Infinity;
    for(let j=0; j<individualArray.length; j++){
      if(individualArrayHighest < individualArray[j]){
        individualArrayHighest = individualArray[j];
      }
    }
    result.push(individualArrayHighest);
  }
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
```

6. Confirm the Ending
```js
function confirmEnding(str, target) {
  let targetLength = target.length;
  let targetToMatch = str.slice(str.length - targetLength, str.length);
  // The slice(start, end) method selects from a given start, up to a (not inclusive) given end.
  if(targetToMatch == target){
    return true;
  }
  else {
    return false;
  }
}
console.log(confirmEnding("Connor", "n"));
```

7. Repeat a string after string
```js
function repeatStringNumTimes(str, num) {
  if(num <= 0){
    return "";
  } 
  let repeatString = "";
  for(let i=0; i<num; i++){
    repeatString = repeatString + str;
  }
  return repeatString;
}
console.log(repeatStringNumTimes("abc", 3));
```

8. Truncate a String
```js
function truncateString(str, num) {
  if(num >= str.length){
    return str
  }
  return str.slice(0, num) + "...";
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

9. Finders Keepers
```js
function findElement(arr, func) {
  for(let i=0; i<arr.length; i++){
    // console.log(arr)
    if(func(arr[i]) == true){
      return arr[i];
      // console.log(arr[i]);
    }
  }
  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);
```

10. Boo who
```js
function booWho(bool) {
  if(typeof bool == "boolean"){
    return true
  }
  return false;
}
booWho(null);
```

11. Title case a sentence
```js

```