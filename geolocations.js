var geolocationsAPIKey = "96fbed43a1c4b047c10ea2d52da6f1ad";
var cityName = $(this).attr("data-name");

var geolocationsQueryURL = "http://api.positionstack.com/v1/forward" + "?access_key=" + geolocationsAPIKey
    "&query=" + cityName;

    
// optional parameters: 

    & limit = 10
    & output = json
    // more optional parameters available 