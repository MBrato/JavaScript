function countdown(startTime){
	let time = startTime;
	let box = document.getElementById('time');
	let timer = setInterval(decrement, 1000);

	function decrement(){
		time--;
		if(time <= 0){
			clearInterval(timer);
		}
		box.value = `${Math.floor(time / 60)} : ${('0' + time % 60).slice(-2)}`;
	}
}
