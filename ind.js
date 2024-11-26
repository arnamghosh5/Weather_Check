const apiKey="66c75c946f7cdb7bd331146217ebea39";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchB=document.querySelector(".search button");
async function checkWeather(city){
    const r=await fetch(apiUrl + city+ `&appid=${apiKey}`);
    if(r.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data=await r.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".hum").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}
}
searchB.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
