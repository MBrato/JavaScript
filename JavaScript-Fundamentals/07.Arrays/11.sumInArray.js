let array = [4, 3, 1, 4, 2, 5, 8],
	sum = 11,
	result = [];

function checkingSum(arr, s){
	let i,
		j,
		tempSum = 0;

	for (i = 0; i < arr.length - 1; i += 1) {
		tempSum += arr[i];
		result.push(arr[i]);
		for (j = i + 1; j < arr.length; j += 1) {
			tempSum += arr[j];
			result.push(arr[j]);

			if (tempSum === s) {
				return result;
			} else if (tempSum > s) {
				break;
			}
		}
		tempSum = 0;
		result = [];
	}
}

checkingSum(array, sum);
console.log(result);
