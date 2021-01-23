
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

    var stateSel = $("[id*='state'] :selected").data().value;
    var citInput = $("#search").val();
    var sVal =[];
    sVal.push(citInput);
    sVal.push(stateSel);
    var data = JSON.parse(localStorage.getItem("cities")) || [];
    data.push(sVal);
    localStorage.setItem("cities",  JSON.stringify(data));
    console.log( "This is citInput: "+ citInput);
    console.log("this is sVal " + sVal);
    console.log("This is stateSel: " + stateSel);
    citySearch(citInput);
    geosearch(citInput);
    var welcomeState= $("[id*='state'] :selected").data().value;
$("#welcomeS").append(welcomeState);
 $("#welcomeC").append(search.val());

});





  function displayCity(){
    $("#cityList").empty();
    var data = JSON.parse(localStorage.getItem("cities")) || [];
    



  for(var i = 0; i < data.length; i++){
    //var cityN = localStorage.getItem(i);
    var locName = $("#cityList").addClass("cityL");
    console.log("data  [0]" + data[i][0] );
    console.log("data  [1]" + data[i][1]);
   locName.append("<button  class='cityPush btn btn-outline-light btn-dark' data-name='"+data[i][0]+"'data-state='"+ data[i][1] + "'>"+ data[i] + "</button>");
}
  }
displayCity();

// State button
function displayState(){


}


$(".cityPush").on("click", function(){
var c = $(this).attr("data-name");
var s = $(this).attr("data-state");
var p = false;
citySearch(c);
geosearch(c);
covidFill(s,p);
});

$("#clear").on("click", function(){
$("#cityList").empty();
localStorage.clear();

});




