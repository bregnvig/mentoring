/**
 * Work with array!
 * 
 * Use nodemon to monitor this file
 */

const playgrounds = require('./playgrounds').playgrounds;
const getDistance = require('./playgrounds').getDistance;

const myPosition = { lat: 55.681994, lng: 12.591177};

// Using forEach write out all names to the console

playgrounds.forEach(p => console.log(p.name));

// Using map convert playgrounds to an array of names
playgrounds.map(p => p.name).forEach(name => console.log(name));

// Using filter, filter out the playgrounds without description. Remember truthy/falshy?
const withPlaygrounds = playgrounds.filter(p => p.description);
console.log(`${withPlaygrounds.length} with description. ${playgrounds.length} without`);

// Using filter, find all playgrounds that has a name, that includes ørsted
console.log(playgrounds.filter(p => p.name.toLocaleLowerCase().includes('ørsted')))

// Using every, check if ever playgrounds has a position
console.log('Every playground has a position', playgrounds.every(p => p.position));

// Using some, check whether some playgrounds are missing a description
console.log('Are some playgrounds missing description', playgrounds.some(p => !p.description));

// Using find, find the first playground that is within 100m (getDistance returns a distance in meters)
// Use the myPosition for p1, the playgrounds position for p2
// Call the function like this getDistance(p1, p2). p1 and p2 are both objects like this {lat, lng}
console.log(playgrounds.find(p => getDistance(myPosition, p.position) < 100));

// Use reduce to calculate the total distance between you (myPosistion) to all playgrounds
console.log(playgrounds.reduce((acc, p) => acc + getDistance(myPosition, p.position), 0));

// Putting it all together. Get the 3 nearest playgrounds, sorted by distance, with a description
const result = playgrounds.filter(p => p.description)
  .sort((a, b) => getDistance(myPosition, a.position) - getDistance(myPosition, b.position))
  .slice(0, 3);
console.log(result);