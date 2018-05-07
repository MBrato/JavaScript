let input = {
		'doorName': 'Poly',
		'price': 120,
		'isPVC': false,
		'size': [2, 'm'],
		toString: function() {
			return this.doorName + ' ' + this.price + ' ' + this.isPVC;
		}
	},
	hasProp = hasProperty(input, 'doorName');

function hasProperty(obj, prop) {
	for (let el in obj) {
		if (el === prop) {
			return true;
		} else {
			return false;
		}
	}
}

console.log(hasProp);
//console.log(input.hasOwnProperty('doorName'));
