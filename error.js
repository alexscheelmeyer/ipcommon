var util=require('util');

// adapted from here : http://stackoverflow.com/a/8460508
exports.custom=function(name){
	var customError;
	eval('customError=function '+name+'(message){\n'+
		 'Error.call(this);\n'+
		 'Error.captureStackTrace(this,this.constructor);\n'+
		 'this.name=this.constructor.name;\n'+
		 'this.message=message;\n'+
		 '}');
	util.inherits(customError,Error);
	return customError;
}


