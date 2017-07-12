/* 
Program that finds the length of the maximal increasing sequence 
in an array of N integers. 
*/

let arrInt = ['5', '7', '9', '12', '14', '2', '3', '4', '5','2', '2', '4'];
	//tempLen = 1,
	//countLen = 1;

function maxSequence(arr){
	let i = 0,
		j = 0,
		maxCount = 1,
		result = 0;
	for (i = 0; i < arr.length; i = j) {
		for (j = i + 1; + arr[j - 1] < +arr[j] && j < arr.length; j += 1) {
			maxCount += 1;
		}
		if (maxCount > result) {
			result = maxCount;
		}
		maxCount = 1;
	}
	console.log(result);
}
/*function maxSequence(arr) {
	for (var i = 1; i < arr.length; i++) {
		if (+arr[i - 1] !== +arr[i] && +arr[i - 1] === arr[i] - 1) {		
			tempLen++;
			if (tempLen > countLen) {
				countLen = tempLen;
			}
		} else {
			tempLen = 1;
		}	
	}
	return console.log(countLen);
}*/
maxSequence(arrInt);