/**
 * Created by fburch on 10/24/16.
 */
//main functionality

$(document).ready(function(document){

    function getWikipediaArticle(wikipediaPage, li) {
        console.log("hello from inside getWikipediaArticle!");
        $.ajax({
            type: "GET",
            url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + wikipediaPage + "&callback=?",
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {

                var markup = data.parse.text["*"];
                var blurb = $('<div></div>').html(markup);
                $('#article').html($(blurb).find('p'));
                console.log(wikipediaPage);
                console.log($(blurb).find('p'));
                li.append($(blurb).find('p'));
            },
            error: function (errorMessage) {
                console.log("An Error Occurred while retrieving Wikipedia Article.");
            }
        });
    } //end function getWikipediaArticle

    function getGoogleMap(mapString) {
        console.log("hello from inside getGoogleMap!");

        var mapIFrame = $('<iframe>', {
            src: "https://www.google.com/maps/embed?pb=" + mapString,
            frameborder: "0",
            style: "border:0"
        });
        mapIFrame.attr("width", "600");
        mapIFrame.attr("height", "450");
        console.log("this is the mapIFrame from inside getGoogleMap!");
        console.log(mapIFrame);
        var div = $('<div>');
        div.append(mapIFrame);

        return div;
    } //end function getGoogleMap

    function displayGreenSpaces(data) {
        console.log("Hello from function displayGreenSpaces");
        console.log(data);
        var ul = $('#greenSpaces');
        data.forEach(function(item) {
            var googleMap = getGoogleMap(item.googleMap);
            var li = $('<li>');
            li.html(item.name + ", " + item.address + ", " + item.zip);
            li.append(googleMap);
            ul.append(li);

            console.log(item.wikipediaPage);
            console.log("calling getWikipediaArticle from inside displayGreenSpaces!");
            getWikipediaArticle(item.wikipediaPage, li);
        });

    } //end function displayGreenSpaces

    $.ajax({
        type: "GET",
        url: "data/greenSpaces.json",
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (data, textStatus, jqXHR)  {
            console.log("Retrieving green spaces json");
            console.log("Retrieving json");
            data.forEach(function(item) {
                $.ajax({
                    type: "GET",
                    url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + item.wikipediaPage + "&callback=?",
                    contentType: "application/json; charset=utf-8",
                    async: true,
                    dataType: "json",
                    success: function (data, textStatus, jqXHR) {
                        var markup = data.parse.text["*"];
                        var blurb = $('<div></div>').html(markup);
                        //why does handlebars template not show wikipediaSection?
                        item.wikipediaSection = $(blurb).find('p').prop('innerHTML');
                    },
                    error: function (errorMessage) {
                        console.log("An Error Occurred while retrieving Wikipedia Article.");
                    }
                });//end ajax call to wikipedia
            });//end data forEach
            console.log(data);

            var greenSpacesData = {
                greenSpaces: data
            };

            var template = Handlebars.compile($('#greenSpaces-template').html());
            $('#greenSpaces').append(template(greenSpacesData));
        },
        error: function (errorMessage) {
            console.log("An Error Occurred while retrieving green Spaces json");
        }

    });



});//end document ready function
