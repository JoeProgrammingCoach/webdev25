const searchBtn = document.querySelector('submit');
let searchquery = "";
let hasSearched = false;
let forecastCityName = document.getElementById("forecastCityName");

document.getElementById("submit").onclick = (e) => {
   e.preventDefault();
   let searchForCity =
      document.getElementById('cityName').value;
   console.log("submit button was clicked");
   console.log("You want weather for " + searchForCity);
   hasSearched = true;
   forecastCityName.innerText = searchForCity;
}

let fTempChecked = document.getElementById("Fahrenheit");
let cTempChecked = document.getElementById("Celsius");

function fetchWeatherData() {
   const apiKey = '7dc4703261b08dae5a9e117c8eed5831';
   const fiveDayForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&appid=${apiKey}`;
}