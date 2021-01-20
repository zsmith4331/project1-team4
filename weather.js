
  function citySearch(cityName) {
    $(".test").empty();
    $(".forecastCont").empty();
    //var input = $("#search").val();
    var weatherApi =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=ab246c1d8eb84670d81cd395b2a799e9";
      console.log("Weather Api" + weatherApi);
      console.log("City name: "+ cityName);
    $.ajax({
      url: weatherApi,
      method: "GET",
    }).then(function (response) {
      var cityName = response.name;
      var dateReal = new Date(response.dt * 1000).toLocaleDateString("en-US");
      var temp = (response.main.temp - 273.15) * 1.8 + 32;
      var humidity = response.main.humidity;
      var wind = response.wind.speed;
      var iconCode = response.weather[0].icon;
      var iconUrl = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";

      $("#initial").addClass("hidden");
      $("#widgets").removeClass("hidden");

      $("#city").text(cityName + ":  " + dateReal);
      $("#temp").text("Temperature: " + temp.toFixed(2) + " (F)");
      $("#humidity").text("Humidity: " + humidity + "%");
      $("#wind").text("Wind Speed: " + wind + " MPH");
      $("#wicon").attr("src", iconUrl);
    });
  }
  //$(document).on("click", "#button", citySearch);
  $("#reset").click(function () {
    location.reload();
  });

