const nums = [1,2,3,4,5,1,3,8];

const test = nums
  .filter(num => num > 2)
  .map(num => ({ value: num }))
  .filter(obj => obj.value > 3)
  .map(obj => obj.value);

console.log(test);