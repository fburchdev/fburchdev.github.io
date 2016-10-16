/**
 * Created by fburch on 10/15/16.
 */
window.onload = function() {
    console.log("99 bottles hello from main.js");


    function getListItem(line) {
        var li = document.createElement('li');
        var line = document.createTextNode(line);
        li.appendChild(line);
        return li;
    }

    var lyrics = document.getElementById('lyrics');
    var bottleOrBottles = ' bottles';

    for(i = 99; i > 0; i--) {
        if( i < 2 )
        {
            bottleOrBottles = ' bottle';
        }
        if(i > 2) {
            var li = getListItem(i + bottleOrBottles + ' of beer on the wall, ' + i + bottleOrBottles + ' of beer,'
                + ' take one down, pass it around, ' + (i - 1).toString() + bottleOrBottles + ' of beer on the wall!');
            lyrics.appendChild(li);
        }
        if(i == 2) {
            var li = getListItem(i + bottleOrBottles + ' of beer on the wall, ' + i + bottleOrBottles + ' of beer,'
                + ' take one down, pass it around, ' + (i - 1).toString() + ' bottle of beer on the wall!');
            lyrics.appendChild(li);
        }
        if(i == 1) {
            var li = getListItem(i + bottleOrBottles + ' of beer on the wall, ' + i + bottleOrBottles + ' of beer,'
            + ' take one down, pass it around, No more bottles of beer on the wall!');
            lyrics.appendChild(li);
        }


    }

};