/*
Write a javascript function that prints a matrix like in the examples below by a given 
integer N. Use two nested loops.
Constraints: 1 <= N <= 20
*/

let number = ['5'];

function printMatrix(arg) {
	let n = +arg[0];

	if (n >= 1 && n <= 20) {
		let row = '';

		for (let i = 1; i <= n; i += 1) {
			for (let j = i; j < n + i; j += 1) {
				row += (j + ' ');				
			}
			console.log(row);
			row = '';
		}
	} else {
		console.log('1 <= N <= 20');
	}
}

printMatrix(number);

