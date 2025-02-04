const searchBtn = document.querySelector('submit');
let searchquery = "";
let hasSearched = false;
let currentWeatherBox = document.getElementById('currentWeather');
let forecastCityName = document.getElementById("forecastCityName");
let unit = "imperial"; // Default to imperial units
let searchForCity;

document.getElementById("submit").onclick = (e) => {
   e.preventDefault();
   searchForCity = document.getElementById('cityName').value;
   console.log("submit button was clicked");
   console.log("You want weather for " + searchForCity);
   hasSearched = true;
   forecastCityName.innerText = searchForCity;
   fetchWeatherData();
}

let fTempChecked = document.getElementById("Fahrenheit");
let cTempChecked = document.getElementById("Celsius");

// Event listeners for unit changes
fTempChecked.addEventListener('change', () => {
   unit = fTempChecked.checked ? 'imperial' : 'metric'; // Set unit based on selection
   if (hasSearched) { // Refetch data if a search has already been performed
      fetchWeatherData();
   }
});

cTempChecked.addEventListener('change', () => {
   unit = cTempChecked.checked ? 'metric' : 'imperial'; // Set unit based on selection
   if (hasSearched) { // Refetch data if a search has already been performed
      fetchWeatherData();
   }
});


function fetchWeatherData() {
   const apiKey = '7dc4703261b08dae5a9e117c8eed5831';
   const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchForCity}&units=${unit}&appid=${apiKey}`; // Use current weather API

   fetch(currentWeatherUrl) // Fetch from the current weather API
      .then(response => response.json())
      .then(currentWeatherData => {  // Rename to currentWeatherData for clarity
         console.log("Current weather data:", currentWeatherData);

         const temperature = Math.round(currentWeatherData.main.temp);
         const iconCode = currentWeatherData.weather[0].icon;
         const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

         // Construct the HTML content
         let currentWeatherHTML = `
                
               <p>Tuesday</p>
                <p>${temperature}°${unit === 'imperial' ? 'F' : 'C'}</p>
                
                
            `;

         currentWeatherBox.innerHTML = currentWeatherHTML; // Use innerHTML

      })
      .catch(error => {
         console.error("Error fetching weather data:", error);
         currentWeatherBox.innerText = "Error fetching weather data.";
      });
}
