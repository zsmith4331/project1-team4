
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

for(var i = 0; i < localStorage.length; i++){
    var cityN = localStorage.getItem(i);
    var locName = $("#cityList").addClass("cityL");
    locName.append("<li>"+ cityName + "</li>");
}


});

/*var localS =localStorage.setItem();*/