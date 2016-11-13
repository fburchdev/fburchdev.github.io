/**
 * Created by fburch on 10/24/16.
 */
//main functionality

$(document).ready(function(document){

    function displayGreenSpaces(data) {
        console.log("Hello from function displayGreenSpaces");
        console.log(data);
        var ul = $('#greenSpaces');
        data.forEach(function(item) {
            var li = $('<li>');
            li.html(item.name);
            ul.append(li);
        });
    };

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

    $.ajax({
        type: "GET",
        url: "data/greenSpaces.json",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (data, textStatus, jqXHR)  {
            console.log("Retrieving green spaces json");
            console.log(data);
            console.log("Calling displayGreenSpaces function");
            displayGreenSpaces(data);


        },
        error: function (errorMessage) {
            console.log("An Error Occurred while retrieving green Spaces json");
        }

    });

});//end document ready function
