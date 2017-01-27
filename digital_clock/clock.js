

// /*
//   library of helpful functions (currently only one)
// */
// var pad = function(number) {
//   if (number < 10) {
//     return "0"+number;
//   } else {
//     return number;
//   }
// }

// /*
//   logic that only gets run once, and never again
// */
// var hour = document.getElementById('hour');
// var minute = document.getElementById('minute');
// var second = document.getElementById('second');
// var hand_hour_container = document.getElementById('hand_hour_container');
// var hand_minute_container = document.getElementById('hand_minute_container');
// var hand_second_container = document.getElementById('hand_second_container');
// var hour_container = document.getElementById('hour_container');
// var minute_container = document.getElementById('minute_container');
// var second_container = document.getElementById('second_container');



// /*
//   the function that will run on an interval
// */
// var autoUpdate = function() {

//   var d = new Date();
//   var hours = d.getHours();
//   var minutes = d.getMinutes();
//   var seconds = d.getSeconds();

//   hour.innerHTML = pad(hours % 12);
//   minute.innerHTML = pad(minutes);
//   second.innerHTML = pad(seconds);
// }

// /*
//   run first time manually, including initial rotations
// */
// var d = new Date();
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();

// hour.innerHTML = pad(hours % 12);
// minute.innerHTML = pad(minutes);
// second.innerHTML = pad(seconds);

// var hours_degrees = ( (((hours%12)/12)*360)+((minutes/60)*30)+((seconds/60)*0.5) +45 );
// var minutes_degrees = ( ((minutes/60)*360)+((seconds/60)*0.5) +45);
// var seconds_degrees = ( ((seconds/60)*360)+45);

// hand_hour_container.style.transform = 'rotate('+ hours_degrees +'deg)';
// hand_minute_container.style.transform = 'rotate('+ minutes_degrees +'deg)';
// hand_second_container.style.transform = 'rotate('+ seconds_degrees +'deg)';

// hour_container.style.transform = 'rotate(-'+ hours_degrees +'deg)';
// minute_container.style.transform = 'rotate(-'+ minutes_degrees +'deg)';
// second_container.style.transform = 'rotate(-'+ seconds_degrees +'deg)';

// /*
//   then run automatically
// */
// setInterval(autoUpdate, 1000);



















var x = 1;
while (x <= 24) {
	var whatever_hour_it_is_now = (new Date()).getHours();
	var hour1 = document.getElementById("hours");

	var selected_attr = "";
	if (x== whatever_hour_it_is_now ) {
		selected_attr = " selected='selected'";
	}

  if (x <12) {
  		hour1.innerHTML = 
  		hour1.innerHTML + ("<option "+selected_attr+">" + x + " am " + "</option>");
	
	} else if (x == 12) {
		hour1.innerHTML = 
  		hour1.innerHTML + ("<option "+selected_attr+">" + x + " noon " + "</option>");
	} else if (x < 24) {
		hour1.innerHTML = 
  		hour1.innerHTML + ("<option "+selected_attr+">" + (x - 12) + " pm " + "</option>");
	} else if (x == 24) {
		hour1.innerHTML = 
  		hour1.innerHTML + ("<option "+selected_attr+">" + (x - 12) + " am " + "</option>");
	}
	x = x + 1;
} 
function pad(number) {
	if (number < 10) {
		return "0" + number;
	} else {
		return number;
	}
}

function time() {
	var x = (new Date()).getHours() % 12;
	var y = (new Date()).getMinutes();
	var c = (new Date()).getSeconds();

	document.getElementById("hours1").innerHTML = pad(x) + " :";
	document.getElementById("minutes").innerHTML = pad(y) + " :";
	document.getElementById("seconds").innerHTML = pad(c);
}
time()


// setInterval
setInterval(time, 1000);


