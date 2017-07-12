/* 
Program that finds the length of the maximal sequence of equal elements 
in an array of N integers. 
*/

let arrayInts = ['15', '5', '12', '3', '3','3','3', '1', '8', '8', '8', '7'],
	count = 1,
	countTemp = 1,
	countMaxLength = 1,
	i;

function maxSequence(arrInts){
	for (i = 0, j = 1; i < arrInts.length, j < arrInts.length - 1; i += 1, j += 1) {
		if (arrInts[i] === arrInts[j]) {
			count += 1;
			countTemp = count;
			if (countTemp > countMaxLength) {
			countMaxLength = countTemp;
			} 
		} else 
			count = 1;
	}
	console.log(countMaxLength);
}
maxSequence(arrayInts);