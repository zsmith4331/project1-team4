// covid tracking
function covidFill() {
  var state = $("[id*='state'] :selected").data().value;
  console.log(state);
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
      $("#posIncr").text(
        "Increase in Positive Cases: " + response.positiveIncrease
      );
      $("#posCase").text(
        "Total Positive Cases: " + response.positiveCasesViral
      );
      $("#hos").text(
        "Current Hospitalizations: " + response.hospitalizedCurrently
      );
      $("#death").text("Deaths: " + response.death);
      $("#deathInc").text("Increase in Deaths: " + response.deathIncrease);
      //Covid Image
      var covidImg =
        "https://civilresolutionbc.ca/wp-content/uploads/2020/03/covid-19.png";
      $("#cicon").attr("src", covidImg);
      $("#cicon").attr("style", "height: 110px;");
    });
}

$("button").on("click", covidFill);
