function open_modal() {
	document.querySelector("#modal").style.display = "block";
}
function close_modal() {
	document.querySelector("#modal").style.display = "none";
}

/*
function dosubmit() {
	console.log("submit function ran");
	if (document.querySelector("[name=email]").value == "") {
		alert ("Please enter email address!!");
	} else if (document.querySelector("[name=username]").value == "") {
		alert ("Please also enter your Username!!");
	} else if (document.querySelector("[name=password_1").value == "") {
		alert ("Please also Create a password!!");
	} else if (document.querySelector("[name=password_2").value == "") {
		alert ("Please also re-type password");
	} else if (document.querySelector("[name=password_1").value) != 
		(document.querySelector("[name=password_2").value) {
		alert ("Please make sure passwords match")
	} else {
		close_modal();
	}


}
*/
function dosubmit() {
	var form_feilds = document.getElementsByTagName("input");
	console.log(form_feilds);

	//form_feilds.forEach(function(current_input) {

	for (var i = 0; i < form_feilds.length; i++) {
		var current_input = form_feilds[i];


//	for (var i in form_feilds) {
//		var current_input = form_feilds[i];

		if (current_input.value == "") {
			document.body.innerHTML += (current_input.name + " was left blank" + "<br />");
			
		} 
		
	}
	if (document.querySelector("[name=password_1]").value !=
			document.querySelector("[name=password_2").value) {
			document.body.innerHTML += ("Passwords must match!" + "<br />");
			
	}
}












	// var inputs = document.getElementsByTagName('input');
	// for (var i in inputs) {
	// 	var currentInput = inputs[i];

	// 	if (currentInput.value == "") {
	// 		alert( currentInput.name + ' is required!')
	// 	}
	// }
/*
setTimeout(
	function(){
		document.querySelector("#time").style.display="block";
	},
	3000
);


var myState = "UT"
var allStates = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA",
"ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND",
"NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX",
"UT","VA","VI","VT","WA","WI","WV","WY"];



setTimeout(
	function(){
		for (var i in allStates) {
			if (allStates[i] == myState) {
				document.body.innerHTML += "<h1>" + myState + "</h1>";
			} else {
				document.body.innerHTML += "<p>" + allStates[i] + "</p>";
			}
		}
	}, 
	3000
);

function 


//$("#someElem").on("click",function() {
//
//})


function listen_to_music(IAM) {

	if ( IAM == "happy") {
		console.log("listen to Matt")
	} else if ( IAM == "tired") {
		console.log("listen to art")
	} else if ( IAM == "relaxed") {
		console.log("listen to regae")
	} else {
		console.log("listen to nothing")
	}
}
*/







//var number_1 = 24;
//var number_2 = 34;
//console.log(number_1 + number_2);

//var word_1 = "Hello";
//var word_2 = "World";
//console.log(word_1 + " " + word_2);

//var cars = {};
//	cars["make"] = ["toyota","mazda","nissan"];
//	cars["model"] = ["supra","miata","300zx"];
//for(var i in cars) {
//	console.log(i);
//	console.log(cars[i]);
//}

//var person_num = prompt("Please enter a number");
//	if (person_num < 100) {
//		alert ("Your number was less than 100");
//	}
//	else if (person_num >= 100) {
//		alert ("Your number " + person_num + " was 100 or more!" );
//	}

//var person_speed = prompt("Please enter your speed");
//	if (person_speed <= 100) {
//		alert ("Your speed was " + person_speed);
//	} else if (person_speed > 100) {
//		alert ("You were going " + (person_speed - 100) + " " + "over!");
//	}

//var user_input = function() {
//	var what_to_input = "";
//
//}


//var hello = function() {
//	console.log("Hello World");
//}
//hello();

//var person_choice = prompt("Please enter door1, door2, or door3");
//
//	if (person_choice = "door1") {
//		alert ("You won a goat!!");
//	} else if (person_choice = "door2") {
//		alert ("You won a car!!!");
//	} else if (person_choice = "door3") {
//		alert ("You won a boat!!!!");
//	} else {
//		alert ("You won nothing!!  You have to enter door1, door2, or door3");
//	}
















//function show_1() {
//	document.getElementsByClassName("paragraph_1").classList.add("selected");
//}

//function hide_1() {
//	document.getElementsByClassName("paragraph_1").classList.remove("selected");
//}

//function show_2() {
//	document.getElementsByClassName("paragraph_2").classList.add("selected");
//}

//function hide_2() {
//	document.getElementsByClassName("paragraph_2").classList.remove("selected");
//}

//var the_week=["monday","tuesday","wednesday","thursday","friday"];
//	for (var i in the_week) {
//		console.log(the_week[i]);
//	}
//	var x = 99;
//while (x>0) {
//	console.log(x + " bottles of beer on the wall " + x + " bottles of beer, take one down pass it around " 
//+ (x-1) + " bottles of beer on the wall");
//	x--;
//}	