// Create our own function callback
const years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, func) {
  let output = [];
  for (let element of years) 
    output.push(func(element));
  return output;
}

function calculateAge(element) {
  return 2018 - element;
}

function isFullAge(element) {
  return element >= 18;
}

function maxHeartRate(element) {
  if (element >= 18 && element <= 81)
    return Math.round(206.9 - (0.67 * element));
  return -1;
}

const rates = years.map(calculateAge)
  .map(maxHeartRate);

console.log(rates);