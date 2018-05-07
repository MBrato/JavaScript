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

function peopleOfAge(people){
	let result = people.every(x => x.age >= 18);
	return result === true ? console.log('Yes, all people are adults!') : console.log('No, not all people are adults!');
}

function printUnderagePeople(people){
	let underagePeople = people.filter((function(p) {
			return p.age < 18;
		}));

		underagePeople.forEach((function(el) {
			console.log(el.toString());
		}));
}

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

function youngestPerson(pers){
	let males = pers.sort((a,b) => Number(a.age) - Number(b.age)).find(x => x.gender === 'male');
	return console.log(males.firstname + ' ' + males.lastname + ' is the youngest male person!');
}

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
