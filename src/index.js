import express from "express";
import configViewEngine from "./views/viewengine";
import initWebRouter from "./route/web"
require('dotenv').config()

const app = express();

// Back Up Code 8080 
const port = process.env.PORT || 8080;

// config view engine 
configViewEngine(app);

// initialize route
initWebRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})