
$(document).ready(function() {
    var closePopUp = $('.close');
    var aquariusImage = $('.allSignImg');
    var img = $('img');
    var submitBday = $('.submitBday');
    var bdayDay = $('.bdayDay');
    var bdayMonth = $('.bdayMonth');
    var closeBday = $('.closeBday');
    var openUpInfo = $('.openUpInfo');
    var submitBday = $('.submitBday');
    var monthForm = $('.monthForm');


    var signInfo = new SignInfo();

    signInfo.closingPopUp();
    signInfo.fillingMainScreen();
    signInfo.closingBdayInfo();

    img.click(function() {
        // signInfo.fillingMainScreen();
        // signInfo.pullingPopUp();
        // signInfo.fillingCompatibility();
        console.log('hellow');
    })
    closePopUp.click(function() {
        signInfo.closingPopUp();
        signInfo.fillingMainScreen();
    })
    closeBday.click(function() {
        signInfo.closingBdayInfo();
    })
    openUpInfo.click(function() {
        signInfo.openingBdayInfo();
    })
    



    submitBday.click(function() {
        // console.log($( "#monthForm option:selected" ).text());


        var monthFormid = $('#monthForm option:selected');
        var dayFormid = $('#dayForm option:selected');

        if(monthFormid.val() == 1) {
            if (dayFormid.val() <= 19) {
                console.log('capricorn');
                signInfo.callingSigns('capricorn');
                //Capricorn
            }
            else if (dayFormid.val() > 19) {
                console.log('aquarius');
                signInfo.callingSigns('aquarius');
                //aquarius
            }
        }
        else if (monthFormid.val() == 2) {
            if (dayFormid.val() <= 18) {
                console.log('aquarius');
                signInfo.callingSigns('aquarius');
                //aquarius
            }
            else if (dayFormid.val() > 18 ) {
                console.log('pisces');
                signInfo.callingSigns('pisces');
                //pisces
            }
        }
        else if (monthFormid.val() == 3) {
            if (dayFormid.val() <= 20) {
                console.log('pisces');
                signInfo.callingSigns('pisces');
                //pisces
            }
            else if (dayFormid.val() > 20) {
                console.log('aries');
                signInfo.callingSigns('aries');
                //aries
            }
        }
        else if (monthFormid.val() == 4) {
            if (dayFormid.val() <= 19) {
                console.log('aries');
                signInfo.callingSigns('aries');
                //aries
            }
            else if (dayFormid.val() > 19) {
                console.log('taurus');
                signInfo.callingSigns('taurus');
                //taurus
            }
        }
        else if (monthFormid.val() == 5) {
            if (dayFormid.val() <= 20) {
                console.log('taurus');
                signInfo.callingSigns('taurus');
                //taurus
            }
            else if (dayFormid.val() > 20) {
                console.log('gemini');
                signInfo.callingSigns('gemini');
                //gemini
            }
        }
        else if (monthFormid.val() == 6) {
            if (dayFormid.val() <= 20) {
                console.log('gemini');
                signInfo.callingSigns('gemini');
                //gemini
            }
            else if (dayFormid.val() > 20 ) {
                console.log('cancer');
                signInfo.callingSigns('cancer');
                //cancer
            }
        }
        else if (monthFormid.val() == 7) {
            if (dayFormid.val() <= 22) {
                console.log('cancer');
                signInfo.callingSigns('cancer');
                //cancer
            }
            else if (dayFormid.val() > 22) {
                console.log('leo');
                signInfo.callingSigns('leo');
                //leo
            }
        }
        else if (monthFormid.val() == 8 ) {
            if (dayFormid.val() <= 22) {
                console.log('leo');
                signInfo.callingSigns('leo');
                //Leo
            }
            else if (dayFormid.val() > 22) {
                console.log('virgo');
                signInfo.callingSigns('virgo');
                //virgo
            }
        }
        else if (monthFormid.val() == 9) {
            if (dayFormid.val() <= 22) {
                console.log('virgo');
                signInfo.callingSigns('virgo');
                //virgo
            }
            else if (dayFormid.val() > 22) {
                console.log('libra');
                signInfo.callingSigns('libra');
                //libra
            }
        }
        else if (monthFormid.val() == 10) {
            if (dayFormid.val() <= 22) {
                console.log('libra');
                signInfo.callingSigns('libra');
                //libra
            }
            else if (dayFormid.val() >22) {
                console.log('scorpio');
                signInfo.callingSigns('scorpio');
                //scorpio
            }
        }
        else if (monthFormid.val() == 11) {
            if (dayFormid.val() <= 21) {
                console.log('scorpio');
                signInfo.callingSigns('scorpio');
                //scorpio
            }
            else if (dayFormid.val() > 21) {
                console.log('sagitarius');
                signInfo.callingSigns('sagitarius');
                //sagitarius
            }
        }
        else if (monthFormid.val() == 12) {
            if (dayFormid.val() <= 21){
                console.log('sagitarius');
                signInfo.callingSigns('sagitarius');
                //sagitarius
            }
            else if (dayFormid.val() > 21) {
                console.log('capricorn');
                signInfo.callingSigns('capricorn');
                //capricorn
            }
        }
    })








})



