const assert = require('assert');
const util = require('../src/util');
describe('util', function() {
  describe('#add()', function() {
    it('should return 3 when input 1 and 2', function() {
      assert.equal(util.add(1,2), 3);
    });
  });
});