var inp = document.querySelector(".appcontainer .inputcity .getcity")
var btn = document.querySelector(".appcontainer .inputcity .getweather");
var cityname = document.querySelector(".appcontainer .display .name");
var citydesc = document.querySelector(".appcontainer .display .desc");
var cityhum = document.querySelector(".appcontainer .display .hum");
var citytemp = document.querySelector(".appcontainer .display .temp");
var citywind = document.querySelector(".appcontainer .display .wind");
var cityicon = document.querySelector(".appcontainer .display .icon");

var namevalue;
var descvalue;
var tempvalue;
var windvalue;
var iconvalue;
var humvalue;
inp.focus();
btn.addEventListener('click',function() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inp.value + '&appid=c6aa3e5f18dfd28c73171a3c9ded3028')
    .then(response => response.json())
    .then(data => {
        namevalue = data['name'];
        humvalue = data['main']['humidity'];
        descvalue = data['weather'][0]['description'];
        iconvalue = data['weather'][0]['icon'];
        windvalue = data['wind']['speed']
        tempvalue = data['main']['temp'];


        cityname.innerHTML = namevalue;
        cityicon.src = "http://openweathermap.org/img/wn/"+ iconvalue + ".png";
        citydesc.innerHTML = "Description : " + descvalue;
        cityhum.innerHTML = "humidity : " + humvalue + '%';
        citytemp.innerHTML = "Temperature : " + parseInt(tempvalue - 273) + '&deg;' + 'C';
        citywind.innerHTML = "Wind speed : " + windvalue + 'm/s'
        inp.value = "";
        
    })
    .catch(err => alert("wrong city name"));
})


inp.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     btn.click();
    }
  });


