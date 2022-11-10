import express from "express";
import configViewEngine from "./views/viewengine";
require('dotenv').config()

const app = express();

// Back Up Code 8080 
const port = process.env.PORT || 8080;

configViewEngine(app);

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})