const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function() {
    localStorage.clear();
    document.getElementById("local-cities").innerHTML = "";
});

const searchBtn = document.getElementById("submit");
searchBtn.addEventListener('click', function() {
    city = document.getElementById("cityId").value;
    
    //below clears my li list before I run the addtoULlist so I don't get duplicates

    document.getElementById("local-cities").innerHTML = "";
    addtolocalstorage();
    getWeather();
    addtoULlist();
});

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
    


// utilized https://www.youtube.com/watch?v=2hJ1rTANVnk for the local storage piece. The below code adds the user input cities after a click event into an array with a key of "searches".

function addtolocalstorage () {
    console.log(city);
    var new_data = city;
    if(localStorage.getItem('searches') == null){
        localStorage.setItem('searches','[]');
    };
    var old_data = JSON.parse(localStorage.getItem('searches'));
    old_data.push(new_data);
    localStorage.setItem('searches',JSON.stringify(old_data));
};
 
function addtoULlist () {

    //utilized https://stackoverflow.com/questions/37544230/how-to-get-total-count-of-a-particular-key-in-local-storage to find length of local storage for specific key

    var addsearchArray = JSON.parse(localStorage.getItem('searches'));
    for (let i = 0; i < addsearchArray.length; i++) {
        let list = document.createElement('li');
        list.innerText = addsearchArray[i];
        document.querySelector('#local-cities').appendChild(list);  
    };

}