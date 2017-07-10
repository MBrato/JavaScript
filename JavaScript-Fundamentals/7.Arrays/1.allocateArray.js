/* 
Program that allocates array of N integers, initializes each element by its index multiplied by 5 
and the prints the obtained array on the console. 
*/

let n = 5,
	arrIntagers = new Array(n),
	resultArr,
	result = '',
	i,
	item;

function initArray(arrInt){
	if(n <= 20 && n > 0){
		for(i = 0; i <= arrInt.length-1; i += 1){
	 		arrInt[i] = Math.pow(i, 5);
	 		result += arrInt[i] + ' ';
		}	
		return result;
	}else
	return result ='Error!\n1 <= N <= 20';
}

console.log(initArray(arrIntagers));
