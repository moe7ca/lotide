const findKey = (object, cb) => {
  for (let starsNum of Object.keys(object)) {
    if (cb(object[starsNum])) {
      return starsNum;
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ ✅ ✅   Assertion passed: ${actual} === ${expected}");
  } else {
    console.log("🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}");
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
