import yargs from "yargs";
import { Forecast, GeoCodeData } from "./services/WeatherData.js";
import { hideBin } from "yargs/helpers";


const yarg = yargs(hideBin(process.argv));

yarg.command({
    command: "add",
    describe: "add new user",

    builder: {
        country: {
            describe: "weather of the address",
            demandOption: true,
            type: "string"
        },
    },

    handler: (data) => {


        GeoCodeData(data.country, (error, response) => {
            if (error) {
                console.log(error);
                return;
            }

            const { latitude, longtitude } = response;

            console.log("Latitude:", latitude);
            console.log("Longitude:", longtitude);

            Forecast(latitude, longtitude, (error, res) => {
                if (error) {
                    console.log(error);
                    return;
                }
                const { temp_c, temp_f, name, lon, lat } = res

                console.log(`Country name is ${name} and the temperature_c is ${temp_c} and the temperature_f is ${temp_f} ."} 
            `)
            })
        });


    }
});

yarg.parse();

