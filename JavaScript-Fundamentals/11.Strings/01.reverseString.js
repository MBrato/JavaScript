let input = [ 'qwertytrewq' ];

function reverseString(args){
	let chars = args[0].split(''),
		rev = chars.reverse().join('');

		return rev;
}

console.log(reverseString(input));
