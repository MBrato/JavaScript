let array = ['8', '28 6 21 6 -7856 73 73 -56', '73', '7 15 18','73 73 73'],
	number = 73;

function countAppearance(arr, num){
	let len = arr.length,
		i = 0,
		splitArray = [],
		tempArr = [],
		count = 0;

	for(i = 0; i < len; i+=1){
		if(!Number.isInteger(+arr[i])){
			tempArr = arr[i].split(' ').map(x => parseInt(x));
			[].push.apply(splitArray, tempArr);
		} else {
			splitArray.push(+arr[i]);
		}
	}

	for(i = 0; i < splitArray.length; i += 1){
		if(splitArray[i] === num){
			count += 1;
		}
		continue;
	}
	return count;
}

console.log(countAppearance(array, number));
