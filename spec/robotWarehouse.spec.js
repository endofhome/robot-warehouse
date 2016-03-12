var RobotWarehouse = require('../src/robotWarehouse.js');

describe('Robot Warehouse', function() {

  beforeEach(function() {
    robot = new RobotWarehouse();
  });

  describe('initialisation', function() {
   
    it('knows its position on x axis', function() {
      expect(robot.x).toEqual(0);
    });

    it('knows its position on y axis', function() {
      expect(robot.y).toEqual(0);
    });
  });
});