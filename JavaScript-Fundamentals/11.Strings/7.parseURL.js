/*
Write a script that parses an URL address given in the format: 
[protocol]://[server]/[resource] and extracts from it the [protocol], 
[server] and [resource] elements.
*/

let input = [ 'http://telerikacademy.com/Courses/Courses/Details/239' ];

function parseURL(args){
	let str = args[0],
		index1 = str.indexOf('://'),
		index2 = index1 + 3,
		protocol = str.substring(0, index1),
		server = '',
		resource = '';

		index1 = str.indexOf('/', index2);

		server = str.substring(index1, index2);
		resource = str.substr(index1);

		return console.log(`protocol: ${protocol}\nserver: ${server}\nresource: ${resource}\n`);
}

parseURL(input);

