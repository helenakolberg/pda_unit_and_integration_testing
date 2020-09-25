var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add two numbers', function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(5, calculator.runningTotal);
  });

  it('should be able to subtract', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  });

  it('should be able to divide', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  });

  it('should be able to concatenate multiple number button clicks', function() {
    calculator.numberClick(9);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(5);
    assert.equal(9235, calculator.runningTotal);
  });

  it('should be able to chain multiple operations together', function() {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('/')
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.equal(4, calculator.runningTotal);
  });

});
