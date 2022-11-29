const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Card');

describe("Turn", function () {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
})

it('should have a guess', function() {
  const turn = new Turn(guess);
  expect(turn.guess).to.deep.equal(card.correctAnswer);
});

