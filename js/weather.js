const temp = document.querySelector(".js-temp");
const loc = document.querySelector(".js-location");
const locicon = document.querySelector(".js-icon");

const API_KEY = "c83ea3b93e4df2ec21245d6494ca0f3d";
const COORDS = "coords";




function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const {icon} = json.weather[0];
        const temperature = Math.round(json.main.temp,0);
        const place = json.name;
        locicon.innerHTML = `<img src="icons/${icon}.png"></img>`
        temp.innerText = `${temperature} °C`;
        loc.innerText = `${place}`;
        });
}
        

// local에다가 정보를 저장
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError() {
    console.log("Can't access geo location");
  }
  
  function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }

  function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
      askForCoords();
    } else {
      const parseCoords = JSON.parse(loadedCoords);
      getWeather(parseCoords.latitude, parseCoords.longitude);
    }
  }
  
  function init() {
    loadCoords();
  }
  
  init();