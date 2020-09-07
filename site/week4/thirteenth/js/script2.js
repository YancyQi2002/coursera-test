(function (window) {
	var qiGreeter = {};
	qiGreeter.name = "Qi";
	var greeting = "Hi ";
	qiGreeter.sayHi = function  () {
		console.log(greeting + qiGreeter.name);
	}

	window.qiGreeter = qiGreeter;

})(window);

