$(document).ready(function(){
	for (var i =1; i <= 100; i++) {
		if (i % 15 === 0) {
			$("body").append("<p>FIZZBUZZ</p>");
		} else if (i % 5 === 0) {
			$("body").append("<p>BUZZ</p>");
		} else if (i % 3 === 0) {
			$("body").append("<p>FIZZ</p>");
		} else {
			$("body").append("<p>" + i + "</p>");
		}
	}
});