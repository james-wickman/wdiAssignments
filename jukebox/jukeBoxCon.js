function JukeBox() {
    
    this.songNumber = 0;
    this.scrollLeft = $('#scrollLeft');
    this.leftButton = $('#leftButton');
    this.middleButton = $('#middleButton');
    this.rightButton = $('#rightButton');
    this.scrollRight = $('#scrollRight');
    this.leftMenue = $('#leftMenue');
    this.currentSong = $('#currentSong');
    this.leftPhoto = $('#leftPhoto');
    this.middlePhoto = $('#middlePhoto');
    this.rightPhoto = $('#rightPhoto');
    this.songPlace = $('#songPlace')[0];
    this.previousSong = -1;
    this.nextSong = 1;
    this.songNow = 0;
    this.audioFiles = $('#audioFiles');
    this.searchBar = $('#searchBar');
    this.searchButton = $('#searchButton');
    this.searchResults = $('#searchResults');
    this.finalSubmit = $('#finalSubmit');
    this.newPlayListInput = $('#newPlayListInput');
    this.newPlayListButton = $('#newPlayListButton');
    this.playListInfo = $('#playListInfo');
    this.playList = ['startingPlayList'];
    this.addToPlayList = $('#addToPlayList');
    this.addingArt = '';
    this.addingMusic = '';
    this.selectedPlayList = 0;
    this.allPlayLists = this.playList[this.selectedPlayList];
    this.currentPlayList = 'startingPlayList';
    this.startingPlayList = localStorage.getItem(this.allPlayLists);
    this.storedPlayLists = localStorage.getItem('storedPlayLists');
    this.clearSongLeft = $('.clearSongLeft');
    this.clearSongRight = $('.clearSongRight');
    this.clearSongMiddle = $('.clearSongMiddle');
    this.removingLeftSongPopUp = $('.removingLeftSongPopUp');
    this.removingMiddleSongPopUp = $('.removingMiddleSongPopUp');
    this.removingRightSongPopUp = $('.removingRightSongPopUp');
    this.takeOffLeftSong = $('.removingLeftSong');
    this.takeOffMiddleSong = $('.removingMiddleSong');
    this.takeOffRightSong = $('.removingRightSong');
    this.cancling = $('.cancling');
    
    this.clearSongLeft.css('display', 'inline-block');
    this.clearSongMiddle.css('display', 'inline-block');
    this.clearSongRight.css('display', 'inline-block');
    
    if (this.storedPlayLists != null && this.storedPlayLists.length > 1) {
        this.playList = JSON.parse(this.storedPlayLists)
    }
    if (this.startingPlayList == null && this.selectedPlayList == 0){
        this.songs = [{
            fileName: 'hypnotic.mp3',
            albumCover: 'https://tse4.mm.bing.net/th?id=OIP.M7f8f048f359e9247568babd3f1082d50o0&pid=15.1'
        }, {
            fileName: 'carousel.mp3',
            albumCover: 'http://www.josepvinaixa.com/blog/wp-content/uploads/2014/05/Melanie-Martinez-Dollhouse-EP-2014-1200x1200.png'
        }, {
            fileName: 'doIWantToKnow.mp3',
            albumCover: 'https://upload.wikimedia.org/wikipedia/en/d/df/Arctic_Monkeys_-_Do_I_Wanna_Know.png'
        }, {
            fileName: 'heathens.mp3',
            albumCover: 'http://images.genius.com/4bf579c7939940955b096c38b74540e6.1000x1000x1.jpg'
        }, {
            fileName: 'banks.mp3',
            albumCover: 'https://images.genius.com/193647f575975cf4ac94bce66f276734.1000x1000x1.jpg'
        }, {
            fileName: 'thicker.mp3',
            albumCover: 'http://cdn4.unpopularlyrics.com/wp-content/uploads/2014/06/kflay-life-as-a-dog2014.jpg'
        }];
        console.log('filled')
    }
    else {
        this.songs = JSON.parse(this.startingPlayList);
    }
}
JukeBox.prototype.savingPlayLists = function() {
    localStorage.setItem('storedPlayLists', JSON.stringify(this.playList));
    console.log(this.storedPlayLists);
}
JukeBox.prototype.showPlayLists = function() {
    var firstThis = this;
    // if (localStorage.getItem('storedPlayLists') != null) {
        
    //     this.playList = this.storedPlayLists
    // } 
}
JukeBox.prototype.loadPlayList = function() {
    var infoButtons = '';
    this.addToPlayList.html('');
    var baseThis = this;
    for (var i = 0; i < this.playList.length; i ++) {
        infoButtons = $('<br><button class="allPlayListButtons" id="' + i + '">' + this.playList[i] + '</button>')
        infoButtonsX = $('<button class="allPlayListButtonsX" id="' + i + '">X</button>')
        this.addToPlayList.append(infoButtons);
        if (i > 0) {
        this.addToPlayList.append(infoButtonsX)
        }
        infoButtons.click(function() {
            // baseThis.songs = [];
            
            baseThis.selectedPlayList = this.id;
            baseThis.allPlayLists = baseThis.playList[baseThis.selectedPlayList];
            if (localStorage.getItem(baseThis.allPlayLists) != null) {
                baseThis.songs = JSON.parse(localStorage.getItem(baseThis.allPlayLists));
            }
            baseThis.songNumber = 0;
            console.log(this.id)
            console.log(baseThis.playList);
            console.log(baseThis.allPlayLists)
            
        })
        infoButtonsX.click(function() {
            var currentDelete = this.id;
            console.log((baseThis.playList[currentDelete]))
            localStorage.removeItem(baseThis.playList[currentDelete])
            baseThis.playList.splice(this.id, 1);
            
            // localStorage.clear(this)
            
        })
        this.newPlayListInput.val('');
    }
    $('.allPlayListButtons').css({

    'margin-top': '15px',
    'display': 'inline-block',
    'background-color': 'lightblue',
    })
}
JukeBox.prototype.updatePlayList = function() {
    if (this.newPlayListInput.val() != '') {
        this.playList.push(this.newPlayListInput.val());
    }
    console.log(this.newPlayListInput.val())
}

