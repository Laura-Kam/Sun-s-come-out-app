//time display using moment.js for current day.
var today = moment();
$("#currentDay").text(today.format("(DD-MM-YYYY)"));

//variables created.
const btn = document.querySelector(".btn");
const output = document.querySelector(".main-info-card");
let userInput = document.querySelector(".user-input");
var cityName = document.getElementsByClassName("user-input").value;
var searchHistoryArray = [];
const APIkey = "cd8545bb68e1aeb655a53433b147eb74";
var cityNameSearch =
  "https://api.openweathermap.org/geo/1.0/direct?q=" +
  cityName +
  "&limit=1&appid=" +
  APIkey;
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var Uvi = document.getElementById("uvi");
let name = document.getElementById("name");
var currentDay = document.getElementById("currentDay");
var search5DayForecast =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  cityName +
  "&cnt=5&appid=" +
  APIkey +
  "&units=metric&exclude=minutely,hourly";

// save to local storage and attempt to save and print search history to page.

function saveLocally(event) {
  if (searchHistoryArray.indexOf(citySearched) !== -1) {
    return;
  }
  console.log(event.target);
  searchHistoryArray.push(citySearched);
  localStorage.setItem("search-history", JSON.stringify(searchHistoryArray));
}

//--------------------new save name of city in local storage------------------

function getLatLon(event) {
  event.preventDefault();
  var cityName = document.getElementById("city").value;
  console.log(cityName);
  var cityNameSearch =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&limit=1&appid=" +
    APIkey;

  // e.g search url https://api.openweathermap.org/geo/1.0/direct?q=london&limit=1&appid=cd8545bb68e1aeb655a53433b147eb74
  fetch(cityNameSearch)
    .then((response) => {
      //what if city is not valid.
      return response.json();
    })
    .then((data) => {
      getWeather(data[0].lat, data[0].lon, data[0].name);
      //create button.
      //save to local storage.
    });
}

//new function - get latitude and longtitude values from original API call.

btn.addEventListener("click", getLatLon);

function getWeather(lat, lon, name) {
  console.log(lat, lon, name);
  var weather =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude=minutely,hourly,alerts&appid=" +
    APIkey +
    "&units=metric";
  fetch(weather)
    .then((response) => response.json())
    .then((data) => {
      //display weather and forecast
      displayCurrentWeather(data.current, name);

      displayForecast(data.daily);
    });
}
function displayCurrentWeather(current, cityName) {
  console.log(current);
  temp.textContent = "Temperature: " + current.temp;
  currentDay.textContent =
    "(" + moment.unix(current.dt).format("D/M/YYYY") + ")";
  wind.textContent = "Wind " + current.wind_speed;
  humidity.textContent = "Humidity: " + current.humidity;
  Uvi.textContent = "Uvi " + current.uvi;
  document.getElementById("name").innerHTML = cityName;

  // document.getElementsByClassName("card-title").textContent = data[0].name;
}

// new function get5day-daily-forecast - e.g api call: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,alerts&appid=cd8545bb68e1aeb655a53433b147eb74

https: function displayForecast(fiveDayForecast) {
  console.log(fiveDayForecast);
  for (i = 0; i < 5; i++) {
    console.log(fiveDayForecast[i]);

    document.getElementById(`day-${i}-date`).textContent =
      "(" + moment.unix(fiveDayForecast[i].dt).format("D/M/YYYY") + ")";

    document.getElementById(
      `day-${i}-temp`
    ).textContent = `Temperature: ${fiveDayForecast[i].temp.day}`;
    document.getElementById(
      `day-${i}-wind`
    ).textContent = `Wind: ${fiveDayForecast[i].wind_speed}`;
    document.getElementById(
      `day-${i}-humidity`
    ).textContent = `Humidity: ${fiveDayForecast[i].humidity}`;
    document.getElementById(
      `day-${i}-uvi`
    ).textContent = `Uvi: ${fiveDayForecast[i].uvi}`;
    document.getElementById(`day-${i}-icon`).src =
      "http://openweathermap.org/img/wn/" +
      fiveDayForecast[i].weather[0].icon +
      ".png";
    console.log(fiveDayForecast[i].weather.icon);
  }
}
