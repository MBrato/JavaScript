/*
Write a script that reads the coefficients a, b and c of a quadratic equation 
ax2 + bx + c = 0 and solves it (prints its real roots). Calculates and prints its real roots.
Note: Quadratic equations may have 0, 1 or 2 real roots.
*/

let coefficients = ['0.2', '9.572', '0.2'];

function quadraticEquation(coeffic) {
	let a = +coeffic[0],
		b = +coeffic[1],
		c = +coeffic[2],
		discr = b * b - 4 * a * c,
		denom = 2 * a,
		x1 = Number(((-b + Math.sqrt(discr)) / denom).toFixed(2)), //root 1 
		x2 = Number(((-b - Math.sqrt(discr)) / denom).toFixed(2)); //root 2

	if (discr > 0) {
		if (x1 < x2) {
			return console.log(`x1 = ${x1} x2 = ${x2}`);
		} else if (x2 < x1) {
			return console.log(`x1 = ${x2} x2 = ${x1}`);
		}
	} else if (discr === 0) {
		return console.log(`x1 = x2 = ${x1}`);
	} else {
		return console.log('no real roots');
	}
}

quadraticEquation(coefficients);

// With input ['0.2', '9.572', '0.2'] and without Number() 
//.toFixed() has incorrect behavior => instead x2 < x1 going to x1 < x2
