/*
Write an if statement that takes two double variables a and b and exchanges their values 
if the first one is greater than the second. As a result print the values a and b, 
separated by a space.
*/

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