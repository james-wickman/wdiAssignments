alert("Hello World");


function add(){
	var num1 = parseFloat(window.document.getElementById("num1").value);
	var num2 = parseFloat(window.document.getElementById("num2").value);
	var times = window.document.getElementById("times").value;
	  window.document.getElementById("equals").value = num1 + num2

	if (times == "*") {
	  window.document.getElementById("multiple").value = num1 * num2
	} else if (times == "/") {
	  window.document.getElementById("multiple").value = num1 / num2
	} else if (times == "-") {
	  window.document.getElementById("multiple").value = num1 - num2
	} else if (times == "+") {
		window.document.getElementById("multiple").value = num1 + num2
	} else {
		alert ("Please select any of these /-+*")
	}
}

function change() {
	document.getElementById('el').innerHTML = "Not here,  Please press submit when ready";
}


var cars = ["chevy", "ford", "toyota", "alfa"];
var cards = {ace:'hearts', king:'clubs', qween:'spades', jack:'diamonds'};

console.log(cars);
console.log(cards);

for(var i in cars) {
	document.getElementById("juice").innerHTML += cars[i] + " ";
}