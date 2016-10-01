// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0

var bottleOrBottles = ' bottles';

for(i = 99; i > 0; i--) {

    if(i < 2 )
    {
        bottleOrBottles = ' bottle';
    }
    console.log(i + bottleOrBottles + ' of beer on the wall,');
    console.log(i + bottleOrBottles + ' of beer...');
    console.log('take one down, pass it around,');
    if(i == 2 || i == 1){ bottleOrBottles = ' bottle'}
    if(i == 1) {
        bottleOrBottles = ' bottles';
        console.log('No more' + bottleOrBottles + ' of beer on the wall!');
    }
    else {
        console.log((i - 1) + bottleOrBottles + ' of beer on the wall!');
    }
    console.log('\n');

}
