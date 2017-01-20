input = prompt("enter a number you want to get all the prime numbers too")

function findPrime(some_number){
  for (var numKey = 0; numKey <= some_number; numKey++) {
    if ( numKey > 1){
      var isPrime = true;
      for ( var i = 2; i < numKey; i++){
        if ( (numKey%i) === 0){
          isPrime = false;
          break;
        }
      }
      if (isPrime){
        document.getElementById("prime_numbs").innerHTML += "<span id='prime'> </span> " + numKey;
      }
    }
  }
}

findPrime(input);

function pad(number) {
  if( number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var hand_hour_container = document.getElementById("hand_hour_container");
var hand_minute_container = document.getElementById("hand_minute_container");
var hand_second_container = document.getElementById("hand_second_container");
var hour_container = document.getElementById("hour_container");
var minute_container = document.getElementById("minute_container");
var second_container = document.getElementById("second_container");

function autoUpdate() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  
  hour.innerHTML = pad(hours % 12);
  minute.innerHTML = pad(minutes);
  second.innerHTML = pad(seconds);
}

var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();



hour.innerHTML = pad(hours % 12);
minute.innerHTML = pad(minutes);
second.innerHTML = pad(seconds);


setInterval(autoUpdate, 1000);