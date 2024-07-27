
const apiKey="cc091990e6f2a0dec19b7ed8f960d606";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiurl + city +`&appid=${apiKey}`);
    var data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "image/cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "image/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "image/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "image/mist.png";
    }
    else {
        // Default image if the condition is not recognized
        weatherIcon.src = "image/file.png";
    }
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})
