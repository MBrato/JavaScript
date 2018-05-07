function deepCopy(arg){
	let clone;

	if(arg === null || typeof(arg) !== 'object'){
		return arg;
	}

	if(Array.isArray(arg)){
		return clone = [].slice.apply(arg);
	}

	if(arg instanceof Object){
		clone = {};
		for(let item in arg){
			if(arg.hasOwnProperty(item)){
				clone[item] = deepCopy(arg[item]);
			}
		}
	}
	return clone;
}

// TEST :
let input1 = {
		'doorName': 'Poly',
		'price': 120,
		'isPVC': false,
		'size': [2, 'm', {
			'height': 2000,
			'width': 700,
			'other': [7,8,9]
		}, [1, 2, '3']],
		toString: function() {
			return this.doorName + ' ' + this.price + ' ' + this.isPVC;
		}
	},
	input2 = 'Varna',
	copy1 = deepCopy(input1),
	copy2 = deepCopy(input2);

console.log(copy1);
console.log(copy1.toString());
console.log(copy2);
