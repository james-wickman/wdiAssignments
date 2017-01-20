// for (var i = 100; i > 0; i--){
//     console.log(i + ' bottles of root beer on the wall, ' + i + ' bottles of root beer...take one down, pass it around ' + (i - 1) + ' bottles of root beer on the wall');

// }
// x = 100;
// while (x >= 0) {
//   if ((x % 3)== 0 && (x % 5) == 0){
//     console.log("FizzBuzz");
//   }
//   else if (x % 3 == 0) {
//     console.log("Fizz");
//   }
//   else if (x % 5 == 0) {
//     console.log("Buzz");
//   }
//   else{
//     console.log(x);
//   }
//   x--;
// }



// var number = [];

// for (var i = 0; i <= 100; i++){
//   number.push(i);
// }
// function findPrime(some_number){
//   for (var numKey in some_number) {
//     if ( numKey > 2){
//       var isPrime = true;
//       for ( var i = 2; i < numKey; i++){
//           if ( (numKey%i) === 0){
//             isPrime = false;
//             break;
//           }
//       }
//       if (isPrime){
//         console.log(numKey);
//       }
//     }
//   }
// }

// findPrime(number);


var myobject = {};
var current_song;
var imgs;
var but = document.getElementById("picture");
var but2 = document.getElementById("notpic");



function dosubmit() {
	$('.album').remove();

	var search_input = document.querySelector("#sample_data");
	var search_input2 = document.querySelector("#type_data");
	var released = document.querySelector("#released");
	var length = document.querySelector("#length")
	var search_term = search_input.value;
	var search_type = search_input2.value;
	var search_released = released.value;
	var search_length = length.value;
	console.log(search_term);
	console.log(search_type);
	console.log(search_released);
	console.log(search_length);


	$.ajax({
  		type: "GET",
  		url: "http://www.omdbapi.com/?",
  		data: {
  			t: search_term,
  			type: search_type,
  			y: search_released,
  			plot: search_length
  		},
  		success: function (response) {
  			var div_set = "";
  			div_set +="<div class='album'>"
  			for ( var i in response) {
  				if (i == "Poster") {
  					imgs = response[i]
  					div_set += "<br /><img style = 'height:200px;' src = '" + imgs + "'/>" + "<br />";
  				}else {
  					div_set += "<br />" + i + ":" + " " + response[i] + "<br />";
  				}
  			}
  			div_set +="</div>";
  			document.body.innerHTML += div_set;

  			// console.log(response);
  		} 
	});
	search_input.value = "";
};




