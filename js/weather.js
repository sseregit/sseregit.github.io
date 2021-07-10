const status = document.querySelector(".weather__span");

function error(){
  status.innerText = "Unable to retrieve your location";
}

function success(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=97a2c2c4288f46141ec6f84fe3c2ce0e&units=metric`;
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    status.innerText = `${myJson.weather[0].main} / ${myJson.main.temp} / ${myJson.name}`;
  });
}

navigator.geolocation.getCurrentPosition(success, error);