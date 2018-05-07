let arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];

Array.prototype.remove = function(el){
	let elements = [].slice.apply(this),
		result = elements.filter(function(a){
			if(a !== el){
				return console.log(a);
			}
		});
	return result;
};

arr.remove(1);
