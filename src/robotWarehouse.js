var RobotWarehouse = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
};

RobotWarehouse.prototype.move = function(direction) {
  var directions = { 'N': [0,1], 'E': [1,0] };
  this.x += directions[direction][0];
  this.y += directions[direction][1];
};

module.exports = RobotWarehouse;