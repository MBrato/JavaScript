let arrInt = ['5', '17', '9', '12', '14', '2', '31', '4', '51','27', '24', '43'];

function sortArray(arr){
	let i = 0,
		j = 0,
		min = 0;
		num = 0;

	for(i = 0; i < arr.length-1; i += 1){
		min = i;
		for(j = i+1; j < arr.length; j += 1){
			if(+arr[min] > +arr[j]){
				min = j;
			}
		}
		if(min != i){
			num = +arr[i];
			arr[i] = arr[min];
			arr[min] = num;
		}
	}
	console.log(arr.join(', '))
}
sortArray(arrInt);
