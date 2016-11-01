/*
  Please add all Javascript code to this file.
*/

//https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json
//https://www.reddit.com/top.json

//inside document.ready...
//get request to retrieve data
//populate json object with data
//display data - dom manupulation

//fields from mashable
//responsive_images.image[2], title, channel_label, shares.total, link, content.plain
//fields from reddit
//data.children.data ...title, ups, thumbnail, subreddit, permalink


var mashableUrl = "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json";
var redditUrl = "https://www.reddit.com/top.json";

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
            articleObject.content = item.content.plain;
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
        var link = $('<a/>', {
            href : item.link,
            text : item.title
        });
        var li = $('<li>').html(item.title + " " + item.category + " " + item.link + " " + item.shares);
        ul.append(li);
        var img = $('<img />', {
            src: item.imageLink,
            alt: item.title
        });
        img.prependTo(li);

    });
}


$(document).ready(function(document){
    console.log("hello from document ready in feedr!");
    getData();
});
