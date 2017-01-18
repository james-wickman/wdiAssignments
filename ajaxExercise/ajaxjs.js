var inputBox = $(".inputBox");
var movieInfo = $(".returnedMovieInfo");
var passedInfo = '';
var title = "";
var actors = '';
var year = '';
var plot = '';


inputBox.keyup(function() {
    passedInfo = inputBox.val();
    movieInfo.html('');
    if (passedInfo.length > 2){
        console.log('work')
        $.ajax({
            url: 'http://www.omdbapi.com/?',

            data: {
                t: passedInfo,
            },

            success: function(results) {
                
                title = '<br><div>' + results.Title + '</div>';
                actors = '<br><div>' + results.Actors + '</div>';
                year = '<br><div>' + results.Year + '</div>';
                plot = '<br><div>' + results.Plot + '</div>';

                movieInfo.html(title + actors + year + plot)
                // console.log(results.Title);
                // console.log(results.Actors);
                // console.log(results.Year);
                // console.log(results.Plot);

            }
        })
    }
})