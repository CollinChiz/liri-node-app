// input band
// use band apply to api
// return name of venue, location, time
require("dotenv").config();
var moment = require("moment")
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var omdb = require("omdb");

var spotify = new Spotify(keys.spotify);


var concertThis = function () {

}

var command = process.argv[2]

switch (command) {
    case "concert-this":
        //  code
        var artist = process.argv[3]
        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
            function (response) {
                for (i = 0; i < response.data.length; i++) {
                    var formattedDate = moment(response.data[i].datetime).format("MM/DD/YY")
                    console.log(response.data[i].venue.name);

                    console.log(response.data[i].venue.city);
                    console.log(formattedDate);
                    console.log("\n")

                }
            }
        );

        break;

    case "spotify-this-song":
        // code
        var song = process.argv[3]
        spotify.search({ type: "track", query: song }).then(
            function (response) {
                for(i=0; i<response.tracks.items.length; i++) {
                    var artist = response.tracks.items[i].album.artists.name;
                    console.log(artist)
                    var song = response.tracks.items[i].album;
                    // console.log(song);
                    
                }
            }
        ).catch(function (err) {
            console.log(err);
        });
        break;

    case "movie-this":
        // code
        var movie = process.argv[3]
        omdb.search(movie, function (err, movies) {
            if (err) {
                console.log(err);
            }
        })
        break;

    case "do-what-it-says":
        // code
        break;
}
