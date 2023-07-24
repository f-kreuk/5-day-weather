// var geocodeURL = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=832cf34605e4ecca0f923b6ee27d32a9'
// var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=832cf34605e4ecca0f923b6ee27d32a9'

var country = "US"
var state = "";
var city = "";


const searchBtn = document.querySelector(".button");
searchBtn.addEventListener('click', function() {
    city = document.getElementById("cityId").value;
    console.log(city);
    getWeather();
})


function getWeather () {
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="+ city + "&limit=1&appid=832cf34605e4ecca0f923b6ee27d32a9") 
    .then(response => {
        return response.json();
    })
    .then(data => {
       var weather = data.weather[0].icon;
        console.log(weather);
        });
    };
    
        

