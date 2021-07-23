import "./style.css";
const CITIES_URL = "http://localhost:3033/cities";

const api = {
  key: "e5e29ebfa01d8c4d760211546a67ba41",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.getElementById("search");
const matchList = document.querySelector(".match-list");

searchBox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchBox.value);
  }
}

const getResults = (query) => {
  fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
};

const displayResults = (weather) => {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let icon = document.querySelector(".current .icon");
  icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">`;

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = `${weather.weather[0].description}`;

  let wind_speed = document.querySelector(".current .wind_speed");
  wind_speed.innerHTML = `Wind speed: ${Math.round(weather.wind.speed)} m/s`;

  let humidity = document.querySelector(".current .humidity");
  humidity.innerHTML = `Humidity: ${weather.main.humidity} %`;
};

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};
/////////////////////////////////

const searchCities = async (searchText) => {
  const res = await fetch(CITIES_URL);
  const cities = await res.json();
  let matches = cities.filter((city) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return city.name.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }
  outputHtml(matches);
};

const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `
    <div class="card">
      <h4>${match.name}, ${match.country}</h4>
    </div>`
      )
      .join("");
    matchList.innerHTML = html;
  }
  selectCity();
};

function selectCity() {
  matchList.onclick = function (e) {
    searchBox.value = e.target.innerText;
    getResults(searchBox.value);
    matchList.innerHTML = "";
  };
}

searchBox.addEventListener("input", () => searchCities(searchBox.value));

getResults("Tallinn");
