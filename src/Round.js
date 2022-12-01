const Turn = require('../src/Turn');

class Round {
  constructor(deck, guess) { 
    this.deck = deck
    this.turns = 0
  }
  returnCurrentCard() {
    return this.deck.cardsObjs[0]
  }

  takeTurn(guess, cardObj) {
    let turn = new Turn(guess, cardObj)
    this.turns += 1
    // return turn.giveFeedback()
    // }
  }
}
module.exports = Round;