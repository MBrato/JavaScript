/*
Write a script that converts a number in the range [0…999] to words, 
corresponding to its English pronunciation.
*/

let number = ['101'];

function numberAsWord(number){
	let num = String(Math.round(number[0])),
		len = num.length,
		str1 = ' hundred',
		str2 = ' and ',
		result = '',
		first = +num[0],
		second = +num[1],
		third = +num[2],
		word = [
			['zero', 'one','two', 'three', 'four','five', 'six', 'seven', 'eigth','nine'],
			['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
		'eighteen','nineteen'],
			['-', '-', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
		];

	if (num >= 0) {
		if (len === 1) {
			result += word[0][first];
		} else if (len === 2) {
			if (first === 1) {
				result += word[1][second];
			} else {
				if (second === 0) {
					result += word[2][first];
				} else {
					result += word[2][first] + ' ' + word[0][second];
				}
			}
		} else if (len === 3) {
			if (second === 0) {
				if (third === 0) {
					result += word[0][first] + str1;
				} else {
					result += word[0][first] + str1 + str2 + word[0][third];
				}
			} else if (second === 1) {
				result += word[0][first] + str1 + str2 + word[1][third];
			} else if (second !== 1) {
				if (third === 0) {
					result += word[0][first] + str1 + str2 + word[2][second];
				} else {
					result += word[0][first] + str1 + str2 + word[2][second] + ' ' + word[0][third];
				}
			}
		}
		result = result[0].toUpperCase() + result.slice(1);
		return result;
	} else {
		return result += 'The range must be [0 - 999]';
	}
	
}

console.log(numberAsWord(number));