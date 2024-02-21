1. Using the Test Method
```js
// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

// Answer of the step
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```

2. Match Literal Strings
```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

// This test call will return true. Any other forms of Waldo will not match. For example, the regex /Waldo/ will not match waldo or WALDO.
```

3. Match a Literal String with Different Possibilities
```js
// Using regexes like /coding/, you can look for the pattern coding in another string. It is powerful to search single strings, but it is limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |. `/yes|no|maybe/`

// Answer to the step
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```

4. Ignore Case While Matching
```js
let myString = "freeCodeCamp";
let fccRegex = /FreeCodecamp/i; // Change this line
let result = fccRegex.test(myString);

// Adding the flag i after the the fccRegex, it will not be case sensitive.
```

5. Extract Matches
```js
// So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

// Here's an example:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

// Here the first match would return ["Hello"] and the second would return ["expressions"].
// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');

// Answer to the step
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```

6. Find More Than the First Match
```js
// To extract pattern more than once, you can use the global search flag: g.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /TwInKlE/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

// Both flags i and g are declared together.
// Here match returns the value ["Twinkle", "Twinkle"].
```

7. Match Anything with WildCard Period
```js
// The wildcard character . will match any one character. The wildcard is also called dot and period. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result = unRegex.test(exampleStr);

//  It matches the strings run, sun, fun, pun, nun, and bun.
```

8. Matching Single Character with Multiple Possibilities
```js
// You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

// You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

// For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

// Answer to the step
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```

9. Match Letters of the Alphabet
```js
// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

// Inside a character set, you can define a range of characters to match using a hyphen character: `-`

// Answer to the step
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```

10. Match Numbers and Letters of the Alphabet
```js
// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

// Answer to the step
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```

11. Match Single Characters
```js
// A set of characters that you do not want to match are called negated character sets.

// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

// For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

// Answer to the step
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```

12. Match Characters that Occur One or More Times
```js
// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

// You can use the + character to check if that is the case

// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

// Answer to the Step
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);
```

13. Match Characters that Occur Zero or More Times
```js
// Change the sign from + to * from the above step
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

14. Find Characters with Lazy Matching
```js
// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

// You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

// Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

// However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

// Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

// Answer to the step
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```

15. Find One or More Criminals in a Hunt
```js
let reCriminals = /C+/; // Change this line
```

16. Match Beginning String Patterns
```js
// Regular Expressions also used to search for patterns in specific positions in strings.

// Outside of a character set, the caret is used to search for patterns at the beginning of strings.

// Answer to the step
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```

17. Match Ending String Patters
```js
// There is also a way to search for patterns at the end of strings.

// You can search the end of strings using the dollar sign character $ at the end of the regex.

// Answer to the step
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```

18. Match All Letters and Numbers
```js
// `\w` is the shortcut for the classes [A-Za-z0-9_]. It matches both upper and lower case letters plus numbers.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

19. Match Everything But Letters and Numbers
```js
// The opposite of `\w` is `\W` means `\W` = [^A-Za-z0-9_ ]
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

20. Match all numbers
```js
// The shortcut to look for digit characters is `\d` = [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```

21. Match All Non-Numbers
```js
// The opposite of `\d` is `\D` = [^0-9]
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```

22. Restrict Possible Usernames
```js
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)

// ^ asserts the start of the string.
// [a-z] matches any lowercase letter from 'a' to 'z'.
// [a-z]+\d* matches one or more lowercase letters followed by zero or more digits.
// $ asserts the end of the string.
// | is the alternation operator, allowing for multiple patterns to be matched.
// ^[a-z]\d\d+$ matches a lowercase letter followed by exactly two or more digits.
```

23. Match Whitespaces
```js
// You can also match the whitespace or spaces between letters using `\s`

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
```

24. Match Non-Whitespace Characters
```js
// Search for non-whitespace using `\S`

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```

25. Specify Upper and Lower Number of Matches
```js
// To match a certain range of patterns, Quantity Specfiers are used with curly braces {}

// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.
let multipleA = /a{3,5}h/;

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
```

26. Specify Only the Lower Number of Matches
```js
// To match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```

27. Specify Exact Number of Matches
```js
// To match only the word hah with the letter a 3 times, your regex would be /ha{3}h/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/gi; // Change this line
let result = timRegex.test(timStr);
```

28. Check for All or None
```js
// You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
```

29. Positive and Negative Lookahead
```js
// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

// There are two kinds of lookaheads: positive lookahead and negative lookahead.

// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// A negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

// Answer to the step

let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
```

30. Check For Mixed Grouping of Characters
```js
// Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

// If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

// Then check whether the desired string groups are in the test string by using the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr); // It will return true

// Answer to the step
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
```

31. Reuse Patterns Using Capture Groups
```js
//  Capture groups can be used to find repeated substrings.

// Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.

// Answer to the step
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
```

32. Use Capture Groups to Search and Replace
```js
// Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

// You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

// The replace call would return the string The sky is blue..

// You can also access capture groups in the replacement string with dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

// The replace call would return the string Camp Code.

// Answer to the step
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```

33. Remove Whitespaces from Start and End
```js
//  The `String.prototype.trim()` method would work here.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
```