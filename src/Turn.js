

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

  evaluateGuess() {
    if (this.guess === this.cardObj.correctAnswer) {
      return true
    } else {
      return false
    }
  }

  giveFeedback() {
    if (this.guess === this.cardObj.correctAnswer) {
      return 'Correct'
    } else {
      return 'Incorrect'
    }
  }
}
module.exports = Turn;