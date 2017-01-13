$(document).ready(function() {
    var scrollLeft = $('#scrollLeft');
    var leftButton = $('#leftButton');
    var middleButton = $('#middleButton');
    var rightButton = $('#rightButton');
    var scrollRight = $('#scrollRight');
    var leftMenue = $('#leftMenue');
    var currentSong = $('#currentSong');
    var leftPhoto = $('#leftPhoto');
    var middlePhoto = $('#middlePhoto');
    var rightPhoto = $('#rightPhoto');
    var pause = $('#pause');
    var play = $('#play');
    var skip = $('#skip');
    var songPlace = $('#songPlace')[0];
    var songNumber = 0;
    var volumeUp = $('#volumeUp');
    var volumeDown = $('#volumeDown');
    var audioFiles = $('#audioFiles');
    var section = 0;
    var songs = []

    // function JukeBox() {
    //     this.songs = [{
    //         fileName: 'hypnotic.mp3',
    //         albumCover: 'https://tse4.mm.bing.net/th?id=OIP.M7f8f048f359e9247568babd3f1082d50o0&pid=15.1'
    //     }, {
    //         fileName: 'carousel.mp3',
    //         albumCover: 'http://www.josepvinaixa.com/blog/wp-content/uploads/2014/05/Melanie-Martinez-Dollhouse-EP-2014-1200x1200.png'
    //     }, {
    //         fileName: 'doIWantToKnow.mp3',
    //         albumCover: 'https://upload.wikimedia.org/wikipedia/en/d/df/Arctic_Monkeys_-_Do_I_Wanna_Know.png'
    //     }, {
    //         fileName: 'heathens.mp3',
    //         albumCover: 'http://images.genius.com/4bf579c7939940955b096c38b74540e6.1000x1000x1.jpg'
    //     }, {
    //         fileName: 'banks.mp3',
    //         albumCover: 'https://images.genius.com/193647f575975cf4ac94bce66f276734.1000x1000x1.jpg'
    //     }, {
    //         fileName: 'thicker.mp3',
    //         albumCover: 'http://cdn4.unpopularlyrics.com/wp-content/uploads/2014/06/kflay-life-as-a-dog2014.jpg'
    //     }];
    //     this.songNumber = 0;
    // }
    
    // JukeBox.prototype.playSong = function(songIndex) {
    //     if (songIndex >= songs.length - 1){

    //     }
    //     else {
    //         var song = songs[songIndex + 1];
    //         $(songPlace).attr('src', song.fileName);
    //         currentSong.css('background-image', 'url(' + song.albumCover + ')');
    //         songPlace.play();
    //     }
    // }
    // JukeBox.prototype.nextSong = function(songIndex) {

    // }
    // JukeBox.prototype.previousSong = function() {

    // }
    // JukeBox.prototype.scrollRight = function() {

    // }
    // JukeBox.prototype.scrollLeft = function() {

    // }
    // JukeBox.prototype.addSong = function() {

    //     myJukeBox = new JukeBox() ;
    // }

    // var myJukeBox = new JukeBox();




    function playSong(songIndex, songIndex1, songIndex2) {
        section = songIndex;
        if (section >= songs.length-1) {
            section = -1;
        }
        var song = songs[section+1]
        console.log(song)
        $(songPlace).attr("src", song.fileName);
        currentSong.css('background-image', 'url(' + song.albumCover + ')');
        songPlace.play();
        leftButton.attr('class', songIndex)
        leftPhoto.attr('src', songs[songIndex].albumCover)
        if (songIndex >= songs.length-1) {
            songIndex1 = 0;
            songIndex2 = 1;
        }
        else if (songIndex >= songs.length-2) {
            songIndex2 = 0;
        }
        middleButton.attr('class', songIndex1)
        middlePhoto.attr('src', songs[songIndex1].albumCover)
        rightButton.attr('src', songIndex2)
        rightPhoto.attr('src', songs[songIndex2].albumCover)
        songNumber = songIndex;
    };
    function scrollSong(songIndex, songIndex1, songIndex2) {
        leftButton.attr('class', songIndex)
        leftPhoto.attr('src', songs[songIndex].albumCover)
        if (songIndex >= songs.length-1) {
            songIndex1 = 0;
            songIndex2 = 1;
        }
        else if (songIndex >= songs.length-2) {
            songIndex2 = 0;
        }
        middleButton.attr('class', songIndex1)
        middlePhoto.attr('src', songs[songIndex1].albumCover)
        rightButton.attr('src', songIndex2)
        rightPhoto.attr('src', songs[songIndex2].albumCover)
        songNumber = songIndex;
    };

    scrollRight.click(function() {
    if (songNumber >= songs.length-1) {
        songNumber = -1;
    }
    songNumber += 1;
    songNumber1 = songNumber+1;
    songNumber2 = songNumber+2;

    scrollSong(songNumber, songNumber1, songNumber2);
    })
    scrollLeft.click(function() {
        if (songNumber == 0) {
            songNumber = songs.length;
        } else if (songNumber == -1) { 
            songNumber = songs.length -1;
        }
        songNumber -= 1;
        songNumber1 = songNumber+1;
        songNumber2 = songNumber+2;

        scrollSong(songNumber, songNumber1, songNumber2) 
    })

    middleButton.click(function(){
        songNumber1 = songNumber + 1;
        songNumber2 = songNumber + 2;
        playSong(songNumber, songNumber1, songNumber2)
    })
    rightButton.click(function() {
        songNumber += 1;
    if (songNumber >= songs.length) {
        songNumber = 0;
    }
        songNumber1 = songNumber+1;
        songNumber2 = songNumber+2;

        playSong(songNumber, songNumber1, songNumber2)
    })
    leftButton.click(function() {
        songNumber -= 1;
        if (songNumber == -1) {
            songNumber = songs.length - 1;
        } else if (songNumber == -2) { 
            songNumber = songs.length -2;
        }
        songNumber1 = songNumber+1;
        songNumber2 = songNumber+2;

        playSong(songNumber, songNumber1, songNumber2) 
    })
    skip.click(function(){
        songNumber += 1;
        if (songNumber >= songs.length) {
            songNumber = 0;
        }
        songNumber1 = songNumber+1;
        songNumber2 = songNumber+2;

        playSong(songNumber, songNumber1, songNumber2)
    })
    pause.click(function() {
        songPlace.pause();
    })
    play.click(function() {
        songPlace.play();
    })
    volumeUp.click(function(){
        if (songPlace.volume < 1) {
            songPlace.volume += 0.1;
        }
    });
    volumeDown.click(function() {
        if (songPlace.volume > 0.1) {
            songPlace.volume -= 0.1;
        }
    });






})


    // function shiftToNext3(shouldShiftLeft) {

    //     if (shouldShiftLeft) {

    //     } else {

    //     }

    //     if (songNumber > 2) {
    //         leftButton.attr('class', 'first')
    //         leftPhoto.attr('src', songs[0].albumCover)
    //         middleButton.attr('class', 'second')
    //         middlePhoto.attr('src', songs[1].albumCover)
    //         rightButton.attr('src', 'third')
    //         rightPhoto.attr('src', songs[2].albumCover)
    //         songNumber = 0;
    //     }
    //     else if (songNumber <= 2) {
    //         leftButton.attr('class', 'fourth')
    //         leftPhoto.attr('src', songs[3].albumCover)
    //         middleButton.attr('class', 'fifth')
    //         middlePhoto.attr('src', songs[4].albumCover)
    //         rightButton.attr('class', 'sixth')
    //         rightPhoto.attr('src', songs[5].albumCover)
    //         songNumber = 3;
    //     }
