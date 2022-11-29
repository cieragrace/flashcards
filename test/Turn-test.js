const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Card');

describe("Turn", function () {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const turn = new Turn("", {});
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const turn = new Turn("", {});
    expect(turn.guess).to.deep.equal(turn.guess)
  }); 

  it('should store card object', function() {
    const turn = new Turn("", {});
    expect(turn.cardObj).to.deep.equal(turn.cardObj)
  }); 
})