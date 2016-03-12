var Robot = require('../src/robot.js');

describe('Robot Warehouse', function() {

  beforeEach(function() {
    robot = new Robot();
  });

  describe('initialisation', function() {
    it('knows its position on x axis', function() {
      expect(robot.x).toEqual(0);
    });

    it('knows its position on y axis', function() {
      expect(robot.y).toEqual(0);
    });
  });

  describe('simple movement', function() {
    it('responds to an instruction to move', function() {
      expect(robot.move).toBeDefined();
    });

    it('responds to only one instruction to move', function() {
      expect(robot.moveOne).toBeDefined();
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

    it('can move west', function() {
      robot.move('E');
      robot.move('W');
      expect(robot.x).toEqual(0);
    });
  });

  describe('limiting the robots movement', function() {
    it('cannot move outside south or west of the warehouse', function() {
      expect(function() {robot.move('S');}).toThrowError('Robot cannot move outside of the warehouse');
    });

    it('cannot move outside north or east of the warehouse', function() {
      expect(function() {robot.move('N N N N N N N N N N');}).toThrowError('Robot cannot move outside of the warehouse');
    });
  });

  describe('accepting multiple movement instructions', function() {
    it('can respond to 2 instructions to move in different directions', function() {
      robot.move('N E');
      expect(robot.x).toEqual(1);
      expect(robot.y).toEqual(1);
    });
  });
});
