let numbers = [3, 14, 5, 12, 15, 7, 8, 9, 11, 10, 1];

function longestIncreasingSubsequence(arr){
	let prev = [],
		result = [],
		len = Array(arr.length),
		 temp = 0;
		prev[0] = -1;

	for (let i = 0; i < len.length; i += 1) {
		len[i] = 1;
	}

	for (let i = 1; i < arr.length; i += 1) {
		if (arr[i - 1] < arr[i]) {
			for (let j = i - 1; j < arr[i]; j += 1) {
				prev[i] = j;
				len[i] += 1;
			}
		} else {
			prev[i] = -1;
		}

	}
	//result.push(arr[0]);
	for (let i = 0; i < arr.length; i += 1) {
		if(arr[i - 1] === undefined){
			continue;
		} else if (arr[i - 1] < arr[i]) {
			temp = arr[i - 1];
			for(let j = i - 1; j > 0; j -= 1){
				if(temp < arr[i] && temp < arr[j]){
					temp = arr[prev[i]];
					//reslult.push(temp);
					console.log(temp);
				}
			}

		}
	}
}

longestIncreasingSubsequence(numbers);
