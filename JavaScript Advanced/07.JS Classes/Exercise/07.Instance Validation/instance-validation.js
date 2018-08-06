class CheckingAccount{
	constructor(clientId, email, firstName, lastName){
		this.clientId = clientId;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;

	}
	set clientId(value){
		if(!/^\d{6}$/g.test(value)){
			throw new TypeError('Client ID must be a 6-digit number');
		}
		this._clientId = value;
	}
	get clientId(){
		return this._clientId;
	}
	set email(value){
		if(!/^[a-zA-z\d]+\@[a-zA-z.]+$/g.test(value)){
			throw  new TypeError('Invalid e-mail');
		}
		this._email = value;
	}
	get email(){
		return this._email;
	}
	set firstName(value){
		if(value.length < 3 || value.length > 20){
			throw new TypeError('First name must be between 3 and 20 characters long');
		}
		if(!/^[a-zA-Z]{3,20}$/.test(value)){
			throw new TypeError('First name must contain only Latin characters');
		}
		this._firstName = value;
	}
	get firstName(){
		return this._firstName;
	}
	set lastName(value){
		if(value.length < 3 || value.length > 20){
			throw new TypeError('Last name must be between 3 and 20 characters long');
		}
		if(!/^[a-zA-Z]{3,20}$/.test(value)){
			throw new TypeError('Last name must contain only Latin characters');
		}
		this._lastName = value;
	}
	get lastName(){
		return this._lastName;
	}
}

let acc = new CheckingAccount('131523', 'ivan@asd.asd', 'Ivan', 'Petrov');
console.log(acc);