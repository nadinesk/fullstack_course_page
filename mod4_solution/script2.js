(function (window) {

	var jonathanGreeter = {}; 
	jonathanGreeter.name = "Jonathan";
	var greeting = "Hi ";
	jonathanGreeter.sayHi = function () {
	console.log(greeting + jonathanGreeter.name); 
}

	window.jonathanGreeter = jonathanGreeter; 
})(window); 