//     // }
//     scrollLeft.click(function() {
//         shiftToNext3(true);
//     })
//     scrollRight.click(function() {
//         shiftToNext3(false);
//     })

//     leftButton.click(function() {
//         if (leftButton.attr('class') == 'first') {
//             putItTogether(0);
//         }
//         else if (leftButton.attr('class') == 'fourth') {
//             putItTogether(3);
//         }
//     })

//     middleButton.click(function() {
//         if (middleButton.attr('class') == 'second') {
//             putItTogether(1);
//         }
//         else if (middleButton.attr('class') == 'fifth') {
//             putItTogether(4);
//         }
//     })

//     rightButton.click(function() {
//         if (rightButton.attr('class') == 'third') {
//             putItTogether(2);
//         }
//         else if (rightButton.attr('class') == 'sixth') {
//             putItTogether(5);
//         }
//     })

//     skip.click(function() {
//         if (songNumber > 0 && songNumber < songs.length){
//             putItTogether(songNumber)
//         }
//         else {
//             songNumber = 0;
//             putItTogether(songNumber);
//         }
//     })
//     pause.click(function() {
//         songPlace.pause();
//     })
//     play.click(function() {
//         songPlace.play();
//     })
//     volumeUp.click(function(){
//         if (songPlace.volume < 1) {
//             songPlace.volume += 0.1;
//         }
//     });
//     volumeDown.click(function() {
//         if (songPlace.volume > 0.1) {
//             songPlace.volume -= 0.1;
//         }
//     });

// });







