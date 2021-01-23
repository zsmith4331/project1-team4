function geosearch(citInput) {
  //var cityName = $("#search").val();
  var weatherAPIKey = "&appid=ab246c1d8eb84670d81cd395b2a799e9";
  var weatherQueryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    citInput +
    weatherAPIKey;

  $.ajax({
    url: weatherQueryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var lat = response.coord.lat;
    console.log(lat);
    var long = response.coord.lon;
    console.log(long);

    // Zomato API Key
    var ZomatoAPIKey = "78381c34c15580968a80a67951c301b7";

    // Zomato URL
    // var cityName = $(this).attr("data-name");

    var ZomatoQueryURL =
      "https://developers.zomato.com/api/v2.1/geocode?lat=" +
      lat +
      "&lon=" +
      long;

    //  // AJAX call
    $.ajax({
      url: ZomatoQueryURL,
      method: "GET",
      headers: {
        "user-key": ZomatoAPIKey,
      },
    }).then(function (response) {
      console.log(response);
      var rest1Name = response.nearby_restaurants[0].restaurant.name;
      console.log(rest1Name);
      var rest1Cuisine = response.nearby_restaurants[0].restaurant.cuisines;
      console.log(rest1Cuisine);
      var rest1Rating =
        response.nearby_restaurants[0].restaurant.user_rating.rating_text;
      console.log(rest1Rating);
      var rest1Menu = response.nearby_restaurants[0].restaurant.menu_url;
      console.log(rest1Menu);

      var rest2Name = response.nearby_restaurants[1].restaurant.name;
      console.log(rest2Name);
      var rest2Cuisine = response.nearby_restaurants[1].restaurant.cuisines;
      console.log(rest2Cuisine);
      var rest2Rating =
        response.nearby_restaurants[1].restaurant.user_rating.rating_text;
      console.log(rest2Rating);
      var rest2Menu = response.nearby_restaurants[1].restaurant.menu_url;
      console.log(rest2Menu);

      var rest3Name = response.nearby_restaurants[2].restaurant.name;
      console.log(rest3Name);
      var rest3Cuisine = response.nearby_restaurants[2].restaurant.cuisines;
      console.log(rest3Cuisine);
      var rest3Rating =
        response.nearby_restaurants[2].restaurant.user_rating.rating_text;
      console.log(rest3Rating);
      var rest3Menu = response.nearby_restaurants[2].restaurant.menu_url;
      console.log(rest3Menu);

      $("#rest1Name").text("Name: " + rest1Name);
      $("#rest1Cuisine").text("Cuisine: " + rest1Cuisine);
      $("#rest1Rating").text("Rating: " + rest1Rating);
      $("#rest1Menu").attr("href", rest1Menu);
      $("#rest1Menu").text(rest1Name + " Menu");

      $("#rest2Name").text("Name: " + rest2Name);
      $("#rest2Cuisine").text("Cuisine: " + rest2Cuisine);
      $("#rest2Rating").text("Rating: " + rest2Rating);
      $("#rest2Menu").attr("href", rest2Menu);
      $("#rest2Menu").text(rest2Name + " Menu");

      $("#rest3Name").text("Name: " + rest3Name);
      $("#rest3Cuisine").text("Cuisine: " + rest3Cuisine);
      $("#rest3Rating").text("Rating: " + rest3Rating);
      $("#rest3Menu").attr("href", rest3Menu);
      $("#rest3Menu").text(rest3Name + " Menu");
    });
  });
}

//$(document).on("click", "#button", geosearch);
$("#reset").click(function () {
  location.reload();
});
