let input = [ ')(a+b))' ];

function correctBrackets(args){
	let str = args[0],
		len = str.length,
		i,
		count = 0;

	if (str.indexOf(')') < str.indexOf('(')) {
		return 'Incorrect';
	} else {
		for (i = 0; i < len; i += 1) {
			if (str[i] === '(') {
				count += 1;
			} else if (str[i] === ')') {
				count -= 1;
			}
		}
		if (count === 0) {
			return 'Correct';
		} else {
			return 'Incorrect';
		}
	}
}

console.log(correctBrackets(input));
