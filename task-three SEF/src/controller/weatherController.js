import { Forecast, GeoCodeData } from "../services/WeatherData.js";

export const getWeatherData = (req, res) => {
    try {
        const { country } = req.query

        GeoCodeData(country, async (error, response) => {
            if (error) {
                return res.status(400).send({
                    error
                });
            }
            const { latitude, longitude } = await response;

            Forecast(latitude, longitude, async (error, response) => {
                if (error) {

                    return res.status(400).send({
                        error
                    });
                }
                return await res.send(response);
            })

        })

    } catch (error) {

        return res.status(500).send({
            error: error.message
        });

    }

}


