function SignInfo() {
    this.mainSigns = $('.mainSigns');
    this.fillInClass = 'allSignImg';
    this.modalForCampatibility = $('.modalForCampatibility');
    this.allPopUp = $('.allPopUp');
    this.modalForPic = $('.modalForPic');
    this.enterBdayInfo = $('.enterBdayInfo');
    this.monthForm = $('.monthForm');
    this.dayForm = $('.dayForm');
    this.signName = $('.signName');
    this.signNumber = '';
    this.infoOnTheSign = $('.infoOnTheSign');

    
    this.arrayOfSigns = [
        'aquarius',
        '',
        'pisces',
        '',
        'aries',
        '',
        'taurus',
        '',
        'gemini',
        '',
        'cancer',
        '',
        'leo',
        '',
        'virgo',
        '',
        'libra',
        '',
        'scorpio',
        '',
        'sagittarius',
        '',
        'capricorn'

    ]

    this.signImagesArray = [
    "<img class='",
    "' id='aquarius' src='https://s-media-cache-ak0.pinimg.com/736x/db/80/76/db807615ca5b1b6803e342d6d56fd437.jpg'>",
    "<img class='",
    "' id='pisces' src='https://fiestaestrella.files.wordpress.com/2014/02/pisces_tattoo_.jpg'>",
    "<img class='",
    "' id='aries' src='http://previews.123rf.com/images/oxygen64/oxygen641211/oxygen64121100032/16550311-Aries-symbol-Stock-Vector-zodiac.jpg'>",
    "<img class='",
    "' id='taurus' src='http://www.tauruszodiacsign.net/images/taurussymbol-font.png'>",
    "<img class='",
    "' id='gemini' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5fna33hp_xtfHEwZPsp_V2gkMJtfBaUh122cdEpK45bi1EHxb'>",
    "<img class='",
    "' id='cancer' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbv92xAEIn_f89JVtp6j-_Okw151ZUTdsWMA_GzVq7wjJ1SWgm'>",
    "<img class='",
    "' id='leo' src='http://previews.123rf.com/images/oxygen64/oxygen641211/oxygen64121100036/16550319-Leo-symbol-Stock-Vector-zodiac.jpg'>",
    "<img class='",
    "' id='virgo' src='http://previews.123rf.com/images/oxygen64/oxygen641211/oxygen64121100037/16550318-Virgo-symbol-Stock-Vector-zodiac.jpg'>",
    "<img class='",
    "' id='libra' src='http://previews.123rf.com/images/oxygen64/oxygen641211/oxygen64121100038/16550317-Libra-symbol-Stock-Vector-zodiac.jpg'>",
    "<img class='",
    "' id='scorpio' src='http://previews.123rf.com/images/oxygen64/oxygen641211/oxygen64121100039/16550316-Scorpio-symbol-Stock-Vector-scorpio-zodiac-scorpion.jpg'>",
    "<img class='",
    "' id='sagitarius' src='http://www.sagittariuszodiacsign.net/images/sagittarius-zodiacsign-ink.jpg'>",
    "<img class='",
    "' id='capricorn' src='http://previews.123rf.com/images/oxygen64/oxygen641211/oxygen64121100041/16550320-Capricorn-symbol-Stock-Vector-zodiac.jpg'>"

    ];


}

