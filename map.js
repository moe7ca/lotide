
const map = (array, cb) => {

  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
};

const assertArraysEqual = function(givenArr, expectedArr) {
  if (eqArrays(givenArr, expectedArr) === true) {
    console.log("✅ ✅ ✅   Assertion passed: ${actual} === ${expected}");
  } else {
    console.log("🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}");
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];
const endResult = [ 'g', 'c', 't', 'm', 't' ];
assertArraysEqual(map(words, word => word[0]), endResult);
