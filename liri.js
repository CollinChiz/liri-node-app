// input band
// use band apply to api
// return name of venue, location, time
require("dotenv").config();
var moment = require("moment")
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var fs = require("fs");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2]
console.log(command);

var spotifyThis = function () {
        
    spotify.search({ type: "track", query: song }).then(
        function (response) {
            for(i=0; i<response.tracks.items.length; i++) {
                var artist = response.tracks.items[i].album.artists[0].name;
                console.log(song, artist)
                console.log("\n")
                var song = response.tracks.items[i].album.name;
                
            }
        }
    ).catch(function (err) {
        console.log(err);
    })
};
var pick = function(caseData, functionData) {

    switch (caseData) {
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
            var song = process.argv[3];
            spotifyThis("spotify-this-song", song);
        
        break;
        
        case "movie-this":
            // code
            var movie = process.argv[3]
            console.log(movie);
            axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=trilogy`).then(
                function (response) {
                    console.log(response.data.Title, response.data.Year, response.data.imdbRating, response.data.Country, response.data.Language, response.data.Plot, response.data.Actors);
                    console.log("\n")
                })
                .catch(function (err) {
                    console.log(err);
                })
                break;
                
        case "do-what-it-says":
            doWhatItSays();
            break;
        }
            var doWhatItSays = function() {
                fs.readFile("random.txt", "utf8", function(err, data) {
                    var dataArr = data.split(",");
                    if (dataArr.length === 2) {
                        pick(dataArr[0], dataArr[1]);
                    }   else if (dataArr.length === 1) {
                            pick(dataArr[0]);
                        }
                })

            }
                
}

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
  };
  
  // MAIN PROCESS
  // =====================================
  runThis(process.argv[2], process.argv.slice(3).join(" "));
  
            