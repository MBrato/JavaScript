/*
Write a method that returns the maximal element in a portion of array of integers starting 
at given index. Using it write another method that sorts an array in ascending / descending 
order. Write a program that sorts a given array.
*/


let input = [36, 10, 1, 34, 28, 38, 31, 27, 30, 20];

function sortingArrayAscending(args){
	let arr = [].slice.apply(args),
		result = args.sort(function(a,b){
		return a - b;
	})
	return result;
}

function sortingArrayDescending(args){
	let arr = [].slice.apply(args),
		result = args.sort(function(a,b){
		return b - a;
	});
	return result;
}

function maxElement(args, index){
	let arr = [].slice.apply(args);
	arr.slice(index);
	return Math.max.apply(null, arr);
}

console.log(sortingArrayAscending(input));
console.log(sortingArrayDescending(input));
console.log(maxElement(input, 4));
