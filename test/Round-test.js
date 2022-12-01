const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Round = require('../src/Round');


describe('Round', function() {
//   let card1;
//   let card2;
// beforeEach(() =>{
// card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
})
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  })

  it('should return current card in play', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);
    let round = new Round(deck)
    
    round.returnCurrentCard()
    
    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should keep track of number of turns', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    let turn = new Turn('sea otter', card1)
    let turn2 = new Turn('spleen', card2)
    const deck = new Deck([card1, card2, card3])
    let round = new Round(deck)

    round.takeTurn(turn.guess)
    round.takeTurn(turn2.guess)

    expect(round.turns).to.equal(2)
  })

  it('should evaluate if guess is correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  
    const deck = new Deck([card1, card2, card3])
    let round = new Round(deck)
    let turn = new Turn('sea otter', card1)

    round.takeTurn(turn.guess)

    expect(turn.guess).to.equal(card1.correctAnswer)
  })

  it('should evaluate if guess is incorrect', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = new Deck([card1, card2, card3])
    let round = new Round(deck)
    let turn = new Turn('capybara', card1)
    console.log(round)
    round.takeTurn(turn.guess)


    expect(turn.guess).to.not.equal(card3.correctAnswer)
  })

  it('should store incorrect answers', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = new Deck([card1, card2, card3])
    let round = new Round(deck)
    // let turn = new Turn('pug', card1)

    // expect(round.incorrectGuesses).to.be.an('array').that.is.empty
    
    round.takeTurn('pug', card1)

    expect(round.incorrectGuesses).to.eql([card1.id])


  })
})

  // it('should return Correct if guess and correct answer match', function() {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  //   const deck = new Deck([card1, card2, card3])
  //   let round = new Round(deck)
  //   let turn = new Turn('sea otter', card1)

  //   round.takeTurn()
    
  //   expect(round.takeTurn()).to.equal("Correct")
  // })