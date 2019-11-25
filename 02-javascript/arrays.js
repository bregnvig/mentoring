/**
 * Work with array!
 * 
 * Use nodemon to monitor this file
 */

const playgrounds = require('./playgrounds').playgrounds;
const getDistance = require('./playgrounds').getDistance;
// Call the function like this getDistance(p1, p2). p1 and p2 are both objects like this {lat, lng}

const myPosition = { lat: 55.681994, lng: 12.591177};

// Using forEach write out all names to the console

// Using map convert playgrounds to an array of names

// Using filter, filter out the playgrounds without description. Remember truthy/falshy?

// Using filter, find all playgrounds that has a name, that includes ørsted

// Using every, check if ever playgrounds has a position

// Using some, check whether some playgrounds are missing a description

// Using find, find the first playground that is within 100m (getDistance returns a distance in meters)
// Use the myPosition for p1, the playgrounds position for p2

// Use reduce to calculate the total distance between you (myPosistion) to all playgrounds

// Putting it all together. Get the 3 nearest playgrounds, sorted by distance, with a description
