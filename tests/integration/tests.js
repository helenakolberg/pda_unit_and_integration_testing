const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should have the number buttons update the display of the running total', function() {
    element(by.css('#number2')).click();
    element(by.css('#number6')).click();
    running_total = element(by.css('#running_total'));
    expect(running_total.getAttribute('value')).to.eventually.equal('26');
  });

  it('should have the arithmetical operations update the display with the result of the operation', function() {
    element(by.css('#number7')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('28');
  });


});
