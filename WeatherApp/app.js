const weather = new Weather('London')
const weather_ui = new weatherUI

document.addEventListener('DOMContetLoaded', getData(weather.city))

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value
    weather.changeLocation(city)
    getData(weather.city)
    $('#locModal').modal('hide')

})

function getData(city){
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&lang=en&appid=7b07300f0e1eda3f12b259b4aa6c0f4d`
    weather.getCoord(url)
    .then(response => {
        const data = response[0]
        return data
    })
    .then(data => {
        // console.log(data)
        const temp_url = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=7b07300f0e1eda3f12b259b4aa6c0f4d`

        weather.getWeather(temp_url)
        .then(response => {
            weather_ui.insert_UI(response)
        })
    })
    .catch(error => {
        console.log(error)
    })
}
