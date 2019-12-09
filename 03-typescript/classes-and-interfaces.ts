import {playgrounds, getDistance} from './playgrounds';
/**
 * Lets start with interfaces
 * Create a interface: Coordinate
 * The coordinate interface has two properties lat and lng. Both type number
 * 
 * Create one more interface called Playground. 
 * This interface needs four string properties:
 * id, name, description & addressDescription
 * Descript and address description are optional properties
 * Finally a property called position, of type Coordinate
 * 
 * Remeber you need to export them!
 */

 export interface Coordinate {
   lat: number;
   lng: number;
 }

 export interface Playground {
   id: string;
   name: string;
   description?: string | null | undefined;
   addressDescription?: string;
   position: Coordinate;
 }


 // Open the playgrounds.ts file, and explicitly set the type of the array to
 // be a Playground[]. Make sure everything compiles

 // Create a class called playground service. It should have a private instance variable
 // called playgrounds. Assign the playground array to this instance variable.
 // Combining some of the stuff from last time, create a method that takes an id and returns
 // the playground with the given id.

 class PlaygroundService {
   private playgrounds: Playground[] = playgrounds;

   find(id: string): Playground | undefined {
     return this.playgrounds.find(p => p.id === id);
   }

   closest(current: Coordinate): Playground {
     const dFn = getDistance;
      return [...this.playgrounds].sort((a, b)=> dFn(current, a.position) - dFn(current, b.position))[0];
   }
 }

 // Create an instance of this class and call the function finding the playground with id 'legeplads.50'
 // console.log the value.

 const service: PlaygroundService = new PlaygroundService();

 console.log(service.find('legeplads.50'));
 

 // Our current position is 55.867945, 12.3610023. Add a method called 'closest' to the class, that finds the nearest playground.
 // There is an exported function called getDistance in the playgrounds.ts file. Use this to find the playground

 const position: Coordinate = {
   lat: 55.867945,
   lng: 12.3610023
 };

 console.log(service.closest(position));
 
 
 // Write out the number of meters to the playground
 console.log(getDistance(position, service.closest(position).position));


  
