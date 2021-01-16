// covid tracking
function covidFill(){


var state = $("#searchState").val();
  var stateFormatted = state.replaceAll(" ", "").toLowerCase();
  var queryURL5day = "https://api.covidtracking.com/v1/states/" + stateFormatted + "/current.json"

  $.ajax({
      url: queryURL5day,
      method: "GET"
  })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {
        console.log(response)
        console.log(response.positiveIncrease);
        console.log(response.positiveCasesViral);
        console.log(response.hospitalizedCurrently);
        console.log(response.death);
        console.log(response.deathIncrease);
      });
}

(".button").on("click", covidFill);
