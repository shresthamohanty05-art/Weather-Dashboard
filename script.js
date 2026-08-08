
const weatherCard = document.querySelector(".weather-card")
const inp = document.getElementById("city")
const search = document.getElementById("search-btn")

search.addEventListener("click" , ()=>{
    const city = inp.value 
    console.log(city)

    if(city === ""){
        alert("Search shouldn't be empty")
    }else{
    getWeather(city)
    }

})

async function getWeather(city){
    console.log("Getting weather for " + city)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    console.log(url);

    const loading = document.querySelector(".loading");
     const cityName = document.querySelector(".city-name");
    const temp = document.querySelector(".temp");
    const humid = document.querySelector(".humidity");
const cond = document.querySelector(".condition");
const wSpeed = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

   loading.textContent = "Loading weather...";

   cityName.textContent = "";
   temp.textContent = "";
   humid.textContent = "";
   cond.textContent = "";
   wSpeed.textContent = "";

    const response = await fetch(url);
    if (!response.ok) {
    loading.textContent = "City not found"
    return;
} 

    const data = await response.json();

        const temperature  = data.main.temp;
    const humidity = data.main.humidity;
    const condition = data.weather[0].description;
    const windSpeed = data.wind.speed;
        const icon = data.weather[0].icon;


    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    weatherIcon.alt = condition;

    loading.textContent = "";

    cityName.textContent = data.name;
    temp.textContent = temperature + "°C" ;
humid.textContent = humidity + "%";
cond.textContent = condition;

const windkmh = windSpeed * 3.6;
wSpeed.textContent = windkmh.toFixed(1) + " km/h";

console.log("humid:", humid);
console.log("cond:", cond);
console.log("wind:", wSpeed);

loading.textContent = "";

    console.log(data)
}