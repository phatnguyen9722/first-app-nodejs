import express from "express";
import cors from 'cors'
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./route/web"
import connection from "./configs/connectDB"
// import getHomepage from "./controller/homeController"


require('dotenv').config()

const app = express();
app.use(cors())
// Back Up Code 8080 
const port = process.env.PORT || 3000;

// config view engine 
configViewEngine(app);

// initialize route
initWebRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})