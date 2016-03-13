var Crate = require('../src/crate.js');

describe('a crate', function() {

  beforeEach(function() {
    crate = new Crate();
  });

  describe('initialisation', function() {
    it('has a typeof crate', function() {
      expect(crate.objectType).toEqual('crate');
    });
  });
});
