function printDeckCards(cardsArr) {
  function makeCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['S', 'H', 'D', 'C'];
    if (!faces.includes(face)) {
      throw new Error('Invalid face.');
    }
    if (!suits.includes(suit)) {
      throw new Error('Invalid suit.');
    };
    let card = {
      face: face,
      suit: suit,
      toString: function() {
        let suitToChar = {
          'S': "\u2660",
          'H': "\u2665",
          'D': "\u2666",
          'C': "\u2663"
        }
        return `${card.face}${suitToChar[card.suit]}`
      }
    };
    return card;
  }
  let deck = [];

  for (let card of cardsArr) {
    let suit = card[card.length - 1];
    let face = card.substring(0, card.length - 1);
    try {
      deck.push(makeCard(face, suit));
    } catch (err) {
      console.log(`Invalid card: ${card}`);
      return;
    }
  }
  return deck.join(' ');
}

console.log(printDeckCards(['AS', '10D', 'KH', '2C'])); //A♠ 10♦ K♥ 2♣
console.log(printDeckCards(['5$', '3D', 'QD', '1C'])); //Invalid card: 1C
console.log(printDeckCards(['3D', 'JC', '2S', '10H', '5X'])); //Invalid card: 5X
