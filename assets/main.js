//variables created.

const btn = document.querySelector(".btn");
const output = document.querySelector(".main-info-card");
let userInput = document.querySelector(".user-input");
var cityName = document.getElementsByClassName("user-input").value;
var cityNameSearch =
  "https://api.openweathermap.org/data/2.5/forecast?appid=cd8545bb68e1aeb655a53433b147eb74&units=imperial&q=" +
  cityName;

// let userInputValue = document.querySelector(".user-input").value;

// searching for city name using concat.

const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=cd8545bb68e1aeb655a53433b147eb74";
const APIkey = "cd8545bb68e1aeb655a53433b147eb74";
var endPoint = "https://api.openweathermap.org/data/2.5/onecall?";

//save to local storage.

function saveLocally() {
  console.log("function-ran");
}

btn.addEventListener("click", saveLocally);

function searchMyCity() {
  var cityName = document.getElementById("city").value;
  var cityNameSearch =
    "https://api.openweathermap.org/data/2.5/forecast?appid=cd8545bb68e1aeb655a53433b147eb74&units=imperial&q=" +
    cityName;
  fetch(cityNameSearch)
    .then((response) => response.json())
    .then((data) => console.log(data)document.querySelector(".temp").innerHTML = "Temperature = " + data.main.temp);
}

btn.addEventListener("click", searchMyCity);

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
