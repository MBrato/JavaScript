function attachGradientEvents(){
	let gradient = document.getElementById('gradient');
	gradient.addEventListener('mousemove', gradientMove);
	gradient.addEventListener('mouseout', gradientOut);

	function gradientMove(event){
		let x = event.offsetX;
		let percent = (x / this.clientWidth) * 100;
		document.getElementById('result').textContent = percent.toFixed(0) + '%';
	}
	function gradientOut(){
		document.getElementById('result').textContent = "";
	}
}
