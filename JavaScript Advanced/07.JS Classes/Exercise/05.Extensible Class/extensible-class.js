let extensible = (function(){
	let id = 0;

	 return class Extensible{
	 	constructor(){
	 		this.id = id++;
	 	}
	 	extend(temp){
	 		for(let prop in temp){
	 			if(typeof temp[prop] === 'function'){
	 				Extensible.prototype[prop] = temp[prop];
	 			} else {
	 				this[prop] = temp[prop];
	 			}
	 			
	 		}
	 	}
	 }
})();
