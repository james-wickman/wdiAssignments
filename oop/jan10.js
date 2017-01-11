// // function Square(width, height) {
// //   this.width = width;
// //   this.height = height;
// // }
// // Square.prototype.getArea = function() {
// //   return this.width * this.height;
// // };
// // Square.prototype.getParameter = function() {
// //   return 4 * this.width;
// // };
// // var square = new Square(2,2);
// // console.log(square.getArea());



// // function Rectangle(width, height) {
// //   Square.call(this, width, height);
// // }
// // Rectangle.prototype.getArea = function() {
// //   return this.width * this.height;
// // };
// // Rectangle.prototype.getParameter = function() {
// //   return (2 * this.width) + (2 * this.height);
// // };
// // var rectangle = new Rectangle(4, 6);
// // console.log(rectangle.getParameter());



// // function Multiplier() {
// //   this.currentValue = 1;
// // } 
// // Multiplier.prototype.multiply = function(num) {
// //   this.currentValue = num * this.currentValue;
// //   return this.currentValue;
// // };
// // Multiplier.prototype.getCurrentValue = function() {
// //   return this.currentValue;
// // };
// // Multiplier.prototype.clear = function() {
// //   this.currentValue = 1;
// // };
// // var multiplier = new Multiplier();
// // console.log(multiplier.multiply(4));
// // console.log(multiplier.multiply(5));
// // console.log(multiplier.clear());
// // console.log(multiplier.multiply(5));


// // function Classroom() {
// //   this.enrolledStudents = [];
// //   this.capacity = 25;
// //   this.instructorName = "Barnes";
// //   this.roomNumber = "113";
// // }

// // Classroom.prototype.addStudent = function(name, email) {
// //   this.enrolledStudents.push({"name": name, "email": email});
// // };
// // Classroom.prototype.removeStudent = function(student) {
// //   this.enrolledStudents.splice(students, 1);
// // };
// // Classroom.prototype.getAllStudents = function() {
// //   console.log(this.enrolledStudents);
// // };
// // Classroom.prototype.findStudent = function(email) {
// //   for (var i = 0;i < this.enrolledStudents.length; i++) {
// //     if (this.enrolledStudents[i].email == email) {
// //       console.log(i);
// //     }
// //   }
// // };
// // Classroom.prototype.isFull = function() {
// //   if (this.enrolledStudents.length >= this.capacity) {
// //     console.log("class is full");
// //   } else{
// //     console.log("class still has room");
// //   }
// // };
// // Classroom.prototype.getRemainingSeatCount = function() {
// //   console.log(this.capacity - this.enrolledStudents.length);
// // };

// // var classroom = new Classroom();
// // classroom.addStudent("mark", "mark@aol");
// // classroom.addStudent("webber", "webber@hotmail");
// // classroom.getAllStudents();
// // classroom.getRemainingSeatCount();

function Photo(name, fileName, location, date) {
  this.name = name;
  this.fileName = fileName;
  this.location = location;
  this.datTaken = date;
}
function PhotoAlbum(albumName) {
  this.albumName = albumName;
  this.photos = [];
  this.i = 0;
}
PhotoAlbum.prototype.addPhoto = function(name, fileName, location, date) {
  var photo = new Photo(name, fileName, location, date)
  this.photos.push(photo);
};
PhotoAlbum.prototype.getAllPhotos = function() {
  console.log(this.photos);
};
PhotoAlbum.prototype.removePhoto = function(photo) {
  this.photos.splice(photo, 1);
};
PhotoAlbum.prototype.startSlideShow = function() {
  var self = this;
  self.intern = setInterval(function(){
    console.log(self.photos[self.i].fileName);
    self.i++;
    if(self.i == self.photos.length) {
      self.i = 0;
    }
  }, 3000);
  
};
PhotoAlbum.prototype.pauseSlideShow = function() {
  clearInterval(this.intern);
};
PhotoAlbum.prototype.stopSlideShow = function() {
  clearInterval(this.intern);
  this.i = 0;
};

var photoAlbum = new PhotoAlbum();
photoAlbum.addPhoto('name1', 'filename1', 'location','date' );
photoAlbum.addPhoto('name2', 'filename2', 'location2', 'date2');
photoAlbum.addPhoto('name3', 'filename3', 'location3', 'date3');
// photoAlbum.getAllPhotos();
// var intern = setInterval(photoAlbum.startSlideShow(), 3000);
photoAlbum.startSlideShow();
photoAlbum.stopSlideShow();


// function Calculator() {
//   this.currentValue = 0;
// }
// Calculator.prototype.setCurrentValue = function(num) {
//   this.currentValue = num;
// }
// Calculator.prototype.add = function(num) {
//   console.log(this.currentValue + num);
// }
// Calculator.prototype.subtract = function(num) {
//   console.log(this.currentValue - num);
// }
// Calculator.prototype.multiply = function(num) {
//   console.log(this.currentValue * num);
// }
// Calculator.prototype.divide = function(num) {
//   console.log(this.currentValue / num);
// }
// Calculator.prototype.getCurrentValue = function() {
//   console.log(this.currentValue);
// }
// Calculator.prototype.reset = function() {
//   this.currentValue = 0;
//   return currentValue;
// }

// var calculator = new Calculator();
// calculator.setCurrentValue(3);
// calculator.multiply(5);


