
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var headRadius = 5;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var bottom = 20 - headRadius;
var theTop = 0;
var right = canvas.width;
var left = 0;
var x = headRadius + 2;
var y = bottom;
var dx = 2;
var dy = -2;
var isJumping = false;
var movementSpeed = 2;
var jumpHeight = 6;
var currentJump = false;
var upPressed = false;
var leftPressed = false;
var rightPressed = false;
var currentJump = false;
var isJumping = false;
var heightForJump = 12;
var counting = 0;
var leftPlace = 0;
var rightPlace = 0;
var topPlace = 0;
var bottomPlace = 0;
var normalRefresh = 15;
var movingLR = 'right';
var movingUD = 'up';



var platformArray = [
	{
		height: 10,
		width: 260,
		placeX: 20,
		placeY: 0
	},
	{
		height: 10,
		width: 260,
		placeX: 60,
		placeY: 40

	},
	{
		height: 10,
		width: 260,
		placeX: 100,
		placeY: 0
	},
	{
		height: 10,
		width: 200,
		placeX: 140,
		placeY: 100
	},
	{
		height: 7,
		width: 8,
		placeX: 13,
		placeY: 60
	},
	{
		height: 7,
		width: 8,
		placeX: 0,
		placeY: 90
	},
	{
		height: 7,
		width: 8,
		placeX: 13,
		placeY: 140
	},
	{
		height: 7,
		width: 8,
		placeX: 0,
		placeY: 160
	},
	{
		height: 10,
		width: 8,
		placeX: 50,
		placeY: 80
	},
	{
		height: 10,
		width: 8,
		placeX: 50,
		placeY: 60
	},
	{
		height: 25,
		width: 10,
		placeX: 35,
		placeY: 40

	},
	{
		height: 10,
		width: 40,
		placeX: 60,
		placeY: 0
	},
	{
		height: 22,
		width: 8,
		placeX: 25,
		placeY: 100
	},
	{
		height: 22,
		width: 8,
		placeX: 25,
		placeY: 140
	},
	{
		height: 22,
		width: 8,
		placeX: 25,
		placeY: 170
	},
	{

		height: 10,
		width: 8,
		placeX: 50,
		placeY: 200
	},
	{

		height: 10,
		width: 8,
		placeX: 50,
		placeY: 120
	},
	{
		height: 1,
		width: canvas.width,
		placeX: 0,
		placeY: 0
	},
	{
		height: 2,
		width: canvas.width,
		placeX: canvas.height - 2,
		placeY: 0
	},
	{
		height: canvas.height,
		width: 2,
		placeX: 0,
		placeY: 0
	},
	{
		height: canvas.height,
		width: 2,
		placeX: 0,
		placeY: canvas.width - 2
	},

];


function keyDownHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = true;
	}
	else if (e.keyCode == 37) {
		leftPressed = true;
	}
	else if (e.keyCode == 38) {
		upPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.keyCode == 39) {
		rightPressed = false;
	}
	else if (e.keyCode == 37) {
		leftPressed = false;
	}
	else if (e.keyCode == 38) {
		upPressed = false;
	}
}
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);


creatingPerson = function() {
	ctx.beginPath();
	ctx.arc(x, y, headRadius, 0, Math.PI*2);
	ctx.fillStyle = 'blue';
	ctx.fill();
	ctx.closePath();
}


creatingPlatforms = function() {


	for (var i = 0; i < platformArray.length; i += 1) {
		ctx.beginPath();
		ctx.rect(platformArray[i].placeY, platformArray[i].placeX, platformArray[i].width, platformArray[i].height);
		ctx.fillStyle = 'green';
		ctx.fill();

		ctx.closePath();


	}
}

movingAround = function() {
	
	if (rightPressed) {
		x += movementSpeed;
	}

	if (rightPressed && x + 1 > right - headRadius) {
		x -= movementSpeed;

	}
	if (leftPressed) {
		x -= movementSpeed;
	}
	if (leftPressed && x - 1 < left + headRadius) {
		x += movementSpeed;
	}
	if (upPressed) {
		isJumping = true;
		
		if (isJumping) {
			movingUpDown();
		}

	}
}

