const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// You will never expect it reach the end of the function and ever return anything - uncommon.
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring example.
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
  temperature: 20,
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
