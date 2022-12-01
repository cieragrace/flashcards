

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
      console.log(this.cardObj.correctAnswer)
      return true
    } else {
      return false
    }
  }

  giveFeedback() {
    // console.log(this.cardObj.correctAnswer)
    if (this.evaluateGuess() === true) {
      return 'Correct'
    } else {
      return 'Incorrect'
    }
  }
}
module.exports = Turn;