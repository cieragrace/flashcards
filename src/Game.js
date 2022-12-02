const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.cards = []
    this.deck = {}
    this.round = {}
  }
  
  start() {
    this.createsCards()
    this.putCardsInDeck()
    this.createNewRound()
    this.printMessage(this.deck, this.round)
    this.printQuestion(this.round)
    
  }

  createsCards() {
  this.cards = prototypeQuestions.map((card) => {
    return new Card(card.id, card.question, card.answers, card.correctAnswer)
  })

  }

  putCardsInDeck() {
    this.deck = new Deck(this.cards)
  }

  createNewRound() {
    this.round = new Round(this.deck)
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;