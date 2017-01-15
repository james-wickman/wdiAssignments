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
        this.previousSong = 0;
        this.nextSong = 2;
        this.songNow = 1;
        this.audioFiles = $('#audioFiles');
        this.searchBar = $('#searchBar');
        this.searchButton = $('#searchButton');
        this.searchResults = $('#searchResults');
        this.finalSubmit = $('#finalSubmit');
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
    }
    // JukeBox.prototype.showPlayLists = function() {

    // }
    // JukeBox.prototype.loadPlayList = function() {

    // }
    // JukeBox.prototype.updatePlayList = function() {

    // }
    JukeBox.prototype.playSong = function() {
        $(this.songPlace).attr('src', this.songs[this.songNumber].fileName);
        this.currentSong.css('background-image', 'url(' + this.songs[this.songNumber].albumCover + ')');
        this.songPlace.play();
    }
    JukeBox.prototype.showSongs = function() {
        this.previousSong = this.songNumber - 1;
        this.nextSong = this.songNumber + 1;
        this.song = this.songs[this.songNumber + 1];
        if (this.previousSong <= -1) {
            this.leftButton.attr('class', '');
            this.leftPhoto.attr('src', '');
            this.leftButton.css({
                "height": '0px'
            })
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
        }
        else {
            this.rightButton.attr('class', this.nextSong);
            this.rightPhoto.attr('src', this.songs[this.nextSong].albumCover);
            
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

    JukeBox.prototype.findArtist = function() {
        var myButton;
        this.searchResults.html('');
        var constructorThis = this
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
                                                                constructorThis.finalSubmit.click(function() {
                                                                    constructorThis.songs.push({
                                                                        fileName: results.preview_url,
                                                                        albumCover: albumThis.albumImage
                                                                    })                                                                    
                                                                    constructorThis.searchResults.html('');
                                                                    constructorThis.finalSubmit.css('display', 'none');
                                                                })
                                                                
                                                                console.log(constructorThis.songs)
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