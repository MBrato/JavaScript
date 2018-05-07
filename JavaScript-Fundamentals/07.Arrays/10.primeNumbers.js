let number = 15,
	biggestPrim = '';

function findBiggestPrimNumber(n){
	let i,
		j,
		arr = [],
		primArr = [],
		border = Math.sqrt(number);

	if(n <= 10000000){
		for(i = 0; i < n; i += 1){
			arr.push(true);
		}
		for(i = 2; i <= border; i += 1){
			if(arr[i]){
				for(j = i * i; j < n; j += i){
					arr[j] = false;
				}
			}
		}
		for(i = 2; i < n; i += 1){
			if(arr[i]){
				primArr.push(i);
			}
		}
		biggestPrim = primArr[primArr.length-1];
		return primArr;
	} else
	console.log('Incorrect number!');

}
console.log(findBiggestPrimNumber(number));
console.log(`The biggest prime number is ${biggestPrim}`);
