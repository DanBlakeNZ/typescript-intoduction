// Public
// Method can be called anywhere anytime.Default.

//Private
// Method can ONLY be called by other methods in THIS class. This DOES NOT add any extra application security. Restricts the methods other developers can call, can help with complicated classes that could break something.

//Protected
// This method can be called by other methods in THIS class, or by other methods
// in child classes.

class Vehicle {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }

  // The above can be written as:
  constructor(public color: string) {}

  protected honk(): void {
    console.log('honk honk');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // no public for color as already defined in the parent constructor Vehicle.
    // super() calls the constructor() method in the parent class (Vehicle).
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(4, 'red');
car.startDrivingProcess(); // 'vroom'
