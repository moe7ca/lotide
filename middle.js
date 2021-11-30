const middle = function(array) {
  let midArray = Math.floor((array.length / 2));
  //console.log(midArray);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[midArray]];
  } else {
    return ([array[midArray - 1], array[midArray]]);
  }
};

module.exports = middle;
