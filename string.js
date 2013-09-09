//from here : http://stackoverflow.com/a/2548133
exports.endsWith=function(str,suffix){
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

//from here : http://stackoverflow.com/a/646643
exports.startsWith=function(str,prefix){
	return str.slice(0, prefix.length) === prefix;
}

//from here : http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
exports.toTitleCase=function(str){
	return str.replace(/([^\W_]+[^\s-]*)*/g,function(txt){
		return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();
	});
}


