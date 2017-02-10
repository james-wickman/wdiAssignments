

function movingBlock() {
	if (movingLR == 'right') {
		platformArray[10].placeY += .5;
		if (platformArray[10].placeY >= canvas.width - 13) {
			movingLR = 'left';
		}
	}
	
	if (movingLR == 'left') {
		platformArray[10].placeY -= .5;
		if (platformArray[10].placeY < 40) {
			movingLR = 'right';
		}
	}
}
function liftBlock() {
	if (movingUD == 'up') {
		platformArray[11].placeX -= .5;
		if (platformArray[11].placeX <= 29) {
			movingUD = 'down';

		}
		
	}
	if (movingUD == 'down') {
		platformArray[11].placeX += .5;
		if (platformArray[11].placeX >= 90) {
			movingUD = 'up';
		}

	}
	return platformArray[11].placeX;
}

function gettingPushed() {
	
	if (x + 4 >= right) {
		x -= movementSpeed;
	}

	if (x - 4 <= left) {
		x += movementSpeed;
	}
	if (y >= bottom) {
		y -= movementSpeed;
	}
	if (y <= theTop) {
		y += movementSpeed;
	}
	
}

function loser() {
	if (y + 1 >= bottom && y - 1 <= theTop) {
		location.reload();
	}
	if (x + 1 >= right && x - 1 <= left) {
		location.reload();
	}
}
function winning() {
	if (y > 140) {
		console.log('you won');
		setTimeout(myFunc = function() {
			location.reload();
		
		}, 3000);
	}
}

var imageObj = new Image(20, 20);
imageObj.src = 'brick.jpeg';
imageObj.onload = function() {
    ctx.drawImage(imageObj, 100, 100);
};




var start = setInterval(function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	right = canvas.width;
	left = 0;
	theTop = 0;
	bottom = canvas.height - headRadius;
	
	settingRight(0);
	settingtheTop(0);
	settingLeft(0);
	settingBottom(0);
	
	movingAround();
	creatingPlatforms();
	creatingPerson();
	gettingPushed();
	movingBlock();
	liftBlock();
	falling();
	winning();
	loser();

}, normalRefresh)














