$(document).ready(function(){
	var max = promptUser();

	fizzbuzzer(max);
});

//prompt user
function promptUser() {
	var input = prompt("Please enter a number!");
	nanCheck(input);
	return input;
}

function nanCheck(num) {
	if (parseInt(num) == NaN) {
		return false;
	} else {
		return true
	}
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