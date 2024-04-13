const express = require("express");
const HelloController = require("../controllers/HelloController");

const helloRoutes = express.Router();

const helloController = new HelloController();

helloRoutes.get("/", helloController.helloWorld);
helloRoutes.get("/hello", helloController.helloWorld2);

module.exports = helloRoutes;
