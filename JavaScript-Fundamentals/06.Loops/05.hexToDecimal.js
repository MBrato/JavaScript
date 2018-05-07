let hexNumb = 'FE';

function convHetToDec1(hexNumb){
	let	hex = hexNumb,
		len = hexNumb.length,
		dec = 0,
		i = 0,
		power = 0,
		number = '';

	for(i = len - 1, power = 0; i >= 0 ; i -= 1 , power += 1){
		number = hex[i];

		if(number >= 'A' && number <= 'Z'){
			switch(number){
				case 'A': number = 10; break;
				case 'B': number = 11; break;
				case 'C': number = 12; break;
				case 'D': number = 13; break;
				case 'E': number = 14; break;
				case 'F': number = 15; break;
				default: 'Error';
			}
			dec += number * parseInt(Math.pow(16, power));
			number = '';
		} else {
			dec += parseInt(number) * parseInt(Math.pow(16, power));
		}
	}
	console.log(dec);
}

/*function convHetToDec2(hex){
	dec = parseInt(hex,16);
	console.log(dec);
}*/

convHetToDec1(hexNumb);
//convHetToDec2(hexNumb);
