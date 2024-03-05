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

```