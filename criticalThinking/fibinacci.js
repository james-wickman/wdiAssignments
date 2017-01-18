function fibonacci(num) {
  var startPoint = [1,1];
  for (var i = 1; i < num; i++) {
    var addingToArray = startPoint[i] +  startPoint[i - 1];
    startPoint.push(addingToArray);
  }
  console.log(startPoint[num])
}

fibonacci(52)