JukeBox.prototype.playSong = function() {
    $(this.songPlace).attr('src', this.songs[this.songNumber].fileName);
    this.currentSong.css('background-image', 'url(' + this.songs[this.songNumber].albumCover + ')');
    this.songPlace.play();
}
JukeBox.prototype.showSongs = function() {
    this.clearSongLeft.css('display', 'inline-block');
    this.clearSongMiddle.css('display', 'inline-block');
    this.clearSongRight.css('display', 'inline-block');
    this.allPlayLists = this.playList[this.selectedPlayList];
    this.songs = JSON.parse(localStorage.getItem(this.allPlayLists));
    if (this.songs == null) {
        this.leftButton.attr('class', '');
        this.leftPhoto.attr('src', '');
        this.leftButton.css({
            "height": '0px'
        })
        this.middleButton.attr('class', '');
        this.middlePhoto.attr('src', '');
        this.middleButton.css({
            "height": '0px'
        })
        this.rightButton.attr('class', '');
        this.rightPhoto.attr('src', '');
        this.rightButton.css({
            "height": '0px'
        })
        this.clearSongLeft.css('display', 'none');
        this.clearSongMiddle.css('display', 'none');
        this.clearSongRight.css('display', 'none');
    }
    else {
        this.previousSong = this.songNumber - 1;
        this.nextSong = this.songNumber + 1;
        this.song = this.songs[this.songNumber + 1];
        if (this.previousSong <= -1) {
            this.leftButton.attr('class', '');
            this.leftPhoto.attr('src', '');
            this.leftButton.css({
                "height": '0px'
            })
            this.clearSongLeft.css('display', 'none');
        }
        else {
        this.leftButton.attr('class', this.previousSong);
        this.leftPhoto.attr('src', this.songs[this.previousSong].albumCover);
        }
        if (this.nextSong >= this.songs.length) {
            this.nextSong = 0;
        }
        this.middleButton.attr('class', this.songNumber);
        this.middlePhoto.attr('src', this.songs[this.songNumber].albumCover);
        if (this.songNumber >= this.songs.length - 1){
            this.rightButton.attr('class', '');
            this.rightPhoto.attr('src', '');
            this.rightButton.css({
                "height": '0px'
            })
            this.clearSongRight.css('display', 'none');
        }
        else {
            this.rightButton.attr('class', this.nextSong);
            this.rightPhoto.attr('src', this.songs[this.nextSong].albumCover); 
        }
    }
}
JukeBox.prototype.NextorPreviousSong = function(whereTo) {
    this.songNumber = this.songNow + whereTo;
    if( this.songNumber < 0) {
        this.songNumber = 0;
    }
    else if (this.songNumber >= this.songs.length) {
        this.songNumber = this.songs.length - 1;
    }
    this.songNow = this.songNumber;
}
JukeBox.prototype.addingMoreSongs = function() {
    this.mySongsString = '';
    this.allPlayLists = this.playList[this.selectedPlayList];
    if (this.addingMusic != null && this.addingArt != null) {
        if (this.songs == null) {
            this.songs = [{
            'fileName': this.addingMusic,
            'albumCover': this.addingArt
            }]
        }
        else {
            this.songs.push({
                'fileName': this.addingMusic,
                'albumCover': this.addingArt
            })
        }
        this.mySongsString = JSON.stringify(this.songs)
        localStorage.setItem(this.allPlayLists, this.mySongsString)
        console.log(localStorage.getItem(this.allPlayLists))
    }

}
JukeBox.prototype.startingFirstList = function() {
    this.mySongsString = JSON.stringify(this.songs)
    localStorage.setItem(this.allPlayLists, this.mySongsString)
}

