$(document).ready(function(){
	var max = promptUser();
	fizzbuzzer(max);
});

function nanCheck(num) {
	if (typeof(num) != Number) {
		return false;
	} else {
		return true;
	}
}

function promptUser() {
	do {
		var input = parseInt(prompt("Please enter a number!"));
		var check = nanCheck(input);
	} while(check == false);
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