// volumeUp.click(function(){
//     if (hypnoticSong.volume < 1 && carouselSong.volume < 1 && doIWantToKnowSong.volume < 1) {
//         hypnoticSong.volume += 0.1;
//         carouselSong.volume += 0.1;
//         doIWantToKnowSong.volume += 0.1;
//     }
// });
// volumeDown.click(function() {
//     if (hypnoticSong.volume > 0.1 && carouselSong.volume > 0.1 && doIWantToKnowSong.volume > 0.1) {
//         hypnoticSong.volume -= 0.1;
//         carouselSong.volume -= 0.1;
//         doIWantToKnowSong.volume -= 0.1;
//     }
// });

// hypnoticButton.click(function() {
//     song = 1;
//     currentSong.css('background-image', 'url(' + 'https://tse4.mm.bing.net/th?id=OIP.M7f8f048f359e9247568babd3f1082d50o0&pid=15.1' + ')');
//     hypnoticSong.currentTime = 0;
//     hypnoticSong.play(0);
//     carouselSong.pause();
//     doIWantToKnowSong.pause();
// });

// carouselButton.click(function() {
//     song = 2;
//     currentSong.css('background-image', 'url(' + "http://www.josepvinaixa.com/blog/wp-content/uploads/2014/05/Melanie-Martinez-Dollhouse-EP-2014-1200x1200.png" + ')');
//     carouselSong.currentTime = 0;
//     carouselSong.play(0);
//     hypnoticSong.pause();
//     doIWantToKnowSong.pause();
// });

// doIWantToKnowButton.click(function() {
//     song = 3;
//     currentSong.css('background-image', 'url(' + "https://upload.wikimedia.org/wikipedia/en/d/df/Arctic_Monkeys_-_Do_I_Wanna_Know.png" + ')');
//     doIWantToKnowSong.currentTime = 0;
//     doIWantToKnowSong.play(0);
//     hypnoticSong.pause();
//     carouselSong.pause();
// });

// pause.click(function() {
//     if ( song == 1) {
//         hypnoticSong.pause();
//     }
//     else if (song == 2) {
//         carouselSong.pause();
//     }
//     else if (song == 3) {
//         doIWantToKnowSong.pause();
//     }
// })
// currentSong.toggle(function(){
//     if ( hypnoticSong.play() == false || carouselSong.play() == false || doIWantToKnowSong.play() == false) {
//         if ( song == 1) {
//             hypnoticSong.play();
//             console.log(song)
//         }
//         else if (song == 2) {
//             carouselSong.play();
//         }
//         else if (song == 3) {
//             doIWantToKnowSong.play();
//         }
//     }
//     else if (hypnoticSong.play() || carouselSong.play() || doIWantToKnowSong.play() ) {
//         if ( song == 1) {
//             hypnoticSong.pause();

//         }
//         else if (song == 2) {
//             carouselSong.pause();
//         }
//         else if (song == 3) {
//             doIWantToKnowSong.pause();
// //         }
// //     }
// // })
// play.click(function() {
//     if ( song == 0 || song == 1) {
//         currentSong.css('background-image', 'url(' + 'https://tse4.mm.bing.net/th?id=OIP.M7f8f048f359e9247568babd3f1082d50o0&pid=15.1' + ')');
//         hypnoticSong.play();
//         song = 1;
//     }
//     else if (song == 2) {
//         carouselSong.play();
//     }
//     else if (song == 3) {
//         doIWantToKnowSong.play();
//     }
// })

// skip.click(function() {
//     if ( song == 1) {
//         currentSong.css('background-image', 'url(' + "http://www.josepvinaixa.com/blog/wp-content/uploads/2014/05/Melanie-Martinez-Dollhouse-EP-2014-1200x1200.png" + ')');
//         carouselSong.currentTime = 0;
//         carouselSong.play();
//         hypnoticSong.pause();
//         song = 2;
//     }
//     else if (song == 2) {
//         currentSong.css('background-image', 'url(' + "https://upload.wikimedia.org/wikipedia/en/d/df/Arctic_Monkeys_-_Do_I_Wanna_Know.png" + ')');
//         doIWantToKnowSong.currentTime = 0;
//         doIWantToKnowSong.play();
//         carouselSong.pause();
//         song = 3;
//     }
//     else if (song == 3) {
//         currentSong.css('background-image', 'url(' + 'https://tse4.mm.bing.net/th?id=OIP.M7f8f048f359e9247568babd3f1082d50o0&pid=15.1' + ')');
//         hypnoticSong.currentTime = 0;
//         hypnoticSong.play();
//         doIWantToKnowSong.pause();
//         song = 1;
//     }
// })
// })