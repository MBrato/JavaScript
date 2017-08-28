/*
Write a method GetMax() with two parameters that returns the larger of two integers. 
Write a program that reads 3 integers from the console and prints the largest of them using 
the method GetMax().
*/

function getMax(...args){
	let arr = [];
	let len = args.length;

	for(let i = 0; i < len; i += 1){
		if(typeof args[i] === "number"){
			arr.push(parseInt(args[i], 10));
		} else {
			continue;
		}		
	}
	let max = arr.reduce(function(a, b){
		return Math.max(a,b);
	});
	console.log(max);	
}

getMax(99 ,2 ,5 ,9 ,"Pleven");