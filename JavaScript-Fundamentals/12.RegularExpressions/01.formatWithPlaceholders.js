let input = [
'{ "name": "John", "age": 13 }',
"My name is #{name} and I am #{age}-years-old"
];

function formatsAStr(args){
  let person = args[0],
      str = args[1];

      return str.formatStr(person);
}


String.prototype.formatStr  = function(options) {
    let repStr = JSON.parse(options),
        plholder = '',
        str = this,
        propValue = '';

    for(let prop in repStr){
        plholder = new RegExp('#{' + prop + '}', 'g');
        propValue = repStr[prop];
        str = str.replace(plholder, propValue);
    }

    console.log(str);
}

formatsAStr(input);
