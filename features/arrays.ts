const carMakers = ['ford', 'toyota', 'chevy'];
// :string[] is inferred above
const carMakers1: string[] = ['ford', 'toyota', 'chevy'];

// : dates[] is inferred
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['firebird']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible elements.
carMakers.push(100);

// Help with 'map'.
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible Types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push(new Date());
importantDates.push('10-10-2020');
importantDates.push(100); // Error
