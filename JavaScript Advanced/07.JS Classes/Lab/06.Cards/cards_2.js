  let suits = {
    SPADES: '\u2660',
    HEARTS: '\u2665',
    DIAMONDS: '\u2666',
    CLUBS: '\u2663'
  }

  class Card {
    constructor(newFace, newSuit) {
      let face;
      let suit;

      this.getFace = function() {
        return face;
      }
      this.setFace = function(val) {
        if (!Card.validFaces.includes(val)) {
          throw new Error('Invalid face!');
        }
        face = val;
      };
      this.getSuit = function() {
        return suit;
      };
      this.setSuit = function(val) {
        if (!Object.keys(suits).map(k => suits[k]).includes(val)) {
          throw new Error('Invalid suit!');
        }
        suit = val;
      };
      this.setFace(newFace);
      this.setSuit(newSuit);
    }
    toString() {
      return this.getFace() + this.getSuit();
    }
  }
  let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  validFaces.push = undefined;

  Object.defineProperty(Card, 'validFaces', {
    value: validFaces,
    enumerable: false,
    writable: false,
    configurable: false
  });

  let card1 = new Card('2', suits.SPADES);
  console.log('' + card1);
  console.log(Object.keys(Card));

  /*Card.validFaces.push('1');
  let card2 = new Card('1', suits.SPADES);
  console.log('' + card2);*/
