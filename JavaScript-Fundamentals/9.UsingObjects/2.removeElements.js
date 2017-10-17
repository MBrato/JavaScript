/*
Write a function that removes all elements with a given value. Attach it to the array type. 
Read about prototype and how to attach methods.

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
arr.remove(1); // arr = [2,4,3,4,111,3,2,'1'];

You will be given an array of strings. Remove all occurrences of the first element in 
the array in itself.
Input: The input will consist of an array of strings
Output: The output should be the array with some elements removed.Each string should be 
on a separate line
*/

let arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];

Array.prototype.remove = function(el){
	let elements = [].slice.apply(this),
		result = elements.filter(function(a){
			if(a !== el){
				return console.log(a);
			}
		});	
	return result;
};

arr.remove(1);
