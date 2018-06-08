// Max of two numbers
function maxNumber(num1, num2) {
  return (num1 > num2) ? num1 : num2;
}

// Landscape or Portrait
function isLandscape(width, height) {
  return (width > height);
}

// FizzBuzz
function fizzBuzz(input) {
  if (typeof input !== 'number') return 'Not a number';
  if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fizz';
  if (input % 5 === 0) return 'Buzz';
  return input;
}

// Demerit Points
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) return 'Ok';

  const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
  if (demeritPoints >= 12) return 'License suspended';
  return demeritPoints;
}

// Even and Odd
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
}

// Count Truthy
// const array = [0, undefined, null, '', false, 1, 2, 3]; 
function countTruthy(array) {
  let counter = 0;
  for (let value of array)
    if (value) counter++;
  return counter;
}

// String properties
// const movie = {
//   title: 'Deadpool 2',
//   releaseYear: 2018,
//   rating: 8.2,
//   director: 'Director that killed John Wicks dog'
// };
function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === 'string')
      console.log(key, obj[key]);
}

// Sum multiples
function sumMultiples(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) 
    if (i % 3 === 0 || i % 5 === 0) 
      sum += i;

  return sum;
}

// Grade
// const array = [80, 80, 50];

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array)
    sum += value;
  return sum / array.length;
}

// Show Stars
function showStars(rows) {
  let pattern = '';
  for (let row = 1; row <= rows; row++) {
    pattern += '*';
    console.log(pattern);
  }
}

// Show Prime Numbers
function showPrimes(limit) {
  for (let number = 2  ; number < limit; number++)
    if (isPrime(number))
      console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0)
      return false;
      
  return true;
}

// Create array for 2 arranged numbers
function arrayFromRange(min, max) {
  const output = [];
  for (min; min <= max; min++)
    output.push(min);
  return output;
}

// Remove element in an array
function except(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element))
      output.push(element);
  }
  return output;
}

// Move element 
function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid.');
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

// Find occurence
function countOccurences(array, searchElement) {
  return array.reduce((accumulator, currentValue) => {
    const occurence = (searchElement === currentValue) ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}