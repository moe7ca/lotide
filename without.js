
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(input, exclude) {
  let source = input.slice(); // copys the entire array
  let output = [];
  for (const element of source) {
    if (!exclude.includes(element)) {// if 
     output.push(element)
    }
  }
  return output;
};

console.log(without([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2, 3, 4, 5, 6, 7, 8]));
console.log(without([3], [1]));
console.log(without([10, 11, 12], [10]));
