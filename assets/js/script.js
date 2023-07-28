let currentCity = "boston";
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
    getcurrentWeather();
    getweather();
  };

//Below is code to clear the local storage

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function() {
    localStorage.clear();
    document.getElementById("local-cities").innerHTML = "";
    getweather();
    getcurrentWeather();
});

//Below is code for the submit button, which calls addtolocalstorage and addtoULList functions

const searchBtn = document.getElementById("submit");
searchBtn.addEventListener('click', function() {
    theCity = document.getElementById("cityId").value;
    currentCity = theCity;
    //below clears my li list before I run the addtoULlist to avoid duplicates
    document.getElementById("local-cities").innerHTML = "";
    addtolocalstorage();
    addtoULlist();
    getcurrentWeather();
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
    console.log(oldCity);
    currentCity = $(this).text();
    getcurrentWeather();
});

//Below are the getWeather functions:

//Below gets the current weather forecast for the city:

function getcurrentWeather () {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=832cf34605e4ecca0f923b6ee27d32a9&units=imperial")
    .then(response => response.json())
    .then(function (response) {
        console.log(response);

        const currentLocalnDate = document.getElementById('currentLocalnDate');
        const currentLocalTemp = document.getElementById('currentLocalTemp');
        const currentLocalWind = document.getElementById('currentLocalWind');
        const currentLocalHumidity = document.getElementById('currentLocalHumidity');

        currentLocalnDate.textContent = response.name + " (" + currentDate + ")";
        currentLocalTemp.textContent = "Current Temp: " + response.main.temp + " F";
        currentLocalWind.textContent = "Current Wind: " + response.wind.speed + " MPH";
        currentLocalHumidity.textContent = "Current Humidity: " + response.main.humidity + "%";

    });
    getweather();
};

//Below gets the 5-day weather forecast for the city:

function getweather () {
    fetch("HTTP://api.openweathermap.org/data/2.5/forecast?q=" + currentCity + "&appid=832cf34605e4ecca0f923b6ee27d32a9&units=imperial")
    .then(response => response.json())
    .then(function (response) {
        console.log(response);

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

        const currentLocalIcon1 = document.getElementById('1currentLocalIcon');
        const currentLocalIcon2 = document.getElementById('2currentLocalIcon');
        const currentLocalIcon3 = document.getElementById('3currentLocalIcon');
        const currentLocalIcon4 = document.getElementById('4currentLocalIcon');
        const currentLocalIcon5 = document.getElementById('5currentLocalIcon');

        currentLocalDate1.textContent = response.list[0].dt_txt.substring(0,10);
        currentLocalDate2.textContent = response.list[8].dt_txt.substring(0,10);
        currentLocalDate3.textContent = response.list[16].dt_txt.substring(0,10);
        currentLocalDate4.textContent = response.list[24].dt_txt.substring(0,10);
        currentLocalDate5.textContent = response.list[32].dt_txt.substring(0,10);

        currentLocalTemp1.textContent = "Temp: " + response.list[0].main.temp + " F";
        currentLocalTemp2.textContent = "Temp: " + response.list[8].main.temp + " F";
        currentLocalTemp3.textContent = "Temp: " + response.list[16].main.temp + " F";
        currentLocalTemp4.textContent = "Temp: " + response.list[24].main.temp + " F";
        currentLocalTemp5.textContent = "Temp: " + response.list[32].main.temp + " F";

        currentLocalWind1.textContent = "Wind: " + response.list[0].wind.speed + " MPH";
        currentLocalWind2.textContent = "Wind: " + response.list[8].wind.speed + " MPH";
        currentLocalWind3.textContent = "Wind: " + response.list[16].wind.speed + " MPH";
        currentLocalWind4.textContent = "Wind: " + response.list[24].wind.speed + " MPH";
        currentLocalWind5.textContent = "Wind: " + response.list[32].wind.speed + " MPH";

        currentLocalHumidity1.textContent = "Humidity: " + response.list[0].main.humidity + "%";
        currentLocalHumidity2.textContent = "Humidity: " + response.list[8].main.humidity + "%";
        currentLocalHumidity3.textContent = "Humidity: " + response.list[16].main.humidity + "%";
        currentLocalHumidity4.textContent = "Humidity: " + response.list[24].main.humidity + "%";
        currentLocalHumidity5.textContent = "Humidity: " + response.list[32].main.humidity + "%";

        currentLocalIcon1.src = "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png";
        currentLocalIcon2.src = "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + "@2x.png";
        currentLocalIcon3.src = "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + "@2x.png";
        currentLocalIcon4.src = "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + "@2x.png";
        currentLocalIcon5.src = "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + "@2x.png";
    })
};