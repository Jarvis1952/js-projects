const apiKey = "de6bbada1893621d93ba8101fff30f82"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric"

async function checkWeather(city){
    const response = await fetch(`${apiURL}&q=${city}&appid=${apiKey}`);
    if(response.status != 200){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
        return;
    }
    let data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed} Km/h`;
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";

    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
}

const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
searchBtn.addEventListener('click', ()=>{
    
    checkWeather(searchInput.value);
})
