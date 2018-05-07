let array = ['5', '2', '-7'];

function findBiggest(arr){
	let	a = +arr[0],
		b = +arr[1],
		c = +arr[2];

	if(a > b && a > c){
		return a;
	} else if(b > a && b > c){
		return b;
	} else {
		return c;
	}
}

console.log(findBiggest(array));
