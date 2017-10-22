/*
Write a function that checks if a given object contains a given property.

var obj  = …;
var hasProp = hasProperty(obj, 'length');
*/

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
