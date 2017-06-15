/*
Write a script that asks for a digit (0-9), and depending on the input, shows the digit 
as a word (in English). Print not a digit in case of invalid input. Use a switch statement.
*/

let digit = '2p';

function printDigit(...dig){

	switch(+dig[0]){
		case 0: return 'Zero'; break;
		case 1: return 'One'; break;
		case 2: return 'Two'; break;
		case 3: return 'Three'; break;
		case 4: return 'Four'; break;
		case 5: return 'Five'; break;
		case 6: return 'Six'; break;
		case 7: return 'Seven'; break;
		case 8: return 'Eight'; break;
		case 9: return 'Nine'; break;
		default: return 'Not a digit';break;
	}
}

console.log(printDigit(digit));