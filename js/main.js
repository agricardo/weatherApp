// select element
var ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?zip='
var API_KEY = '4b8e6273730e693f3547ed4becede00b'
var title = document.querySelector('.cityTitle')
var zip = document.querySelector('.zip')
var icon = document.querySelector('.icon')
var temp = document.querySelector('.temp')
var humid = document.querySelector('.humid')
var btn = document.querySelector('.button')
var weather = document.querySelector('.weather')
var deg = document.querySelector('.deg')
var body = document.querySelector('body')
var faren
var icons = {
    "Clouds":`img/cloudy.png`,
    "Rain":`img/rain.png`,
    "Snow":`img/snow.png`,
    "Clear":`img/sun.png`,
    "Thunderstorm":`img/thunderstorm.png`,
}

var fc = "f"







// functiondefinition
function FtoC(temper){
    return Math.floor((temper - 32) * (5/9))
}
function CtoF(temper){
    
}


function iconSelector(weather){
return icons[weather][0]
}
function kelToFar(kelvin){
    return Math.round(kelvin * 9/5 -459.67)
}
function getWeather(zipCode) {
    $.ajax({
        url: `${ROOT_URL}${zipCode},us&appid=${API_KEY}`,
        dataType: 'json',
        success: function (data) {
            title.textContent = "City:"
            console.log(data)
            title.textContent += data.name
            weather.textContent = data.weather[0].main
            temp.textContent = kelToFar(data.main.temp)
            humid.textContent = data.main.humidity
            faren = kelToFar(data.main.temp)
            icon.src= iconSelector(data.weather[0].main)
        },
        error: function (e) {
            console.log('Error')
        }

    })
}













// call function
getWeather('33166')
zip.addEventListener("keypress", function(event){
    if(event.key == 'Enter'){
        getWeather(zip.value)
    }
})

btn.addEventListener("click", function(event){
    if(fc == "f"){
        temp.textContent = FtoC(temp.textContent)
        btn.textContent = "Convert to F"
        deg.innerHTML = " &deg; C"
        fc ="c"

    }else {
        temp.textContent = faren
        btn.textContent = "Convert to C"
        deg.innerHTML = " &deg; F"
        fc = "f"
    }
}) 