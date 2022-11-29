
class Turn {
  constructor(guess, cardObj) {
    this.guess = guess
    this.cardObj = cardObj
  }
  returnGuess() {
    return (this.guess)
  }

  returnCard() {
    return (this.cardObj)
  }
}

module.exports = Turn;