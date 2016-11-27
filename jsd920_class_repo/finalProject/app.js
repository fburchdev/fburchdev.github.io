/**
 * Created by fburch on 10/24/16.
 */
//main functionality

$(document).ready(function(document){

    $(document).on('.wikipedia', 'click', function() {
        alert("Hello from wikipedia div clicked!");
    });

    function getWikipediaArticle(wikipediaPage, li, wikipediaLink) {
        console.log("hello from inside getWikipediaArticle!");
        $.ajax({
            type: "GET",
            url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + wikipediaPage + "&callback=?",
            contentType: "application/json; charset=utf-8",
            async: true,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {

                var markup = data.parse.text["*"];
                var blurb = $('<div></div>').addClass('wikipedia').html(markup);
                $('#article').html($(blurb).find('p'));
                console.log(wikipediaPage);
                console.log($(blurb).find('p'));
                li.append($(blurb).find('p'));
                var link = $('<a>', {
                    text: "Read More at Wikipedia",
                    href: wikipediaLink
                });
                li.append(link);
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

    function getImage(imageUrl, name) {
        console.log("hello from inside getImage!");
        var img = $('<img />', {
           src: imageUrl,
            width:100,
            alt: "Image of " + name
        });
        console.log(img);
        return img;
    }

    function getLink(url, name) {
        console.log("hello from inside getLink!");
        var link = $('<a>', {
           text: name,
            href: url,
            style: "font-weight:bold"
        });
        console.log(link);
        return link;
    }

    function displayGreenSpaces(data) {
        console.log("Hello from function displayGreenSpaces");
        console.log(data);
        var ul = $('#greenSpaces');
        data.forEach(function(item) {
            var googleMap = getGoogleMap(item.googleMap);
            var isFree = "<b>FREE</b>";
            var img = getImage(item.imageUrl, item.name);
            if(item.hasAdmissionFee === "true"){isFree = " <span class='glyphicon glyphicon-usd'></span>"}
            var link = getLink(item.url, item.name);
            var li = $('<li>');

            li.html("  " + item.address + ", " + item.zip + ", " + isFree);
            li.append(googleMap);
            li.prepend(link);
            li.prepend(img);
            ul.append(li);

            console.log(item.wikipediaPage);
            console.log("calling getWikipediaArticle from inside displayGreenSpaces!");
            getWikipediaArticle(item.wikipediaPage, li, item.wikipediaLink);
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
            console.log(data);
            console.log("Calling displayGreenSpaces function");
            displayGreenSpaces(data);
        },
        error: function (errorMessage) {
            console.log("An Error Occurred while retrieving green Spaces json");
        }

    });

});//end document ready function
