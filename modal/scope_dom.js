// var eName = document.getElementById("name");
// var eFood = document.getElementById("food");
// var eSeason = document.getElementById("season");

// eName.innerText = "James";
// eFood.innerText = "Burger";
// eSeason.innerText = "House of Cards";

// var eP = document.getElementsByTagName("p");

// for ( var i = 0; i < eP.length; i++){
// 	eP[i].style.backgroundColor = 'lightblue';
// }

// var red = document.getElementsByClassName('red');
// for (var i = 0; i < red.length; i++){
// 	red[i].style.color = 'red';
// }
// var eBig = document.querySelector('.big .bigger');

// eBig.style.color = 'green';

// var eBody = document.querySelector("body");
// for (var i = 1; i <= 10; i++) {
// 	var eH4 = document.createElement('h4');
// 	eH4.innerText = "number " + i;
// 	eBody.appendChild(eH4);
// }
// var eFirstP = eP[0];
// var eSecondP = eP[1];


// eFirstP.style.backgroundColor = 'lightblue';
// eSecondP.style.color = 'blue';
var books = [{
    name: 'Beautiful Disaster',
    author: 'Jamie McGuire',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, unde, voluptatum. Similique accusamus excepturi autem. Magnam ipsum blanditiis nesciunt neque commodi quidem odio. Ipsum illum maiores rerum atque, pariatur enim.'
}, {
    name: 'The One Man: The Riveting and Intense Bestselling WWII',
    author: 'Andrew Gross',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, unde, voluptatum. Similique accusamus excepturi autem. Magnam ipsum blanditiis nesciunt neque commodi quidem odio. Ipsum illum maiores rerum atque, pariatur enim.'
}, {
    name: 'The Affair',
    author: 'Lee Child ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, unde, voluptatum. Similique accusamus excepturi autem. Magnam ipsum blanditiis nesciunt neque commodi quidem odio. Ipsum illum maiores rerum atque, pariatur enim.'
}]
var eBody = document.querySelector('body');

for (var i = 0; i < books.length; i++){
	var eH3 = document.createElement('h3');
	var eH4 = document.createElement('h4');
	var eP = document.createElement('p');
	var eDiv = document.createElement('div');
	var hr = document.createElement('hr')

	eH3.innerText = books[i].name;
	eH4.innerText = books[i].author;
	eP.innerText = books[i].description;

	eDiv.appendChild(eH3);
	eDiv.appendChild(eH4);
	eDiv.appendChild(eP);
	eDiv.appendChild(hr);


	eBody.appendChild(eDiv);

}



function addTooArray(){
	var submitButton = document.getElementById('subButton');
	var description1 = document.getElementById('description1');
	var author1 = document.getElementById('author1');
	var name1 = document.getElementById('name1');
	var form1 = document.getElementById('form1');
	var bookName = '';
	var bookAuthor = '';
	var bookDescription = '';
	bookName = name1.value;
	bookAuthor = author1.value;
	bookDescription = description1.value;
	books.push({'name': bookName, 'author': bookAuthor, 'description': bookDescription});

	if (bookName != "" && bookAuthor != "" && bookDescription != "") {

		for (var i = books.length - 1; i < books.length; i++){
			var eH3 = document.createElement('h3');
			var eH4 = document.createElement('h4');
			var eP = document.createElement('p');
			var eDiv = document.createElement('div');
			var hr = document.createElement('hr')

			eH3.innerText = books[i].name;
			eH4.innerText = books[i].author;
			eP.innerText = books[i].description;

			eDiv.appendChild(eH3);
			eDiv.appendChild(eH4);
			eDiv.appendChild(eP);
			eDiv.appendChild(hr);


			eBody.appendChild(eDiv);
		}
	}
	
}
var form = document.getElementById("addingBook");
var openButton = document.getElementById("open");

function hideAdd() {
	openButton.style.display = "block";
	form.style.display = 'none';
}
function openAdd() {
	form.style.display = 'block';
	openButton.style.display = "none";

}