function falling() {
	if (y - dy <= bottom && isJumping == false) {
		y += movementSpeed;
		return y;
		console.log('falling')
		console.log(bottom)
		console.log(y - dy)

	} else if (isJumping == false) {
		y = bottom - .5;
	}


}

function movingUpDown() {
	if (currentJump == false) {
		var jumpHeight = 0;
		currentJump = true;
		isJumping = true;
		var go = setInterval(function() {
			
			if (y <= theTop + dy && isJumping == true) {
				jumpHeight = heightForJump;
			}
			if (y > theTop && jumpHeight <= heightForJump && isJumping == true) {
				y -= movementSpeed;
				jumpHeight += 1;
			}
			if (y - dy >= bottom) {
				jumping = false;
				jumpHeight = 0;
				currentJump = false;
				isJumping = false
				window.clearInterval(go);
			}
			else if (y <= theTop || jumpHeight > heightForJump) {

				y += movementSpeed;
			}
		}, normalRefresh);
		
	}
	go;

}


settingBottom = function(counter) {
	if (counter >= platformArray.length) {
		return bottom;
	}

	else if (bottom > platformArray[counter].placeX && x + dx >= platformArray[counter].placeY && x - dx <= platformArray[counter].placeY + platformArray[counter].width && y <= platformArray[counter].placeX) {
		bottom = platformArray[counter].placeX - headRadius;
		bottomPlace = counter;
		settingBottom(counter + 1);
	}
	else if (x + dx < platformArray[bottomPlace].placeY || x - dx > platformArray[bottomPlace].placeY + platformArray[bottomPlace].width) {
		bottom = canvas.height;
		settingBottom(counter + 1);
	}
	else {
		settingBottom(counter + 1);
	}
}

settingRight = function(counter) {
	if (counter >= platformArray.length) {
		return right;
	}
	else if (right > platformArray[counter].placeY && y + headRadius >= platformArray[counter].placeX && y - headRadius <= platformArray[counter].placeX + platformArray[counter].height && x <= platformArray[counter].placeY) {
		right = platformArray[counter].placeY + 1;
		rightPlace = counter;
		settingRight(counter + 1)
		
	} 
	else if (y < platformArray[rightPlace].placeX || y > platformArray[rightPlace].placeX + platformArray[rightPlace].height) {
		right = canvas.width;
		settingRight(counter + 1);
	}
	else {
		settingRight(counter + 1);
	}

}
settingtheTop = function(counter) {
	if (counter >= platformArray.length) {
		return theTop;
	}
	else if (theTop < platformArray[counter].placeX + platformArray[counter].height && x + headRadius >= platformArray[counter].placeY && x - headRadius <= platformArray[counter].placeY + platformArray[counter].width && y + 5 >= platformArray[counter].placeX + platformArray[counter].height) {
		theTop = platformArray[counter].placeX + platformArray[counter].height + 3;
		topPlace = counter;
		settingtheTop(counter + 1)
	}
	else if (x < platformArray[topPlace].placeY || x > platformArray[topPlace].placeY + platformArray[topPlace].width) {
		theTop = 0;
		settingtheTop(counter + 1);
	}
	else {
		settingtheTop(counter + 1);
	}
}
settingLeft = function(counter) {
	
	if (counter >= platformArray.length) {
		return left;
	}
	else if (left < platformArray[counter].placeY + platformArray[counter].width && y + headRadius >= platformArray[counter].placeX && y - headRadius <= platformArray[counter].placeX + platformArray[counter].height && x >= platformArray[counter].placeY) {
		left = platformArray[counter].placeY + platformArray[counter].width - 1;
		leftPlace = counter;
		settingLeft(counter + 1)
	}
	else if (y < platformArray[leftPlace].placeX || y > platformArray[leftPlace].placeX + platformArray[leftPlace].height) {
		left = 0;
		settingLeft(counter + 1)
	}
	else {
		settingLeft(counter + 1)
	}
}

















