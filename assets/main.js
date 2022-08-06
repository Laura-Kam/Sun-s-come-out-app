//variables created.

const btn = document.querySelector(".btn");
const output = document.querySelector(".main-info-card");
let userInput = document.querySelector(".user-input");
let userInputValue = document.querySelector(".user-input").value;

// searching for city name using concat.

const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=cd8545bb68e1aeb655a53433b147eb74";
const APIkey = "cd8545bb68e1aeb655a53433b147eb74";
var endPoint = "https://api.openweathermap.org/data/2.5/onecall?";

var nameCity = "madrid";

function searchCityWeatherAPI() {}

var searchCity =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  nameCity +
  "&appid=" +
  APIkey;
console.log(searchCity);

// //on click fetch request works, Json data returned to console log.

btn.onclick = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      addData(data);
    });
};
