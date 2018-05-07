let array = ['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'], 
	searchedNum = 99;

function binarySearch(arr, x){
	let len = arr.length,
		start = 0,
		end = len - 1,
		midIndex,
		sortedArray = arr.map(Number).sort(function(a, b) {
			return a - b;
		});

	console.log(sortedArray);

	while(start <= end){
		midIndex = Math.floor((start + end)/2);
		if(sortedArray[midIndex] === x){
			return midIndex;
		} else if(sortedArray[midIndex] > x){
			end = midIndex - 1;
		} else {
			start = midIndex + 1;
		}
	}
	return -1;
}

console.log(`Index of number ${searchedNum} is ` + binarySearch(array, searchedNum));
