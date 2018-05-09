/* 
	Write a function that sums an array of numbers:
		- numbers must be always of type Number
		- returns `null` if the array is empty
		- throws Error if the parameter is not passed (undefined)
		- throws if any of the elements is not convertible to Number	
*/

function solve() {

	return function sum(nums) {

		if (nums === undefined) {
			throw new Error('There is not passed arguments!');
		} else if ((!nums.length)) {
			return null;
		} else {
			let arr = [].slice.apply(nums),
				len = arr.length,
				i,
				result = 0;

			for (i = 0; i < len; i += 1) {
				if (!isFinite(arr[i])) {
					throw new Error('All elements must by numbers!');
				}
				result += Number(arr[i]);
			}
			return result;
		}
	};
}

module.exports = solve;