var stringy = function(num) {
  // starting printednum at null for the input 0
  var printednum = '';
  // then if the input is more than 0 continue so it can add on
  if (num > 0) {
    //I started by adding a 1 too begin with 
    // printednum = "1";
    // then decided to integrate it into the for loop
    for (var i = 0; i < num; i++) {
      // i put it all in a for loop and made num the end point so it would continue through the loop and add on which ever was correct untill it reached the input num
      // then I added an if else statement to add a "1" if even and "0" if odd
      if (i == 0 || i%2 == 0) {
        //I put them in quotes to make them strings and not numbers so it would add the strings onto it instead of adding the numbers.
        printednum += '1';
      }
      else if (i == 1 || i%2 != 0) {
        printednum += "0";
      }
    }
    console.log(printednum);
  }
}

stringy(21);