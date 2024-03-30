1. Sum All Numbers in a Range
```js
function sumAll(arr) {
    // Find the minimum and maximum numbers in the array
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]);
    let sum = 0;
    // Iterate through numbers from min to max and add them to sum
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
```

2. Diff Two Arrays
```js
function diffArray(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    // Filter the combined array to include only elements that are present in one of the arrays but not both
    const symmetricDifference = combinedArray.filter(item => !arr1.includes(item) || !arr2.includes(item));
    return symmetricDifference;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

3. Seek and Destroy
```js
function destroyer(arr, ...toremove) {
  return arr.filter(elem => !toremove.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

4. Wherefore art thou
```js
function whatIsInAName(collection, source) {

const souceKeys = Object.keys(source);

// filter the collection
return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
    if (!obj.hasOwnProperty(souceKeys[i]) ||
        obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
    }
    }
    return true;
});
}
```

5. Spinal Tap Case
```js
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(/\s+|_+/g,"-").toLowerCase()
}

spinalCase('This Is Spinal Tap');
```

6. Pig Latin
```js
function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

translatePigLatin("consonant");
```

7. Search and Replace
```js
function myReplace(str, before, after) {
const strArr = str.split(" ");
const [wordToReplace] = strArr.filter(item => item === before);
const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
    ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);
return strArr.map(item => (item === before ? replacement : item)).join(" ");
}
```

8. DNA Pairing
```js

```

9. Missing Letters
```js

```

10. Sorted Union
```js
function uniteUnique(){
    return [...arguments] .flat() .filter((item, ind, arr) => arr.indexOf(item) === ind); 
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

11. Convert HTML Entities
```js
function convertHTML(str){
    str = str.replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&apos;");

    return str;
}
```

12. Sum all Fibonacci Numbers
```js
function sumFibs(num) {
    let prev = 0;
    let curr = 1;
    let sum = 0;

    while (curr <= num) {
        if (curr % 2 !== 0) {
            sum += curr;
        }
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return sum;
}

console.log(sumFibs(10));
```

13. Sum all Primes
```js

```

14. Smallest Common Multiples
```js
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    let result = arr[0];
    for (let i = arr[0] + 1; i <= arr[1]; i++) {
        result = lcm(result, i);
    }
    return result;
}

console.log(smallestCommons([1, 3]));
```

15. Drop it
```js
function dropElements(arr, func) {
while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
}
return arr;
}

dropElements([1, 2, 3, 4], function(n) {
return n >= 3;
});

dropElements([1, 2, 3], function(n) {return n < 3; });
```

16. Steamroller
```js
function steamrollArray(arr) {
const flattenedArray = [];
for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {

    flattenedArray.push(...steamrollArray(arr[i]));
    } else {

    flattenedArray.push(arr[i]);
    }
}
return flattenedArray;
};

steamrollArray([1, [2], [3, [[4]]]]);
```

17. Binary Agents
```js
function binaryAgent(str) {
var biString = str.split(" ");
var uniString = [];

for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
}

return uniString.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
```

18. Everything to be true
```js
function truthCheck(collection, pre) {
return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
});
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));
```

19. Arguments Optional
```js
function addTogether() {
const [first, second] = arguments;
if (typeof(first) !== "number")
    return undefined;
if (arguments.length === 1)
    return (second) => addTogether(first, second);
if (typeof(second) !== "number")
    return undefined;
return first + second;
}

addTogether(2,3);
```

20. Make a Person
```js
const Person = function(first, last) {
  let firstName = first;
  let lastName  = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function(first) {
    return firstName = first;
  };

  this.setLastName = function(last) {
    return lastName = last;
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());
```

21. Map the Debris
```js
function orbitalPeriod(arr) {
const GM = 398600.4418;
const earthRadius = 6367.4447;
return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
});
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```