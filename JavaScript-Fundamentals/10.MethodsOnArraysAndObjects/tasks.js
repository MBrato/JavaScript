/*
1. Write a function for creating persons - each person must have firstname, 
lastname, age and gender (true is female, false is male).
Generate an array with ten person with different names, ages and genders.
*/

let persons = [
	person("Ivelina", "Dimitrova", 17, true),
	person("Ivan", "Iliev", 20, false),
	person("Todor", "Nikolov", 35, false),
	person("Maria", "Petrova", 16, true),
	person("Ivanka", "Vasileva", 30, true),
	person("Yordan", "Pavlov", 34, false),
	person("Daniela", "Grigorova", 28, true),
	person("Vasil", "Vasilev", 32, false),
	person("Georgi", "Georgiev", 39, false),
	person("Anelia", "Ivanova", 25, true)
];

function person(firstname, lastname, age, gender){
	return {
		firstname: firstname,
		lastname: lastname,
		age: age,
		gender: gender === true ? 'female' : 'male',
		toString: function(){
			return this.firstname + ' ' + this.lastname + ' ' + this.age + ' ' + this.gender;
		}
	}
}

/*
2. Write a function that checks if an array of person contains only people of age (with age 18 or greater)
- Use only array methods and no regular loops (for, while)
*/

function peopleOfAge(people){
	let result = people.every(x => x.age >= 18);
	return result === true ? console.log('Yes, all people are adults!') : console.log('No, not all people are adults!');
}

/*
3. Write a function that prints all underaged persons of an array of person
- Use Array#filter and Array#forEach
- Use only array methods and no regular loops (for, while)
*/

function printUnderagePeople(people){
	let underagePeople = people.filter((function(p) {
			return p.age < 18;
		}));

		underagePeople.forEach((function(el) {
			console.log(el.toString());
		}));
}

/*
4. Write a function that calculates the average age of all females, extracted from an array of persons
- Use Array#filter
- Use only array methods and no regular loops (for, while)
*/

function averageAgeOfFemales(pers){
	let femaleArr = pers.filter(x => x.gender === 'female'),
		aver = 0,
		count = 0;

		femaleArr.map((function(female) {	
			aver += female.age;
			count += 1;
		}));

	return console.log(+aver / +count);
}

/*
5. Write a function that finds the youngest male person in a given array of people and prints 
his full name
- Use only array methods and no regular loops (for, while)
- Use Array#find
*/

function youngestPerson(pers){
	let males = pers.sort((a,b) => Number(a.age) - Number(b.age)).find(x => x.gender === 'male');
	return console.log(males.firstname + ' ' + males.lastname + ' is the youngest male person!');
}

/*
6. Write a function that groups an array of persons by first letter of first name and returns 
the groups as a JavaScript Object
- Use Array#reduce
- Use only array methods and no regular loops (for, while)
*/

function groupPeople(people){
	let sortedPeople = people.sort(function(a, b) {
			return a.firstname.localeCompare(b.firstname);
		}),
		result = sortedPeople.reduce(function(a, b) {
			let fletter = b.firstname[0].toLowerCase();
			if (!a[fletter]) {
				a[fletter] = [];
			}

			a[fletter].push(b);
			return a;
		}, {});

	console.log(result);
}

peopleOfAge(persons);
printUnderagePeople(persons);
averageAgeOfFemales(persons);
youngestPerson(persons);
groupPeople(persons);