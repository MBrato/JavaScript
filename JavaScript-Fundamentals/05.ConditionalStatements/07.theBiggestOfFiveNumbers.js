let numbers = ['-3', '-0.5', '-1.1', '-2', '-0.1'];

function theBiggestOfFive(nums){
	let first = +nums[0],
		second = +nums[1],
		third = +nums[2],
		fourth = +nums[3],
		fifth = +nums[4];

	if(first >= second && first >= third && first >= fourth && first >= fifth){
		return first;
	} else if(second >= third && second >= fourth && second >= fifth){
		return second;
	} else if(third >= fourth && third >= fifth){
		return third
	} else if(fourth >= fifth){
		return fourth;
	} else {
		return fifth;
	}
}

console.log(theBiggestOfFive(numbers));
