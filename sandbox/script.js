const arr1 = [1, 2, {id:1}];

const arr2 = [...arr1];

arr2[2].id = 10;
arr2[1] = 10;
console.log(arr1);
console.log(arr2);