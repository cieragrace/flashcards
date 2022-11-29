const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require("../src/Turn");
// const data = require("../src/data.js");


describe("Turn", function () {

  it('should be a function', function() {
    let turn = new Turn();
    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', function() {
    let turn = new Turn("", {});
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store a guess', function() {
    let turn = new Turn("", {});
    expect(turn.guess).to.deep.equal(turn.guess)
  })

  it('should store card object', function() {
    let card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    let turn = new Turn("", card);
    expect(turn.cardObj).to.deep.equal(turn.cardObj)
  })

  it('should return the guess', function() {
    let card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    let turn = new Turn("accessor method", card);
    
    var guessToReturn = turn.returnGuess()
    
    expect(guessToReturn).to.equal(turn.guess);
  })

  it('should return the card', function() {
    let card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    let turn = new Turn("iteration method", card)

    var cardToReturn = turn.returnCard()

    expect(cardToReturn).to.equal(turn.cardObj)
  })

  it('should return true if guess and correct answer are the same', function () {
    let card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    let turn = new Turn("mutator method", card)
    let areSame = 

    turn.evaluateGuess()

    expect(areSame).to.be.true;
  })

  it('should return false if guess and correct answer are not the same', function () {
    let card = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")
    let turn = new Turn("accessor method", card)
    let areSame = 

    turn.evaluateGuess()

    expect(areSame).to.be.false;
  })
})