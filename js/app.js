$(document).ready(function(){
	var max = promptUser();
	fizzbuzzer(max);
});

function promptUser() {
	do {
		var input = parseInt(prompt("Please enter a number!"));
	} while(input % 1 !== 0);
	return input;
}


function fizzbuzzer(max) {
	for (var i =1; i <= max; i++) {
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
}