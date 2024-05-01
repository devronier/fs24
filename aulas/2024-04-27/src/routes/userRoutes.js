const express = require("express");
const UserController = require("../controllers/userController");
const UserRepository = require("../repositories/userRepository");

const userRoutes = express.Router();

const userRepository = new UserRepository();
const userController = new UserController(userRepository);

userRoutes.get("/", userController.listAll);

userRoutes.get("/:id", userController.findById);

userRoutes.post("/", userController.create);

module.exports = userRoutes;
