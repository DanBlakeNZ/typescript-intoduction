const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//reusable type
type Drink = [string, boolean, number];

//Tuple order is important
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// However Tuples aren't necessary that useful
// It can be easy to lose the meaning:
const carSpecs: [number, number] = [400, 3354];

// In an object format it is much clearer to understand whats going on.
const carStats = {
  horsePower: 400,
  weight: 3354,
};
