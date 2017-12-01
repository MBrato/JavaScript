/*
Write a JavaScript function that finds how many times a substring is contained 
in a given text (perform case insensitive search).
*/

let input = [
	'in',
	'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
];

function countingSubString(args){
	let str = args[1].toLowerCase(),
		subStr = args[0].toLowerCase(),
		counter = 0,
		index = str.lastIndexOf(subStr);

		if(index === '-1'){
			return 0;
		} else {
			while(index >= 0){
				counter += 1;	
				index = str.lastIndexOf(subStr, index - 1);		
			}			
		}
	return console.log(counter);
}

countingSubString(input);