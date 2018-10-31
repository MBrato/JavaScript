function isSymmetric(arr) {
	if (!Array.isArray(arr)) {
		return false;
	}
	let reversedArr = arr.slice(0).reverse();
	let isEqual = (JSON.stringify(arr) == JSON.stringify(reversedArr));
	return isEqual; 
}

//console.log(isSymmetric([1,2,3,2,1]));

module.exports = isSymmetric;