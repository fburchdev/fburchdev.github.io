/*
  Please add all Javascript code to this file.
*/

//https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json

//inside document.ready...
//get request to retrieve data
//populate json object with data
//display data - dom manupulation

//responsive_images.image[2], title, channel_label, shares.total, link

var mashableUrl = "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json";

function getData() {
    console.log("hello from getData in feedr!");
    var mashable = $.get(mashableUrl);
    $.when(mashable).done(function() {
        //console.log(mashable);
        var mashableObject = JSON.parse(mashable.responseText);
        //console.log(mashableObject);
        //console.log("just the new")
        //console.log(mashableObject.new);
        var mashableArray = [];
        mashableObject.new.forEach(function(item) {
            console.log(item.title + " " + item.channel_label);
            var articleObject = {};
            articleObject.imageLink = item.responsive_images[2].image;
            articleObject.title = item.title;
            articleObject.category = item.channel_label;
            articleObject.link = item.link;
            articleObject.shares = item.shares.total;
            mashableArray.push(articleObject);
        });
        displayData(mashableArray);
    });
}

function displayData(articleArray) {
    console.log("hello from displayData");
    var ul = $('#articles');
    articleArray.forEach(function(item){
        //console.log(item.title + " " + item.channel_label);
        var li = $('<li>').html(item.imageLink + " " + item.title + " " + item.category + " " + item.link + " " + item.shares);
        ul.append(li);
        var img = $('<img />', {
            src: item.imageLink,
            alt: 'ARTICLE IMAGE'
        });
        img.prependTo(li);
    });
}


$(document).ready(function(document){
    console.log("hello from document ready in feedr!");
    getData();
});
