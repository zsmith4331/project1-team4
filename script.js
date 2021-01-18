
// save button function to local storage 
/*function saveEvent (event){
    var userInput = $(this).siblings("input").val().trim();
    localStorage.setItem(userInput);
}
$(".saveBtn").on("click", saveEvent);
*/
// Lists the cities, state, and/or zipcode from local storage.


$(document).ready(function(){

var search = $("#searchCity");
var searchBtn = $("#button");

searchBtn.on("click", function(event){

    var citInput = $("#search").val();
    var data = JSON.parse(localStorage.getItem("cities", "states")) || [];
    data.push(citInput);
    localStorage.setItem("cities", JSON.stringify(data));
    weatherData(citInput);
    $("#search").val("");
    
 
function displayCity(){
    $("#cityList").empty();
    var data = JSON.parse(localStorage.getItem("cities")) || [];

    //pulling and listing city name
for(var i = 0; i < data.length; i++){
    //var cityN = localStorage.getItem(i);

    var cityName = $("#cityList").addClass("cityL");

    cityName.append("<button data-city="+data[i]+" class='cityBtn'>" + data[i] + "</button>" + "<br>");

  for(var i = 0; i < localStorage.length; i++){
    var cityN = localStorage.getItem(i);
    var locName = $("#cityList").addClass("cityL");
    locName.append("<li>"+ cityN + "</li>");
}

//https://api.covidtracking.com/v1/us/current.json
// covid tracking
var state = $("#searchState").val();
  var stateFormatted = state.replaceAll(" ", "").toLowerCase();
  var queryURL5day = "https://api.covidtracking.com/v1/states/" + stateFormatted + "/current.json"

  $.ajax({
      url: queryURL5day,
      method: "GET"
  }).then(function(response) {
        console.log(response)
        console.log(response.positiveIncrease);
        console.log(response.positiveCasesViral);
        console.log(response.hospitalizedCurrently);
        console.log(response.death);
        console.log(response.deathIncrease);
     
    
    
    
    });





};
};


});

/*var localS =localStorage.setItem();*/
});
