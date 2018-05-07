let arrNums = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];

function repeatingNumber(arr) {
	let i,
		j,
		maxCount = 0,
		maxIndex = 0,
		resultArr = [];

	for (i = 0; i < arr.length - 1; i += 1) {
		if (!resultArr[arr[i]]) {
			resultArr[arr[i]] = 1;
		} else {
			resultArr[arr[i]] += 1;
		}
	}
	for (j in resultArr) {
		if (resultArr[j] > maxCount) {
			maxCount = resultArr[j];
			maxIndex = j;
		}
	}
	console.log(maxIndex + '(' + maxCount + ' times)');
}
repeatingNumber(arrNums);
