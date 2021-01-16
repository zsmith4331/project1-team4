// save button function to local storage
/*function saveEvent (event){
    var userInput = $(this).siblings("input").val().trim();
    localStorage.setItem(userInput);
}
$(".saveBtn").on("click", saveEvent);
*/
// Lists the cities, state, and/or zipcode from local storage.
var search = $("#search");
var searchBtn = $("#button");

searchBtn.on("click", function (event) {
  for (var i = 0; i < localStorage.length; i++) {
    var cityN = localStorage.getItem(i);
    var locName = $("#cityList").addClass("cityL");
    locName.append("<li>" + cityName + "</li>");
  }

  //https://api.covidtracking.com/v1/us/current.json
  // covid tracking
  var state = $("#search").val();
  var stateFormatted = state.replaceAll(" ", "").toLowerCase();
  var queryURL5day =
    "https://api.covidtracking.com/v1/states/" +
    stateFormatted +
    "/current.json";

  $.ajax({
    url: queryURL5day,
    method: "GET",
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {
      console.log(response);
      console.log(response.positiveIncrease);
      console.log(response.positiveCasesViral);
      console.log(response.hospitalizedCurrently);
      console.log(response.death);
      console.log(response.deathIncrease);
    });
});

/*var localS =localStorage.setItem();*/
