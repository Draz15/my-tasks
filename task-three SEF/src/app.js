import { getWeatherData } from "./controller/weatherController.js";
import  express from "express";

const port =  process.env.PORT || 3000
const app = express()

///////////////// end point
app.get("/weather",getWeatherData);



///////////////// render page
app.set('view engine', 'hbs')
app.use(express.static("public"));

app.get('/' , (req,res) => {
    res.render('index', {
        title: "Weather App"
    })
})

app.listen( port, () => {
console.log("done")
})