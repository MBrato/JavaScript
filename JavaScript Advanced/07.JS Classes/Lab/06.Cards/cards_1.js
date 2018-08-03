
let solve = (() => {
  let suits = {
    SPADES: '\u2660',
    HEARTS: '\u2665',
    DIAMONDS: '\u2666',
    CLUBS: '\u2663'
  }

  class Card{
    constructor(face, suit){
      this.face = face;
      this.suit  = suit;
    }
    set face(face){
      if(!Card.validFaces.includes(face)){
        throw new Error('Invalid face!');
      }
      this._face = face;
    }
    get face(){
      return this._face;
    }
    set suit(suit){
      if(!Object.keys(suits).map(k => suits[k]).includes(suit)){
        throw new Error('Invalid suit!');
      }
      this._suit = suit;
    }
    get suit(){
      return this._suit;
    }
    toString(){
      return this.face + this.suit;
    }
    static get validFaces(){
      return Card._validFaces;
    }
  }
  Card._validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  return {suits, Card };
})();

let suits = solve.suits;
let Card = solve.Card;

let card1 = new Card('2', suits.SPADES);
console.log('' + card1);
