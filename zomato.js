$(document).ready(function () {
   function geosearch() {
      var cityName = $("#search").val();
      var geolocationsAPIKey = "96fbed43a1c4b047c10ea2d52da6f1ad";
      var geolocationsQueryURL = "http://api.positionstack.com/v1/forward" + "?access_key=" + geolocationsAPIKey +
    "&query=" + cityName;

      $.ajax({
         url: geolocationsQueryURL,
         method: "GET",
       }).then(function(data) {
          console.log(data)
         var lat = data.data[0].latitude
         console.log(lat)
         var long = data.data[0].longitude
         console.log(long)


   });
}

   $(document).on("click", "#button", geosearch);
   $("#reset").click(function () {
     location.reload();
   });

});


 // Zomato API Key
// var ZomatoAPIKey = "78381c34c15580968a80a67951c301b7";

   // Zomato URL
// var cityName = $(this).attr("data-name");
// var ZomatoQueryURL = "https://developers.zomato.com/api/v2.1/locations?query=" + cityName + "&count=5";

//  // AJAX call
//  $.ajax({
//    url: ZomatoQueryURL,
//    method: "GET",
//    headers: {
//       "user-key": ZomatoAPIKey
//    }
//  }).then(function(response) {

//     console.log(response)
//     console.log(response.title)