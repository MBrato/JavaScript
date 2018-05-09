/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/
function solve() {
	return function findPrimes(start, end) {
			if (arguments.length < 2) { 
				throw new Error("Must be passed two arguments.")
			} else {
				let x = parseInt(start),
					y = parseInt(end),
					primeNumbers = [];

				if (!isFinite(x) || !isFinite(y)) {
					throw new Error('All elements must by numbers!');
				}
				for (let num = x; num <= y; num += 1) {
					if (isPrime(num)) {
						primeNumbers.push(num);
					}
				}

				function isPrime(number){
					if (number >= 2) {
						let max = Math.round(Math.sqrt(number));

						for (let i = 2; i <= max; i += 1) {
							if (number % i === 0) {
								return false;
							}
						}
						return true;
					}
				}
			return primeNumbers;
		} 
	}
}

module.exports = solve;