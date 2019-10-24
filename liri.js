// input band
// use band apply to api
// return name of venue, location, time
var axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var concertThis = function() {
     
}

var command = process.argv[2]

switch(command) {
    case "concert-this": 
    //  code
    var artist = process.argv[3]
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(response) {
            for(i=0; i<response.data.length; i++) {
                console.log(response.data[i].venue.name);
                console.log(response.data[i].venue.city);
                console.log(response.data[i].datetime).format("MM/DD/YY");
            }
        }
    );
    
    break;
    
    case "spotify-this-song":
        // code
        
        break;
    
    case "movie-this":
        // code
        break;

    case "do-what-it-says":
        // code
        break;
 }
 