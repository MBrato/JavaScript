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
