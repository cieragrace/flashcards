
class Deck {
  constructor(cardsObjs) {
    this.cardsObjs = cardsObjs
  }
  countCards() {
  return this.cardsObjs.length  
  }
}
module.exports = Deck;