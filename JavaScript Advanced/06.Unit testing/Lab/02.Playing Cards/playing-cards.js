function makeCard(face, suit){
  const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['S', 'H', 'D', 'C'];

  if(!faces.includes(face)){
      throw new Error('Invalid face.');
  }
  if(!suits.includes(suit)){
    throw new Error('Invalid suit.');
  };

  let card = {
    face: face,
    suit: suit,
    toString: function(){
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

try{
  let card = makeCard('1', 'S');
} catch(err){
  console.log('Massage -> '+ err.message);
  console.log('Name -> ' + err.name);
  console.log('Stack trace -> ' + err.stack);
} finally {
  console.log('Finally!');
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('2', 'D'));

//console.log('' + makeCard('1', 'C')); //Error
//console.log('' + makeCard('4', 'W')); //Error
