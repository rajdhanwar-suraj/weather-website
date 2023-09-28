const apiKey = "0b635955221aa4b44ae5629fb4b6b44a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.querySelector('button');
const searchCity = document.querySelector('input');
const weatherIon = document.querySelector('.weather-icon');

async function checkWeather(searchCity) {
    const responce = await fetch(apiUrl + searchCity + `&appid=${apiKey}`);

    if (responce.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        var data = await responce.json();
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.weather-nature').innerHTML = data.weather[0].main;
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == 'Clouds') {
            weatherIon.src = "images/clouds.png"
        } else if (data.weather[0].main == 'Clear') {
            weatherIon.src = "images/clear.png"
        } else if (data.weather[0].main == 'Rain') {
            weatherIon.src = "images/rain.png"
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIon.src = "images/drizzle.png"
        } else if (data.weather[0].main == 'Mist') {
            weatherIon.src = "images/mist.png"
        } else if (data.weather[0].main == 'Haze') {
            weatherIon.src = "images/haze.png"
        }
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = "block";
    }


}

searchBtn.addEventListener('click', () => {
    checkWeather(searchCity.value);
});