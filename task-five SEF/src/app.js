import express from "express";
import "./db/mongoose.js";
import router from "./routes/userRoute.js";


const app = express()

const port = process.env.PORT || 3000

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log('server is running in port ', port)
})



