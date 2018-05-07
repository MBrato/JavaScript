function printLastDigit(num) {
	let strNum = String(num);
	let lastDig = +strNum[strNum.length - 1];

	switch (lastDig) {
		case 0:
			return 'Zero';
			break;
		case 1:
			return 'One';
			break;
		case 2:
			return 'Two';
			break;
		case 3:
			return 'Three';
			break;
		case 4:
			return 'Four';
			break;
		case 5:
			return 'Five';
			break;
		case 6:
			return 'Six';
			break;
		case 7:
			return 'Seven';
			break;
		case 8:
			return 'Eight';
			break;
		case 9:
			return 'Nine';
			break;
		default:
			return 'Error';
			break;
	}
}


console.log(printLastDigit(80987987));
