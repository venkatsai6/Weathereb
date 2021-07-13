
let city = document.querySelector("#city");
let go = document.querySelector("#go");

let tempIcon = document.querySelector(".tempIcon");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");

let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let pressure = document.querySelector("#pressure");
let speed = document.querySelector("#speed");
let airindex = document.querySelector("#airindex");
let sunset = document.querySelector("#sunset");
let sunrise = document.querySelector("#sunrise");



const weather = {};
const list = {};

go.addEventListener("click", () => {
    //    console.log(country.value);
    //    console.log(city.value);

    let key = `aed006468592f6cd880bce6ed61a53f4`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weather.description = data.weather[0].description;
        weatherDescription.innerText = weather.description;

        weather.iconId = data.weather[0].icon;
        tempIcon.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;

        weatherCountry.innerText = `${data.name} - ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
        feelsLike.innerText = `Real Feel: ${data.main.feels_like}°C`;
        humidity.innerText = `Humidity: ${data.main.humidity}%`;
        pressure.innerText = `Pressure: ${data.main.pressure}hPa`;
        speed.innerText = `Wind Speed: ${data.wind.speed}kmph`;
        // cordinates.innerText = `Lat / Lon: ${data.coord.lat} / ${data.coord.lon}`;


        var sRise = convertTime(data.sys.sunrise);
        var sSet = convertTime(data.sys.sunset);
        function convertTime(unixTime) {
            let dt = new Date(unixTime * 1000)
            let h = dt.getHours()
            let m = "0" + dt.getMinutes()
            let t = h + ":" + m.substr(-2)
            return t


        };
        sunrise.innerText = `Sunrise: ${sRise}`;
        sunset.innerText = `Sunset: ${sSet}`;

    })
    city.value = "";

    // let url1 = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat={lat}&lon={lon}&appid=${key}`;
    // // let url1 = `http://dataservice.accuweather.com/locations/v1/chittoor?apikey=XOiCrSlBsUAuYRfWv133u1RPMhxGwSSV`
    // fetch(url1).then(response => {
    //     return response.json();
    // }).then(data => {
    //     console.log(data);
    //     cordinates.innerText = `${data.coord}`;
    //     list.main.airindex = data.list[0].main.aqi;
    //     airindex.innerText = `Air Quality Index: ${data.list.main.aqi}`;

    // })
})
