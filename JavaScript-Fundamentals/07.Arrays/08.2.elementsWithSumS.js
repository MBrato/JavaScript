// Try 2:

let array = [2, 1, 2, 4, 3, 5, 2, 6],
	sum = 14,
	result = 'NO',
	str = [],
	arrSort = array.slice(0).sort();

function checkingSum(arr, s) {
	let tempSum = 0,
		i = 0,
		j = 0;

	for (i = arr.length-1; i >= 1; i -= 1) {
		tempSum = arr[i];
		str.push(arr[i]);
		for (j = i - 1; j >= 0; j -= 1) {
			tempSum += arr[j];
			str.push(arr[j]);
			if (tempSum === s) {
				return result = 'YES -> ' + str;
			} else if (tempSum > s || j === 0) {
				if (j === 0) {
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

checkingSum(arrSort, sum);
console.log(result);
