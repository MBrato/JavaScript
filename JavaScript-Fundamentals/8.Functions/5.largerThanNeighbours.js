/*
Write a method that checks if the element at given position in given array of integers is 
larger than its two neighbours (when such exist). Write program that reads an array of numbers 
and prints how many of them are larger than their neighbours.
*/

let numbers = [-26, -25, -28, 31, 2, 27];

 function checkIfLargest(arr){
 	let i = 0,
 		len = arr.length,
 		count = 0;
 		
 	for(i = 1; i < len - 1; i += 1){
 		if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
 			count += 1;
 		}
 	}
		return count;
 }

console.log(checkIfLargest(numbers));
