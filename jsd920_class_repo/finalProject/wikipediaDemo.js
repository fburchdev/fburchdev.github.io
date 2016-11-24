/**
 * Created by fburch on 11/23/16.
 */
$(document).ready(function(document){

    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Brooklyn_Botanic_Garden&callback=?",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {

            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#article').html($(blurb).find('p'));

        },
        error: function (errorMessage) {
            console.log("An Error Occurred while retrieving Wikipedia Article.");
        }
    });

});//end document ready function