JukeBox.prototype.findArtist = function() {
    this.searching = this.searchBar.val();
    var myButton;
    this.searchResults.html('');
    var constructorThis = this
    this.playListInfo.css('display', 'none')
    if (this.searching.length > 2) {
        var requestObject = {
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: this.searchBar.val(),
                type: 'artist',
            },
            success: function(results) { 
                for ( var i = 0; i < results.artists.items.length; i++){
                    myButton = $('<button class="listofButtons" id="' + results.artists.items[i].id + '">' + results.artists.items[i].name + '</button>')
                    constructorThis.searchResults.append(myButton);
                    myButton.click(function() {
                        constructorThis.searchResults.html('');
                        $.ajax({
                            url: 'https://api.spotify.com/v1/artists/' + this.id + '/albums',

                            success: function(results) {
                                for ( var i = 0; i < results.items.length; i++){
                                    albumThis = this;
                                    this.albumImage = results.items[i].images[1].url;
                                    myButton = $('<button class="listofButtons" id="' + results.items[i].id + '">' + results.items[i].name + '</button>')
                                    constructorThis.searchResults.append(myButton);
                                    myButton.click(function() {
                                        constructorThis.searchResults.html('');
                                        $.ajax({
                                            url: 'https://api.spotify.com/v1/albums/' + this.id + '/tracks',

                                            success: function(results) {
                                                for (var i = 0; i < results.items.length; i++) {
                                                    myButton = $('<button class="listofButtons" id="' + results.items[i].id + '">' + results.items[i].name + '</button>')
                                                    constructorThis.searchResults.append(myButton);
                                                    myButton.click(function() {
                                                        constructorThis.searchResults.html('');
                                                        constructorThis.finalSubmit.css('display', 'inline-block')
                                                        $.ajax({
                                                            url: 'https://api.spotify.com/v1/tracks/' + this.id,

                                                            success: function(results) {
                                                                myButton = $(results.name)
                                                                constructorThis.searchResults.html('<h3>' + results.name + '</h3>');
                                                                constructorThis.searchResults.css('color', 'silver')
                                                                constructorThis.addingMusic = results.preview_url;
                                                                constructorThis.addingArt = albumThis.albumImage;
                                                                constructorThis.finalSubmit.click(function() {
                                                                    if(results.preview_url != null && albumThis.albumImage != null) {
                                                                        constructorThis.addingMusic = results.preview_url;
                                                                        constructorThis.addingArt = albumThis.albumImage;
                                                                    }
                                                                    else {
                                                                    constructorThis.addingMusic = '';
                                                                        constructorThis.addingArt = ''; 
                                                                    }
                                                                    constructorThis.searchResults.html('');
                                                                    constructorThis.finalSubmit.css('display', 'none');
                                                                    constructorThis.playListInfo.css('display', 'inline-block')

                                                                })
                                                                constructorThis.searchBar.val('')
                                                            }
                                                        })
                                                    })
                                                }
                                            }
                                        })
                                    })
                                }
                            }
                        });
                    })
                }
            }
            
        }
        $.ajax(requestObject)
    }
    else {
        this.searchResults.html('');
        this.finalSubmit.css('display', 'none');
        this.playListInfo.css('display', 'inline-block')
    }

}

JukeBox.prototype.hidingModals = function() {
    // clearSongLeft.css('display', 'none');
    // clearSongMiddle.css('display', 'none');
    // clearSongRight.css('display', 'none');
    this.removingLeftSongPopUp.css('display', 'none');
    this.removingMiddleSongPopUp.css('display', 'none');
    this.removingRightSongPopUp.css('display', 'none');

}

JukeBox.prototype.clearingLeftSong = function() {
    var rootThis = this;
    this.removingLeftSongPopUp.css('display', 'inline-block');
    
    this.takeOffLeftSong.click(function(){

    }) 
    this.cancling.click(function() {
        rootThis.removingLeftSongPopUp.css('display', 'none');
    })

}
JukeBox.prototype.clearingMiddleSong = function() {
    var rootThis = this;
    this.removingMiddleSongPopUp.css('display', 'inline-block');
    
    this.takeOffMiddleSong.click(function(){

    }) 
    this.cancling.click(function() {
        rootThis.removingMiddleSongPopUp.css('display', 'none');
    })
}
JukeBox.prototype.clearingRightSong = function() {
    var rootThis = this;
    this.removingRightSongPopUp.css('display', 'inline-block');

    this.takeOffRightSong.click(function(){

    }) 
    this.cancling.click(function() {
        rootThis.removingRightSongPopUp.css('display', 'none');
    })
}

//have to fix when you choose a song with certain charactors
// in it it throws an error


JukeBox.prototype.removingSongs = function(num) {
    this.selection = this.selectedPlayList;
    this.removedSong = this.songNow + num;
    
    this.allPlayLists = this.playList[this.selectedPlayList];
    this.removeFromPlayList = this.startingPlayList;
    console.log(this.allPlayLists);
    console.log(this.songs);

    this.songs.splice(this.removedSong, 1);
    this.mySongsString = JSON.stringify(this.songs)
    localStorage.setItem(this.allPlayLists, this.mySongsString)
    this.startingPlayList;
    if (this.songs.length < 1) {
        localStorage.removeItem(this.allPlayLists)
    }
}