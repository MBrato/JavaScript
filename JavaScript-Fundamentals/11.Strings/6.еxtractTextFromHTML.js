/*
Write a function that extracts the content of a html page given as text. 
The function should return anything that is in a tag, without the tags.
*/

let input = [
	'<html>',
	'  <head>',
	'    <title>Sample site</title>',
	'  </head>',
	'  <body>',
	'    <div>text',
	'      <div>more text</div>',
	'      and more...',
	'    </div>',
	'    in body',
	'  </body>',
	'</html>'
];

function extrTextFromHTML(args) {
	let text = args.join(' '),
		tags = /(<([^>]+)>)/g,
		result = text.replace(tags, '')
					 .replace(/\s+/g, ' ');

	return console.log(result);
}

extrTextFromHTML(input);
