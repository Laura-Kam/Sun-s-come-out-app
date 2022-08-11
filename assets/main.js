//time display using moment.js for current day.
var today = moment();
$("#currentDay").text(today.format("(DD-MM-YYYY)"));

//variables created.
const btn = document.querySelector(".btn");
const output = document.querySelector(".main-info-card");
let userInput = document.querySelector(".user-input");
var cityName = document.getElementsByClassName("user-input").value;
var searchHistoryArray = [];
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

// save to local storage and attempt to save and print search history to page.

function saveLocally(citySearched) {
  if (searchHistoryArray.indexOf(citySearched) !== -1) {
    return;
  }
  console.log(citySearched);
  searchHistoryArray.push(citySearched);
  localStorage.setItem("search-history", JSON.stringify(searchHistoryArray));
}

btn.addEventListener("click", saveLocally);

//fetch data- current conditions- prints to main card.

function searchMyCity(event) {
  event.preventDefault();
  var cityName = document.getElementById("city").value;
  console.log(cityName);
  var cityNameSearch =
    "https://api.openweathermap.org/data/2.5/forecast?appid=cd8545bb68e1aeb655a53433b147eb74&units=imperial&q=" +
    cityName;
  fetch(cityNameSearch)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      saveLocally(data.city.name);

      temp.innerHTML = " Temperature = " + data.list[0].main.temp + "°F";
      console.log(temp);
      wind.innerHTML = " Wind = " + data.list[0].wind.speed + " MPH";
      humidity.innerHTML = " humidity = " + data.list[0].main.humidity + "%";
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
        var date = moment.unix(data.list[i].dt).format("D/M/YYYY");
        document.getElementById("day-" + (i + 1) + "-date").innerHTML =
          "Date: " + date;
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("day-" + (i + 1) + "-temp").innerHTML =
          " Temperature: " + data.list[i].main.temp;
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("day-" + (i + 1) + "-icon").src =
          "https://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
        console.log(data.list[i].weather[0].icon);
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day-" + (i + 1) + "-wind").innerHTML =
          " Wind: " + data.list[i].wind.speed;
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("day-" + (i + 1) + "-humidity").innerHTML =
          " Humidity: " + data.list[i].main.humidity;
      }
    });
}

btn.addEventListener("click", get5DayForecast);
