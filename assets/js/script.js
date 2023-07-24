var city;
const searchBtn = document.querySelector(".button");
searchBtn.addEventListener('click', function() {
    city = "input";
    console.log(city);
    getWeather();
})


function getWeather () {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city +"&limit=1&appid=832cf34605e4ecca0f923b6ee27d32a9") 
}
