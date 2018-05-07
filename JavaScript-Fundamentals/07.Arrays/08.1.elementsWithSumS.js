// Try 1:

let array = [2, 1, 2, 4, 3, 5, 2, 6],
	sum = 14,
	result = 'NO',
	str = [];

function checkingSum(arr, s) {
	let tempSum = 0,
		i,
		j;

	for (i = 0; i < arr.length - 1; i += 1) {
		tempSum = arr[i];
		str.push(arr[i]);
		for (j = i + 1; j < arr.length; j += 1) {
			tempSum += arr[j];
			str.push(arr[j]);
			if (tempSum === s) {
				return result = 'YES -> ' + str;
			} else if (tempSum > s || j === arr.length - 1) {
				if (j === arr.length - 1) {
					tempSum = 0;
					str = [];
					break;
				}
				tempSum -= arr[j];
				str.pop();
				continue;
			}
		}
	}

}

checkingSum(array, sum);
console.log(result);
