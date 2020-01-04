/**
 * Working simple TypeScript 
 */

// Create an array of type string. Add two string to the array when you create it

const myArray = ['a', 'b'];


// Push a third string to the array

myArray.push('c');

// Push a number to the array. Save the fil and see the error message

// myArray.push(17);

// Create two strings using let. One with explicit type, and one without. Notice if you hover you
// mouse cursor above the one without an explicit type, it will still say string as type

let myExplicitString: string = 'My explicit string';
let myImplicitString = 'My implicit string';

// Create an object with two properties, name and descriptiion. Name is 'Legepladsen på Sundbyvester Plads',
// description is 'I 2012 ombygges legepladsen og bliver en plads for store børn'

const minimalPlayground = {
  name: 'Legepladsen på Sundbyvester Plads',
  description: 'I 2012 ombygges legepladsen og bliver en plads for store børn'
};

// Try assigning a number to the name
// minimalPlayground.name = 17;

// Create a tuble a string and a number. Try to assign different value to it, and observe the compiler
let myTuble: [string, number] = ['a', 42];

myTuble[1] = 12;
// myTuble[1] = '12';

myTuble[0] = 'New value';
// myTuble[0] = 17;


/**
 * Everything is a type
 */

// Remeber creating an implicit string using let? 
// Now create an implicit string using const! How did the type change and why?

const myConstantString = 'My constant string';


// Create an object of implicit type, with property a and b. Assign any value to the properties.

const implicitObject = {
  a: 'a',
  b: 'b'
};

// Try to assign a new property c to the object?. Why didn't it work?
// implicitObject.c = 'C';

// Copy the implicit object, but this time use the explicit type object. 
// Can you add property c now? Why is that?

const objectObject: object = {
  a: 'a',
  b: 'b'
} as const;

// objectObject.c = 'sdsdf';

