var Warehouse = require('../src/warehouse.js');
var Crate = require('../src/crate.js');

describe('A warehouse', function() {
  
  var mockCrate = new Crate();
  var mockCrates = [[mockCrate, {'x':4, 'y':4}],[mockCrate, {'x':9, 'y':9}]]; 

  beforeEach(function() {
    warehouse = new Warehouse(Crate);
  });

  describe('when initialised', function() {
    it('has dims of 10 x 10 (index starts at 0)', function() {
      expect(warehouse.dims).toEqual([9,9]);
    });

    it('can contain robots', function() {
      expect(warehouse.robots).toEqual([]);
    });

    it('is instantiated with a crate in the centre', function() {
      expect(warehouse.crates[0]).toEqual(mockCrates[0]);
    });

    it('is instantiated with a crate in the top right corner', function() {
      expect(warehouse.crates[1]).toEqual(mockCrates[1]);
    });
  });

  describe('placing crates in the warehouse', function() {
    it('crates can be placed in a location', function() {
      warehouse.placeCrate(mockCrate, 4, 4);
      expect(warehouse.crates).toContain(mockCrates[0]);
    });
  });


  describe('creating crates', function() {
    it('new crates can be created', function() {
      expect(warehouse.createCrate()).toEqual(mockCrate);
    });
  });
});
