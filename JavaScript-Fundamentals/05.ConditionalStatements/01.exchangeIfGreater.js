function exchangeValues(...args){
	let temp = 0,
		a = +args[0],
		b = +args[1];


	if(a > b){
		temp = a;
		a = b;
		b = temp;
	}
	return a + ' ' + b;
}

console.log(exchangeValues(50,18));
