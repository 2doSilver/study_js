const weather = document.querySelector(".js-weather");

const API_KEY = 'ec2e6b9b90398cc8829af450e448a91f';
const COORDS = 'coords';

function getWeather(latitude, longitude) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        ).then(function(response) {
            return response.json();
        }).then(function(json) {
            const temperture = json.main.temp;
            const place = json.name;

            weather.innerText = `${temperture} @ ${place}`;
        })
}

function saveCoodrs(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // 이름 같으면 이렇게 가능
        latitude, //latitude: latitude 
        longitude //longitude: longitude
    }

    saveCoodrs(coordsObj);

    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("cannot access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords == null) {
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