SignInfo.prototype.fillingMainScreen = function() {
    this.modalForCampatibility.html('')
    var baseThis = this;
    this.fullList = '';
    this.mainSigns.html('');
    for (var i = 0; i < this.signImagesArray.length; i += 1 + 1) {
        this.fullList = $('<button id="' + this.arrayOfSigns[i] + '" class="col-lg-3 col-md-3 col-sm-4 col-xs-6">' + this.signImagesArray[i] + this.fillInClass + this.signImagesArray[i + 1] +  '</button>');
        this.mainSigns.append(this.fullList);
        this.fullList.click(function() {
            baseThis.enterBdayInfo.css({
                display: 'none'
            })
            var secondLevelThis = this;
            this.firstSign = this.id
            $.ajax({
                url: 'https://node-horoscopes.herokuapp.com/api/horoscopes/today/' + this.id,
                success: function(results) {
                    baseThis.infoOnTheSign.text(results.horoscope)
                } 

            })
            console.log(this.id);
            baseThis.allPopUp.css('display', 'block');
            baseThis.modalForPic.html($(this).clone());
            baseThis.signName.text(this.id.toUpperCase())
            baseThis.modalForPic.children().children().css({
                height: 400,
                width: 450
            })
            baseThis.secondClass = 'compatibilityImgs';
            this.fullList = '';
            baseThis.modalForCampatibility.html('');
            for (var nexti = 0; nexti < baseThis.signImagesArray.length; nexti += 1 + 1) {
                this.addingThis = $('<button id="' + baseThis.arrayOfSigns[nexti] + '" class="smallSignsButton">' + baseThis.signImagesArray[nexti] + baseThis.secondClass + baseThis.signImagesArray[nexti + 1] + '</button>');
                baseThis.modalForCampatibility.append(this.addingThis);
                
                this.fullList += this.addingThis;
                this.addingThis.click(function() {
                    console.log(this.id);
                    $.ajax({
                        url: 'https://node-horoscopes.herokuapp.com/api/horoscopes/dating/' + secondLevelThis.firstSign + '/' + this.id,

                        success: function(results) {
                            baseThis.infoOnTheSign.text(results.text)
                        }
                    })
                })
            }
            // baseThis.modalForCampatibility.append(this.fullList);
        })
    }
}


SignInfo.prototype.callingSigns = function(sign) {
        var baseThis = this;
        this.currentSign = this.arrayOfSigns.indexOf(sign);

        this.enterBdayInfo.css({
                display: 'none'
        })
        $.ajax({
            url: 'https://node-horoscopes.herokuapp.com/api/horoscopes/today/' + sign,
            success: function(results) {
                baseThis.infoOnTheSign.text(results.horoscope)
            } 

        })
        this.firstSign = this.id
        
        console.log(this.id);
        this.allPopUp.css('display', 'block');
        this.signName.html(sign.toUpperCase());
        this.modalForPic.html(this.signImagesArray[this.currentSign] +'popUpPic' + this.signImagesArray[this.currentSign + 1]);
        
        this.modalForPic.children().children().css({
            height: 400,
            width: 450
        })
        this.secondClass = 'compatibilityImgs';
        this.fullList = '';
        this.modalForCampatibility.html('');
        for (var i = 0; i < this.signImagesArray.length; i += 1 + 1) {
            this.addingThis = $('<button id="' + baseThis.arrayOfSigns[i] + '" class="smallSignsButton">' + this.signImagesArray[i] + this.secondClass + this.signImagesArray[i + 1] + '</button>');
            this.modalForCampatibility.append(this.addingThis);
            this.fullList += this.addingThis;
            this.addingThis.click(function() {
                    console.log(this.id);
                    $.ajax({
                        url: 'https://node-horoscopes.herokuapp.com/api/horoscopes/dating/' + sign + '/' + this.id,

                        success: function(results) {
                            baseThis.infoOnTheSign.text(results.text)
                        }
                    })
                })

        }
        

    }

SignInfo.prototype.pullingPopUp = function() {
    this.allPopUp.css('display', 'block');
    this.secondClass = 'compatibilityImgs';
}
SignInfo.prototype.closingPopUp = function() {
    this.allPopUp.css('display', 'none');
}

SignInfo.prototype.fillingCompatibility = function() {
    
    this.secondClass = 'compatibilityImgs';
    this.fullList = '';
    this.modalForCampatibility.html('');
    for (var i = 0; i < this.signImagesArray.length; i += 1 + 1) {
        this.fullList += '<button class="smallSignsButton">' + this.signImagesArray[i] + this.secondClass + this.signImagesArray[i + 1] + '</button>';

    }
    this.modalForCampatibility.html(this.fullList);
}
SignInfo.prototype.closingBdayInfo = function() {
    this.enterBdayInfo.css({
        display: 'none'
    })
}
SignInfo.prototype.openingBdayInfo = function() {
    this.enterBdayInfo.css({
        display: 'block'
    })
}