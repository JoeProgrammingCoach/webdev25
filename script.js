const searchBtn = document.querySelector('submit');
let searchquery = "";
let hasSearched = false;

document.getElementById("submit").onclick = (e) => {
   e.preventDefault();
   let searchForCity =
      document.getElementById('cityName').value;
   console.log("submit button was clicked");
   console.log("You want weather for " + searchForCity);
   let forecastCityName = document.getElementById("forecastCityName");
   hasSearched = true;
   forecastCityName.innerText = searchForCity;
}

let fTempChecked = document.getElementById("Fahrenheit");
let cTempChecked = document.getElementById("Celsius");

