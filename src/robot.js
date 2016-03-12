var Robot = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
};

Robot.prototype.moveOne = function(direction) {
  var directions = { 'N': [0,1], 'E': [1,0], 'S': [0,-1], 'W': [-1,0] };
  var newXPosition = this.x += directions[direction][0];
  var newYPosition = this.y += directions[direction][1];
  if ((newXPosition>=0) && (newYPosition>=0)) {
    this.x = newXPosition;
    this.y = newYPosition;
  } else {
    throw new Error('Robot cannot move outside of the warehouse');
  }
};

Robot.prototype.move = function(directionsString) {
  var directionsArray = directionsString.split(' ');
  for(var i=0;i<directionsArray.length;i++) {
    this.moveOne(directionsArray[i]);
  }
};

module.exports = Robot;
