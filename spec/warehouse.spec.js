var Warehouse = require('../src/warehouse.js');

describe('A warehouse', function() {
  
  beforeEach(function() {
    warehouse = new Warehouse();
  });
	
  describe('initialisation', function() {
    it('can store crates', function() {
      expect(warehouse.crates).toEqual({});
    });
  });
});
