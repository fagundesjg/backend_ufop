const express = require("express");
const multer = require("multer");

const multerConfig = require("./config/multer");

const FoundObjectController = require("./app/controllers/FoundObjectController");
const FileController = require("./app/controllers/FileController");
const AuthController = require("./app/controllers/AuthController");

const upload = multer(multerConfig);
const routes = express.Router();

routes.get("/", (req, res) => res.json({ message: "API is working!" }));
routes.post("/files", upload.single("file"), FileController.store);
routes.post("/found-object", FoundObjectController.store);
routes.get("/found-object", FoundObjectController.index);
routes.post("/dumb/login", AuthController.store);

module.exports = routes;
