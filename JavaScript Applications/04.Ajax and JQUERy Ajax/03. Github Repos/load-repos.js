function loadRepos(){
	let username = $('#username').val();
	let url = 'https://api.github.com/users/' + username + '/repos';
	$.get(url, function(data){
		$(data).each(function(index, item){
			$('#repos').append($('<li>').append($('<a>').attr('href', item.html_url).text(item.html_url))); 
		});
	});
}