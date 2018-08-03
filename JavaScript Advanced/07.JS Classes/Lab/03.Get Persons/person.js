function getPeople(){
  class Person{
    constructor(firstName, lastName, age, email){
      [this.firstName, this.lastName, this.age, this.email] = [firstName, lastName, age, email];
    }
    toString(){
      return `${this.firstName} ${this.lastName} age:${this.age} email:${this.email}`;
    }
  }
  
  return [
    new Person('Ivan', 'Dimitrov', 25, 'ivan@asd.asd'),
    new Person('Valentina'),
    new Person('Dimitar', 'Petkov', 31),
    new Person('Maia', 'Vladimirova', 29, 'maia@asd.asd'),
  ];
}
console.log(getPeople().join('\n'));
