let str1 = 'Stara Magoraaaa',
	str2 = 'Stara Zagora',
	arrayStr = [str1, str2],
	result = '',
	i;

function lexComparison(arr) {
	if (arr[0].length === arr[1].length) {
		if (arr[0] === arr[1]) {
			result = '=';
		} else {
			for (i = 0; i < arr[0].length; i += 1) {
				if (arr[0][i] > arr[1][i]) {
					result = '>';
				} else if (arr[0][i] < arr[1][i]) {
					result = '<';
				}
			}
		}
	} else if (arr[0].length > arr[1].length){
		result = '>';
	} else if (arr[0].length < arr[1].length) {
		result = '<';
	}
	console.log(result);
}
lexComparison(arrayStr);
