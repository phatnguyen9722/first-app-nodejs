import express from "express";
import homeController from "../controller/homeController"
// import { index }  from '../controller/PostController'

let router = express.Router();

const initWebRouter = (app) => {
  router.get("/news", (req, res) => {
    res.render("news.ejs");
  });

  router.get("/", homeController.getHomepage);

  // router.get("/api/posts", index);

  // them tien to vao url
  return app.use("/", router);
};

export default initWebRouter;
