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

  describe('movement', function() {
  
    it('responds to an instruction to move', function() {
      expect(robot.move).toBeDefined();
    });

    it('can move north', function() {
      robot.move('N');
      expect(robot.y).toEqual(1);
    });

    it('can move east', function() {
      robot.move('E');
      expect(robot.x).toEqual(1);
    });

    it('can move south', function() {
      robot.move('N');
      robot.move('S');
      expect(robot.y).toEqual(0);
    });
  });
});