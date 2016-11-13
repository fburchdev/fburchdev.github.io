## Favorite Green Spaces in NYC
Mission: To share information about a selection of my favorite parks, botanical gardens, and outdoor green spaces from around the boroughs. 

### Functional Components

The application will retrieve the first section of the Wikipedia page for the space via jQuery ajax using the Wikipedia API, and include a "Read More" link to provide the user with the option to read the complete article.

The application will incorporate a Google map highlighting the locations of the featured spaces. This will most likely be implemented using the "Embed" feature provided by Google in the form of iFrames

The user will be able to choose to display/hide information about various locations.

The user will be able to choose a specific green space and highlight its location on the map in order to retrieve directions.

The application will provide a means for the webmaster to update the information on the site.

A working copy of data to be used in the application is available in data/greenSpaces.json

### Additional Information
The application will provide the website address and indicate whether each space has an admission fee. 

#### Nice to have
The application might show the current weather for individual spaces, and the top 5 images from 500px.

The application may display the Twitter feeds of the organizations that manage the parks/gardens/green spaces.

#### Helper functions
function displayGreenSpaces(){
//implementation
}

function displayLocation(organization) {
//implementation
}

#### APIs
The application will use APIs from Firebase and Google to obtain information about organizations that manage the spaces and location maps. 

I will curate the data to be served by Firebase as json.

Optionally it will use the Open Weather Map API to obtain weather by zip code for each space.

#### Libraries
Bootstrap, Handlebars, jQuery, Lodash, Firebase SDK (to be added)

#### Image Hosting
most likely my own photos from imgur

