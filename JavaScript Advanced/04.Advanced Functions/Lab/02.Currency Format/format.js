function format(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst)
    return symbol + ' ' + result;
  else
    return result + ' ' + symbol;
}

function getDollarFormatter(formatter){
  return function(value){
    return formatter(',', '$', true, value);
  }
}

function getEuroFormatter(formatter){
  return function(value){
    return formatter(',', '€', false, value);
  }
}

let dollars = getDollarFormatter(format);
let euro = getEuroFormatter(format);
console.log(dollars(5345));
console.log(euro(7325));
console.log(dollars(3.146467));
console.log(euro(8.246467));
