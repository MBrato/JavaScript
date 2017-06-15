/*
Implement a javascript function that accepts an array of floating-point numbers as strings 
and returns the minimal, the maximal number, the sum and the average of all numbers 
(displayed with 2 digits after the decimal point).
*/

let arrNums = ['2', '-1', '4'];

function mmsa(arr) {
	let min = Math.min.apply(null, arr),
		max = Math.max.apply(null, arr),
		sum = 0,
		avr = 0,
		len = arr.length,
		i,
		result = '';

	for (i = 0; i < len; i += 1) {
		sum += +arr[i];
	}
	avr = sum / len;

	return result += 'Min = ' + parseFloat(min).toFixed(2) + '\n' 
					+ 'Max = ' + parseFloat(max).toFixed(2) + '\n' 
					+ 'Sum = ' + parseFloat(sum).toFixed(2) + '\n' 
					+ 'Avg = ' + parseFloat(avr).toFixed(2) + '\n';
}

console.log(mmsa(arrNums));
