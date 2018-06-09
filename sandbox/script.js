function countOccurences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error('Invalid array.');
  return array.reduce((accumulator, currentValue) => {
    const occurence = (searchElement === currentValue) ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

try {
  const numbers = [1, 2, 3, 4, 1];
  const count = countOccurences('numbers', 1);
  console.log(count);
} catch(error) {
  alert(error);
}