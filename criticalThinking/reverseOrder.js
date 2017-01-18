
function reverseOrder(number) {
  var reverseNumber = [];
  numberInput = ('' + number);
  for (var i = numberInput.length - 1; i >= 0; i--) {
    reverseNumber.push(numberInput[i]);
  }
  console.log(reverseNumber);
}

reverseOrder(1234567);