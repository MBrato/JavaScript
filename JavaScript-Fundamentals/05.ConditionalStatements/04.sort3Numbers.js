let numbers = ['-5', '11', '-5'];

function sort3Numbers(nums){
	let first = +nums[0],
		second = +nums[1],
		third = +nums[2];

		if(first >= second && first >= third){
			if(second >= third){
				return first + ' ' + second + ' ' + third;
			} else {
				return first + ' ' + third + ' ' + second;
			}
		} else if(second >= first && second >= third){
			if(first >= third){
				return second + ' ' + first + ' ' + third;
			} else{
				return second + ' ' + third + ' ' + first;
			}
		} else if(third >= first && third >= second){
			if(first >= second){
				return third + ' ' + first + ' ' + second;
			} else{
				return third + ' ' + second + ' ' + firs;
			}
		}
}

console.log(sort3Numbers(numbers));
