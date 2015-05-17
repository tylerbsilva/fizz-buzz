$(document).ready(function(){
	var max = promptUser();

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
});


function promptUser() {
	var max = prompt("Please enter the maximum number of Fizz Buzzs you would like to see!");
	nanCheck(max);
	return max;
}

function nanCheck(num) {
	num = parseInt(num);
	if (num == NaN) {
		num = promptUser();
	} else {
		return num;
	}
}