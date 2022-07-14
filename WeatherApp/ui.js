class weatherUI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feels_like = document.getElementById('w-feels-like')
        this.wind = document.getElementById('w-wind')
        this.pressure = document.getElementById('w-dewpoint')
    }

    insert_UI(data){
        // console.log(data)
        this.location.innerText = `${data.name}, ${data.sys.country}`
        this.desc.innerText = data.weather[0].description
        this.string.innerHTML = `${(data.main.temp-272.15).toFixed(1)}&#176;C`
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
        this.humidity.innerText = `Relative Humidity: ${data.main.humidity}%`
        this.feels_like.innerHTML = `Feels Like: ${(data.main.feels_like-272.15).toFixed(1)}&#176;C`
        this.humidity.innerText = `Wind speed: ${data.main.humidity}%`
        this.humidity.innerText = `Relative Humidity: ${data.main.humidity}%`
        this.wind.innerText = `Wind Speed: ${data.wind.speed} km/h`
        this.pressure.innerText = `Preassure: ${data.main.pressure} Pa`
    }
}