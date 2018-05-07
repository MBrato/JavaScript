function getMax(...args){
	let arr = [];
	let len = args.length;

	for(let i = 0; i < len; i += 1){
		if(typeof args[i] === "number"){
			arr.push(parseInt(args[i], 10));
		} else {
			continue;
		}
	}
	let max = arr.reduce(function(a, b){
		return Math.max(a,b);
	});
	console.log(max);
}

getMax(99 ,2 ,5 ,9 ,"Pleven");
