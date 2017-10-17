/*
Write functions for working with shapes in standard Planar coordinate system.
- Points are represented by coordinates
- Lines are represented by two points, marking their beginning and ending You will be 
given three line segments. Calculate their length. Check if the line segments can form 
a triangle. 
*/

let coordinates = [
  '5', '6', '7', '8',
  '1', '2', '3', '4',
  '9', '10', '11', '12'
];

function calculation(args){
	let nums = args.map(Number), //returns Object
		point1 = 0,
		point2 = 0,
		line = 0,
		linesArr = [],
		i,
		len = nums.length;

	for(i = 0; i < len; i += 4){
		point1  = makePoint(nums[i], nums[i + 1]);
		point2 = makePoint(nums[i + 2], nums[i + 3]);

		line = makeLine(point1, point2);
		console.log(line.createLine().toFixed(2));
		linesArr.push(line);
	}
	isTriangle(linesArr[0], linesArr[1], linesArr[2]);
}

function makeLine(point1, point2){
	return {
		point1: point1,
		point2: point2,
		createLine: function(){
			return Math.sqrt((point2.x - point1.x)*(point2.x - point1.x) + (point2.y - point1.y)*(point2.y - point1.y));			
		}
	}
}

function makePoint(x, y) {
	return {
		x: x,
		y: y
	}
}

function isTriangle(line1, line2, line3){
	if((line1 + line2) > line3 && (line1 + line3) > line2 && (line2 + line3) > line1){
		return console.log('Triangle can be built');
	} else {
		return console.log('Triangle can not be built');
	}
}

calculation(coordinates);
