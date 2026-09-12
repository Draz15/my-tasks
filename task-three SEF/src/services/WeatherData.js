import request from "request";

//////////////////// start geocodeData data   /////////////////////

export const GeoCodeData = (country = '', callback) => {

    const URL = `https://nominatim.openstreetmap.org/search?q=${country}&format=json`

    request({
        url: URL, json: true, headers: {
            "User-Agent": "task-two-sef"
        }
    }, (error, res) => {

        if (error) {
            return callback(error, undefined)
        } else if (res.body.title) {
            return callback(res.body.title, undefined)
        } else {
            callback(null, { latitude: res.body[0].lat, longitude: res.body[0].lon })
        }
    })

}



//////////////////// start forecast data  /////////////////

export const Forecast = (latitude = '', longitude = '', callback) => {

    const API_KEY = '081f871321f941fe986144245260909'
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`;

    request({
        url, json: true,
    }, (error, res) => {
        if (error) {
            return callback(error, undefined)
        } else if (res?.body?.error?.message) {
            return callback(res?.body?.error?.message, undefined)
        } else {
            callback(null, { temp_c: res.body.current.temp_c, temp_f: res.body.current.temp_f, name: res.body.location.name, lon: res.body.location.lon, lat: res.body.location.lat })
        }
    })
}

