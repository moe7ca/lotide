const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ ✅ ✅   Assertion passed: ${actual} === ${expected}");
  } else {
    console.log("🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}");
  }
};

const countLetters = function(letters){
  let count = {};
  for (const I of letters) {
    if (count[I]) {
      count[I] += 1;
    } else {
      if (I !== " ") {
        count[I] = 1
      }
    }
  }
  return count;
};

console.log(countLetters("LHL"));
console.log(countLetters("bootcamp"));
