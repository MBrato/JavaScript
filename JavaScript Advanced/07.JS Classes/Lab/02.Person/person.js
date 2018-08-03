function getPerson(){
  class Person{
    constructor(firstName, lastName, age, email){
      [this.firstName, this.lastName, this.age, this.email] = [firstName, lastName, age, email];
    }
    toString(){
      return `${this.firstName} ${this.lastName} age:${this.age} email:${this.email}`;
    }
  }
  
  return [
    new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
  ];
}
console.log(getPerson().toString());

