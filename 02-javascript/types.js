/** TYPES */

/**
 * Defines some variable of these types:
 * number
 * string
 * boolan
 * object
 * array
 * null
 * undefined
 * 
 * Use console.log for output to terminal
 * 
 */

 const myNumber = 42;
 const myString = 'Hello';
 const myBoolean = true;
 const myObject = {};
 const myArray = [];
 const myNull = null;
 const myUndefined = undefined;

// What is the typeof the null variable?
console.log(typeof myNull);

// What is the typeof the array variable?
console.log(typeof myArray);

// What is the typeof the undefined variable
console.log(typeof myUndefined);

// What is string + object
console.log(myString + myObject);

// What is string * object
console.log(myString * myObject);

// What is null + undefined
console.log(myNull + myUndefined);

// What is true + 5
console.log(true + 5);

// What is false + 1
console.log(false + 1);

// Convert the object to a boolean
console.log(!!myObject);

// Write out hello world using the null variable, 'Hello world' and ||
console.log(myNull || 'Hello world');

// What else can you think of? :-)
console.log(myArray == 0);
console.log(myArray === 0);
