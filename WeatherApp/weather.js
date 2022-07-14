class Weather {
    constructor(city) {
        this.url =`https://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=5&lang=en&appid=7b07300f0e1eda3f12b259b4aa6c0f4d`
        this.city = city
    }

    changeLocation(city) {
        this.city = city
        this.url = `https://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=5&lang=en&appid=7b07300f0e1eda3f12b259b4aa6c0f4d`
    }

    async getCoord(url) {
        const response = await fetch(url)
        return response.json()
    }

    async getWeather(url){
        const response = await fetch(url)
        return response.json()
    }
}

