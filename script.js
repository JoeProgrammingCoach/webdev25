const searchBtn = document.querySelector('submit');
let searchquery = "";
let hasSearched = false;
let currentWeatherBox = document.getElementById('currentWeather');
let forecastCityName = document.getElementById("forecastCityName");
let unit = "imperial";
let searchForCity;

document.getElementById("submit").onclick = (e) => {
   e.preventDefault();
   searchForCity =
      document.getElementById('cityName').value;
   console.log("submit button was clicked");
   console.log("You want weather for " + searchForCity);
   hasSearched = true;
   forecastCityName.innerText = searchForCity;
   fetchWeatherData();
}

let fTempChecked = document.getElementById("Fahrenheit");
let cTempChecked = document.getElementById("Celsius");

function fetchWeatherData() {
   const apiKey = '7dc4703261b08dae5a9e117c8eed5831';
   const fiveDayForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchForCity}&units=${unit}&appid=${apiKey}`;

   fetch(fiveDayForecastUrl)
      .then(response => response.json())
      .then(forecastData => {

         const forecastItems = forecastData.list
            .filter((_, index) => index)
            .map((item, index) => ({
               _id: `day-${index}`,
               date: new Date(item.dt * 1000).toLocaleDateString(),
               temp: `${Math.round(item.main.temp)}`,
               icon: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
               description: item.weather[0].description,

            }));
         currentWeatherBox.innerText = "Here is the data" + JSON.stringify(forecastItems)

         console.log("data in forecast Items " + JSON.stringify(forecastItems));
      })
}