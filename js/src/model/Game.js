const CARD_VALUE = require('./Utils.js').CARD_VALUE;
const CARD_SUIT = require('./Utils.js').CARD_SUIT;
const numDots = require('./Utils.js').numDots;

class Game {
  constructor(canvas) {
    this.deck = [];
    this.players = [];
    this.communityCards = [];
    this.pot = 0;
    this.lastPot = 0;
    this.state = 'new'; // flop, turn, river
    this.canvas = canvas;
    // this.chips = []
  }

  startNewGame() {
    this.generateDeck();
    this.shuffleDeck();
    this.dealPlayercards();
    this.game.state = 'new';
  }

  generateDeck() {
    this.deck = [];
    let card;
    Object.keys(CARD_SUIT).forEach(suit => {
      Object.keys(CARD_VALUE).forEach(value => {
        card = new Card(
          this.canvas.width * .5,
          this.canvas.height * .5 - (this.canvas.width * .4) * .35,
          0,
          CARD_SUIT[suit],
          CARD_VALUE[value]
        );
        this.deck.push(card);
      })
    });
  }

  shuffleDeck() {
    this.deck = this.deck
      .map(a => [Math.random(),a])
      .sort((a,b) => a[0]-b[0])
      .map(a => a[1]);
  }

  addCommunityCards() {
    let card,index = 0;
    switch(this.state) {
      case 'flop': index = 3; break;
      case 'turn':
      case 'river': index = 1; break;
    }

    // loop index times
    while(index-- > 0) {
      card = this.deck.pop();
      this.communityCards.push(card);
    }
  }

  dealPlayercards() {
    this.game.players.map(p => {
      p.cards.push(this.deck.pop());
      p.cards.push(this.deck.pop());
      return p;
    })
  }

  hasNewPot() {
    return this.pot !== this.lastPot;
  }

  noticedPotSize() {
    this.lastPot = this.pot;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  get potStr() {
    return numDots(this.pot);
  }

}

module.exports = Game;
