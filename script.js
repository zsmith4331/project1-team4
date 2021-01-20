
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

searchBtn.on("click", function(event){

    var citInput = $("#search").val();
    var data = JSON.parse(localStorage.getItem("cities", "states")) || [];
    data.push(citInput);
    localStorage.setItem("cities", JSON.stringify(data));
    console.log(citInput);
    citySearch(citInput);
 
//https://api.covidtracking.com/v1/us/current.json
// covid tracking
var state = $("#searchState").val();
  //var stateFormatted = state.replaceAll(" ", "").toLowerCase();
  /*var queryURL5day = "https://api.covidtracking.com/v1/states/" + stateFormatted + "/current.json"

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
    
    });*/
});


/*$(document).on("click", ".cityBtn", function (e) {
    e.preventDefault();
    console.log("Inside cityBtn");
    var city = $(this).attr("data-city");
    console.log("City Name: " + city);
    
  });*/

  function displayCity(){
    $("#cityList").empty();
    var data = JSON.parse(localStorage.getItem("cities")) || [];

    //pulling and listing city name

    //var cityN = localStorage.getItem(i);


  for(var i = 0; i < data.length; i++){
    //var cityN = localStorage.getItem(i);
    var locName = $("#cityList").addClass("cityL");
    locName.append("<button  class='cityPush' data-name='"+data[i]+"'>"+ data[i] + "</button>");
}
  }
displayCity();


$(".cityPush").on("click", function(){
var c = $(this).attr("data-name");
citySearch(c);


});




