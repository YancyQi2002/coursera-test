(function (window) {
	var yancyGreeter = {};
	yancyGreeter.name = "Yancy";
	var greeting = "Hello ";
	yancyGreeter.sayHello = function () {
		console.log(greeting + yancyGreeter.name);
	}

	window.yancyGreeter = yancyGreeter;

})(window);