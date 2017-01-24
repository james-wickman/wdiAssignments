
// var Multiplier = function( value) {
// 	return {
// 		numbers: value,
// 		multiply: function() {
// 			return this.numbers*2;
// 		},
// 		getCurrentValue: function() {
// 			return this.multiply();
// 		}
// 	}
	
// }
// var multiplier = new Multiplier( 20 );
// document.body.innerHTML = multiplier.multiply();


var Person = function(role) {
	this.walk = "bipedal",
	this.reagon = "northAmerica",
	this.email = "google"

}
var Teacher = function() {
	var person = new Person('teacher');



	person.teacher = true,
	person.student = false
	person.email = "outlook";




	return person;
}

 console.log(new Teacher);

var Student = function() {
	this.teacher = false,
	this.student = true,
	this.knowEverything = false,
	Person.apply(this);
}
console.log(new Student);


var School = function() {
	this.student = [];
	this.teacher = [];
	this.new_student = function() {
		this.student.push(new Student);
	}
	this.hire_teacher = function() {
		this.teacher.push(new Teacher);
	}
}
var mySchool = new School;
mySchool.new_student();
mySchool.new_student();
mySchool.new_student();
mySchool.hire_teacher();
console.log(mySchool);




var Album = function(name_of_album) {
	return {
		name: name_of_album,
		photos:[],
		addphoto: function(photo) {
			this.photos.push(photo);	
		},
		run: function() {

			var album_html = "";
			album_html += "<h1>" + this.name + "</h1>" + "<br />";

			album_html += "<div class='album_photos'>";
			for (var i in this.photos) {
				album_html += "<span class='album_photo'>";
				album_html += this.photos[i].title + "<br />";
				album_html += "<img src='" + this.photos[i].filename  + "'/>" + "<br />";
				album_html += "</span>";
			}
			album_html += "</div>";
			return album_html;
		}
	};
}

var grand_canyon = new Album("grand canyon album");

grand_canyon.addphoto({
	title:"Grand Canyon Photo",
	filename: "https://tse4.mm.bing.net/th?id=OIP.M7c77712610872f191290b42537dec7f6H0&pid=15.1",
	locatation: ""
});
grand_canyon.addphoto({
	title:"Grand Canyon Photo2",
	filename: "http://3.bp.blogspot.com/-tsI0rHqjxnw/TzbxCiZbjsI/AAAAAAAACMY/f-OMzGZxrg8/s1600/Grand+canyon+national+park.jpg",
	locatation: ""
});


var ski_resort = new Album("ski_resort_album");

var add = {
	title:"Ski resorts",
	filename: "https://tse3.mm.bing.net/th?id=OIP.Me96ee8fb8035e045b4fa7b60cf85ed97o0&pid=15.1",
	location: ""
};
ski_resort.addphoto(add);
var add = {
	title: "Ski resorts2",
	filename: "https://tse1.mm.bing.net/th?id=OIP.Mfb8b968d75f71a851dfaaee13e5d1eb3H0&pid=15.1",
	location: ""
};
ski_resort.addphoto(add);

document.body.innerHTML += grand_canyon.run();
document.body.innerHTML += ski_resort.run();

myNodelist = document.getElementsByClassName("album_photo");


var photo_number = "";

// console.log(myNodelist.length);
var i;
for ( i = 0; i < myNodelist.length; i++) {
	myNodelist[i].onclick = function() {
		console.log(myNodelist);
	}
};


// document.body.innerHTML += grand_canyon.photos[0].title + "<br />";

// document.body.innerHTML += "<img src=\"" + grand_canyon.photos[0].filename + "\"/>" + "<br />";

// var album_html = ""
// album_html+= "<h1>" + grand_canyon.name + "</h1>" + "<br />";

// album_html += "<div>"
// for (var i in grand_canyon.photos) {
// 	album_html += "<span style='display:inline-block;padding:10px;'>"
// 	album_html += grand_canyon.photos[i].title + "<br />";
// 	album_html += "<img src='" + grand_canyon.photos[i].filename  + "' height ='100px'/>" + "<br />";
// 	album_html += "</span>"
// }
// album_html += "</div>"

// document.body.innerHTML += album_html

// var album2_html = ""
// album2_html+= "<h1>" + ski_resort.name + "</h1>" + "<br />";

// album2_html += "<div>"
// for (var i in ski_resort.photos) {
// 	album2_html += "<span style='display:inline-block;padding:10px;'>"
// 	album2_html += ski_resort.photos[i].title + "<br />";
// 	album2_html += "<img src='" + ski_resort.photos[i].filename  + "' height ='100px'/>" + "<br />";
// 	album2_html += "</span>"
// }
// album2_html += "</div>"

// document.body.innerHTML += album2_html





// var Car = function( make ) {
	
// 	// this is a "Class", or a template for an object

// 	var fueltype = "gas";
// 	if (make=="tesla") {
// 		fueltype = "electricity";
// 	}

// 	return {
// 		wheels: "rubber",
// 		frame: "metal",
// 		fueltype: fueltype,
// 		action: function(){
// 			if (make=='ferarri') {
// 				console.log(' win the race! ');
// 			} else {
// 				console.log('drive fast');
// 			}
// 		}
// 	}

// }

// var toyota = new Car('toyota');

// var chevy = new Car('chevy');

// var ford = new Car('ford');