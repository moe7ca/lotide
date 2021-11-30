const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  it("should return 3 from [Yo Yo, hello, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Yo Yo", "hello", "Lighthouse", "Labs"]).length, 3);
  });

});
