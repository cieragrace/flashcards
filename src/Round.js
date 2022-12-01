const Turn = require('../src/Turn');

class Round {
  constructor(deck) { 
    this.currentCard = deck.cardsObjs[0]
    this.deck = deck.cardsObjs
    this.turns = 0
    this.incorrectGuesses = []
    this.correctPercent = 0
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
    return correctPercent
  }

  calculatePercentCorrect() {
    let percentCorrect = (this.turns-this.incorrectGuesses.length)/this.turns * 100 
    return parseInt(percentCorrect.toFixed(0))
  }

  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;