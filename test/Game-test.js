const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;
const Round = require('../src/Round');
const Game = require('../src/Game')


describe('Game', function() {
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  })
  
  it('should be a new instance of Game', function() {
    expect(Game).to.be.a('function');
  })
})