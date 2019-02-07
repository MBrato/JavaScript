function loadRepos(){
	let username = $('#username').val();
	let url = 'https://api.github.com/users/' + username + '/repos';
	let req = new XMLHttpRequest();
	req.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            $('#result').text(this.responseText);
        }
    };
    req.open('GET', url, true);
	req.send();
}