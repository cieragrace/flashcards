const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Deck = require("../src/Deck")

describe("Deck", function () {

  it('should be a function', function() {
    let deck = new Deck([{
      "id": 8,
      "question": "What do iterator methods take in as their first argument?",
      "answers": ["callback function", "current element", "an array"],
      "correctAnswer": "callback function"
    }, {
      "id": 9,
      "question": "What does the callback function for find() return?",
      "answers": ["boolean", "array", "object"],
      "correctAnswer": "boolean"
    }, {
      "id": 10,
      "question": "Which iteration method returns the first array element where the callback function returns true",
      "answers": ["find()", "filter()", "forEach()"],
      "correctAnswer": "find()"
    }, {
      "id": 11,
      "question": "Which iteration method returns a new array with all elements that match a given condition?",
      "answers": ["filter()", "find()", "map()"],
      "correctAnswer": "filter()"
    }]);
    expect(Deck).to.be.a('function');
  })

  it('should know how many cards are in the deck', function () {
    let deck = new Deck([{
      "id": 8,
      "question": "What do iterator methods take in as their first argument?",
      "answers": ["callback function", "current element", "an array"],
      "correctAnswer": "callback function"
    }, {
      "id": 9,
      "question": "What does the callback function for find() return?",
      "answers": ["boolean", "array", "object"],
      "correctAnswer": "boolean"
    }, {
      "id": 10,
      "question": "Which iteration method returns the first array element where the callback function returns true",
      "answers": ["find()", "filter()", "forEach()"],
      "correctAnswer": "find()"
    }, {
      "id": 11,
      "question": "Which iteration method returns a new array with all elements that match a given condition?",
      "answers": ["filter()", "find()", "map()"],
      "correctAnswer": "filter()"
    }]);

    deck.countCards()

    expect(deck.CountCards).to.equal(deck.length)
  })
})