import express from "express";

const configViewEngine = (app) => {
    // Static files
    app.use(express.static('./src/public'))

    // Set viewEngine : EJS
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

export default configViewEngine;