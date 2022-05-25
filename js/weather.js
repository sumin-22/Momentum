const temp = document.querySelector(".js-temp");
const loc = document.querySelector(".js-location");
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
        const temperature = json.main.temp;
        const place = json.name;
        temp.innerText = `🔅${temperature} °C`;
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