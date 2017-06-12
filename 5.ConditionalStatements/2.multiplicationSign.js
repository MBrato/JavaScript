/*
Write a script that shows the sign (+, - or 0) of the product of three real numbers, 
without calculating it. Use a sequence of if operators.
*/

let array = ['5', '2', '3'];

function multiplicationSign(args){
	let sign = '0',
		a = +args[0],
		b = +args[1],
		c = +args[2];
	
	if(a === 0 || b === 0 || c === 0){
		return sign;
	} else if(((a > 0 && b > 0) || (a < 0 && b < 0) && c > 0) || 
		(((a < 0 && c < 0) && b > 0) || (b < 0 && c < 0) && a > 0)){
		return sign = '+';
	} else {
		return sign = '-';
	}
}

console.log(multiplicationSign(array));