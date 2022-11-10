import express from "express";
import homeController from "../controller/homeController"

let router = express.Router();

const initWebRouter = (app) => {
  router.get("/news", (req, res) => {
    res.render("news.ejs");
  });

  router.get("/",homeController.getHomepage);

  // them tien to vao url
  return app.use("/", router);
};

export default initWebRouter;
