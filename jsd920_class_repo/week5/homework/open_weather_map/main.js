/*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "hummidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image

*/
var weatherObject = {};
function getWeather(url) {
	console.log("hello from inside getWeather...starting");
	jQuery.get(url, function(weather) {
		console.log(weather);
		weatherObject = JSON.parse(weather);
		console.log('TEMP: ' + weatherObject.main.temp);
		console.log('HUMIDITY: ' + weatherObject.main.humidity);
		console.log('WIND SPEED: ' + weatherObject.wind.speed);
		var div = $('#nyc-weather');
		var temp = $('<p>').html('TEMP: ' + weatherObject.main.temp);
		var humidity = $('<p>').html('HUMIDITY: ' + weatherObject.main.humidity);
		var windSpeed = $('<p>').html('WIND SPEED: ' + weatherObject.wind.speed);
		var p = [temp, humidity, windSpeed];
		p.forEach( function(item) { div.append(item) } );
	}, 'text');
}

function getWeatherByLocation() {
	console.log("hello from inside getWeatherByLocation...starting");
	var city = $('input:text[name=city]').val();
	var state = $('input:text[name=state]').val();
	var div = $('#weatherByLocation');
	div.empty();
	var paragraph = $('<p>').html('WEATHER FOR ' + city);
	div.append(paragraph);
	var apiKey = '0acbdb0b13801c9c886e9a2e83b6152e';
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=' + apiKey;
	console.log(url);
	jQuery.get(url, function(weather) {
		console.log(weather);
		weatherObject = JSON.parse(weather);
		if(weatherObject.main.temp > 75) {
			div.css("background-color", "#ff6666");
		}else if(weatherObject.main.temp < 65) {
			div.css("background-color","lightblue");
		}
		else{
			div.css("background-color", "white");
		}
		console.log('TEMP: ' + weatherObject.main.temp);
		console.log('HUMIDITY: ' + weatherObject.main.humidity);
		console.log('WIND SPEED: ' + weatherObject.wind.speed);
		var temp = $('<p>').html('TEMP: ' + weatherObject.main.temp);
		var humidity = $('<p>').html('HUMIDITY: ' + weatherObject.main.humidity);
		var windSpeed = $('<p>').html('WIND SPEED: ' + weatherObject.wind.speed);
		var p = [temp, humidity, windSpeed];
		p.forEach( function(item) { div.append(item) } );
	}, 'text');
}


$(document).ready(function () {
  //var apiKey = '19ab861f15cfd2e8216a3be1ed615598';
  var apiKey = '0acbdb0b13801c9c886e9a2e83b6152e';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork&units=imperial&APPID=' + apiKey;
  getWeather(weatherUrl);
});

