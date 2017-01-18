$(document).ready(function() {
    
    var scrollLeft = $('#scrollLeft');
    var leftButton = $('#leftButton');
    var middleButton = $('#middleButton');
    var rightButton = $('#rightButton');
    var scrollRight = $('#scrollRight');
    var leftPhoto = $('#leftPhoto');
    var middlePhoto = $('#middlePhoto');
    var rightPhoto = $('#rightPhoto');
    var pause = $('#pause');
    var play = $('#play');
    var skip = $('#skip');
    var songPlace = $('#songPlace')[0];
    var previousSong = 0;
    var nextSong = 2;
    var songNow = 1;
    var volumeUp = $('#volumeUp');
    var volumeDown = $('#volumeDown');
    var searchBar = $('#searchBar');
    var searchButton = $('#searchButton');
    var searchResults = $('#searchResults');
    var finalButton = $('.finalButton');
    var finalSubmit = $('#finalSubmit');
    var newPlayListButton = $('#newPlayListButton');
    var allPlayListButtons = $('#allPlayListButtons');
    var allPlayListButtonsX = $('#allPlayListButtonsX');
    var addToPlayList = $('#addToPlayList');

    var myJukeBox = new JukeBox();
    myJukeBox.startingFirstList();
    myJukeBox.savingPlayLists();
    myJukeBox.showSongs();
    myJukeBox.showPlayLists();
    myJukeBox.loadPlayList();
    
    

    middleButton.click(function() {
        myJukeBox.NextorPreviousSong(0); 
        myJukeBox.showSongs();
        myJukeBox.playSong();
    })
    rightButton.click(function() {
        myJukeBox.NextorPreviousSong(1); 
        myJukeBox.showSongs();
        myJukeBox.playSong();
    })
    leftButton.click(function() {
        myJukeBox.NextorPreviousSong(-1); 
        myJukeBox.showSongs();
        myJukeBox.playSong();
    })
    scrollLeft.click(function() {
        myJukeBox.NextorPreviousSong(-1);
        myJukeBox.showSongs();
    })
    scrollRight.click(function() {
        myJukeBox.NextorPreviousSong(1);
        myJukeBox.showSongs();
    })
    play.click(function() {
        songPlace.play();
    })
    pause.click(function() {
        songPlace.pause();
    })
    volumeUp.click(function() {
        if (songPlace.volume < 1){
            songPlace.volume += 0.1;
        }
    })
    volumeDown.click(function() {
        if (songPlace.volume > 0.1){
            songPlace.volume -= 0.1;
        }
    })
    skip.click(function() {
        myJukeBox.NextorPreviousSong(1); 
        myJukeBox.showSongs();
        myJukeBox.playSong();
    })
    searchButton.click(function() {
        if (searchBar.val() != '') {
            myJukeBox.findArtist();
        }
    })
    newPlayListButton.click(function() {
        myJukeBox.updatePlayList();
        myJukeBox.loadPlayList();
        myJukeBox.savingPlayLists();
    })
    finalSubmit.click(function() {
        myJukeBox.addingMoreSongs();
        myJukeBox.showSongs();
        
    })
    $(addToPlayList).click(function() {
        myJukeBox.updatePlayList();
        myJukeBox.loadPlayList();
        myJukeBox.savingPlayLists();
        myJukeBox.showSongs();
    });
});