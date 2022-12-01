const Turn = require('../src/Turn');

class Round {
  constructor(deck) { 
    this.currentCard = deck.cardsObjs[0]
    this.deck = deck.cardsObjs
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    let feedback = turn.giveFeedback()
    if (feedback.valueOf() === "Incorrect"){
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.turns += 1
    this.currentCard = this.deck[this.turns]
    turn.evaluateGuess()
    return turn.giveFeedback()
  }
}

module.exports = Round;