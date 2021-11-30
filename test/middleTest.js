const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("should return empty array when given has 2 or less elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return 3 from [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [3, 4] from [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});
