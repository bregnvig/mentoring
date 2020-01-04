// class MySimpleClass {
//   a = 'a';
//   protected b = 'b';
//   private c = 'c';

//   something(): string {
//     return this.a;
//   }
// }
interface ICar {
  changeTyres(tyres: string[]): void
}

class Car implements ICar {
  private tyres: string[]
  constructor(public name: string, tyres: string[], engine: number) {
    this.tyres = tyres;
  }

  changeTyres(tyres: string[]) {
    // this.e
    this.tyres = tyres;
  }
}

const car = new Car('sdfsd', ['a', 'b'], 57);

car.changeTyres(['b']);


interface IAddress {
  readonly id?: number;
  address1: string;
  address2?: string;
  address3?: string;
  zipCode: string;
  city: string;
}

abstract class AbstractAddress implements IAddress {
  id?: number | undefined;  
  address1: string;
  address2?: string | undefined;
  address3?: string | undefined;
  zipCode: string;
  city: string;

  constructor({id, address1, address2, address3, zipCode, city}: IAddress) {
    this.id = id;
    this.address1 = address1
    this.address2 = address2
    this.address3 = address3
    this.zipCode = zipCode;
    this.city = city;
  }

  abstract getAddress(): string;
}

class Address extends AbstractAddress {
  
  getAddress(): string {
    return `${this.address1}, ${this.zipCode} ${this.city}`;
  }

}

const address = new Address({id: 1, address1: 'Nørrevænget 76', zipCode: '3500', city: 'Værløse'});

console.log(address.getAddress());
