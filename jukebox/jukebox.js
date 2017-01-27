$(document).ready(function() {
    
    var scrollLeft = $('#scrollLeft');
    var leftButton = $('#leftButton');
    var middleButton = $('#middleButton');
    var rightButton = $('#rightButton');
    var scrollRight = $('#scrollRight');
    var leftPhoto = $('#leftPhoto');
    var middlePhoto = $('#middlePhoto');
    var rightPhoto = $('#rightPhoto');
    var menue = $('#menue');
    var leftMenue = $('#leftMenue');
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
    var clearSongLeft = $('.clearSongLeft');
    var clearSongMiddle = $('.clearSongMiddle');
    var clearSongRight = $('.clearSongRight');
    var currentSong = $('#currentSong');
    var takeOffLeftSong = $('.takeOffLeftSong');
    var takeOffMiddleSong = $('.takeOffMiddleSong');
    var takeOffRightSong = $('.takeOffRightSong');
    var submitInput = $('.subInput');
    var inputButton = $('.inputButton');

    var myJukeBox = new JukeBox();
    myJukeBox.startingFirstList();
    myJukeBox.savingPlayLists();
    myJukeBox.showSongs();
    myJukeBox.showPlayLists();
    myJukeBox.loadPlayList();
    myJukeBox.hidingModals();
    
    

    middleButton.click(function() {
        myJukeBox.hidingModals();
        myJukeBox.NextorPreviousSong(0); 
        myJukeBox.showSongs();
        myJukeBox.playSong();
    })
    rightButton.click(function() {
        myJukeBox.hidingModals();
        myJukeBox.NextorPreviousSong(1); 
        myJukeBox.showSongs();
        myJukeBox.playSong();
    })
    leftButton.click(function() {
        myJukeBox.hidingModals();
        myJukeBox.NextorPreviousSong(-1); 
        myJukeBox.showSongs();
        myJukeBox.playSong();
    })
    scrollLeft.click(function() {
        myJukeBox.hidingModals();
        myJukeBox.NextorPreviousSong(-1);
        myJukeBox.showSongs();

    })
    scrollRight.click(function() {
        myJukeBox.hidingModals();
        myJukeBox.NextorPreviousSong(1);
        myJukeBox.showSongs();

    })
    play.click(function() {
        myJukeBox.NextorPreviousSong(0);
        myJukeBox.playSong();
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
        myJukeBox.hidingModals();
        myJukeBox.NextorPreviousSong(1); 
        myJukeBox.showSongs();
        myJukeBox.playSong();
    })
    searchButton.click(function() {
        myJukeBox.hidingModals();
        if (searchBar.val() != '') {
            myJukeBox.findArtist();
        }
    })
    newPlayListButton.click(function() {
        myJukeBox.hidingModals();
        myJukeBox.updatePlayList();
        myJukeBox.loadPlayList();
        myJukeBox.savingPlayLists();
    })
    finalSubmit.click(function() {
        myJukeBox.hidingModals();
        myJukeBox.addingMoreSongs();
        myJukeBox.showSongs();
        
    })
    searchBar.keyup(function(){
        myJukeBox.hidingModals();
        myJukeBox.findArtist();
    })
    $(addToPlayList).click(function() {
        myJukeBox.hidingModals();
        myJukeBox.updatePlayList();
        myJukeBox.loadPlayList();
        myJukeBox.savingPlayLists();
        myJukeBox.showSongs();
    });

    currentSong.click(function() {
        myJukeBox.hidingModals();
    })

    leftMenue.click(function() {
        myJukeBox.hidingModals();
    })

    clearSongLeft.click(function() {
        myJukeBox.hidingModals();
        myJukeBox.clearingLeftSong();
    });

    clearSongMiddle.click(function() {
        myJukeBox.hidingModals();
        myJukeBox.clearingMiddleSong();
    });


    clearSongRight.click(function() {
        myJukeBox.hidingModals();
        myJukeBox.clearingRightSong();
    });

    takeOffLeftSong.click(function() {
        myJukeBox.removingSongs(-1);
        myJukeBox.hidingModals();
        myJukeBox.NextorPreviousSong(0); 
        myJukeBox.showSongs();
    })
    takeOffMiddleSong.click(function() {
        myJukeBox.removingSongs(0);
        myJukeBox.hidingModals();
        myJukeBox.NextorPreviousSong(0); 
        myJukeBox.showSongs();
    })
    takeOffRightSong.click(function() {
        myJukeBox.removingSongs(1);
        myJukeBox.hidingModals();
        myJukeBox.NextorPreviousSong(0); 
        myJukeBox.showSongs();
    })

    submitInput.click(function() {
        console.log(inputButton["0"].value);
    })

});