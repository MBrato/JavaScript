/*
Implement a javascript function that accepts an array with a single element - positive 
integer N as string and prints all the numbers from 1 to N inclusive, on a single line, 
separated by a whitespace.
*/

let array = ['6'];

function printArray(arr){
	let n = +arr[0],
		i,
		result = '';

	for (i = 1; i <= n ; i += 1) {
		result += i + ' ';
	}

	return result;
}

console.log(printArray(array));


