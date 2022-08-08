//time display using moment.js
var today = moment();
$("#currentDay").text(today.format("(DD-MM-YYYY)"));

//variables created.
const btn = document.querySelector(".btn");
const output = document.querySelector(".main-info-card");
let userInput = document.querySelector(".user-input");
var cityName = document.getElementsByClassName("user-input").value;
var cityNameSearch =
  "https://api.openweathermap.org/data/2.5/forecast?appid=cd8545bb68e1aeb655a53433b147eb74&units=imperial&q=" +
  cityName;
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var Uvi = document.getElementById("uvi");
const APIkey = "cd8545bb68e1aeb655a53433b147eb74";
var search5DayForecast =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  cityName +
  "&cnt=5&appid=" +
  APIkey +
  "&units=metric";

//   //eg https://api.openweathermap.org/data/2.5/forecast?q=birmingham&cnt=5&appid=cd8545bb68e1aeb655a53433b147eb74&units=metric#

// // let userInputValue = document.querySelector(".user-input").value;

// // searching for city name using concat.

// const url =
//   "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=cd8545bb68e1aeb655a53433b147eb74";
// var endPoint = "https://api.openweathermap.org/data/2.5/onecall?";

// //save to local storage.

function saveLocally() {
  console.log("function-ran");
}

btn.addEventListener("click", saveLocally);

//fetch data- current conditions- prints to main card.

function searchMyCity() {
  var cityName = document.getElementById("city").value;
  var cityNameSearch =
    "https://api.openweathermap.org/data/2.5/forecast?appid=cd8545bb68e1aeb655a53433b147eb74&units=imperial&q=" +
    cityName;
  fetch(cityNameSearch)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      temp.innerHTML = "Temperature = " + data.list[0].main.temp + "°F";
      console.log(temp);
      wind.innerHTML = "Wind = " + data.list[0].wind.speed + " MPH";
      humidity.innerHTML = "humidity = " + data.list[0].main.humidity + "%";
    });
}

btn.addEventListener("click", searchMyCity);

//function to get 5 day forecast

function get5DayForecast() {
  var cityName = document.getElementById("city").value;
  var search5DayForecast =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&cnt=5&appid=" +
    APIkey +
    "&units=metric";
  fetch(search5DayForecast)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (i = 0; i < 5; i++) {
        document.getElementById("day-" + (i + 1) + "-temp").innerHTML =
          "Temperature: " + data.list[i].main.temp;
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("day-" + (i + 1) + "-wind").innerHTML =
          "Wind: " + data.list[i].wind.speed;
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("day-" + (i + 1) + "-humidity").innerHTML =
          "Humidity: " + data.list[i].main.humidity;
      }
    });
}

btn.addEventListener("click", get5DayForecast);

//gets API temperature

// function getAPITemperature() {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=cd8545bb68e1aeb655a53433b147eb74"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         console.log("error");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data.main.temp);
//       document.querySelector(".temp").innerHTML =
//         "Temperature = " + data.main.temp;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// getAPITemperature();

// function getAPIWind() {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=cd8545bb68e1aeb655a53433b147eb74"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         console.log("error");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data.wind.speed);
//       document.querySelector(".wind").innerHTML = "Wind = " + data.wind.speed;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// getAPIWind();

// function getAPIUvi() {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=cd8545bb68e1aeb655a53433b147eb74"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         console.log("error");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data.main);
//       document.querySelector(".uvi").innerHTML =
//         "UVI = " + data.main.wind_speed;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// getAPIUvi();

// function getHumidity() {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=cd8545bb68e1aeb655a53433b147eb74"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         console.log("error");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data.main);
//       document.querySelector(".humidity").innerHTML =
//         "Humidity = " + data.main.humidity;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// getHumidity();

//get

// var nameCity = "madrid";

// var searchCity =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   nameCity +
//   "&appid=" +
//   APIkey;
// console.log(searchCity);

// //on click fetch request works, Json data returned to console log.

// btn.onclick = () => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// };
