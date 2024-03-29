1. Create a basic JavaScript Object
```js
let dog = {
  name: "Brugu",
  numLegs: 4
};
```

2. Use Dot Notation to Access the Properties of an Object
```js
let dog = {
  name: "Brugu",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);
```

3. Create a Method of an Object
```js
// Methods are properties that are functions. This adds different behavior to an object. 
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
  }
};
console.log(dog.sayLegs())
```

4. Make Code More Usable with this Keyword
```js
// In the current context, this refers to the object that the method is associated with: dog. If the object's name is changed to duck, it is not necessary to find all the references to dog in the code. It makes the code reusable and easier to read.
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
console.log(dog.sayLegs());
```

5. Define a Constructor Function
```js
// Constructors are functions that create new objects. They define properties and behaviours that will belong to the new object.
// Constructors follow a few conventions:

// -> Constructors are defined with a capitalized name to distinguish them from other functions that  are not constructors.
// -> Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
// -> Constructors define properties and behaviors instead of returning a value as other functions might.
function Dog(){
  this.name = "Brugu";
  this.color = "Black";
  this.numLegs = 4;
}
```

6. Use a Constructor to Create Objects
```js
// The new operator is used when calling a constructor.
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();
```

7. Extend Constructors to  receive Arguments
```js
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("Pluto", "Black");
// Here we can change the properties of the constructor function as many times we want with lesser lines of code and with compactness in the code
```

8. Verify an Object's Constructor with instanceof
```js
// Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Only change code below this line
let myHouse = new House(4);
myHouse instanceof House;
```

9. Understand Own Properties
```js
function Bird(name) {
this.name = name;
this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for(let property in canary){
if(canary.hasOwnProperty(property)){
    ownProps.push(property);
}
}
console.log(ownProps);
```

10. Use Prototype Properties to Reduce Duplicate Code 
```js
function Dog(name) {
this.name = name;
}
Dog.prototype.numLegs = 2;
// Only change code above this line
let beagle = new Dog("Snoopy");
```

11. Iterate over all Properties
```js
// Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

// Answer to the step
function Dog(name) {
this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
// Only change code below this line
for(let property in beagle){
if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
}else{
    prototypeProps.push(property);
}
}
console.log(ownProps);
console.log(prototypeProps);
```

12. Understand the Constructor Properties
```js
function Dog(name) {
this.name = name;
}
// Only change code below this line
function joinDogFraternity(candidate) {
if(candidate.constructor === Dog){
    return true;
}else{
    return false;
}
```

13. Change the Prototype to a New Object
```js
function Dog(name) {
this.name = name;
}
Dog.prototype = {
// Only change code below this line
numLegs: 2,
eat: () => {console.log("eat")},
describe: () => {console.log("name is " + this.name)}
};
```

14. Remember to Set the Constructor Property when Changing the Prototype
```js
function Dog(name) {
  this.name = name;
}
// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

15. Understand where an Object's Prototype Comes From
```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);
```

16. Understand the Prototype Chain
```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // yields true
// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
```

17. Use Inheritance So You Don't Repeat Yourself
```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function(){
    console.log("nom nom nom");
  }
};
```

18. Inherit Behaviours from a Supertype
```js
// Ways of creating a parent supertype
// 1(not preferred). let animal = new Animal(); 
// 2(preffered). let animal = Object.create(Animal.prototype);
function Animal() {}
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
// Only change code below this line
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
```

19. Set the Child's Prototype to an Instance of the Parent
```js
function Animal() {}
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() {}
// Change code below this line
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
```

20. Reset an Inherited Constructor Property
```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Only change code below this line
let duck = new Bird();
let beagle = new Dog();
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
```

21. Add Methods After Inheritance
```js
function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};
let beagle = new Dog();
beagle.eat();
beagle.bark();
```

22. Override Inherited Methods
```js
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Only change code below this line
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};
// Only change code above this line
let penguin = new Penguin();
console.log(penguin.fly());
```

23. Use a Mixin to Add Common Behaviour Between Unrelated Objects 
```js
let bird = {
  name: "Donald",
  numLegs: 2
};
let boat = {
  name: "Warrior",
  type: "race-boat"
};
// Only change code below this line
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Both bird and boat can glide");
  }
};
glideMixin(bird);
glideMixin(boat);
```

24. Use Closure to Protect Properties Within an Object from Being Modified Externally
```js
function Bird() {
  let weight = 15;
  this.getWeight = () => weight;  
}
```

25. Understand the Immediately Invoked Function Expression(IIFE)
```js
(function() {
  console.log("A cozy nest is ready");
})();
```

26. Use an IIFE to Create a Module
```js
let funModule = ( () => {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = () => { true; };
    },
    singMixin: (obj) => {
      obj.sing = () => { console.log("Singing to an awesome tune"); }
    }
  }
})();
```