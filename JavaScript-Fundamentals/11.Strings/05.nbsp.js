let input = [ 'This text contains 4 spaces!!' ];

function nbsp1(args){
	let str = args[0],
		result = '',
		len = str.length,
		i;

	for(i = 0; i < len; i += 1){
		if(str[i] ===  ' '){
			result += '&nbsp';
		} else {
			result += str[i];
		}
	}
	return console.log(result);
}

function nbsp2(args){
	var str = args[0],
    	result = str.replace(/\s/g, '&nbsp;');

	return console.log(result);

}

//nbsp1(input);
nbsp2(input);
