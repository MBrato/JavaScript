function loadRepos(){
	let username = $('#username').val();
	let url = 'https://api.github.com/users/' + username + '/repos';
	let req = new XMLHttpRequest();
	req.open('GET', url);
	req.onload = function(){
		if(req.status === 200){
			$('#result').text(req.responseText);
		}
		else{
			$('#result').text('Request faild. Returned status of  ' + req.status);
		}
	}
	req.send();
}