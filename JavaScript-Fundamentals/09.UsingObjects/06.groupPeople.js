function group(people){
	let result = {};

	for(let i in people){
		let person = people[i],
			personAge = person.age;
		if(!result[personAge]){
			result[personAge] = [];
		}
		result[personAge].push(person);
	}
	return result;
}

var people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'John', lastname: 'Doe', age: 42 },
  { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
  { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
  { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
],
	groupedByAge = group(people);

console.log(groupedByAge);
