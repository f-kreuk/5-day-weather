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
    city = document.getElementById("cityId").value;
    currentCity = city;
    //below clears my li list before I run the addtoULlist to avoid duplicates
    document.getElementById("local-cities").innerHTML = "";
    addtolocalstorage();
    getWeather();
    addtoULlist();
});

// utilized https://www.youtube.com/watch?v=2hJ1rTANVnk for the local storage piece. The below code adds the user input cities after a click event into an array with a key of "searches".

function addtolocalstorage () {
    //console.log(city);
    var new_data = city;
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

function getWeather () {
    fetch("HTTP://api.openweathermap.org/data/2.5/forecast?q=london,uk&appid=832cf34605e4ecca0f923b6ee27d32a9")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(response.json());
    })
    .catch(error = console.log("API Error"));
};