let input = [ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ];

function replaceTags(args){
	let text = args[0],
		replStr = '[our site](http://academy.telerik.com)',
		reg = /<a.*?<\/a>/g; ///<a(.*?)>(.*?)<\/a>/g

		return text.replace(reg, replStr);

}

console.log(replaceTags(input));
