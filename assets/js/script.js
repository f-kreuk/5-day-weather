let currentCity = "";
var key = "832cf34605e4ecca0f923b6ee27d32a9";

//Local Storage Code is below:

//Below function loads the previous searches when the page is refreshed.

window.onload = function() {
    var addsearchArray = JSON.parse(localStorage.getItem('searches'));
    for (let i = 0; i < addsearchArray.length; i++) {
        let list = document.createElement('li');
        list.innerText = addsearchArray[i];
        document.querySelector('#local-cities').appendChild(list);  
    };
    let currentCity = "boston";
    getweather();
  };

//Below is code to clear the local storage

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function() {
    localStorage.clear();
    document.getElementById("local-cities").innerHTML = "";
});

//Below is code for the submit button, which calls addtolocalstorage and addtoULList functions

const searchBtn = document.getElementById("submit");
searchBtn.addEventListener('click', function() {
    theCity = document.getElementById("cityId").value;
    currentCity = theCity;
    //below clears my li list before I run the addtoULlist to avoid duplicates
    document.getElementById("local-cities").innerHTML = "";
    addtolocalstorage();
    getweather();
    addtoULlist();
});

// utilized https://www.youtube.com/watch?v=2hJ1rTANVnk for the local storage piece. The below code adds the user input cities after a click event into an array with a key of "searches".

function addtolocalstorage () {
    //console.log(city);
    var new_data = theCity;
    if(localStorage.getItem('searches') == null){
        localStorage.setItem('searches','[]');
    };
    var old_data = JSON.parse(localStorage.getItem('searches'));
    old_data.push(new_data);
    localStorage.setItem('searches',JSON.stringify(old_data));
};
 
//utilized https://stackoverflow.com/questions/37544230/how-to-get-total-count-of-a-particular-key-in-local-storage to find length of local storage for specific key

function addtoULlist () {
    var addsearchArray = JSON.parse(localStorage.getItem('searches'));
    for (let i = 0; i < addsearchArray.length; i++) {
        let list = document.createElement('li');
        list.innerText = addsearchArray[i];
        document.querySelector('#local-cities').appendChild(list);  
    };
}

//utilized jquery to get value from prior City searches when clicked with this resource: https://codepedia.info/click-event-for-dynamic-button-jquery

$('#local-cities').on('click','li', function() {
    console.log("click works");
    var oldCity = $(this).text();

});

//Below are the getWeather functions:

//Below gets the lat and lon from City fetch

var lon;
var let;

function getweather () {
    fetch("HTTP://api.openweathermap.org/data/2.5/forecast?q=" + currentCity + "&appid=832cf34605e4ecca0f923b6ee27d32a9&units=imperial")
    .then(response => response.json())
    .then(function (response) {
        console.log(response);
        let lat = response.city.coord.lat;
        console.log(lat);
        let lon = response.city.coord.lon;
        console.log(lon);

        const currentLocalDate1 = document.getElementById('1currentLocalDate');
        const currentLocalDate2 = document.getElementById('2currentLocalDate');
        const currentLocalDate3 = document.getElementById('3currentLocalDate');
        const currentLocalDate4 = document.getElementById('4currentLocalDate');
        const currentLocalDate5 = document.getElementById('5currentLocalDate');

        const currentLocalicon1 = document.getElementById('1currentLocalIcon');
        const currentLocalicon2 = document.getElementById('2currentLocalIcon');
        const currentLocalicon3 = document.getElementById('3currentLocalIcon');
        const currentLocalicon4 = document.getElementById('4currentLocalIcon');
        const currentLocalicon5 = document.getElementById('5currentLocalIcon');

        const currentLocalTemp1 = document.getElementById('1currentLocalTemp');
        const currentLocalTemp2 = document.getElementById('2currentLocalTemp');
        const currentLocalTemp3 = document.getElementById('3currentLocalTemp');
        const currentLocalTemp4 = document.getElementById('4currentLocalTemp');
        const currentLocalTemp5 = document.getElementById('5currentLocalTemp');

        const currentLocalWind1 = document.getElementById('1currentLocalWind');
        const currentLocalWind2 = document.getElementById('2currentLocalWind');
        const currentLocalWind3 = document.getElementById('3currentLocalWind');
        const currentLocalWind4 = document.getElementById('4currentLocalWind');
        const currentLocalWind5 = document.getElementById('5currentLocalWind');

        const currentLocalHumidity1 = document.getElementById('1currentLocalHumidity');
        const currentLocalHumidity2 = document.getElementById('2currentLocalHumidity');
        const currentLocalHumidity3 = document.getElementById('3currentLocalHumidity');
        const currentLocalHumidity4 = document.getElementById('4currentLocalHumidity');
        const currentLocalHumidity5 = document.getElementById('5currentLocalHumidity');

        currentLocalDate1.textContent = response.list[3].dt_txt.substring(0,10);
        currentLocalDate2.textContent = response.list[11].dt_txt.substring(0,10);
        currentLocalDate3.textContent = response.list[19].dt_txt.substring(0,10);
        currentLocalDate4.textContent = response.list[27].dt_txt.substring(0,10);
        currentLocalDate5.textContent = response.list[35].dt_txt.substring(0,10);

        currentLocalTemp1.textContent = "Temp: " + response.list[3].main.temp + " F";
        currentLocalTemp2.textContent = "Temp: " + response.list[11].main.temp + " F";
        currentLocalTemp3.textContent = "Temp: " + response.list[19].main.temp + " F";
        currentLocalTemp4.textContent = "Temp: " + response.list[27].main.temp + " F";
        currentLocalTemp5.textContent = "Temp: " + response.list[35].main.temp + " F";

        currentLocalWind1.textContent = "Wind: " + response.list[3].wind.speed + " MPH";
        currentLocalWind2.textContent = "Wind: " + response.list[11].wind.speed + " MPH";
        currentLocalWind3.textContent = "Wind: " + response.list[19].wind.speed + " MPH";
        currentLocalWind4.textContent = "Wind: " + response.list[27].wind.speed + " MPH";
        currentLocalWind5.textContent = "Wind: " + response.list[35].wind.speed + " MPH";

        currentLocalHumidity1 = "Humidity: " + response.list[3].main.humidity + "%";
        currentLocalHumidity2 = "Humidity: " + response.list[11].main.humidity + "%";
        currentLocalHumidity3 = "Humidity: " + response.list[19].main.humidity + "%";
        currentLocalHumidity4 = "Humidity: " + response.list[27].main.humidity + "%";
        currentLocalHumidity5 = "Humidity: " + response.list[35].main.humidity + "%";


        //getWeather();
        //.then(data => console.log(data))
    })
};