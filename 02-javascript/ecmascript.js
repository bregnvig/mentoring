/**
 * Work with ecmascript 2015 features!
 * 
 * Use nodemon to monitor this file
 */

 /** LET & CONST */

// Try to define two variable using 'var'. Give the two variable the name of es5
// Asign the variable different values
// console log the value of es5

var es5 = 5;
var es5 = 9;

console.log(es5);

// Try to do the same using let, but call the variable es2015. Remember to save the file and watch nodemon

let es2015 = 5;
// let es2015 = 9; This will throw an Identifier 'es2015' has already been declared

console.log(es2015);

// Working with const
// Create a const myNumber and assign value to it. On the next line assign a new value to the const

const myNumber = 42;
// myNumber = 17; This will throw an Assignment to constant variable.

// Create const myObject and assign an empty object to it. Add a property; myObject.a = 'My A';
// Did that work? And why did it happen?

const myObject = {};
myObject.a = 'My A';

// Working with scopes
// Create a scope using { // mycode }. In the scope create a constant 'a' and assign it a value. 
// Is it possible to create a new constant outside the scope also called 'a'?

{
  const a = 42;
}
const a = 43;


/** STRINGS */

// console.log a statement using the backtick strings with at least one template variable
const name = 'Flemming';

console.log(`Hello ${name}`);

// console.log a multiline backtick string

console.log(`
  This is line 1.
  This is line 2
  This is line 3.
  ${name} did this!
`);

/** ARROW FUNCTIONS */

// Create an add function using the arrow function syntax. log out 20 + 22, using this function
const add = (a, b) => a + b;
console.log(add(20, 22));

/** REST AND SPREAD */
// Create an add function that add all the numbers given as parameteres (Think rest)
const addAll = (...numbers) => numbers.reduce((acc, number) => acc + number, 0);
console.log(addAll(10, 10, 10, 10, 2));

// Copy an array using the spread. Call the copy for myCopy
const initialArray = ['a', 'b', 'c'];
const myCopy = [...initialArray];

// Change the first element by myCopy[0] = 'A';
myCopy[0] = 'A';

// Make sure you have made a copy by console.log both arrays
console.log(initialArray);
console.log(myCopy);

/** DESTRUCTURING */
const myWrapper = ({pre, post, text}) => console.log(`${pre}${text}${post}`)

// Call the above function and make it log -HELLO_
console.log(myWrapper({pre: '-', text: 'HELLO', post: '_'}));

/** CLASSES */

// Create a class called Animal. The constructor takes one paramters 'name'. Add a method called 
// getName

class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// Create an instance of the class, and console.log the name
const cat = new Animal('Cat');
console.log(cat.getName());

// Can you assign new parameters on the fly?
cat.miaw = 'Miaw';

// Create Cat class that extends from Animal. Add a second constructor paramter called sound.
// Create a method called getSound that returns the sound.
class Cat extends Animal {
  constructor(name, sound) {
    super(name);
    this.sound = sound;
  }

  getSound() {
    return `This cat says ${this.sound}`;
  }
}

const realCat = new Cat('Feline', 'Miaw');
console.log(realCat.getName(), realCat.getSound());
