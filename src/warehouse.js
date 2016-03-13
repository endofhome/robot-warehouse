var Warehouse = function(crateKlass) {
  this.dims = [9,9];
  this.robots = [];
  this.crateConstructor = crateKlass;
  this.crates = [];
  this.instantiate = this.instantiateCrates();
};

Warehouse.prototype.instantiateCrates = function() {
  var crate1 = this.createCrate(),
      crate2 = this.createCrate();
  this.placeCrate(crate1, 4, 4);
  this.placeCrate(crate2, 9, 9);
};

Warehouse.prototype.placeCrate = function(crate, x, y) {
  this.crates.push([crate, {'x':x,'y':y}]);
};

Warehouse.prototype.createCrate = function() {
  return new this.crateConstructor;
};

module.exports = Warehouse;
