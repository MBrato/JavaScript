/*
Write a function that finds the youngest person in a given array of people and prints his/hers 
full name. Each person has properties firstname, lastname and age.
Input:The input will consist of an array containing 3 * N values
        N is the number of people
        Values represent firstname, lastname, age, ...
Output:The output should be consisted of one line
        The full name of the youngest person
*/

function yongestPerson(peop){
	let people = [],
		obj = {},
		i = 0,
		len = peop.length;

	for(i = 0; i < len; i += 3){
		obj = makePerson(peop[i], peop[i + 1], peop[i + 2]);
		people.push(obj);
	}

	let  youngest = people.reduce(function(a,b){
		if(a.age >= b.age){
			return b;
		} 
		return a;
	});

	return youngest.toString();
}

function makePerson(firstname, lastname, age){
	return{
		firstname: firstname,
		lastname: lastname,
		age: age,
		toString: function(){
			return this.firstname + ' ' + this.lastname;
		}
	}
}

var people = [
  'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '42'
];

console.log(yongestPerson(people));