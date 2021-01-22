
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
 

});




  function displayCity(){
    $("#cityList").empty();
    var data = JSON.parse(localStorage.getItem("cities")) || [];

    //pulling and listing city name

    //var cityN = localStorage.getItem(i);


  for(var i = 0; i < data.length; i++){
    //var cityN = localStorage.getItem(i);
    var locName = $("#cityList").addClass("cityL");
    locName.append("<button  class='cityPush btn btn-outline-light btn-dark' data-name='"+data[i]+"'>"+ data[i] + "</button>");
}
  }
displayCity();


$(".cityPush").on("click", function(){
var c = $(this).attr("data-name");
citySearch(c);


});

$("#clear").on("click", function(){
$("#cityList").empty();
localStorage.clear();

});




