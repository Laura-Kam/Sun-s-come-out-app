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
      getWeather(data[0].lat, data[0].lon);
      //create button.
      //save to local storage.
    });
}

//new function - get latitude and longtitude values from original API call.

btn.addEventListener("click", getLatLon);

function getWeather(lat, lon) {
  console.log(lat, lon);
  var weather =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&exclude=minutely,hourly,alerts&appid=" +
    APIkey;
  fetch(weather)
    .then((response) => response.json())
    .then((data) => {
      //display weather and forecast
      displayCurrentWeather(data.current);

      displayForecast(data.daily);
    });
}
function displayCurrentWeather(current) {
  console.log(current);
  temp.textContent = "Temperature: " + current.temp;
  currentDay.textContent =
    "(" + moment.unix(current.dt).format("D/M/YYYY") + ")";
  wind.textContent = "Wind" + current.wind;
  humidity.textContent = "Humidity" + current.humidity;
  Uvi.textContent = "Uvi:" + current.uvi;
}

// new function get5day-daily-forecast - e.g api call: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,alerts&appid=cd8545bb68e1aeb655a53433b147eb74

//52.4796992 -1.9026911
//api.openweathermap.org/data/2.5/onecall?lat=52.4796992&lon=-1.9026911&exclude=minutely,hourly,alerts&appid=cd8545bb68e1aeb655a53433b147eb74

https: function displayForecast(fiveDayForecast) {
  console.log(fiveDayForecast);
  for (i = 0; i < 5; i++) {
    console.log(fiveDayForecast[i]);
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
    document.getElementById(`day-${i}-uvi`).src =
      "http://openweathermap.org/img/wn/" +
      fiveDayForecast[i].weather.icon +
      ".png";
    console.log(fiveDayForecast[i].weather.icon);

    // for (i = 0; i < 5; i++) {
    //       document.getElementById("day-" + (i + 1) + "-icon").src =
    //         "https://openweathermap.org/img/wn/" +
    //         data.list[i].weather[0].icon +
    //         ".png";
    //       console.log(data.list[i].weather[0].icon);
    //     }
  }
  // var cityName = document.getElementById("city").value;
  // var search5DayForecast =
  //   "https://api.openweathermap.org/data/2.5/onecall?lat=" +
  //   latitude +
  //   "&lon=" +
  //   "&exclude=minutely,hourly,alerts&appid=" +
  //   APIkey;
  // fetch(search5DayForecast)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     for (i = 0; i < 5; i++) {
  //       var date = moment.unix(data.list[i].dt).format("D/M/YYYY");
  //       document.getElementById("day-" + (i + 1) + "-date").innerHTML =
  //         "Date: " + date;
  //     }
  //     for (i = 0; i < 5; i++) {
  //       document.getElementById("day-" + (i + 1) + "-temp").innerHTML =
  //         " Temperature: " + data.list[i].main.temp;
  //     }
  //     for (i = 0; i < 5; i++) {
  //       document.getElementById("day-" + (i + 1) + "-icon").src =
  //         "https://openweathermap.org/img/wn/" +
  //         data.list[i].weather[0].icon +
  //         ".png";
  //       console.log(data.list[i].weather[0].icon);
  //     }
  //     for (i = 0; i < 5; i++) {
  //       document.getElementById("day-" + (i + 1) + "-wind").innerHTML =
  //         " Wind: " + data.list[i].wind.speed;
  //     }
  //     for (i = 0; i < 5; i++) {
  //       document.getElementById("day-" + (i + 1) + "-humidity").innerHTML =
  //         " Humidity: " + data.list[i].main.humidity;
  //     }
  //   });
}

//fetch data- current conditions- prints to main card.

// function searchMyCity(event) {
//   event.preventDefault();
//   var cityName = document.getElementById("city").value;
//   console.log(cityName);
//   var cityNameSearch =
//     "https://api.openweathermap.org/data/2.5/forecast?appid=cd8545bb68e1aeb655a53433b147eb74&units=imperial&q=" +
//     cityName;
//   fetch(cityNameSearch)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       saveLocally(data.city.name);

//       temp.innerHTML = " Temperature = " + data.list[0].main.temp + "°F";
//       console.log(temp);
//       wind.innerHTML = " Wind = " + data.list[0].wind.speed + " MPH";
//       humidity.innerHTML = " humidity = " + data.list[0].main.humidity + "%";
//     });
// }

// btn.addEventListener("click", searchMyCity);

// //function to get 5 day forecast

// function get5DayForecast() {
//   var cityName = document.getElementById("city").value;
//   var search5DayForecast =
//     "https://api.openweathermap.org/data/2.5/forecast?q=" +
//     cityName +
//     "&cnt=5&appid=" +
//     APIkey +
//     "&units=metric&exclude=minutely,hourly";
//   fetch(search5DayForecast)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       for (i = 0; i < 5; i++) {
//         var date = moment.unix(data.list[i].dt).format("D/M/YYYY");
//         document.getElementById("day-" + (i + 1) + "-date").innerHTML =
//           "Date: " + date;
//       }
//       for (i = 0; i < 5; i++) {
//         document.getElementById("day-" + (i + 1) + "-temp").innerHTML =
//           " Temperature: " + data.list[i].main.temp;
//       }
//       for (i = 0; i < 5; i++) {
//         document.getElementById("day-" + (i + 1) + "-icon").src =
//           "https://openweathermap.org/img/wn/" +
//           data.list[i].weather[0].icon +
//           ".png";
//         console.log(data.list[i].weather[0].icon);
//       }

//       for (i = 0; i < 5; i++) {
//         document.getElementById("day-" + (i + 1) + "-wind").innerHTML =
//           " Wind: " + data.list[i].wind.speed;
//       }
//       for (i = 0; i < 5; i++) {
//         document.getElementById("day-" + (i + 1) + "-humidity").innerHTML =
//           " Humidity: " + data.list[i].main.humidity;
//       }
//     });
// }

// btn.addEventListener("click", get5DayForecast);
